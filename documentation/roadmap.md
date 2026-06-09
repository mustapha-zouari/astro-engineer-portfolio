# Roadmap

This roadmap lists useful contribution directions for the template. Items are intentionally high-level so contributors can propose focused pull requests.

## 🔎 Improve SEO

Make the template easier to discover and share.

- Add stronger default metadata for pages and articles.
- Add Open Graph and social preview metadata.
- Add canonical URL support.
- Add structured data where it helps portfolio and article pages.
- Document SEO customization in `documentation/content-customization.md`.

## 🔗 Auto-Customization From LinkedIn

Explore ways to help users bootstrap portfolio content from an existing LinkedIn profile.

- Define an import format for profile, experience, education, and skills.
- Add a safe local script or documented workflow for generating `src/data` files.
- Keep user review required before replacing content.
- Avoid storing credentials or scraping private content.

## 🌍 Internationalization

Support multilingual portfolios without complicating the default template.

- Define a lightweight locale structure for page labels and portfolio data.
- Document how to add a second language.
- Keep routing clear for localized pages.
- Make language switching optional.

## 🧭 Contribution Notes

- Keep each roadmap item small enough for review.
- Update documentation with every user-facing change.
- Run `npm run format:check` and `npm run build` before opening a pull request.
