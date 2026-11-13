# Data and Privacy Note

- The app uses fictional recipe and kitchen-tip sample data bundled in `app.js`.
- Ingredient selection, use-soon flags, challenge mode, sorting choice, and theme state live only in the current page's JavaScript state. A single local browser flag records whether the first-visit intro was completed or skipped.
- No profile, email, password, health information, or contact information is requested or stored.
- The app makes no network requests to recipe services and sends no selections anywhere.
- Refreshing the page clears the selected ingredients and use-soon flags. The intro completion flag remains in local browser storage so the guide is not shown again.
- The local timer runs in the browser and does not save a cooking history.
- The dark-mode setting is temporary and is not saved after refresh.
- Nutrition, ingredient value, and meal-cost figures are fictional estimates bundled with the sample recipe data; no live pricing or nutrition service is contacted.
- No secrets, API keys, `.env` file, or paid service are needed.
