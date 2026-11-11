# SEO launch checklist

Site: https://www.klarus.io (set with `VITE_SITE_URL`). Brand: **Talha Speaks AI** / **Talha**.

## How the SEO is built
- `npm run build` runs `vite build` then `scripts/prerender.mjs`, which writes static HTML for `/`, `/resources`, `/claude-skills`, `/90-days-roadmap`, `/contact` and `404.html` into `dist/`.
- Per-page title, description, canonical, Open Graph, Twitter tags and JSON-LD come from `<PageMeta>` (`src/seo/PageMeta.tsx`) and `buildMeta` in `src/seo/site.ts`.
- Site-wide Organization / Person / WebSite schema lives in `index.html`.
- `robots.txt`, `sitemap.xml` and `llms.txt` are generated at build time by the `seo-files` plugin in `vite.config.ts`.
- **Adding a page:** add the route in `src/App.tsx`, add it to `SITEMAP_PATHS` in `vite.config.ts` and to `ROUTES` in `scripts/prerender.mjs`, and give it a `<PageMeta>`.

## Environment variables (Vercel, Settings, Environment Variables)
| Name | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Production URL used in canonicals, sitemap and schema |
| `VITE_GSC_VERIFICATION` | Google Search Console HTML-tag token (the `content` value only) |
| `VITE_BING_VERIFICATION` | Bing Webmaster Tools token (the `content` value only) |
| `VITE_GA_MEASUREMENT_ID` | Optional override of the GA4 ID |

## After the first deploy
1. **Check the live site**
   - Open `/robots.txt`, `/sitemap.xml`, `/llms.txt` and a made-up URL (it should return a real 404).
   - `klarus.io` should redirect to `www.klarus.io`. In Vercel, add both domains and make `www` primary.
2. **Google Search Console** (search.google.com/search-console)
   - Add property, choose Domain or URL prefix `https://www.klarus.io`.
   - For URL prefix, pick the HTML tag method, copy the `content` value into `VITE_GSC_VERIFICATION`, redeploy, then click Verify.
   - Sitemaps, submit `sitemap.xml`.
   - URL Inspection, request indexing for all five pages.
   - Settings, Associations, link GA4.
3. **Bing Webmaster Tools** (bing.com/webmasters)
   - Import from Google Search Console, or add the site and use the meta-tag token in `VITE_BING_VERIFICATION`.
   - Submit the sitemap. This also feeds ChatGPT search and Copilot.
4. **GA4 / GTM**
   - GA4, Realtime: click through the site and confirm hits. GA4 is installed in code with `G-N1KCHPMKYZ`.
   - Do not add a GA4 tag inside GTM `GTM-T636HP3W`, or hits are counted twice.
5. **Validate markup**
   - Rich Results Test (search.google.com/test/rich-results) on `/`: expect FAQ and breadcrumb items, no errors.
   - Schema Markup Validator (validator.schema.org) for Organization and Person.
   - Share each URL in X, LinkedIn and WhatsApp to check the preview card.
6. **Speed**: run PageSpeed Insights (pagespeed.web.dev) on `/` for mobile and desktop and note the scores.

## Brand signals (do these in the first week)
- Put `https://www.klarus.io` in your YouTube channel description and About links, X bio, LinkedIn Contact info and Featured, and Instagram bio.
- Use the same name ("Talha Speaks AI") and the same one-line bio on every profile.
- Link to the Resources, Claude Skills and Roadmap pages from video descriptions.
- Replace `public/og-image.png` (1200x630) with a branded image that has your face and name.

## Ongoing
- One new page or post per video, targeting a specific search (for example "Claude skills for freelancers", "n8n automation tutorial"). Link it from the video and back to it.
- Re-request indexing in Search Console after major edits.
- Check Search Console, Performance monthly for queries and pages to expand.
- Decision to make early: whether a `talhaspeaksai` domain should become the main one. Moving after indexing costs ranking.
