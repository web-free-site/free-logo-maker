# Free Logo Maker

[Free Logo Maker](https://free-logo-maker.web-free.site) runs entirely in your browser: type a name, style it with Google Fonts, and download PNG or SVG with no watermark.

Built on [Wordmark](https://github.com/abhay-ramesh/Wordmark) (MIT) by Abhay Ramesh.

## Development

```bash
npm install --legacy-peer-deps
npm run dev
```

## Production build

```bash
npm run build
```

Static assets are written to `out/`. Postbuild adds `sitemap.xml`, the web-free.tools block, and Cloudflare Web Analytics to every HTML page.

Deploy is manual (see `AGENT_BRIEF.md`).
