# Grandison Plumbing & Heating

Complete first-version website with 36 static pages: homepage, services, About, five photo-led project entries, seven service-area pages, contact, two planning guides, privacy, cookies and 404. Public files are in `dist`.

Source repository: https://github.com/connorgrandison/Grandison-website (`main`). Live website: https://grandisonplumbingandheating.co.uk on Cloudflare Workers. After verifying changes, push source and tracked output to GitHub and publish to Cloudflare separately; automatic deployment from GitHub is not configured.

Business facts and photos come from the supplied brief and assets. No reviews, ratings, accreditations, contact details, experience durations, or project locations have been invented.

Edit `src/contact.json` to update the phone, email, Facebook or Instagram in one place, then rebuild and publish. `src/business.mjs` contains business identity and domain configuration. `src/data.mjs` contains service, project and area content. `build.mjs` generates pages and SEO files. `src/about.html` preserves the About-page body. CSS and browser scripts in `dist` are tracked source assets and are retained by the build. No runtime package dependencies are needed.

The site is public at the owner’s request. The contact page provides direct phone, text and Facebook links, with Instagram for viewing work. There is no disconnected enquiry form. The confirmed phone is 07545 075788. Email is optional and hidden until supplied in the contact configuration. Structured data describes business identity; it does not promise a Google rich result or AI citation.

Run `npm run build`, `npm run check` and `npm run dev`. Deploy `dist` as static assets on Cloudflare Workers. `wrangler.jsonc` contains the deployment settings. The old `.openai/hosting.json` identifies the earlier Sites preview only. Original photographs are resized/compressed only. No generated project imagery is used. See `LAUNCH.md` for contact delivery, public launch and content sources. `qa-results.json` records the original site checks; `contact-qa.json` records the latest contact update checks. The earlier local mobile homepage Lighthouse audit scored Performance 97, Accessibility 100, Best Practices 100 and SEO 100. These are lab results, not a live-site or real-user guarantee.
