import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = path === "/" || path === "" ? title : `${title} | ${SITE_NAME}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
     images: [{ url: "/og.png", width: 1200, height: 630 }],},
  };
}