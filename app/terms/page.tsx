import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: "Terms for using Free Logo Maker on web-free.site.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of Use"
      description="Use this tool responsibly and at your own risk."
    >
      <p>
        Free Logo Maker is provided as-is without warranty. You may use it for lawful personal or
        commercial projects. You are responsible for checking font licenses on Google Fonts for
        your use case.
      </p>
      <p>We may update these terms at any time. Continued use means you accept the current terms.</p>
    </ContentPage>
  );
}