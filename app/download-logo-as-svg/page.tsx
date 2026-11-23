import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "Download your logo as SVG",
  description: "Export a scalable SVG logo file from Free Logo Maker.",
  path: "/download-logo-as-svg/",
});

export default function DownloadSvgPage() {
  return (
    <ContentPage
      title="Download logo as SVG"
      description="Vector SVG files stay sharp at any size."
    >
      <p>
        SVG is ideal for websites, apps, and print when you need crisp edges at any resolution. In
        the <Link href="/">logo editor</Link>, open the download menu and choose SVG. The file
        reflects your current text, font, colors, and layout.
      </p>
      <p>
        Need a raster image instead? Pick PNG from the same menu for social avatars or slide decks.
      </p>
    </ContentPage>
  );
}