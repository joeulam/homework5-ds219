# Project constraints

This repository is a one-page website for a fictional coffee shop, built as a
class project. Treat these constraints as requirements for any agent working in
this folder.

## Scope

- Keep the site to three source files: `index.html`, `style.css`, and `script.js`.
- Do not add frameworks, build tools, package managers, or runtime dependencies.
- Do not load fonts, icons, scripts, or styles from a CDN or any remote origin.
- The site is served locally only. Do not deploy, add hosting configuration,
  create accounts, or request credentials.
- All work stays inside this repository. Do not touch files outside it.

## Content

- Maple & Moth Coffee is fictional. Keep it clearly labelled as fictional.
- Include one heading, a short introduction, and at least two content sections
  (the menu and the visit details).
- Keep exactly one interaction: filtering the menu cards by category.
- Use original placeholder-free content. Do not add real contact details.

## Quality

- Use semantic HTML with a skip link and a logical heading order.
- Every interactive control must work with a keyboard and show visible focus.
- Use `aria-pressed` for filter state and a polite live region for the result.
- Layout must work from narrow (about 320px) to wide browser widths without
  horizontal scrolling.
- Respect `prefers-reduced-motion`.
- Use plain, readable CSS and a small, dependency-free script.

## Safety

- Never add secrets, tokens, passwords, or private conversations to files,
  commits, or screenshots.
- Ignore `.env`, `node_modules/`, and `.DS_Store` (see `.gitignore`).
- Do not commit generated screenshots of anything other than the local site.
