const recipes = [{
  id: 'garden',
  name: 'Masala egg & veg toast',
  emoji: '🍳',
  time: 18,
  prep: 8,
  cook: 10,
  ahead: 'No advance prep needed.',
  ingredients: ['eggs', 'tomato', 'spinach', 'bread', 'cheese', 'onion', 'coriander', 'green chilli', 'cumin', 'turmeric'],
  description: 'A quick masala-style skillet that turns everyday vegetables into a hearty toast topping.',
  steps: [{
    title: 'Cook the masala base',
    body: 'Warm a little oil. Add cumin, chopped onion, tomato and green chilli. Cook until soft and fragrant.',
    timer: 4
  }, {
    title: 'Add greens and toast',
    body: 'Stir in spinach until wilted. Toast bread while the greens cook.',
    timer: 3
  }, {
    title: 'Bring it together',
    body: 'Crack in the eggs and cover until set. Finish with coriander and a little cheese if you like.',
    timer: 6
  }]
},
{
  id: 'rice',
  name: 'Masala leftover rice or poha',
  emoji: '🍚',
  time: 15,
  prep: 7,
  cook: 8,
  ahead: 'For the rice version, use cooked and chilled rice. Poha needs only a quick rinse before cooking.',
  ingredients: ['rice', 'poha', 'eggs', 'carrot', 'peas', 'onion', 'cabbage', 'tofu', 'capsicum', 'cumin', 'mustard seeds', 'turmeric', 'curry leaves', 'green chilli', 'coriander'],
  description: 'A quick Indian-style skillet for leftover rice or poha with whatever vegetables are on hand.',
  steps: [{
    title: 'Temper the spices',
    body: 'Warm oil and crackle cumin or mustard seeds. Add curry leaves, onion and green chilli.',
    timer: 3
  }, {
    title: 'Add vegetables and rice',
    body: 'Stir in diced vegetables until just tender. Add cooked rice or rinsed poha and mix gently.',
    timer: 6
  }, {
    title: 'Finish and serve',
    body: 'Season with turmeric and salt. Fold in peas, egg or tofu if using, then finish with coriander.',
    timer: 3
  }]
},
{
  id: 'pasta',
  name: 'Desi masala vegetable pasta',
  emoji: '🍝',
  time: 20,
  prep: 8,
  cook: 12,
  ahead: 'No advance prep needed.',
  ingredients: ['pasta', 'tomato', 'spinach', 'cheese', 'garlic', 'onion', 'mushroom', 'capsicum', 'methi', 'cumin', 'turmeric', 'garam masala', 'red chilli powder', 'coriander', 'lemon'],
  description: 'A familiar tomato pasta with warm Indian spices and vegetables that need using.',
  steps: [{
    title: 'Cook the pasta',
    body: 'Boil pasta until just tender. Save a small cup of pasta water before draining.',
    timer: 8
  }, {
    title: 'Make a masala sauce',
    body: 'Soften garlic and onion. Add tomato, cumin and a pinch of garam masala, then stir in your vegetables.',
    timer: 7
  }, {
    title: 'Toss and finish',
    body: 'Add pasta and a splash of pasta water. Toss well and finish with coriander, lemon or cheese.',
    timer: 2
  }]
},
{
  id: 'soup',
  name: 'No-waste sabzi soup',
  emoji: '🥣',
  time: 28,
  prep: 10,
  cook: 18,
  ahead: 'No advance prep needed; chop vegetables as you go.',
  ingredients: ['carrot', 'potato', 'onion', 'tomato', 'spinach', 'rajma', 'moong dal', 'methi', 'cabbage', 'cauliflower', 'brinjal', 'okra', 'coriander', 'turmeric', 'garam masala', 'mustard seeds'],
  description: 'A warming, lightly spiced soup for vegetables and pulses that need using.',
  steps: [{
    title: 'Start the masala base',
    body: 'Chop the vegetables. Warm oil, add mustard seeds and onion, then cook until fragrant.',
    timer: 6
  }, {
    title: 'Simmer until tender',
    body: 'Add your chopped vegetables, cooked rajma or moong dal, water and a pinch of turmeric. Simmer until soft.',
    timer: 16
  }, {
    title: 'Finish your bowl',
    body: 'Season with garam masala and salt. Mash a few vegetables to thicken, then finish with coriander.',
    timer: 3
  }]
},
{
  id: 'tacos',
  name: 'Chana capsicum masala wraps',
  emoji: '🌯',
  time: 22,
  prep: 10,
  cook: 12,
  ahead: 'Drain and rinse canned chickpeas before cooking.',
  ingredients: ['chickpeas', 'capsicum', 'onion', 'tomato', 'roti', 'paneer', 'coriander', 'cumin', 'turmeric', 'garam masala', 'curd', 'mint', 'green chilli'],
  description: 'A quick chana masala filling wrapped in roti, with a little crunch from capsicum.',
  steps: [{
    title: 'Soften the masala base',
    body: 'Warm oil in a pan. Add cumin, onion and green chilli; cook until the onion softens.',
    timer: 7
  }, {
    title: 'Cook the chana filling',
    body: 'Add capsicum, tomato, chickpeas, turmeric and garam masala. Cook until hot and fragrant.',
    timer: 5
  }, {
    title: 'Wrap and finish',
    body: 'Spoon the filling into warm roti. Add coriander, mint or a spoon of curd if you like.',
    timer: 2
  }]
},
{
  id: 'hash',
  name: 'Aloo methi skillet',
  emoji: '🥔',
  time: 25,
  prep: 8,
  cook: 17,
  ahead: 'No advance prep needed; dice potatoes small for faster cooking.',
  ingredients: ['potato', 'methi', 'eggs', 'onion', 'paneer', 'capsicum', 'mushroom', 'carrot', 'cumin', 'turmeric', 'green chilli', 'curry leaves'],
  description: 'Golden potatoes with fresh methi and warming spices make a simple one-pan meal.',
  steps: [{
    title: 'Brown the potatoes',
    body: 'Dice potatoes small. Pan-fry with oil, cumin and turmeric until golden and tender.',
    timer: 12
  }, {
    title: 'Add greens and vegetables',
    body: 'Stir in onion, capsicum and methi. Cook until the greens soften and smell fragrant.',
    timer: 5
  }, {
    title: 'Finish the skillet',
    body: 'Add egg or paneer if using. Cover briefly to cook through, then serve warm.',
    timer: 5
  }]
},
{
  id: 'curry',
  name: 'Chana coconut curry',
  emoji: '🍛',
  time: 24,
  prep: 7,
  cook: 17,
  ahead: 'Drain and rinse canned chickpeas before starting.',
  ingredients: ['chickpeas', 'rajma', 'tomato', 'spinach', 'onion', 'coconut milk', 'tofu', 'cauliflower', 'ginger', 'rice', 'curd', 'brinjal', 'okra', 'garlic', 'cumin', 'turmeric', 'garam masala', 'red chilli powder', 'coriander', 'curry leaves'],
  description: 'A flexible, gently spiced curry that rescues pulses and vegetables from the fridge.',
  steps: [{
    title: 'Build a fragrant base',
    body: 'Soften onion, garlic and ginger in a little oil. Add cumin and turmeric and stir until fragrant.',
    timer: 4
  }, {
    title: 'Simmer the curry',
    body: 'Add chickpeas or rajma, tomato and coconut milk. Simmer until thick and rich.',
    timer: 14
  }, {
    title: 'Fold in greens',
    body: 'Stir in spinach and season with garam masala. Serve with rice and a spoon of curd if you like.',
    timer: 3
  }]
},
{
  id: 'broccoli-bake',
  name: 'Paneer vegetable pulao',
  emoji: '🍚',
  time: 30,
  prep: 10,
  cook: 20,
  ahead: 'Use cooked rice or soak raw rice for 15 minutes before cooking.',
  ingredients: ['paneer', 'rice', 'peas', 'carrot', 'cauliflower', 'methi', 'cabbage', 'cumin', 'garam masala', 'milk', 'cheese', 'poha', 'mustard seeds'],
  description: 'A one-pot rice dish with paneer and vegetables that can be adapted to what you have.',
  steps: [{
    title: 'Toast the spices',
    body: 'Warm a little oil or ghee. Add cumin and onion, then cook until soft and aromatic.',
    timer: 6
  }, {
    title: 'Add vegetables and rice',
    body: 'Stir in paneer, peas and chopped vegetables. Add rice and water, then cover to cook.',
    timer: 3
  }, {
    title: 'Steam and serve',
    body: 'Cook until the rice is tender and fluffy. Rest briefly, then finish with coriander or a squeeze of lemon.',
    timer: 18
  }]
},
{
  id: 'chicken-curry',
  name: 'Chicken & potato masala',
  emoji: '🍗',
  time: 40,
  prep: 12,
  cook: 28,
  ahead: 'No advance prep needed. Keep raw chicken separate from ready-to-eat ingredients.',
  ingredients: ['chicken', 'potato', 'tomato', 'onion', 'ginger', 'garlic', 'cumin', 'turmeric', 'garam masala', 'red chilli powder', 'coriander', 'curd'],
  description: 'A simple home-style chicken curry with potatoes and a warm onion-tomato masala.',
  steps: [{
    title: 'Make the masala base',
    body: 'Cook onion, ginger and garlic in a little oil. Add cumin, turmeric and chilli powder.',
    timer: 7
  }, {
    title: 'Cook the chicken safely',
    body: 'Add chicken pieces and stir until coated. Cook through, then add tomato, potato and a splash of water.',
    timer: 16
  }, {
    title: 'Simmer and finish',
    body: 'Cover and simmer until potatoes are tender and chicken is fully cooked. Add garam masala and coriander.',
    timer: 12
  }]
},
{
  id: 'fish-curry',
  name: 'Coconut fish curry',
  emoji: '🐟',
  time: 32,
  prep: 10,
  cook: 22,
  ahead: 'Keep raw fish chilled until needed and separate from ready-to-eat foods.',
  ingredients: ['fish', 'tomato', 'onion', 'coconut milk', 'ginger', 'garlic', 'turmeric', 'red chilli powder', 'coriander', 'curry leaves', 'lemon'],
  description: 'A gently tangy fish curry with coconut, tomato and fresh aromatics.',
  steps: [{
    title: 'Start the curry base',
    body: 'Soften onion, ginger and garlic. Add turmeric, chilli powder, tomato and curry leaves.',
    timer: 7
  }, {
    title: 'Simmer the sauce',
    body: 'Add coconut milk and simmer gently until the tomato softens and the sauce is fragrant.',
    timer: 8
  }, {
    title: 'Cook the fish',
    body: 'Add fish pieces and simmer gently until opaque and cooked through. Finish with lemon and coriander.',
    timer: 7
  }]
},
{
  id: 'prawn-stir-fry',
  name: 'Quick prawn capsicum stir-fry',
  emoji: '🍤',
  time: 20,
  prep: 8,
  cook: 12,
  ahead: 'Thaw prawns safely in the fridge if frozen; pat dry before cooking.',
  ingredients: ['prawns', 'capsicum', 'onion', 'green chilli', 'ginger', 'garlic', 'cumin', 'coriander', 'lemon'],
  description: 'A quick, peppery prawn stir-fry with crisp capsicum and a squeeze of lemon.',
  steps: [{
    title: 'Prep the aromatics',
    body: 'Slice capsicum and onion. Warm oil and quickly cook ginger, garlic and cumin.',
    timer: 3
  }, {
    title: 'Cook the vegetables',
    body: 'Add capsicum, onion and green chilli. Stir-fry until just tender.',
    timer: 4
  }, {
    title: 'Finish the prawns',
    body: 'Add prawns and cook until opaque and fully cooked. Finish with coriander and lemon.',
    timer: 5
  }]
}
];
const groups = {
  "Greens & fresh herbs": ['spinach', 'methi', 'cabbage', 'coriander', 'mint', 'curry leaves'],
  "Vegetables & aromatics": ['tomato', 'carrot', 'onion', 'potato', 'mushroom', 'cauliflower', 'capsicum', 'brinjal', 'okra', 'peas', 'green chilli', 'garlic', 'ginger', 'lemon'],
  "Pulses & protein": ['chickpeas', 'rajma', 'moong dal', 'paneer', 'tofu'],
  "Rice & breads": ['rice', 'poha', 'roti', 'bread', 'pasta'],
  "Dairy & alternatives": ['curd', 'milk', 'cheese', 'coconut milk'],
  "Non-veg ingredients": ['eggs', 'chicken', 'fish', 'prawns']
};
const pantryStaples = new Set(['salt', 'oil', 'water', 'cumin', 'turmeric', 'garam masala', 'red chilli powder', 'mustard seeds']);
const recipeAnchors = {
  garden: ['eggs'],
  rice: ['rice', 'poha'],
  pasta: ['pasta'],
  soup: ['carrot', 'potato', 'onion', 'tomato', 'spinach', 'rajma', 'moong dal', 'methi', 'cabbage', 'cauliflower', 'brinjal', 'okra'],
  tacos: ['chickpeas'],
  hash: ['potato', 'methi'],
  curry: ['chickpeas', 'rajma'],
  'broccoli-bake': ['paneer', 'rice'],
  'chicken-curry': ['chicken'],
  'fish-curry': ['fish'],
  'prawn-stir-fry': ['prawns']
};
const produce = ['spinach', 'methi', 'cabbage', 'coriander', 'mint', 'tomato', 'carrot', 'onion', 'potato', 'mushroom', 'cauliflower', 'capsicum', 'brinjal', 'okra', 'peas', 'green chilli', 'garlic', 'ginger', 'lemon'];
const extras = [{
  id: 'veg-skillet',
  emoji: '🥘',
  name: 'Everyday sabzi skillet',
  anchors: produce,
  ingredients: produce,
  diet: 'veg',
  cost: 35,
  nutrition: [210, 7, 30, 7],
  serves: 2,
  difficulty: 1,
  prep: 8,
  cook: 12,
  mode: 'skillet'
},
{
  id: 'dal-bowl',
  emoji: '🍲',
  name: 'Quick dal and vegetable bowl',
  anchors: ['chickpeas', 'rajma', 'moong dal'],
  ingredients: ['chickpeas', 'rajma', 'moong dal', ...produce],
  diet: 'veg',
  cost: 42,
  nutrition: [260, 13, 39, 6],
  serves: 2,
  difficulty: 1,
  prep: 7,
  cook: 18,
  mode: 'simmer'
},
{
  id: 'paneer-bhurji',
  emoji: '🧀',
  name: 'Paneer bhurji',
  anchors: ['paneer'],
  ingredients: ['paneer', ...produce],
  diet: 'veg',
  cost: 58,
  nutrition: [320, 18, 24, 16],
  serves: 2,
  difficulty: 1,
  prep: 8,
  cook: 12,
  mode: 'skillet'
},
{
  id: 'tofu-bhurji',
  emoji: '🍳',
  name: 'Tofu masala skillet',
  anchors: ['tofu'],
  ingredients: ['tofu', ...produce],
  diet: 'veg',
  cost: 52,
  nutrition: [285, 19, 25, 12],
  serves: 2,
  difficulty: 1,
  prep: 8,
  cook: 12,
  mode: 'skillet'
},
{
  id: 'egg-bhurji',
  emoji: '🍳',
  name: 'Masala egg bhurji',
  anchors: ['eggs'],
  ingredients: ['eggs', ...produce, 'bread', 'roti', 'rice', 'poha'],
  diet: 'nonveg',
  cost: 48,
  nutrition: [300, 17, 26, 14],
  serves: 2,
  difficulty: 1,
  prep: 6,
  cook: 9,
  mode: 'egg'
},
{
  id: 'poha-tawa',
  emoji: '🍚',
  name: 'Vegetable poha',
  anchors: ['poha'],
  ingredients: ['poha', ...produce, 'eggs', 'tofu', 'paneer'],
  diet: 'both',
  cost: 38,
  nutrition: [280, 9, 46, 7],
  serves: 2,
  difficulty: 1,
  prep: 7,
  cook: 10,
  mode: 'grain'
},
{
  id: 'rice-tawa',
  emoji: '🍚',
  name: 'Leftover rice tawa pulao',
  anchors: ['rice'],
  ingredients: ['rice', ...produce, 'eggs', 'tofu', 'paneer', 'chickpeas', 'rajma'],
  diet: 'both',
  cost: 42,
  nutrition: [305, 10, 50, 8],
  serves: 2,
  difficulty: 1,
  prep: 7,
  cook: 12,
  mode: 'grain'
},
{
  id: 'roti-wrap',
  emoji: '🌯',
  name: 'Leftover roti masala wrap',
  anchors: ['roti'],
  ingredients: ['roti', ...produce, 'chickpeas', 'rajma', 'moong dal', 'paneer', 'tofu', 'eggs'],
  diet: 'both',
  cost: 45,
  nutrition: [330, 13, 43, 10],
  serves: 2,
  difficulty: 1,
  prep: 8,
  cook: 10,
  mode: 'wrap'
},
{
  id: 'bread-toast',
  emoji: '🍞',
  name: 'Masala leftover toast',
  anchors: ['bread'],
  ingredients: ['bread', ...produce, 'eggs', 'paneer', 'tofu', 'cheese'],
  diet: 'both',
  cost: 39,
  nutrition: [290, 11, 37, 9],
  serves: 2,
  difficulty: 1,
  prep: 6,
  cook: 8,
  mode: 'toast'
},
{
  id: 'veg-pasta',
  emoji: '🍝',
  name: 'Quick desi vegetable pasta',
  anchors: ['pasta'],
  ingredients: ['pasta', ...produce, 'cheese', 'paneer', 'tofu'],
  diet: 'veg',
  cost: 55,
  nutrition: [350, 13, 52, 10],
  serves: 2,
  difficulty: 1,
  prep: 8,
  cook: 12,
  mode: 'pasta'
},
{
  id: 'chicken-skillet',
  emoji: '🍗',
  name: 'Chicken vegetable skillet',
  anchors: ['chicken'],
  ingredients: ['chicken', 'potato', 'tomato', 'onion', 'spinach', 'mushroom', 'capsicum', 'peas', 'cauliflower', 'ginger', 'garlic'],
  diet: 'nonveg',
  cost: 95,
  nutrition: [390, 30, 27, 15],
  serves: 2,
  difficulty: 2,
  prep: 10,
  cook: 22,
  mode: 'meat'
},
{
  id: 'fish-skillet',
  emoji: '🐟',
  name: 'Quick fish masala',
  anchors: ['fish'],
  ingredients: ['fish', 'tomato', 'onion', 'spinach', 'capsicum', 'peas', 'ginger', 'garlic', 'lemon'],
  diet: 'nonveg',
  cost: 88,
  nutrition: [330, 26, 19, 15],
  serves: 2,
  difficulty: 2,
  prep: 8,
  cook: 16,
  mode: 'meat'
},
{
  id: 'prawn-skillet',
  emoji: '🍤',
  name: 'Prawn and capsicum stir-fry',
  anchors: ['prawns'],
  ingredients: ['prawns', 'capsicum', 'onion', 'tomato', 'spinach', 'peas', 'green chilli', 'ginger', 'garlic', 'lemon'],
  diet: 'nonveg',
  cost: 99,
  nutrition: [270, 27, 17, 11],
  serves: 2,
  difficulty: 1,
  prep: 7,
  cook: 10,
  mode: 'meat'
},
{
  id: 'coconut-pulse',
  emoji: '🥥',
  name: 'Pulse curry',
  anchors: ['chickpeas', 'rajma', 'moong dal'],
  ingredients: ['coconut milk', 'chickpeas', 'rajma', 'moong dal', 'spinach', 'tomato', 'onion', 'cauliflower', 'brinjal'],
  diet: 'veg',
  cost: 62,
  nutrition: [310, 12, 35, 13],
  serves: 2,
  difficulty: 2,
  prep: 8,
  cook: 18,
  mode: 'simmer'
}
];

