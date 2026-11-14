# AMANI Refugees with Disabilities (AMANI-RWDs) — Website

Official informational website for AMANI-RWDs, a non-profit, refugee-led Community-Based Organization in Nakuru County, Kenya, promoting the dignity, inclusion and empowerment of refugees and asylum seekers with disabilities.

This is a static, no-build, no-login informational site: plain HTML, CSS and a touch of vanilla JavaScript. It's designed to be deployed as-is on GitHub Pages.

## Pages

- `index.html` — Home: two clear paths (get support / support our work), program areas, governance facts
- `support.html` — For refugees with disabilities and caregivers: what we help with, how to reach us, membership, raising a concern
- `get-involved.html` — Partner, volunteer, give
- `about.html` — Vision, mission, name and emblem, values, laws, accessibility
- `programs.html` — The fourteen program areas, in four groups
- `leadership.html` — Executive Committee, meetings, founding members
- `contact.html` — Contact information
- `404.html` — Not-found page

Design decisions live in `DESIGN.md` (the kanga look, colours, type, rules). Product facts live in `PRODUCT.md`.

## Structure

```
assets/
  css/style.css     — all site styling
  js/script.js       — phone menu + footer year (site works without it)
  fonts/             — self-hosted Bricolage Grotesque and Atkinson Hyperlegible Next (OFL)
  images/            — logo and favicons
```

## Local preview

Any static file server works, e.g.:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deployment (GitHub Pages)

This repo is set up to deploy automatically via GitHub Actions on every push to `main` (see `.github/workflows/deploy.yml`), publishing the site to GitHub Pages.

## Updating content

Copy still needs a few real-world details before this is fully public-ready:

- [ ] Contact page: real email, phone/WhatsApp and street address (slots are commented out in `contact.html`)
- [ ] Real photographs of members and activities (with consent) for `assets/images/photos/`
- [ ] Social media links (if any) in the footer
- [ ] Confirm the founding members are happy to have full names published
- [ ] Confirm the office-bearer term limits (the old site gave two different versions)

Source: `Constitution of AMANI Refugees with Disabilities`.
