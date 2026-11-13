# Handoff and Limitations

## Project map

- `index.html` contains the single-page interface and dialogs.
- `styles.css` contains the responsive layout, theme, and component styles.
- `app.js` contains the sample recipes, simulated nutrition and cost data, ingredient categories, match/sort calculations, judge presets, tips, and cooking-mode behavior.
- `docs/` contains the quickstart, judge runbook, manual checklist, privacy note, handoff notes, and submission checklist.

## Data and reset behavior

Recipe templates, nutrition, ingredient value, price, and tip content are local sample data in `app.js`. Matching and sorting are computed locally against selected ingredients; each result lists and instructs using only selected ingredients, with salt, oil, water, and common spices treated as kitchen staples. Recipe type follows selected ingredients: vegetarian recipes are shown by default, and selecting a non-veg item switches matches to non-veg recipes. The manual 3-item switch and judge three-ingredient preset require exactly three selected ingredients and a recipe using all three; regular matching may use a subset of the basket. The zero-waste percentage is the number of selected food ingredients used divided by the number selected; the UI shows the calculation and an approximate percentage in 5-point increments. Refreshing the page clears selections, expiry flags, and theme choice.

## Deliberately mocked

The app does not contain real user accounts, saved pantry inventory, verified nutrition information, allergy checks, recipe generation, live prices, or server-side persistence. Nutrition and cost are static illustrative estimates; recipe quantities are not scaled to serving size. Food safety and individual dietary suitability are not evaluated. Veg/non-veg filtering is a simple sample recipe tag, not a religious, medical, or certification guarantee.

## Improvements before real deployment

1. Review recipes, quantities, preparation guidance, and food-safety notes with qualified local cooking experts.
2. Expand dietary labels, add an allergy filter, and review accessibility and ingredient synonym handling.
3. If persistence or collaboration is needed, design consent, data retention, and secure storage before adding a backend.

## Checklist for future features

- Keep the prototype browser-first and use fictional sample data. Do not introduce API keys, passwords, `.env` requirements, or paid services.
- Preserve at least one complete user journey from valid input through a visible result. Include validation and a useful empty or error state for new paths.
- Update the five-test manual checklist whenever a feature changes behavior, including a boundary case and a reset/refresh check.
- Update the judge runbook and user quickstart when controls or expected results change.
- Capture a main-flow screenshot and a result-state screenshot for the submission bundle; if a shareable preview is unavailable, record the judge path.
- Document anything simulated, stored, or deliberately unsupported before calling the feature done.