const nonVegItems = new Set(groups['Non-veg ingredients']);
const recipeMeta = {
  garden: {
    diet: 'nonveg',
    serves: 2,
    difficulty: 1,
    cost: 55,
    nutrition: {
      calories: 320,
      protein: 16,
      carbs: 34,
      fat: 13
    }
  },
  rice: {
    diet: 'both',
    serves: 2,
    difficulty: 1,
    cost: 42,
    nutrition: {
      calories: 290,
      protein: 9,
      carbs: 48,
      fat: 7
    }
  },
  pasta: {
    diet: 'veg',
    serves: 2,
    difficulty: 1,
    cost: 58,
    nutrition: {
      calories: 360,
      protein: 13,
      carbs: 55,
      fat: 11
    }
  },
  soup: {
    diet: 'veg',
    serves: 3,
    difficulty: 1,
    cost: 38,
    nutrition: {
      calories: 190,
      protein: 8,
      carbs: 31,
      fat: 5
    }
  },
  tacos: {
    diet: 'veg',
    serves: 2,
    difficulty: 2,
    cost: 62,
    nutrition: {
      calories: 340,
      protein: 15,
      carbs: 48,
      fat: 10
    }
  },
  hash: {
    diet: 'both',
    serves: 2,
    difficulty: 1,
    cost: 48,
    nutrition: {
      calories: 310,
      protein: 14,
      carbs: 38,
      fat: 11
    }
  },
  curry: {
    diet: 'veg',
    serves: 3,
    difficulty: 2,
    cost: 52,
    nutrition: {
      calories: 330,
      protein: 14,
      carbs: 39,
      fat: 14
    }
  },
  'broccoli-bake': {
    diet: 'veg',
    serves: 3,
    difficulty: 2,
    cost: 64,
    nutrition: {
      calories: 370,
      protein: 17,
      carbs: 49,
      fat: 12
    }
  },
  'chicken-curry': {
    diet: 'nonveg',
    serves: 3,
    difficulty: 2,
    cost: 105,
    nutrition: {
      calories: 410,
      protein: 32,
      carbs: 35,
      fat: 16
    }
  },
  'fish-curry': {
    diet: 'nonveg',
    serves: 3,
    difficulty: 2,
    cost: 98,
    nutrition: {
      calories: 390,
      protein: 27,
      carbs: 24,
      fat: 21
    }
  },
  'prawn-stir-fry': {
    diet: 'nonveg',
    serves: 2,
    difficulty: 1,
    cost: 110,
    nutrition: {
      calories: 280,
      protein: 29,
      carbs: 16,
      fat: 12
    }
  }
};
extras.forEach(r => {
  recipes.push({
    ...r,
    description: 'A flexible Indian-inspired recipe made only with the ingredients selected from your basket.',
    ahead: 'No advance prep is needed beyond preparing the selected ingredients.',
    time: r.prep + r.cook
  });
  recipeMeta[r.id] = {
    diet: r.diet,
    serves: r.serves,
    difficulty: r.difficulty,
    cost: r.cost,
    nutrition: {
      calories: r.nutrition[0],
      protein: r.nutrition[1],
      carbs: r.nutrition[2],
      fat: r.nutrition[3]
    }
  };
  recipeAnchors[r.id] = r.anchors
});
const ingredientValue = {
  eggs: 10,
  chicken: 36,
  fish: 32,
  prawns: 42,
  paneer: 18,
  chickpeas: 9,
  rajma: 8,
  'moong dal': 7,
  spinach: 8,
  methi: 6,
  cabbage: 5,
  tomato: 6,
  carrot: 5,
  onion: 4,
  potato: 5,
  mushroom: 12,
  cauliflower: 8,
  capsicum: 8,
  brinjal: 7,
  okra: 8,
  peas: 6,
  'green chilli': 2,
  rice: 9,
  poha: 7,
  roti: 5,
  bread: 5,
  pasta: 12,
  curd: 7,
  milk: 6,
  cheese: 10,
  garlic: 2,
  ginger: 3,
  cumin: 1,
  turmeric: 1,
  'garam masala': 2,
  'red chilli powder': 1,
  'mustard seeds': 1,
  'coconut milk': 9,
  lemon: 3,
  coriander: 3,
  mint: 3,
  'curry leaves': 2,
  tofu: 10
};
const tips = [{
  title: 'Almost past its prime?',
  body: 'Wilted greens, soft tomatoes and day-old bread are perfect for cooking. Add them to a skillet, soup or sauce and give them another chance.'
}, {
  title: 'Give greens a drink',
  body: 'Trim the stems of leafy greens and stand them in a glass of water in the fridge. Use a loose bag over the leaves to keep them fresh longer.'
}, {
  title: 'Wilted greens still work',
  body: 'Soft spinach, kale and herbs are great stirred into soups, sauces, eggs or fried rice. Save crisp leaves for salads.'
}, {
  title: 'Store herbs like flowers',
  body: 'Stand tender herbs in a jar with a little water, cover loosely and refrigerate. Change the water every couple of days.'
}, {
  title: 'Freeze ripe fruit',
  body: 'Peel and slice ripe bananas or berries before freezing. They make easy smoothies and baking add-ins.'
}, {
  title: 'Refresh stale bread',
  body: 'Sprinkle bread lightly with water and warm it in the oven for a few minutes. Or turn it into croutons, crumbs or toast.'
}, {
  title: 'Keep mushrooms dry',
  body: 'Store mushrooms in a paper bag in the fridge. Add them to a hot pan so they brown instead of steaming.'
}, {
  title: 'Use stems and tops',
  body: 'Broccoli stems, carrot tops and herb stalks can add flavor to soups, stocks, pesto and stir-fries.'
}, {
  title: 'Label the leftovers',
  body: 'Write the date on containers before they go in the fridge. Put older portions at the front so they get used first.'
}, {
  title: 'Freeze tomato extras',
  body: 'Chop ripe tomatoes and freeze them flat in a bag. Use them later in soups, sauces and curries.'
}];
let tipIndex = 0;
let selected = new Set(),
  threeMode = false,
  useSoon = new Set(),
  resultSort = 'match',
  visibleRecipes = [];
