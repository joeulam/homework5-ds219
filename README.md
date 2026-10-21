# Maple & Moth Coffee

A one-page website for a fictional neighborhood coffee shop, built with plain
HTML, CSS, and JavaScript. The menu board can be filtered by category (All,
Coffee, Tea, Bakes) with a mouse, touch, or keyboard. No frameworks, packages,
or CDNs are used.

## Prerequisites

- A modern browser.
- Python 3 (only to serve the files over local HTTP).
  - Windows: `py --version` should print a version.
  - macOS/Linux: `python3 --version` should print a version.

No installation, package manager, or account is required.

## Run locally

Open a terminal in this repository folder (the folder that contains
`index.html`), then run one of these commands.

Windows (PowerShell or Command Prompt):

```bat
py -m http.server 8000 --bind 127.0.0.1
```

macOS or Linux:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open this URL in the browser:

```
http://127.0.0.1:8000/
```

`http://localhost:8000/` works too. Keep the terminal running while you browse.

If port 8000 is already in use, use 8001 instead in both the command and the URL.

Stop the server with `Ctrl+C` in the terminal.

## Check the interaction

1. Scroll to "The menu board".
2. Press `Tab` until a filter button has a visible outline, then press
   `Enter` or `Space` to activate it.
3. The cards update, the pressed button stays highlighted, and the status line
   reports how many items are showing.
4. Resize the window to roughly 375px wide; the cards stack and nothing should
   scroll sideways.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structure |
| `style.css` | Responsive layout, colors, and focus styles |
| `script.js` | Menu filtering and live status text |
| `AGENTS.md` | Constraints for coding agents |
| `REFLECTION.md` | What was built, checked, and learned |
| `evidence/` | Screenshot of the locally served page |

Maple & Moth Coffee is fictional. Prices, hours, and the address are invented.
