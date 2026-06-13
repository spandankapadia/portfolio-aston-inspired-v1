# Deployment Workflow

This portfolio is deployed with Vercel from the GitHub repository:

```text
https://github.com/spandankapadia/portfolio-aston-inspired-v1
```

## Production Deployment

Production deploys should come from the `main` branch.

Expected Vercel settings:

```text
Framework Preset: Vite
Production Branch: main
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Before merging or pushing production changes:

```bash
npm install
npm run build
```

Push to `main` only after the build succeeds:

```bash
git checkout main
git pull origin main
git add .
git commit -m "Describe the portfolio update"
git push origin main
```

Vercel automatically creates a production deployment after `main` is updated.

## Preview Deployments

Use preview deployments before production for layout, link, and SEO checks.

Recommended workflow:

```bash
git checkout -b update/portfolio-change
npm install
npm run build
git add .
git commit -m "Describe the preview change"
git push origin update/portfolio-change
```

Then open a pull request on GitHub. Vercel will create a preview deployment for the branch or pull request.

Check the preview deployment before merging:

- Homepage loads correctly.
- Header and Contact dropdown work.
- Dark mode works.
- Resume, GitHub, LeetCode, transcript, and extracurricular links work.
- Technical Highlights cards remain responsive.
- No unexpected visual changes appear on desktop or mobile.

After the preview looks correct, merge the pull request into `main`. Vercel will deploy production from `main`.

## Search Indexing Files

These files must remain in `public` so Vite copies them to the production root:

```text
public/sitemap.xml
public/robots.txt
```

Production URLs:

```text
https://spandankapadia.com/sitemap.xml
https://spandankapadia.com/robots.txt
```

`robots.txt` should allow crawling and reference the sitemap:

```text
User-agent: *
Allow: /

Sitemap: https://spandankapadia.com/sitemap.xml
```

## Noindex Check

The live site should not contain a `noindex` directive.

Before deployment, check locally:

```bash
npm run build
```

Then confirm `index.html` does not include:

```html
noindex
```

The intended robots meta tag is:

```html
<meta name="robots" content="index, follow" />
```

## Google Search Console

### Add Or Verify The Site

1. Open Google Search Console.
2. Add the property:

```text
https://spandankapadia.com/
```

3. Complete ownership verification using Google's recommended DNS TXT record, HTML tag, or HTML file method.

### Submit The Sitemap

After the production Vercel deployment finishes, submit this sitemap:

```text
https://spandankapadia.com/sitemap.xml
```

Steps:

1. Open the verified property in Google Search Console.
2. Go to `Sitemaps`.
3. Enter:

```text
sitemap.xml
```

4. Click `Submit`.
5. Confirm the sitemap status is successful.

### URL Inspection And Request Indexing

After production deployment:

1. Open Google Search Console.
2. Use the URL Inspection tool.
3. Inspect:

```text
https://spandankapadia.com/
```

4. Confirm Google can access the page.
5. Click `Request Indexing`.

Repeat URL Inspection after major content updates or domain changes.

## Post-Deployment Checklist

After every production deployment:

- Open `https://spandankapadia.com/`.
- Open `https://spandankapadia.com/sitemap.xml`.
- Open `https://spandankapadia.com/robots.txt`.
- Confirm the homepage canonical URL points to `https://spandankapadia.com/`.
- Confirm no `noindex` tag exists.
- Confirm the portfolio still renders correctly on desktop and mobile.
- Submit or recheck the sitemap in Google Search Console when SEO-relevant content changes.