const $ = s => document.querySelector(s);
const escapeHTML = s => String(s).replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));

function drawIngredients() {
  const host = $('#ingredient-groups');
  if (!host) return;
  host.innerHTML = '';
  Object.entries(groups).forEach(([title, items]) => {
    const section = document.createElement('section');
    if (title === 'Non-veg ingredients') section.className = 'nonveg-group';
    section.innerHTML = `<div class="group-title">${title}</div><div class="ingredient-list"></div>`;
    const list = section.querySelector('.ingredient-list');
    items.forEach(item => list.append(makeChip(item)));
    host.append(section)
  });
  updateSelection()
}

function makeChip(item) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'ingredient-chip' + (selected.has(item) ? ' selected' : '') + (nonVegItems.has(item) ? ' nonveg-chip' : '');
  b.textContent = item;
  b.setAttribute('aria-pressed', selected.has(item));
  b.addEventListener('click', () => {
    if (selected.has(item)) {
      selected.delete(item);
      useSoon.delete(item)
    } else if (threeMode && selected.size >= 3) {
      $('#selection-message').textContent = 'Three-ingredient mode allows exactly three. Remove one to choose another.';
      return
    } else selected.add(item);
    b.classList.toggle('selected', selected.has(item));
    b.setAttribute('aria-pressed', selected.has(item));
    updateSelection()
  });
  return b
}

