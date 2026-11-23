import { SITE_NAME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: "DesignApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Create a simple text logo in your browser with Google Fonts. Download PNG or SVG with no watermark and no sign-up.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Free Logo Maker really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The tool runs in your browser, charges nothing, and adds no watermark to downloads.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No account or login is required. Type your brand name, style it, and download.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download SVG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Choose SVG or PNG from the download menu.",
          },
        },
      ],
    },
  ],
};

export function HomeJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}