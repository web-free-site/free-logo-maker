import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { pageMeta } from "@/lib/page-metadata";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...pageMeta({
    title: "Free Logo Maker — text logos online, no sign-up",
    description:
      "Free Logo Maker: type your brand name, pick Google Fonts, colors, and layout in your browser. Download PNG or SVG with no watermark and no account.",
    path: "/",
  }),
  applicationName: "Free Logo Maker",
  keywords: [
    "free logo maker",
    "logo maker no sign up",
    "download logo svg",
    "google fonts logo",
    "text logo generator",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://ref.web-free.site/r.js" defer />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}