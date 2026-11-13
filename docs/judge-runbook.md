# 60-second Judge Runbook

## Starting state

Open `index.html`. The app loads directly into the ingredient matcher with no sign-in or setup. All data is fictional sample content; no API or private service is used.

## Demo script

1. Click **Standard match** in Judge Quick Checks. Expected: the standard preset selects tomato, spinach, and onion and displays a matching recipe with ingredients, steps, time breakdown, and score.
2. Click **3-ingredient match**. Expected: the preset turns on exact-three mode, selects chickpeas, capsicum, and onion, and shows a matching recipe using only those three ingredients (the sample library includes a chana masala bowl).
3. Click **Twist no-match**. Expected: the app selects exactly okra, poha, and milk and displays a clear no-match explanation without a partial recipe.
4. Point out the zero-waste score and its used/selected calculation, plus estimated nutrition per serving, meal cost, and value of selected ingredients used. These figures are static estimates for the demo.
5. Open **Browse kitchen tips** and move between tips. Optionally show **Use soon first**, a sort menu, and dark mode.

## Simulated features

The recipe library, scores, and judge presets are local sample data. Nutrition, cost, and savings are illustrative estimates. The cooking timer is a browser-side demo timer. There is no account, server-side storage, recipe API, or live nutrition calculation.