function renderUseSoon() {
  const panel = $('#use-soon-panel'),
    list = $('#use-soon-list');
  if (!selected.size) {
    panel.hidden = true;
    list.innerHTML = '';
    return
  }
  panel.hidden = false;
  list.innerHTML = '';
  [...selected].forEach(item => {
    const label = document.createElement('label');
    label.className = 'use-soon-option';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = useSoon.has(item);
    checkbox.addEventListener('change', () => {
      checkbox.checked ? useSoon.add(item) : useSoon.delete(item);
      renderResults()
    });
    label.append(checkbox, document.createTextNode(item));
    list.append(label)
  })
}

function renderCompatibleSuggestions() {
  const panel = $('#compatible-panel');
  if (!threeMode || selected.size !== 2) {
    panel.hidden = true;
    return
  }
  const compatible = recipes.filter(r => isDietAllowed(r) && [...selected].every(i => r.ingredients.map(normalize).includes(normalize(i)))).flatMap(r => r.ingredients).filter(i => !selected.has(i) && !pantryStaples.has(normalize(i)) && Object.values(groups).flat().some(item => normalize(item) === normalize(i)));
  const unique = [...new Set(compatible)].slice(0, 4);
  if (!unique.length) {
    panel.hidden = true;
    return
  }
  panel.hidden = false;
  $('#compatible-message').innerHTML = `If one of these is already in your kitchen, it could complete a recipe match:<div class="compatible-options">${unique.map(i => `<button type="button" data-compatible="${escapeHTML(i)}">＋ ${escapeHTML(i)}</button>`).join('')}</div><small>No pressure to add anything you don't already have.</small>`;
}

