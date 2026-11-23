import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Free Logo Maker handles your data in the browser.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      description="Your designs stay on your device unless you choose to download them."
    >
      <p>
        Free Logo Maker processes your logo text and styling entirely in your browser. We do not
        collect, store, or sell your brand names or artwork. Third-party ads (Adsterra) and
        Cloudflare Web Analytics may use cookies or similar technologies under their own policies.
      </p>
      <p>
        Questions? Email{" "}
        <a href="mailto:gentil@quevvy.com">gentil@quevvy.com</a>.
      </p>
    </ContentPage>
  );
}