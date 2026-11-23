"use client";

import Link from "next/link";
import { AdGlobalScripts, AdSlot, SponsoredSmartlink } from "@/components/ads/AdSlot";
import { HUB_URL, SITE_NAME, UPSTREAM_REPO } from "@/lib/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AdGlobalScripts />
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {SITE_NAME}
          </Link>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <Link href="/how-to-make-a-logo/" className="hover:text-foreground">
              How-to
            </Link>
            <Link href="/about/" className="hover:text-foreground">
              About
            </Link>
            <Link href="/contact/" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        <AdSlot slot="header728x90" className="hidden md:flex border-t py-1" />
        <AdSlot slot="mobileSticky320x50" className="md:hidden border-t py-1" />
      </header>

      <MainColumn>{children}</MainColumn>

      <SponsoredSmartlink />
      <div className="hidden sm:flex justify-center border-t py-2">
        <AdSlot slot="content468x60" />
      </div>
      <SiteFooter />
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t bg-background/95 backdrop-blur md:hidden pb-[env(safe-area-inset-bottom)]">
        <AdSlot slot="mobileSticky320x50" />
      </div>
      <div className="h-14 md:h-0" aria-hidden />
    </div>
  );
}

function MainColumn({ children }: { children: React.ReactNode }) {
  return <main className="flex-1 w-full">{children}</main>;
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted-foreground">
        <p>
          {SITE_NAME} — free in-browser logo design. No account, no watermark. Based on{" "}
          <a href={UPSTREAM_REPO} className="underline hover:text-foreground">
            Wordmark
          </a>{" "}
          by Abhay Ramesh (MIT).{" "}
          <a href={HUB_URL} className="underline hover:text-foreground">
            More free tools on web-free.site
          </a>
          .
        </p>
        <FooterLinks />
      </div>
    </footer>
  );
}

function FooterLinks() {
  const links = [
    ["Privacy", "/privacy/"],
    ["Terms", "/terms/"],
    ["About", "/about/"],
    ["Contact", "/contact/"],
    ["How to make a logo", "/how-to-make-a-logo/"],
    ["No sign-up", "/free-logo-maker-no-sign-up/"],
    ["Download SVG", "/download-logo-as-svg/"],
  ] as const;
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {links.map(([label, href]) => (
        <li key={href}>
          <Link href={href} className="underline hover:text-foreground">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ContentPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <SiteChrome>
      <article className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral dark:prose-invert">
        <h1>{title}</h1>
        <p className="lead text-muted-foreground">{description}</p>
        {children}
        <AdSlot slot="content300x250" className="not-prose mt-8" />
        <AdSlot slot="nativeBelowTool" className="not-prose mt-6" />
      </article>
    </SiteChrome>
  );
}