function updateSelection() {
  const count = $('#selected-count');
  if (!count) return;
  count.textContent = `${selected.size} selected`;
  $('#three-mode-toggle').checked = threeMode;
  $('#selection-message').textContent = threeMode ? (selected.size === 3 ? 'Exactly three ingredients ready. Find a recipe that uses all three.' : `${selected.size} of 3 selected — choose exactly three.`) : (selected.size ? `${selected.size} ingredient${selected.size === 1 ? '' : 's'} ready to use.` : 'Your basket is empty.');
  $('#find-recipe').disabled = threeMode ? selected.size !== 3 : !selected.size;
  renderUseSoon();
  renderCompatibleSuggestions()
}

function normalize(s) {
  return s.trim().toLowerCase().replace(/s$/, '')
}

function matchScore(recipe) {
  const chosen = [...selected].map(normalize);
  return recipe.ingredients.reduce((n, i) => n + (chosen.includes(normalize(i)) ? 1 : 0), 0)
}

function isDietAllowed(recipe) {
  const type = recipeMeta[recipe.id].diet,
    hasNonVeg = [...selected].some(item => nonVegItems.has(item));
  return hasNonVeg ? type === 'nonveg' || type === 'both' : type === 'veg' || type === 'both'
}

function calculateZeroWasteScore(recipeIngredients, basket = [...selected]) {
  const eligible = basket.filter(item => !pantryStaples.has(normalize(item))),
    recipeSet = new Set(recipeIngredients.map(normalize)),
    used = eligible.filter(item => recipeSet.has(normalize(item)));
  return {
    used,
    total: eligible.length,
    percent: eligible.length ? Math.round((used.length / eligible.length * 100) / 5) * 5 : 0
  }
}

function estimateMealCost(recipe, used) {
  return Math.round(recipe.meta.cost + used.reduce((n, item) => n + (ingredientValue[item] || 0), 0))
}

function matchingRecipes() {
  const chosen = [...selected].filter(item => !pantryStaples.has(normalize(item)));
  return recipes.flatMap(base => {
    if (!isDietAllowed(base) || !recipeAnchors[base.id].some(item => chosen.some(value => normalize(value) === normalize(item)))) return [];
    const ingredients = chosen.filter(item => base.ingredients.some(value => normalize(value) === normalize(item)));
    if (!ingredients.length || (threeMode && (selected.size !== 3 || ingredients.length !== 3))) return [];
    const name = variantName(base.id, ingredients),
      nonStapleIngredients = ingredients;
    const steps = variantSteps(base.id, ingredients);
    const ahead = base.id === 'rice' || base.id === 'rice-tawa' ? (ingredients.some(i => normalize(i) === 'rice') ? 'Use already-cooked rice, or cook it before starting.' : 'Rinse the selected poha before cooking.') : base.id === 'pasta' || base.id === 'veg-pasta' ? 'Cook the selected pasta before making the masala.' : ingredients.some(i => ['chicken', 'fish', 'prawns'].includes(normalize(i))) ? 'Keep raw meat or seafood chilled until cooking and handle it separately.' : 'No advance prep is needed beyond preparing the selected ingredients.';
    const waste = calculateZeroWasteScore(nonStapleIngredients, chosen);
    return [{
      ...base,
      name,
      description: `A practical Indian-inspired meal using only ${ingredients.join(', ')} from your selection.`,
      ahead,
      ingredients: nonStapleIngredients,
      steps,
      meta: recipeMeta[base.id],
      score: waste.used.length,
      zeroWasteUsed: waste.used.length,
      zeroWasteTotal: waste.total,
      zeroWastePercent: waste.percent
    }];
  });
}

function variantName(id, items) {
  const has = x => items.some(i => normalize(i) === x);
  switch (id) {
    case 'veg-skillet':
      return 'Everyday sabzi skillet';
    case 'dal-bowl':
      return 'Quick dal and vegetable bowl';
    case 'paneer-bhurji':
      return 'Paneer bhurji';
    case 'tofu-bhurji':
      return 'Tofu masala skillet';
    case 'egg-bhurji':
      return 'Masala egg bhurji';
    case 'poha-tawa':
      return 'Vegetable poha';
    case 'rice-tawa':
      return 'Leftover rice tawa pulao';
    case 'roti-wrap':
      return 'Leftover roti masala wrap';
    case 'bread-toast':
      return 'Masala leftover toast';
    case 'veg-pasta':
      return 'Quick desi vegetable pasta';
    case 'chicken-skillet':
      return 'Chicken vegetable skillet';
    case 'fish-skillet':
      return 'Quick fish masala';
    case 'prawn-skillet':
      return 'Prawn and capsicum stir-fry';
    case 'coconut-pulse':
      return has('coconut milk') ? 'Coconut pulse curry' : 'Pulse curry';
    case 'garden':
      return 'Masala egg skillet';
    case 'rice':
      return has('poha') ? 'Masala poha skillet' : 'Masala leftover rice';
    case 'pasta':
      return 'Desi masala pasta';
    case 'soup':
      return 'No-waste sabzi soup';
    case 'tacos':
      return items.some(i => normalize(i) === 'roti') ? 'Chana masala wraps' : 'Chana masala bowl';
    case 'hash':
      return has('potato') && has('methi') ? 'Aloo methi skillet' : has('potato') ? 'Masala potato skillet' : 'Methi masala skillet';
    case 'curry':
      return has('chickpeas') ? 'Chana masala curry' : 'Rajma masala curry';
    case 'broccoli-bake':
      return has('paneer') ? 'Paneer vegetable pulao' : 'Vegetable pulao';
    case 'chicken-curry':
      return 'Chicken masala';
    case 'fish-curry':
      return 'Fish curry';
    case 'prawn-stir-fry':
      return 'Prawn masala stir-fry';
    default:
      return 'Indian-style leftover meal'
  }
}

function variantSteps(id, items) {
  const list = items.join(', '),
    protein = ['eggs', 'chicken', 'fish', 'prawns'].some(x => items.some(i => normalize(i) === x));
  const prep = items.some(i => ['spinach', 'methi', 'coriander', 'mint', 'cabbage'].includes(normalize(i))) ? 'Wash and roughly chop the selected ingredients.' : 'Rinse and prepare the selected ingredients.';
  const hasRice = items.some(i => normalize(i) === 'rice'),
    hasPoha = items.some(i => normalize(i) === 'poha');
  const cook = id === 'rice' || id === 'broccoli-bake' || id === 'rice-tawa' || id === 'poha-tawa' ? `Warm a little oil and cook the selected ingredients. Fold in the selected ${hasRice ? 'rice' : hasPoha ? 'poha' : 'grain'} with a splash of water.` : (id === 'pasta' || id === 'veg-pasta') ? 'Cook the selected pasta. Warm a little oil, cook the selected ingredients, then toss together with a splash of pasta water.' : id === 'soup' || id === 'curry' || id === 'chicken-curry' || id === 'fish-curry' || id === 'dal-bowl' || id === 'coconut-pulse' ? 'Warm a little oil, add the selected ingredients and enough water to simmer until tender and cooked through.' : 'Warm a little oil in a pan and cook the selected ingredients together, stirring until tender and cooked through.';
  return [{
    title: 'Prepare what you have',
    body: `${prep} This recipe uses only: ${list}.`,
    timer: 4
  }, {
    title: 'Cook the ingredients',
    body: `${cook}${protein ? ' Make sure any selected eggs, meat, or seafood are fully cooked.' : ''}`,
    timer: 12
  }, {
    title: 'Season and serve',
    body: 'Add salt and any kitchen-essential spices to taste, then serve warm. Only the ingredients listed for this recipe are used, plus assumed kitchen staples such as salt, oil, water and common spices.',
    timer: 3
  }]
}

