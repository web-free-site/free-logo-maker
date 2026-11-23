import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import { HUB_URL, UPSTREAM_REPO } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "About",
  description: "About Free Logo Maker and its open-source roots.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <ContentPage
      title="About"
      description="A browser-based logo tool on the web-free.site family of free utilities."
    >
      <p>
        Free Logo Maker lets anyone design a simple text-based logo using Google Fonts. It is part
        of the <a href={HUB_URL}>web-free.site</a> tool hub maintained by Gentil M.
      </p>
      <p>
        The editor is based on{" "}
        <a href={UPSTREAM_REPO}>Wordmark</a> by Abhay Ramesh, released under the MIT License. We
        thank the Wordmark project for the core logo workflow and keep the MIT license in this
        repository.
      </p>
    </ContentPage>
  );
}