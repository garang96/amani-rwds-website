# AMANI Refugees with Disabilities (AMANI-RWDs) — Website

Official informational website for AMANI-RWDs, a non-profit, refugee-led Community-Based Organization in Nakuru County, Kenya, promoting the dignity, inclusion and empowerment of refugees and asylum seekers with disabilities.

This is a static, no-build, no-login informational site: plain HTML, CSS and a touch of vanilla JavaScript. It's designed to be deployed as-is on GitHub Pages.

## Pages

- `index.html` — Home
- `about.html` — Vision, mission, legal status, core values, objectives
- `programs.html` — Areas of operation / program pillars
- `leadership.html` — Governance structure and founding members
- `get-involved.html` — Membership, volunteering, partnerships, giving
- `contact.html` — Contact information
- `404.html` — Not-found page

## Structure

```
assets/
  css/style.css     — all site styling
  js/script.js       — mobile nav + small enhancements
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

- [ ] Contact page: real email address, phone number, and physical/postal address
- [ ] Social media links (if any) in the footer
- [ ] Confirm whether to publish full names of founding members on the Leadership page, or use initials only
- [ ] Bank/donation details, if the organization wants a donate flow beyond "contact us"

Source: `Constitution of AMANI Refugees with Disabilities`.
