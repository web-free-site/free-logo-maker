import { ContentPage } from "@/components/site/SiteChrome";
import { pageMeta } from "@/lib/page-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "Free logo maker with no sign-up",
  description: "Create and download logos instantly without creating an account.",
  path: "/free-logo-maker-no-sign-up/",
});

export default function NoSignUpPage() {
  return (
    <ContentPage
      title="No sign-up logo maker"
      description="Start designing immediately — no email, login, or credit card."
    >
      <p>
        Many logo sites force you to register before exporting. Free Logo Maker runs entirely in
        your browser: open the <Link href="/">editor</Link>, style your name, and download PNG or
        SVG when you are ready.
      </p>
      <p>We do not gate downloads behind an account wall and we do not add a watermark to exports.</p>
    </ContentPage>
  );
}