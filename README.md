# Grandison Plumbing & Heating

Complete first-version website with 37 static pages: homepage, services, About, five photo-led project entries, reviews, seven service-area pages, contact, two planning guides, privacy, cookies and 404. Public files are in `dist`.

Business facts and photos come from the supplied brief and assets. Connor's MyBuilder profile is linked as an existing independent review source. No reviews, ratings, accreditations, contact details, experience durations, or project locations have been invented.

`src/business.mjs` contains the business and contact configuration. `src/data.mjs` contains service, project and area content. `build.mjs` generates pages and SEO files. `src/about.html` preserves the About-page body. CSS and browser scripts in `dist` are tracked source assets and are retained by the build. No runtime package dependencies are needed.

The Sites preview starts private and will not provide public search visibility until public access is enabled. Before public launch, confirm all business facts and the preferred contact route, then update canonical, schema, sitemap and robots origins if a custom domain is chosen. Structured data describes business identity; it does not promise a Google rich result or AI citation.

Run `npm run build`, `npm run check` and `npm run dev`. Deploy `dist` as static assets on Sites or another static host. Original photographs are resized/compressed only. No generated project imagery is used. See `LAUNCH.md` for contact delivery, public launch and content sources. `qa-results.json` records responsive and interaction checks. The local mobile homepage Lighthouse audit scored Performance 97, Accessibility 100, Best Practices 100 and SEO 100. These are lab results, not a live-site or real-user guarantee.
