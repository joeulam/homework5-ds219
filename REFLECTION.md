# Reflection

## Model and provider

- Agent: OpenCode
- Model: `opencode-go/deepseek-v4.1-flash` (a free model available in the
  model picker during class)

## A useful prompt

After the first build, the hero looked wrong at narrow and wide widths. The
prompt I gave was:

```text
the back ground behind the text isnt aligned correctly
```

That short note led the agent to inspect the hero CSS and replace the absolute
`::before` background with a padded hero card, so the gradient and the content
now share the same edges. I also asked earlier:

```text
the title card is a bit off where the buttons are not aligned correctly
```

## One tool action I observed

The agent used its **Write** tool to create `index.html`. The result shown back
was `Wrote file successfully.` with the full path inside this repository. Later
it used **Edit** on `style.css` to replace the `.hero` and `.hero::before` rules;
the tool reported `Edit applied successfully.` I reviewed the changed CSS
before accepting the result.

## Issue checked before and after

**Observed issue:** the colored hero background was an absolutely positioned
`::before` layer that was only 78% as tall as the hero and had no inner padding.
At wide widths it stopped partway through the action buttons, and the heading
sat flush against the rounded left edge. At 375px the two buttons also had
different widths (166px and 173px).

**Fix:** the gradient became the hero card's own background, the hero received
balanced padding and a matching radius, and each button got `min-width: 10.25rem`
with centered content. On narrow screens the buttons stretch equally and stack.

**Verification:** I served the site with
`py -m http.server 8000 --bind 127.0.0.1` and loaded it in Edge. Using the
Edge DevTools protocol at a 375px viewport, `scrollWidth` was 375 (no horizontal
scrolling) and both hero buttons measured 170px wide by 52px high, stacked and
full width. At 1280px, `scrollWidth` was 1280. I also clicked the **Bakes**
filter and confirmed the live status changed to "Showing 3 baked goods." while
only the three bake cards stayed visible.

## How the interaction works

`script.js` collects every button with the `.filter` class and every `.card`.
When a filter button is clicked, the script compares each card's
`data-category` with the button's `data-filter`. Matching cards stay visible and
the rest get the `hidden` attribute. The selected button is marked with
`aria-pressed="true"`, its siblings with `false`, and the polite status line
(`role="status"`, `aria-live="polite"`) announces how many items are showing.
Because the controls are native `<button>` elements, they also work with
`Tab`, `Enter`, and `Space`, and the CSS `:focus-visible` outline makes the
focused control easy to see.

## What still needs a human check

I checked layout, filtering, and the live status in Edge. A human should still
read the page aloud with a screen reader, confirm the skip link lands on the
menu, and try the page on a physical phone.

The agent session used for this build had no visible desktop, so
`evidence/site-localhost.png` is a headless Edge capture of the locally served
page. It shows the rendered site but not the browser address bar. Before
submitting, open `http://127.0.0.1:8000/` in a normal browser window and retake
the screenshot with the address bar visible.
