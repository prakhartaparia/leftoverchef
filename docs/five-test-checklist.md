# Five-test Manual Checklist

Run these checks in a browser after opening `index.html`. Each test includes an expected result.

1. **Validation and automatic recipe type:** With no ingredients selected, verify **Find my recipe** is disabled. Select an egg and find a recipe; verify the results are non-veg and red-coded. Remove the egg and verify vegetarian matches return by default.
2. **Standard happy path:** Select tomato, spinach, and onion. Find a recipe. Verify every displayed ingredient is selected, the recipe instructions use only those listed ingredients plus pantry staples, and separate prep/cook time, nutrition, cost/saved-value estimates, zero-waste score, and difficulty are visible. Verify the result shows used/selected counts, the calculation, and its approximate percentage.
3. **Twist and compatible suggestion:** Select four ingredients and try to turn on **3-item mode**; verify it stays off and explains that only three or fewer can be selected. Clear the selection, turn it on, then select exactly chickpeas, capsicum, and onion; verify a recipe uses all three. Then load the judge twist preset and confirm it turns the mode on automatically. Try to select a fourth and verify it is rejected. Deselect one item to confirm the optional compatible suggestion appears.
4. **No-match:** Load the judge no-match preset. Verify a clear no-match result appears and does not show a partial recipe.
5. **Sort, expiry, preset reset, and theme:** Select two ingredients, mark one **Use soon**, find matches, and sort by **Use soon first**. Load **Standard match** to exit challenge mode. Toggle dark mode and refresh; verify selections and expiry flags clear and the theme returns to light mode.
