"use client";

import { FC, useEffect, useMemo, useState } from "react";

type BannerDef = { key: string; width: number; height: number };

type AdsConfig = {
  enabled: boolean;
  bannerScriptBase?: string;
  socialBar?: string;
  popunder?: string;
  nativeBanner?: { src: string; containerId: string };
  smartlink?: { url: string; label?: string };
  banners?: Record<string, BannerDef>;
  slots?: Record<string, string>;
};

const DEFAULT_BANNER_BASE = "https://bauval.org/22";

let adsCache: AdsConfig | null = null;

async function loadAds(): Promise<AdsConfig> {
  if (adsCache) return adsCache;
  try {
    const res = await fetch("/ads.json");
    adsCache = (await res.json()) as AdsConfig;
  } catch {
    adsCache = { enabled: false };
  }
  return adsCache;
}

function bannerIframeSrcDoc(
  key: string,
  width: number,
  height: number,
  scriptBase: string,
): string {
  const atOptions = JSON.stringify({
    key,
    format: "iframe",
    height,
    width,
    params: {},
  });
  const src = `${scriptBase.replace(/\/$/, "")}/${key}`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="referrer" content="no-referrer-when-downgrade"></head><body style="margin:0;padding:0;overflow:hidden;background:transparent"><script type="text/javascript">var atOptions = ${atOptions};</script><script type="text/javascript" src="${src}"><\/script></body></html>`;
}

function injectExternalScript(src: string, marker: string, target: HTMLElement) {
  if (!src || document.querySelector(`script[data-ad="${marker}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  script.setAttribute("data-ad", marker);
  target.appendChild(script);
}

export type AdSlotName =
  | "header728x90"
  | "homeTop728x90"
  | "betweenToolContent728x90"
  | "sidebar160x600"
  | "mobileSticky320x50"
  | "nativeBelowTool"
  | "content468x60"
  | "content300x250"
  | "sidebar160x300";

interface Props {
  slot: AdSlotName;
  className?: string;
  label?: string;
}

const NativeBanner: FC<{
  cfg: { src: string; containerId: string };
  className?: string;
  label?: string;
}> = ({ cfg, className = "", label = "Advertisement" }) => {
  useEffect(() => {
    injectExternalScript(cfg.src, "native-banner", document.body);
  }, [cfg.src]);

  return (
    <div className={`ad-slot flex w-full justify-center overflow-hidden ${className}`} aria-label={label}>
      <div id={cfg.containerId} style={{ minHeight: 120, width: "100%", maxWidth: 320 }} />
    </div>
  );
};

const BannerFrame: FC<{
  def: BannerDef;
  scriptBase: string;
  slot: string;
  className?: string;
  label?: string;
}> = ({ def, scriptBase, slot, className = "", label = "Advertisement" }) => {
  const srcDoc = useMemo(
    () => bannerIframeSrcDoc(def.key, def.width, def.height, scriptBase),
    [def, scriptBase],
  );
  return (
    <div className={`ad-slot flex w-full justify-center overflow-hidden ${className}`} aria-label={label} data-ad-slot={slot}>
      <iframe
        title={label}
        srcDoc={srcDoc}
        width={def.width}
        height={def.height}
        className="max-w-full border-0 bg-transparent"
        style={{ width: def.width, height: def.height, maxWidth: "100%" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        loading="lazy"
      />
    </div>
  );
};

export const AdSlot: FC<Props> = ({ slot, className = "", label = "Advertisement" }) => {
  const [cfg, setCfg] = useState<AdsConfig | null>(null);

  useEffect(() => {
    let active = true;
    loadAds().then((loaded) => {
      if (active) setCfg(loaded);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!cfg?.enabled) return null;

  const mapped = cfg.slots?.[slot] ?? slot;

  if (mapped === "nativeBanner") {
    const native = cfg.nativeBanner;
    if (!native?.src || !native.containerId) return null;
    return <NativeBanner cfg={native} className={className} label={label} />;
  }

  const def = cfg.banners?.[mapped];
  if (!def?.key) return null;

  const scriptBase = cfg.bannerScriptBase || DEFAULT_BANNER_BASE;
  return (
    <BannerFrame def={def} scriptBase={scriptBase} slot={slot} className={className} label={label} />
  );
};

export function AdGlobalScripts() {
  useEffect(() => {
    loadAds().then((cfg) => {
      if (!cfg.enabled) return;
      if (cfg.popunder) injectExternalScript(cfg.popunder, "popunder", document.head);
      if (cfg.socialBar) injectExternalScript(cfg.socialBar, "social-bar", document.body);
    });
  }, []);
  return null;
}

export function SponsoredSmartlink() {
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    loadAds().then((cfg) => {
      if (cfg.enabled && cfg.smartlink?.url) setHref(cfg.smartlink.url);
    });
  }, []);

  if (!href) return null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-2 border-t text-center text-xs text-muted-foreground">
      <span className="mr-2">Sponsored</span>
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="underline">
        Offer
      </a>
    </div>
  );
}