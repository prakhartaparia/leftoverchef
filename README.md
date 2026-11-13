# Leftover Chef

**Problem:** Home cooks often have useful leftovers but need an easy idea for turning them into a meal. Leftover Chef matches selected ingredients to practical, Indian-inspired sample recipes and shows how much of the chosen food each recipe uses.

## Open the prototype

Open `index.html` directly in a modern browser, or serve this folder with any static file server. There is no build step, `.env` file, account, API key, database, or external service. The app uses local sample data and calculates matches in the browser.

## What works

- Vegetarian recipes are shown by default; selecting an egg, chicken, fish, or prawn switches matches to non-veg recipes. Non-veg ingredients have their own checklist category.
- Select ingredients from focused Indian-kitchen categories.
- Match choices to an expanded local library of fixed recipe templates, including Indian-style skillet, rice, poha, pulse, paneer, egg, and protein dishes.
- Every result lists only ingredients selected from your basket; a recipe may use a subset. Salt, oil, water, and common spices are assumed kitchen essentials. The judge three-ingredient path requires all three selected ingredients to appear in the recipe. View numbered cooking steps, separate prep and cook times, advance-prep notes, and a zero-waste score.
- Compare matches by nutrition, estimated cost, serving size, prep time, cook time, difficulty, or ingredients marked **Use soon**.
- See sample nutrition estimates, estimated meal cost, and estimated value of selected ingredients used.
- Get optional compatible-ingredient suggestions when two items are selected in 3-item mode, whether enabled manually or through a judge preset.
- Switch to dark mode using the top-right icon.
- Turn on **3-item mode** beside the ingredient count to require exactly three selected ingredients; results use all three or show a clear no-match result. The zero-waste score reflects the share of selected ingredients used by the recipe; the result shows the used/selected counts and calculation.
- Use one-click judge presets for the standard match, exact-three match, and no-match paths.
- Browse kitchen tips freely with previous/next navigation. Replay the first-visit guide with the compact **Tour** button beside the theme control.

## Judge path

Use **Judge Quick Checks** at the top of the page. Choose **Standard match**, **3-ingredient match**, then **Twist no-match**. Each button loads sample ingredients and displays the result. The three-ingredient match preset uses chickpeas, capsicum, and onion. The no-match preset uses okra, poha, and milk.

## Documentation

- [User Quickstart](docs/user-quickstart.md)
- [60-second Judge Runbook](docs/judge-runbook.md)
- [Five-test Manual Checklist](docs/five-test-checklist.md)
- [Data and Privacy Note](docs/data-privacy.md)
- [Handoff and Limitations](docs/handoff-limitations.md)
- [Submission Bundle Checklist](docs/submission-bundle.md)

## Scope and limitations

Recipes and tips are prototype sample content, not personalized nutrition or food-safety advice. Nutrition, cost, and saved-value figures are illustrative estimates, not verified nutrition labels or live prices. Recipes are selected from fixed templates and use only a subset of the chosen ingredients; common pantry staples are assumed. Matching does not account for quantities, allergies, intolerances, or individual medical needs. No profile, theme preference, or ingredient choice is saved. Refreshing the page resets the current selection.
