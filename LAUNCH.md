# Launch configuration

## Details still needed

- Verified phone and email. Facebook and Instagram were supplied by the owner and are linked throughout the site.
- Current Gas Safe registration and the services/qualifications it covers before advertising registration.
- A working enquiry delivery endpoint and the privacy details for its operation.
- Confirmed project locations and scopes for fuller case studies.
- Confirmation of service availability and geographic coverage, especially Edinburgh.

The site is public at the owner’s request for sharing. Confirm the remaining business details and website form delivery before promoting it for direct enquiries.

## Contact form

The form is disabled when `enquiryEndpoint` in `src/business.mjs` is blank, with a clear visitor-facing explanation. It does not save details or simulate delivery. The supplied Facebook page is the primary external contact route while the website form is unconnected; Instagram and the existing MyBuilder profile are also linked. Adding a verified phone enables phone links and the sticky mobile Call action. Email and Facebook are also configured centrally.

To enable delivery, set an HTTPS endpoint accepting JSON fields `name`, `postcode`, `phone`, `email`, `service`, `message`, `consent`. Validate fields server-side, rate-limit and prevent abuse, securely deliver/store the request, configure CORS if necessary, and return 2xx only when accepted. Never put secret API credentials in public code. Update the privacy notice with the actual controller contact, lawful basis, processors, retention and rights before enabling. Photo uploads are not active; customers can share images through an agreed contact route.

## Search and hosting

Change `business.origin` for a custom domain and rebuild to update canonicals, schema, sitemap and robots. All content is included in the HTML. JSON-LD connects the business, operator and site; service pages use Service and key pages use AboutPage/ContactPage. No ratings, invented accreditation or FAQ rich-result claims are made. Google/Bing verification fields exist in business configuration. Analytics and advertising are not enabled.

For Cloudflare Pages later: build `npm run build`, output `dist`. No runtime server or secrets required. The 404 page and directory routes should be preserved. Images use responsive WebP and lazy loading. Fonts currently load from Google Fonts with swap; this external connection is described in the privacy notice.

## Sources and limitations

- Supplied brief: operator, Fife base, former name, service priorities, target areas.
- Five supplied original job photos and the supplied logo. Project entries describe visible details; dates, locations, hidden work and customer briefs are not invented.
- https://www.mybuilder.com/profile/connor_grandison/reviews?page=2 : short excerpts and historical local-work references from 2020, linked and dated. No current rating is claimed.
- https://www.hse.gov.uk/gas/landlords/ : landlord guidance, linked on the relevant page.
- https://www.gassaferegister.co.uk/ : checking registration and emergency information.
- https://energysavingtrust.org.uk/advice/boilers : boiler-type context, linked on the installation page.

Local mobile Lighthouse audit on 23 September 2026: Performance 97, Accessibility 100, Best Practices 100, SEO 100. Homepage only, using the local preview; deployed-site and real-user results may differ. `npm run check` checks metadata, H1 count, links and schema. `qa.cjs` uses the bundled local Playwright runtime and installed Edge for desktop/mobile verification; adjust the local runtime path on another computer. No unnecessary tracking or consent banner is present.
