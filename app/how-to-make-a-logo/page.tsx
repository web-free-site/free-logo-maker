import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "How to make a logo for free in your browser",
  description: "Step-by-step guide to creating a simple text logo with Free Logo Maker.",
  path: "/how-to-make-a-logo/",
});

export default function HowToMakeLogoPage() {
  return (
    <ContentPage
      title="How to make a logo"
      description="A quick workflow for a clean text logo without design software."
    >
      <ol>
        <li>
          Open the <Link href="/">Free Logo Maker</Link> and type your brand or project name.
        </li>
        <li>Pick a Google Font from the font list and adjust size and spacing.</li>
        <li>Choose text and background colors that match your brand.</li>
        <li>Optional: add an icon or tweak layout padding and alignment.</li>
        <li>Use Download to save PNG or SVG. Files have no watermark.</li>
      </ol>
      <p>
        For Google Fonts licensing details, see the font pages on fonts.google.com before using a
        logo commercially.
      </p>
    </ContentPage>
  );
}