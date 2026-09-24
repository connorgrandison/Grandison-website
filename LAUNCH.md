# Launch configuration

## Details still needed

- Optional enquiry email. The owner supplied 07545 075788 and the Facebook/Instagram profiles.
- Current Gas Safe registration and the services/qualifications it covers before advertising registration.
- Confirmed project locations and scopes for fuller case studies.
- Confirmation of service availability and geographic coverage, especially Edinburgh.

The site is public at the owner’s request. Direct phone, text and Facebook contact links are available for enquiries.

## Managing contact details

Edit `src/contact.json`, run `npm run build` and `npm run check`, then publish. The phone number, email, Facebook and Instagram are managed in this one file and reused across all pages and structured data. A blank email is hidden. The phone is converted to international format for call and text links. The header, footer, mobile Call action and contact cards all use the same configuration.

There is no website enquiry form or simulated submission. Call and text open the visitor’s device apps; Facebook opens the business page. Instagram is offered for browsing work. Customers can share photos through a contact route agreed with Connor. If a form is added later, implement real delivery and update the privacy notice before enabling it.

## Search and hosting

Published to Cloudflare on 24 September 2026 as `grandison-plumbing-heating` in Connor's account. Main site: https://grandisonplumbingandheating.co.uk . Hosting address: https://grandison-plumbing-heating.connorgrandison.workers.dev . The confirmed source repository is https://github.com/connorgrandison/Grandison-website on `main`. Push verified source and tracked output there for each update. GitHub pushes do not currently deploy automatically: publish to Cloudflare separately and verify both outcomes. The earlier Sites URL is a separate, older preview and should no longer be shared.

Change `business.origin` for a custom domain and rebuild to update canonicals, schema, sitemap and robots. All content is included in the HTML. JSON-LD connects the business, operator and site; service pages use Service and key pages use AboutPage/ContactPage. No ratings, invented accreditation or FAQ rich-result claims are made. Google/Bing verification fields exist in business configuration. Analytics and advertising are not enabled.

Cloudflare Workers hosts the static `dist` output. Run `npm run build` and `npm run check` before publishing via the dashboard or `npx wrangler deploy` with an authenticated account. `wrangler.jsonc` defines the static directory, clean directory URLs and custom 404 handling. The main domain is `grandisonplumbingandheating.co.uk`; `gphfife.co.uk` and both www variants use permanent redirects to it, preserving paths and query strings. The retired `/reviews/` route redirects to `/projects/` through `dist/_redirects`. No runtime server or application secrets are required. Images use responsive WebP and lazy loading. Fonts currently load from Google Fonts with swap; this external connection is described in the privacy notice.

## Sources and limitations

- Supplied brief: operator, Fife base, former name, service priorities, target areas.
- Five supplied original job photos and the supplied logo. Project entries describe visible details; dates, locations, hidden work and customer briefs are not invented.
- https://www.hse.gov.uk/gas/landlords/ : landlord guidance, linked on the relevant page.
- https://www.gassaferegister.co.uk/ : checking registration and emergency information.
- https://energysavingtrust.org.uk/advice/boilers : boiler-type context, linked on the installation page.

Local mobile Lighthouse audit on 23 September 2026: Performance 97, Accessibility 100, Best Practices 100, SEO 100. Homepage only, using the local preview; deployed-site and real-user results may differ. `npm run check` checks metadata, H1 count, links and schema. `qa.cjs` uses the bundled local Playwright runtime and installed Edge for desktop/mobile verification; adjust the local runtime path on another computer. No unnecessary tracking or consent banner is present.
