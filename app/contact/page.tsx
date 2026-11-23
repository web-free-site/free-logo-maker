import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: "Contact the team behind Free Logo Maker.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      description="Reach us by email."
    >
      <p>
        Email: <a href="mailto:gentil@quevvy.com">gentil@quevvy.com</a>
      </p>
      <p>
        Website: <a href="https://gentil.quevvy.com">gentil.quevvy.com</a>
      </p>
    </ContentPage>
  );
}