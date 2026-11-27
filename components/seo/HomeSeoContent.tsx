import Link from "next/link";
import { HUB_GUIDE_URL, HUB_URL_SEO, SITE_NAME } from "@/lib/site";

const FAQ_ITEMS = [
  {
    question: "Is Free Logo Maker really free?",
    answer:
      "Yes. You can design and download logos without paying, without a watermark on exports, and without buying credits. The editor runs in your browser on web-free.site.",
  },
  {
    question: "Do I need an account or sign-up?",
    answer:
      "No account is required. Open the page, type your brand name, adjust fonts and colors, and download PNG, JPEG, or SVG when you are ready.",
  },
  {
    question: "Are my logo designs uploaded to a server?",
    answer:
      "Your text and styling stay on your device while you edit. Font files load from Google Fonts like any normal website; we do not store your brand name or artwork on our servers.",
  },
  {
    question: "Can I download SVG as well as PNG?",
    answer:
      "Yes. Use the Download menu on the preview panel and pick SVG for scalable vector files, or PNG or JPEG for raster images suited to social profiles and slides.",
  },
  {
    question: "Can I use the logo for my business?",
    answer:
      "You may use exports for personal or commercial projects, but you are responsible for checking font licenses on Google Fonts and making sure your name does not infringe existing trademarks.",
  },
] as const;

export function HomeSeoContent() {
  return (
    <section
      className="mx-auto max-w-3xl px-4 py-10 prose prose-neutral dark:prose-invert border-t"
      aria-labelledby="home-seo-title"
    >
      <h1 id="home-seo-title">{SITE_NAME}</h1>
      <p className="lead text-muted-foreground">
        Design a simple text-based logo in your browser: choose Google Fonts, colors, optional
        icons, and layout, then download PNG or SVG with no watermark and no sign-up.
      </p>

      <h2>What this free logo maker does</h2>
      <p>
        {SITE_NAME} is a lightweight wordmark builder for founders, freelancers, clubs, and side
        projects that need a clean logo fast. You type a brand or project name, pick typography from
        a large Google Fonts library, set text and background colors, add a simple icon if you want
        one, and tune spacing and card layout until the preview looks right. Everything happens in
        one tab—there is no desktop app to install and no cloud project to manage.
      </p>
      <p>
        The preview updates as you edit, and version history lets you step back if you change your
        mind. When you are satisfied, export a high-quality PNG for social avatars and slide decks,
        JPEG when you need a compact photo-style file, or SVG when you need sharp scaling for print
        or web. Exports do not carry a watermark, which makes the tool useful for real launches, not
        just mock-ups.
      </p>

      <h2>How to make a logo in the browser</h2>
      <ol>
        <li>
          <strong>Enter your name.</strong> Open the editor above and type your business, product,
          or event name in the Text tab. Shorter names often read better at small sizes.
        </li>
        <li>
          <strong>Choose a font.</strong> Browse Google Fonts or tap Random Font to explore styles.
          Serif fonts feel traditional; geometric sans serifs feel modern; display fonts work for
          short names only.
        </li>
        <li>
          <strong>Set colors.</strong> Pick text and background colors that stay readable on both
          light and dark interfaces. High contrast helps when the logo appears as a favicon or
          profile image.
        </li>
        <li>
          <strong>Optional icon and layout.</strong> Add an icon from the library if you want a
          symbol beside the wordmark, then adjust card padding, alignment, and scale on the Layout
          tab until the composition balances.
        </li>
        <li>
          <strong>Download.</strong> Use the Download button on the preview and select PNG, JPEG, or
          SVG. Keep an SVG master file for future edits in vector tools if you outgrow the browser
          editor.
        </li>
      </ol>
      <p>
        For a longer walkthrough with screenshots and tips, read the hub guide{" "}
        <a href={HUB_GUIDE_URL}>Text logo maker: download PNG or SVG</a> on web-free.site.
      </p>

      <h2>Privacy and in-browser processing</h2>
      <p>
        This tool is built for people who do not want to upload brand drafts to unknown servers.
        Logo text, colors, and layout choices are processed locally in your browser session. We do
        not ask you to create an account, and we do not sell your designs. Google Fonts stylesheets
        load from Google’s CDN so typefaces render correctly—that is standard for web typography and
        does not send your wordmark content to a logo API. Third-party ads may appear on the page;
        see our <Link href="/privacy/">Privacy</Link> page for how those networks work.
      </p>

      <h2>Who uses a free logo maker like this</h2>
      <p>
        Students use it for class projects and hackathons when they need a credible mark overnight.
        Small shops and market vendors export PNGs for WhatsApp catalogs and printed price tags.
        Developers drop SVG wordmarks into README files, landing pages, and open-source repos. Event
        organizers spin up temporary logos for meetups, streams, and charity drives without
        commissioning custom art. None of these scenarios require a full design suite—just a readable
        wordmark you control.
      </p>
      <p>
        {SITE_NAME} is part of the{" "}
        <a href={HUB_URL_SEO}>free browser tools on web-free.site</a>. Browse converters,
        calculators, and editors that work the same way: no sign-up, English interface, processing
        in the tab whenever possible.
      </p>

      <h2>Frequently asked questions</h2>
      <dl className="not-prose space-y-6">
        {FAQ_ITEMS.map(({ question, answer }) => (
          <div key={question}>
            <dt className="font-semibold text-foreground">{question}</dt>
            <dd className="mt-1 text-muted-foreground">{answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export { FAQ_ITEMS };