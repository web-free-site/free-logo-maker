# Cursor agent brief — free-logo-maker

Target: https://free-logo-maker.web-free.site
Repo name (wrangler `name`): `free-logo-maker`
English name: "Free Logo Maker". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **simple logo maker**: the user types a name, picks a font/icon/colors, and downloads SVG and PNG. No account, no watermark, no paid API. Google Fonts loaded as public CSS is fine; do not add a font API key.

## Recommended base (use this)

- Repo: https://github.com/abhay-ramesh/Wordmark
- License: MIT (keep `LICENSE`, credit Wordmark / Abhay Ramesh in the footer and on `/about`)
- Stars: 125
- Last commit: 9 May 2025, 12:16 Africa/Kigali — `7904124d36` on `main` (verify default branch)
- Official demo: `https://wordmark.abhayramesh.com`
- Stack: Next.js + React/TypeScript logo maker with Google Fonts. **Must add `output: 'export'`** (`next.config.js` currently has no static export). Disable or drop `next-pwa` if it fights a static export. **Remove Google Analytics** (`nextjs-google-analytics`). Do not ship axios calls to paid or keyed font/logo APIs; public Google Fonts CSS only.
- Cloudflare: yes — static assets / Workers with assets. You must add prerendered HTML for every public page (no bare SPA fallback).
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE` is a real MIT file (Copyright (c) 2023-2024 Abhay Ramesh). It is a complete Next app, not a library. Inspect and strip analytics / keyed APIs during the import.
- Why this one: MIT with a real `LICENSE` file, a complete working logo product (125 stars, live demo), and a client-side text/font workflow.

## Backup

- Repo: https://github.com/Codeinwp/logo-maker
- License: MIT (LICENSE file, Copyright (c) 2019 Fred K. Schott)
- Stars: 83
- Last commit: 18 Mar 2024, 09:06 Africa/Kigali — `425b355dd8` on `main`
- Official demo: `https://themeisle.com/logo-maker/`
- This repo is also packaged as a **WordPress plugin**. Do not ship PHP, Docker, or WordPress. Use only the client-side React logo UI if you must fall back to it, and still produce a static site.

## Do not use these

- Canva clones, AI logo APIs, or tools that require an account or a paid credits API.
- Desktop-only logo makers, or Hatchful scrapers.

## What to build on top of abhay-ramesh/Wordmark

1. Import the base into this repo, keep the MIT license, and credit Wordmark / Abhay Ramesh. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them).
2. Rebrand to "Free Logo Maker". English primary. No FR/SW translations of the site. The home tool lets the user type a brand name, change font, color, and layout, and download SVG and PNG with no watermark. Drop Product Hunt badges, analytics, and Wordmark branding that would confuse the new site.
3. Keep everything 100% in the browser (plus public Google Fonts CSS if needed). No accounts, no paid APIs, no API keys.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not break editing or download.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-logo-maker.web-free.site`; English how-to pages, at least `/how-to-make-a-logo`, `/free-logo-maker-no-sign-up`, and `/download-logo-as-svg` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-logo-maker.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site/?ref=logo-maker`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the nine other sites in this batch (50 tools in total). Show **Free Logo Maker** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=logo-maker`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=logo-maker`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=logo-maker`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=logo-maker`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=logo-maker`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=logo-maker`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=logo-maker`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=logo-maker`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=logo-maker`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=logo-maker`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=logo-maker`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=logo-maker`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=logo-maker`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=logo-maker`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=logo-maker`), Free Passport Photo Maker (`https://free-passport-photo-maker.web-free.site/?ref=logo-maker`), Free PNG to SVG Converter (`https://free-png-to-svg.web-free.site/?ref=logo-maker`), Free Meme Generator (`https://free-meme-generator.web-free.site/?ref=logo-maker`), Free Color Picker (`https://free-color-picker.web-free.site/?ref=logo-maker`), Free GIF Maker (`https://free-gif-maker.web-free.site/?ref=logo-maker`), Free Photo Editor (`https://free-photo-editor.web-free.site/?ref=logo-maker`), **Free Logo Maker**.
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/en/?ref=logo-maker`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=logo-maker`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=logo-maker`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=logo-maker`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=logo-maker`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=logo-maker`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=logo-maker`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=logo-maker`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=logo-maker`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=logo-maker`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=logo-maker`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=logo-maker`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=logo-maker`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=logo-maker`), Free Citation Generator (`https://free-citation-generator.web-free.site/?ref=logo-maker`).
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=logo-maker`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=logo-maker`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=logo-maker`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=logo-maker`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=logo-maker`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=logo-maker`), Free Video Converter (`https://free-video-converter.web-free.site/?ref=logo-maker`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=logo-maker`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=logo-maker`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=logo-maker`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=logo-maker`).
     - **Time:** Free Time Zone Converter (`https://free-time-zone-converter.web-free.site/?ref=logo-maker`).
     - **Drawing:** Free Whiteboard (`https://free-whiteboard.web-free.site/?ref=logo-maker`).
     - **Random & pickers:** Free Spin Wheel (`https://free-spin-wheel.web-free.site/?ref=logo-maker`).
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-logo-maker"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-logo-maker.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally, type a name, change font and color, download SVG and PNG, open both files, check mobile at 390px, confirm no account wall and no watermark, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes are not ready yet (sites are not live). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23bplaceholder`). After a browser agent writes real keys to `adsterra-codes.md`, a later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-logo-maker.web-free.site — site ID 6222785
Popunder 2265d8d70bc7b79bd8e5ba74d78600bf
Native Banner 5e3948ee757f4b55525f41b0f685f617
Smartlink 42697bb9bd49cf22a7ece1ac3193426c
Social Bar b09f1e3eaa1af9cf870fdd04ade46115
468x60 ce8de25fe41b426a381a7e8aecf56079
160x300 2639aaf91dbb09a326e51cc0eb1af86f
320x50 6e1997ce688ed5c532bea186568a66bb
300x250 7272347d96348f59a47e73e70dd4a580
160x600 5463aa1da619ca1808f80985ce66b226
728x90 8b7dcd52561742dda44b4b59117dc9f6
