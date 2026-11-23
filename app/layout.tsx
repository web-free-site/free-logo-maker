import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { pageMeta } from "@/lib/page-metadata";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...pageMeta({
    title: "Free Logo Maker — design and download logos in your browser",
    description:
      "Type your brand name, pick a Google Font, colors, and layout. Download PNG or SVG with no watermark and no sign-up.",
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