function renderResults() {
  const resultsEl = $('#results');
  if (resultsEl.hidden) return;
  const candidates = matchingRecipes();
  visibleRecipes = candidates;
  const sortOptions = [
    ['match', 'Best match'],
    ['nutrition', 'Nutrition · protein'],
    ['cost', 'Lowest cost'],
    ['size', 'Smallest batch'],
    ['prep', 'Prep time'],
    ['cook', 'Cooking time'],
    ['difficulty', 'Difficulty'],
    ['expiry', 'Use soon first']
  ];
  const shown = [...candidates];
  shown.sort((a, b) => {
    const scoreA = a.score / selected.size,
      scoreB = b.score / selected.size;
    switch (resultSort) {
      case 'nutrition':
        return b.meta.nutrition.protein / b.meta.nutrition.calories - a.meta.nutrition.protein / a.meta.nutrition.calories;
      case 'cost': {
        const ca = estimateMealCost(a, [...selected].filter(i => a.ingredients.map(normalize).includes(normalize(i)))),
          cb = estimateMealCost(b, [...selected].filter(i => b.ingredients.map(normalize).includes(normalize(i))));
        return ca - cb
      }
      case 'size':
        return a.meta.serves - b.meta.serves;
      case 'prep':
        return a.prep - b.prep;
      case 'cook':
        return a.cook - b.cook;
      case 'difficulty':
        return a.meta.difficulty - b.meta.difficulty;
      case 'expiry': {
        const ea = [...useSoon].filter(i => a.ingredients.map(normalize).includes(normalize(i))).length,
          eb = [...useSoon].filter(i => b.ingredients.map(normalize).includes(normalize(i))).length;
        return eb - ea || scoreB - scoreA
      }
      default:
        return scoreB - scoreA
    }
  });
  const controls = `<div class="result-toolbar"><div><div class="eyebrow">STEP 02 · YOUR RECIPE MATCHES</div><h2>${shown.length ? `${shown.length} recipe${shown.length === 1 ? '' : 's'} to explore` : 'No recipes found'}</h2></div><div class="result-selects"><label>Sort by<select id="sort-results">${sortOptions.map(([v, l]) => `<option value="${v}" ${resultSort === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label></div></div>`;
  if (!candidates.length) {
    resultsEl.innerHTML = `${controls}<div class="empty-state"><div class="big-emoji">🧺</div><div class="eyebrow">${threeMode ? 'THREE-INGREDIENT CHECK' : 'NO MATCH JUST YET'}</div><h3>${threeMode ? 'No recipe uses all three ingredients yet.' : 'We haven’t got a recipe for that mix.'}</h3><p>${threeMode ? 'Your selection is ' + [...selected].map(escapeHTML).join(', ') + '. The sample library has no recipe containing the full trio, so it will not show a partial match. Try another combination.' : 'Try a different combination from the available ingredients.'}</p></div>`
  } else {
    const hasNonVeg = [...selected].some(item => nonVegItems.has(item));
    const cards = shown.map(r => {
      const pct = r.zeroWastePercent,
        used = [...selected].filter(i => r.ingredients.map(normalize).includes(normalize(i))),
        saved = used.reduce((n, i) => n + (ingredientValue[i] || 0), 0),
        mealCost = estimateMealCost(r, used),
        unused = [...selected].filter(i => !r.ingredients.map(normalize).includes(normalize(i))),
        stronger = candidates.find(other => other.id !== r.id && other.score > r.score),
        isNonVeg = r.meta.diet === 'nonveg' || (r.meta.diet === 'both' && hasNonVeg),
        dietLabel = isNonVeg ? 'Non-veg' : r.meta.diet === 'both' ? 'Veg · egg optional' : 'Vegetarian',
        difficulty = ['', 'Easy', 'Medium', 'Hard'][r.meta.difficulty],
        pace = r.prep + r.cook <= 15 ? 'Instant' : r.prep + r.cook <= 20 ? 'Fast' : r.prep + r.cook <= 35 ? 'Medium' : 'Lengthy';
      const advice = stronger ? `For a higher zero-waste score, try ${stronger.name}; it uses more of your selected ingredients.` : unused.length ? `This recipe uses only the selected ingredients shown. Save ${unused.map(escapeHTML).join(', ')} for another meal.` : 'Lovely match: this recipe uses all the ingredients you selected.';
      return `<article class="recipe-card result-recipe ${isNonVeg ? 'nonveg-card' : 'veg-card'}"><div class="recipe-art" aria-hidden="true">${r.emoji}</div><div class="recipe-info"><div class="recipe-topline"><div class="recipe-main-heading"><div class="recipe-kickers"><span class="eyebrow">${threeMode ? 'ALL THREE INCLUDED' : 'ONLY YOUR SELECTED INGREDIENTS'}</span></div><h3>${r.name}</h3><p>${r.description}</p><div class="recipe-meta"><span>Prep: <b>${r.prep} min</b></span><span>Cook: <b>${r.cook} min</b></span><span>Serves: <b>${r.meta.serves}</b></span><span>Difficulty: <b>${difficulty}</b></span><span>Time: <b>${pace}</b></span></div></div><aside class="recipe-summary"><span class="diet-badge ${isNonVeg ? 'nonveg-badge' : 'veg-badge'}">${dietLabel}</span><div class="nutrition-panel"><div class="nutrition-heading"><strong>Estimated nutrition</strong><small>per serving estimate</small></div><div class="nutrition-values"><span><b>${r.meta.nutrition.calories}</b> kcal</span><span><b>${r.meta.nutrition.protein}g</b> protein</span><span><b>${r.meta.nutrition.carbs}g</b> carbs</span><span><b>${r.meta.nutrition.fat}g</b> fat</span></div></div><div class="economics-row"><span><small>Estimated cost per meal</small><b>₹${mealCost}</b></span><span><small>Estimated money saved</small><b>₹${saved}</b></span></div></aside></div><div class="recipe-detail"><strong>Before you start</strong><p>${r.ahead}</p><strong>Ingredients</strong><p>${r.ingredients.join(' · ')}</p><strong>Steps</strong><ol>${r.steps.map(s => `<li>${s.title}: ${s.body}</li>`).join('')}</ol></div><div class="score-box"><span class="score">🌱 Zero-waste score: ${pct}%</span><span class="score-math">${r.zeroWasteUsed} of ${r.zeroWasteTotal} selected ingredient${r.zeroWasteTotal === 1 ? '' : 's'} used · ${r.zeroWasteUsed} ÷ ${r.zeroWasteTotal} × 100 ≈ ${pct}%</span><span class="score-advice">${advice}</span></div><div class="recipe-bottom"><button class="button button-dark" data-cook="${r.id}">Cook with me <span>→</span></button></div></div></article>`
    }).join('');
    resultsEl.innerHTML = `${controls}<div class="recipe-results">${cards}</div>`;
    resultsEl.querySelectorAll('[data-cook]').forEach(b => b.onclick = () => openCook(visibleRecipes.find(r => r.id === b.dataset.cook)))
  }
  $('#sort-results').onchange = e => {
    resultSort = e.target.value;
    renderResults()
  };
  resultsEl.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

function findRecipe() {
  if (threeMode && selected.size !== 3) {
    $('#selection-message').textContent = 'Choose exactly three ingredients before finding a recipe.';
    return
  }
  resultSort = 'match';
  $('#results').hidden = false;
  renderResults()
}
let currentRecipe = null,
  currentStep = 0,
  timerInterval = null,
  remaining = 0;

function openCook(recipe) {
  currentRecipe = recipe;
  currentStep = 0;
  renderCook();
  $('#cook-dialog').showModal()
}

function renderCook() {
  clearInterval(timerInterval);
  const step = currentRecipe.steps[currentStep],
    last = currentStep === currentRecipe.steps.length - 1;
  $('#cook-content').innerHTML = `<div class="cook-inner"><div class="dialog-top"><div class="eyebrow">${currentRecipe.emoji} COOKING MODE</div><button class="icon-button" id="close-cook" aria-label="Close">×</button></div><div class="step-track">${currentRecipe.steps.map((_, i) => `<span class="${i <= currentStep ? 'done' : ''}"></span>`).join('')}</div><div class="step-label">STEP ${currentStep + 1} OF ${currentRecipe.steps.length}</div><h2>${last ? 'Ready to enjoy!' : step.title}</h2><p>${last ? 'Lovely work—you gave good ingredients another chance. Plate it up and enjoy your rescued meal.' : step.body}</p>${!last ? `<div class="timer-box"><span>Optional kitchen timer</span><strong id="timer-display">${String(step.timer).padStart(2, '0')}:00</strong><button class="button button-light" id="timer-toggle">Start timer</button></div>` : '<div class="timer-box"><span>🌱 Food saved, meal made</span><strong>Nice work!</strong></div>'}<div class="dialog-actions"><button class="button button-outline" id="back-step" ${currentStep === 0 ? 'disabled' : ''}>Back</button><button class="button button-dark" id="next-step">${last ? 'Finish' : 'Next step →'}</button></div></div>`;
  $('#close-cook').onclick = () => $('#cook-dialog').close();
  $('#back-step').onclick = () => {
    if (currentStep > 0) {
      currentStep--;
      renderCook()
    }
  };
  $('#next-step').onclick = () => {
    if (last) {
      $('#cook-dialog').close();
      return
    }
    currentStep++;
    renderCook()
  };
  if (!last) $('#timer-toggle').onclick = toggleTimer
}

function toggleTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    $('#timer-toggle').textContent = 'Resume timer';
    return
  }
  if (!remaining) remaining = currentRecipe.steps[currentStep].timer * 60;
  $('#timer-toggle').textContent = 'Pause';
  timerInterval = setInterval(() => {
    remaining--;
    const mm = String(Math.floor(remaining / 60)).padStart(2, '0'),
      ss = String(remaining % 60).padStart(2, '0');
    $('#timer-display').textContent = `${mm}:${ss}`;
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      $('#timer-toggle').textContent = 'Start again';
      $('#timer-display').textContent = 'Ding!';
      remaining = 0
    }
  }, 1000)
}

function loadPreset(name) {
  const presets = {
    standard: {
      items: ['tomato', 'spinach', 'onion'],
      mode: false,
      note: 'Step 01 loaded: standard mode with a matching recipe.'
    },
    twist: {
      items: ['chickpeas', 'capsicum', 'onion'],
      mode: true,
      note: 'Step 02 loaded: exactly three ingredients; Chana masala bowl uses all three.'
    },
    nomatch: {
      items: ['okra', 'poha', 'milk'],
      mode: true,
      note: 'Step 03 loaded: three available ingredients with no recipe containing the full trio.'
    }
  };
  const preset = presets[name];
  threeMode = preset.mode;
  $('#three-mode-toggle').checked = threeMode;
  useSoon.clear();
  selected = new Set(preset.items);
  $('#results').hidden = true;
  drawIngredients();
  $('#judge-note').textContent = preset.note;
  findRecipe()
}

function showTip() {
  const tip = tips[tipIndex];
  $('#tip-title').textContent = tip.title;
  $('#tip-body').textContent = tip.body
}

function initHome() {
  if (!document.body.classList.contains('app-page')) return;
  $('#find-recipe').onclick = findRecipe;
  $('#three-mode-toggle').addEventListener('change', e => {
    if (e.target.checked && selected.size > 3) {
      e.target.checked = false;
      $('#selection-message').textContent = 'Remove ingredients until three or fewer are selected, then turn on 3-item mode.';
      return
    }
    threeMode = e.target.checked;
    $('#results').hidden = true;
    updateSelection()
  });
  document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => loadPreset(button.dataset.preset)));
  $('#compatible-panel').addEventListener('click', e => {
    const button = e.target.closest('[data-compatible]');
    if (!button) return;
    const item = button.dataset.compatible;
    if (selected.size === 2) {
      selected.add(item);
      drawIngredients()
    }
  });
  $('#cook-dialog').addEventListener('click', e => {
    if (e.target.id === 'cook-dialog') $('#cook-dialog').close()
  });
  $('#open-tips').onclick = () => {
    $('#tips-dialog').showModal();
    showTip()
  };
  $('#close-tips').onclick = () => $('#tips-dialog').close();
  $('#next-tip').onclick = () => {
    tipIndex = (tipIndex + 1) % tips.length;
    showTip()
  };
  $('#prev-tip').onclick = () => {
    tipIndex = (tipIndex + tips.length - 1) % tips.length;
    showTip()
  };
  $('#tips-dialog').addEventListener('click', e => {
    if (e.target.id === 'tips-dialog') $('#tips-dialog').close()
  });
  $('#intro-replay').onclick = restartIntro;
  $('#theme-toggle').onclick = () => {
    const enabled = document.body.classList.toggle('dark-mode');
    $('#theme-toggle').setAttribute('aria-pressed', String(enabled));
    $('#theme-toggle').setAttribute('aria-label', enabled ? 'Enable light mode' : 'Enable dark mode');
    $('#theme-toggle').querySelector('[aria-hidden="true"]').textContent = enabled ? '☀' : '☾'
  };
  drawIngredients()
}
initHome();

const introSteps = [{
  selector: '#theme-toggle',
  title: 'Set the look you prefer',
  text: 'Use this corner button to switch between light and dark themes. Your choice changes the page colors.'
},
{
  selector: '.how-strip',
  title: 'A simple three-step flow',
  text: 'Pick ingredients, explore a recipe match, then follow the cooking steps. The page keeps the process straightforward.'
},
{
  selector: '#judge-panel',
  title: 'Try the judge quick checks',
  text: 'These presets load ready-made examples: a standard match, the exact-three challenge, and a clear no-match case.'
},
{
  selector: '.ingredients-panel',
  title: 'Build your basket',
  text: 'Choose what you already have. Turn on 3-item mode beside the count to require exactly three ingredients. Salt, oil, water, and common spices are assumed.'
},
{
  selector: '#open-tips',
  title: 'Browse kitchen tips',
  text: 'Open short storage and cooking ideas whenever you need inspiration. Browse them freely with the previous and next buttons.'
},
{
  selector: '#find-recipe',
  title: 'Find and compare recipes',
  text: 'After selecting ingredients, choose this button. Results show matching recipes, prep and cook time, nutrition, cost, and a sort menu.'
}
];
let introIndex = 0,
  introNodes = null,
  introActive = false;

function restartIntro() {
  if (introActive) return;
  try {
    localStorage.removeItem('leftoverchef-intro-complete')
  } catch (error) { }
  startIntroIfFirstVisit()
}

function startIntroIfFirstVisit() {
  if (!document.body.classList.contains('app-page')) return;
  try {
    if (localStorage.getItem('leftoverchef-intro-complete') === 'yes') return
  } catch (error) { }
  const scrim = document.createElement('div');
  scrim.className = 'intro-scrims';
  scrim.innerHTML = '<div></div><div></div><div></div><div></div>';
  const focus = document.createElement('div');
  focus.className = 'intro-focus';
  focus.setAttribute('aria-hidden', 'true');
  const card = document.createElement('section');
  card.className = 'intro-card';
  card.setAttribute('role', 'dialog');
  card.setAttribute('aria-modal', 'true');
  card.setAttribute('aria-labelledby', 'intro-title');
  card.setAttribute('aria-describedby', 'intro-text');
  card.innerHTML = '<div class="intro-card-top"><span class="intro-progress"></span><button class="intro-skip" type="button">Skip tour</button></div><h2 id="intro-title"></h2><p id="intro-text"></p><div class="intro-card-actions"><button class="button button-outline intro-back" type="button">Back</button><button class="button button-dark intro-next" type="button">Next <span aria-hidden="true">→</span></button></div>';
  document.body.append(scrim, focus, card);
  introNodes = {
    scrim,
    focus,
    card
  };
  introActive = true;
  introIndex = 0;
  card.querySelector('.intro-skip').onclick = finishIntro;
  card.querySelector('.intro-back').onclick = () => showIntroStep(introIndex - 1);
  card.querySelector('.intro-next').onclick = () => introIndex === introSteps.length - 1 ? finishIntro() : showIntroStep(introIndex + 1);
  card.querySelector('.intro-next').focus({
    preventScroll: true
  });
  document.addEventListener('keydown', handleIntroKey);
  window.addEventListener('resize', positionIntroStep);
  window.addEventListener('scroll', positionIntroStep, {
    passive: true
  });
  showIntroStep(0);
}

function showIntroStep(index) {
  if (!introActive) return;
  introIndex = Math.max(0, Math.min(index, introSteps.length - 1));
  const step = introSteps[introIndex],
    target = document.querySelector(step.selector);
  if (!target) {
    if (introIndex < introSteps.length - 1) showIntroStep(introIndex + 1);
    else finishIntro();
    return
  }
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
  introNodes.card.querySelector('#intro-title').textContent = step.title;
  introNodes.card.querySelector('#intro-text').textContent = step.text;
  introNodes.card.querySelector('.intro-progress').textContent = `STEP ${String(introIndex + 1).padStart(2, '0')} / ${String(introSteps.length).padStart(2, '0')}`;
  introNodes.card.querySelector('.intro-back').hidden = introIndex === 0;
  introNodes.card.querySelector('.intro-next').innerHTML = introIndex === introSteps.length - 1 ? 'Finish <span aria-hidden="true">✓</span>' : 'Next <span aria-hidden="true">→</span>';
  positionIntroStep();
}

function positionIntroStep() {
  if (!introActive) return;
  const step = introSteps[introIndex],
    target = document.querySelector(step.selector);
  if (!target) return;
  const rect = target.getBoundingClientRect(),
    pad = 7,
    panes = introNodes.scrim.children;
  const top = Math.max(0, rect.top - pad),
    bottom = Math.min(innerHeight, rect.bottom + pad),
    left = Math.max(0, rect.left - pad),
    right = Math.min(innerWidth, rect.right + pad);
  Object.assign(panes[0].style, {
    left: '0px',
    top: '0px',
    width: `${innerWidth}px`,
    height: `${top}px`
  });
  Object.assign(panes[1].style, {
    left: '0px',
    top: `${bottom}px`,
    width: `${innerWidth}px`,
    height: `${Math.max(0, innerHeight - bottom)}px`
  });
  Object.assign(panes[2].style, {
    left: '0px',
    top: `${top}px`,
    width: `${left}px`,
    height: `${bottom - top}px`
  });
  Object.assign(panes[3].style, {
    left: `${right}px`,
    top: `${top}px`,
    width: `${Math.max(0, innerWidth - right)}px`,
    height: `${bottom - top}px`
  });
  Object.assign(introNodes.focus.style, {
    left: `${left}px`,
    top: `${top}px`,
    width: `${right - left}px`,
    height: `${bottom - top}px`
  });
  const card = introNodes.card,
    cardWidth = Math.min(360, innerWidth - 32);
  card.style.width = `${cardWidth}px`;
  const cardHeight = card.getBoundingClientRect().height || 190;
  let x = Math.max(16, Math.min(left, innerWidth - cardWidth - 16)),
    y = bottom + 16;
  if (y + cardHeight > innerHeight - 12) y = Math.max(12, top - cardHeight - 16);
  if (innerWidth < 600) x = Math.max(16, Math.min((innerWidth - cardWidth) / 2, innerWidth - cardWidth - 16));
  Object.assign(card.style, {
    left: `${x}px`,
    top: `${y}px`,
    width: `${cardWidth}px`
  });
}

function handleIntroKey(event) {
  if (!introActive) return;
  if (event.key === 'Tab') {
    const focusable = [...introNodes.card.querySelectorAll('button:not([hidden])')];
    if (event.shiftKey && document.activeElement === focusable[0]) {
      event.preventDefault();
      focusable.at(-1).focus()
    } else if (!event.shiftKey && document.activeElement === focusable.at(-1)) {
      event.preventDefault();
      focusable[0].focus()
    }
    return
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    finishIntro()
  } else if (event.key === 'ArrowRight' && introIndex < introSteps.length - 1) showIntroStep(introIndex + 1);
  else if (event.key === 'ArrowLeft' && introIndex > 0) showIntroStep(introIndex - 1)
}

function finishIntro() {
  if (!introActive) return;
  introActive = false;
  try {
    localStorage.setItem('leftoverchef-intro-complete', 'yes')
  } catch (error) { }
  document.removeEventListener('keydown', handleIntroKey);
  window.removeEventListener('resize', positionIntroStep);
  window.removeEventListener('scroll', positionIntroStep);
  introNodes.scrim.remove();
  introNodes.focus.remove();
  introNodes.card.remove();
  introNodes = null
}
startIntroIfFirstVisit();