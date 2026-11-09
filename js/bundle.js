const CATEGORIES = [
  {
    "id": "all",
    "name": "All Products (100)",
    "icon": "bi-grid-fill"
  },
  {
    "id": "groceries",
    "name": "Fresh Groceries",
    "icon": "bi-basket2-fill"
  },
  {
    "id": "pantry",
    "name": "Pantry & Staples",
    "icon": "bi-egg-fried"
  },
  {
    "id": "snacks",
    "name": "Snacks & Drinks",
    "icon": "bi-cup-straw"
  },
  {
    "id": "dorm",
    "name": "Dorm & Cleaning",
    "icon": "bi-house-heart-fill"
  },
  {
    "id": "study",
    "name": "Study & Work",
    "icon": "bi-pen-fill"
  }
];

const PRODUCTS = [
  {
    "id": "prod_1",
    "name": "Fresh Crisp Apples",
    "category": "groceries",
    "price": 180,
    "unit": "1 kg pack",
    "badge": "Fresh & Crisp",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    "description": "Sweet, juicy, and crisp premium apples. Perfect for communal healthy snacking."
  },
  {
    "id": "prod_2",
    "name": "Organic Cavendish Bananas",
    "category": "groceries",
    "price": 65,
    "unit": "per dozen (~1.2 kg)",
    "badge": "Organic",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    "description": "Fresh organic ripe bananas packed with potassium. Great for morning smoothies."
  },
  {
    "id": "prod_3",
    "name": "Farm-Fresh Brown Eggs (Dozen)",
    "category": "groceries",
    "price": 95,
    "unit": "12 large eggs",
    "badge": "Farm Fresh",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
    "description": "Rich in protein, farm-sourced brown eggs with golden yolks for dorm breakfasts."
  },
  {
    "id": "prod_4",
    "name": "Artisan Sourdough Loaf",
    "category": "groceries",
    "price": 140,
    "unit": "400g loaf",
    "badge": "Freshly Baked",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
    "description": "Naturally fermented, crusty on the outside and airy inside. Ideal for toast."
  },
  {
    "id": "prod_5",
    "name": "Fresh Full Cream Milk",
    "category": "groceries",
    "price": 68,
    "unit": "1 Litre pouch",
    "badge": "Daily Essential",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    "description": "Pasteurized full-cream milk, wholesome and rich for cereal, tea, or cooking."
  },
  {
    "id": "prod_6",
    "name": "Hass Avocados (2-Pack)",
    "category": "groceries",
    "price": 199,
    "unit": "Pack of 2",
    "badge": "Superfood",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    "description": "Creamy ripe Hass avocados loaded with healthy fats for salads and avocado toast."
  },
  {
    "id": "prod_7",
    "name": "Vine-Ripened Red Tomatoes",
    "category": "groceries",
    "price": 45,
    "unit": "1 kg pack",
    "badge": "Farm Fresh",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    "description": "Plump and juicy tomatoes with natural sweetness. Essential for gravies and salads."
  },
  {
    "id": "prod_8",
    "name": "Fresh Hydroponic Baby Spinach",
    "category": "groceries",
    "price": 55,
    "unit": "250g bunch",
    "badge": "Nutrient Rich",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    "description": "Washed and ready-to-cook tender baby spinach leaves full of iron and vitamins."
  },
  {
    "id": "prod_9",
    "name": "Sweet Alphonso Mangoes",
    "category": "groceries",
    "price": 320,
    "unit": "1 kg (approx 4-5 pcs)",
    "badge": "Seasonal Pick",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    "description": "Aromatic, golden-yellow Alphonso mangoes with rich, luscious tropical pulp."
  },
  {
    "id": "prod_10",
    "name": "Fresh Soft Malai Paneer",
    "category": "groceries",
    "price": 110,
    "unit": "200g vacuum block",
    "badge": "High Protein",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    "description": "Melt-in-mouth cottage cheese crafted from pure milk. Perfect for curries and tikka."
  },
  {
    "id": "prod_11",
    "name": "Seedless Red Crimson Grapes",
    "category": "groceries",
    "price": 140,
    "unit": "500g punnet",
    "badge": "Sweet & Juicy",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80",
    "description": "Plump crimson seedless grapes, bursting with refreshing natural sweetness."
  },
  {
    "id": "prod_12",
    "name": "Crisp English Cucumbers",
    "category": "groceries",
    "price": 40,
    "unit": "500g (2-3 pcs)",
    "badge": "Hydrating",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80",
    "description": "Thin-skinned, seedless crisp cucumbers great for sandwiches and cool raita."
  },
  {
    "id": "prod_13",
    "name": "Tri-Color Bell Peppers",
    "category": "groceries",
    "price": 60,
    "unit": "Pack of 3 (Red/Yellow/Green)",
    "badge": "Vitamin C",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    "description": "Crisp, colorful sweet capsicum trio to add vibrant crunch to pastas and stir-fries."
  },
  {
    "id": "prod_14",
    "name": "Fresh White Button Mushrooms",
    "category": "groceries",
    "price": 75,
    "unit": "200g tray",
    "badge": "Earth Flavor",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=600&q=80",
    "description": "Firm, clean white button mushrooms packed with umami. Great for sauteing."
  },
  {
    "id": "prod_15",
    "name": "Golden Sweet Corn Cobs",
    "category": "groceries",
    "price": 50,
    "unit": "Pack of 2 cobs",
    "badge": "Sweet & Tender",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    "description": "Juicy, naturally sweet American corn cobs. Ready for boiling or stovetop roasting."
  },
  {
    "id": "prod_16",
    "name": "Tender Crunchy Baby Carrots",
    "category": "groceries",
    "price": 55,
    "unit": "500g pouch",
    "badge": "Beta-Carotene",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    "description": "Sweet, bright orange tender carrots ideal for raw snacking with hummus."
  },
  {
    "id": "prod_17",
    "name": "Creamy Greek Dahi Yogurt",
    "category": "groceries",
    "price": 90,
    "unit": "400g tub",
    "badge": "Probiotic Rich",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    "description": "Velvety, strained thick curd packed with live active cultures and gut benefits."
  },
  {
    "id": "prod_18",
    "name": "Fresh Farm Strawberries",
    "category": "groceries",
    "price": 120,
    "unit": "250g box",
    "badge": "Berry Sweet",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
    "description": "Handpicked juicy red strawberries, sweet and slightly tangy for smoothies."
  },
  {
    "id": "prod_19",
    "name": "Juicy Yellow Lemons",
    "category": "groceries",
    "price": 35,
    "unit": "500g pack (~6-7 pcs)",
    "badge": "Citrus Boost",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
    "description": "Zesty, juice-rich thin-skinned lemons for refreshing lemonade, tea, and dressings."
  },
  {
    "id": "prod_20",
    "name": "Multigrain High-Fiber Bread",
    "category": "groceries",
    "price": 60,
    "unit": "400g sliced loaf",
    "badge": "Whole Wheat",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    "description": "Wholesome brown bread baked with oats, flax, and sesame seeds for sustained energy."
  },
  {
    "id": "prod_21",
    "name": "Premium Aged Basmati Rice",
    "category": "pantry",
    "price": 499,
    "unit": "5 kg bag",
    "badge": "Long Grain",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    "description": "Royally aromatic long-grain aged basmati rice for fragrant pulao and biryani."
  },
  {
    "id": "prod_22",
    "name": "Cold Pressed Extra Virgin Olive Oil",
    "category": "pantry",
    "price": 650,
    "unit": "500 ml bottle",
    "badge": "Heart Healthy",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    "description": "First cold pressed Mediterranean olive oil with subtle peppery notes for cooking."
  },
  {
    "id": "prod_23",
    "name": "Durum Wheat Rigatoni Pasta",
    "category": "pantry",
    "price": 125,
    "unit": "500g pack",
    "badge": "100% Semolina",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80",
    "description": "Authentic ridged Italian rigatoni made with durum wheat semolina that holds rich sauce."
  },
  {
    "id": "prod_24",
    "name": "Classic Basil Pasta Sauce",
    "category": "pantry",
    "price": 185,
    "unit": "350g jar",
    "badge": "Herb Infused",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80",
    "description": "Slow-simmered vine tomato sauce infused with aromatic fresh Genovese sweet basil."
  },
  {
    "id": "prod_25",
    "name": "Artisan Dark Roast Ground Coffee",
    "category": "pantry",
    "price": 380,
    "unit": "250g pack",
    "badge": "100% Arabica",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    "description": "Rich dark roast blend with undertones of dark chocolate and caramel. High caffeine."
  },
  {
    "id": "prod_26",
    "name": "Whole Grain Rolled Oats",
    "category": "pantry",
    "price": 160,
    "unit": "1 kg zip pouch",
    "badge": "High Fiber",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=600&q=80",
    "description": "Pure Australian rolled oats, perfect for overnight jars, oatmeal bowls, and baking."
  },
  {
    "id": "prod_27",
    "name": "Organic Toor Dal (Arhar Dal)",
    "category": "pantry",
    "price": 175,
    "unit": "1 kg pack",
    "badge": "Unpolished",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=600&q=80",
    "description": "Unpolished high-protein yellow pigeon peas for authentic dal tadka and sambar."
  },
  {
    "id": "prod_28",
    "name": "Sharbati Whole Wheat Atta",
    "category": "pantry",
    "price": 245,
    "unit": "5 kg bag",
    "badge": "Chakki Fresh",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    "description": "Stone-ground 100% Sharbati wheat flour for remarkably soft, puffed rotis."
  },
  {
    "id": "prod_29",
    "name": "Pure Desi Cow Ghee",
    "category": "pantry",
    "price": 490,
    "unit": "500 ml glass jar",
    "badge": "Traditional Bilona",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
    "description": "Aromatic clarified butter with a granular texture and unmistakable nutty aroma."
  },
  {
    "id": "prod_30",
    "name": "Mixed Herb & Chili Flakes Seasoning",
    "category": "pantry",
    "price": 135,
    "unit": "Twin 80g sprinklers",
    "badge": "Pizza & Pasta",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "description": "Oregano, thyme, rosemary, and fiery crushed red peppers for quick dorm seasoning."
  },
  {
    "id": "prod_31",
    "name": "Organic Yellow Moong Dal",
    "category": "pantry",
    "price": 145,
    "unit": "1 kg pouch",
    "badge": "Easy to Digest",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "description": "Nutritious split yellow lentils that cook quickly for light khichdi and soups."
  },
  {
    "id": "prod_32",
    "name": "White Kabuli Chana (Chickpeas)",
    "category": "pantry",
    "price": 165,
    "unit": "1 kg pack",
    "badge": "Protein Packed",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80",
    "description": "Large-grain premium chickpeas for hearty Punjabi chole, salads, and creamy hummus."
  },
  {
    "id": "prod_33",
    "name": "Pure Organic Turmeric Powder",
    "category": "pantry",
    "price": 70,
    "unit": "200g zipper pack",
    "badge": "High Curcumin",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    "description": "Vibrant golden turmeric with high natural curcumin for immune health and rich color."
  },
  {
    "id": "prod_34",
    "name": "Kashmiri Degi Mirch Powder",
    "category": "pantry",
    "price": 95,
    "unit": "200g pack",
    "badge": "Rich Crimson Color",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "description": "Mildly spicy sun-dried Kashmiri chilies that impart a stunning natural red curry tone."
  },
  {
    "id": "prod_35",
    "name": "Himalayan Pink Rock Salt",
    "category": "pantry",
    "price": 65,
    "unit": "1 kg jar",
    "badge": "84 Minerals",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=600&q=80",
    "description": "Unrefined, pristine pink rock salt crystals packed with essential trace minerals."
  },
  {
    "id": "prod_36",
    "name": "Raw Multi-Flora Forest Honey",
    "category": "pantry",
    "price": 220,
    "unit": "500g glass bottle",
    "badge": "Pure & Unfiltered",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    "description": "100% pure wild honey collected from Himalayan forest flora. Great natural sweetener."
  },
  {
    "id": "prod_37",
    "name": "Unrefined Brown Cane Sugar",
    "category": "pantry",
    "price": 90,
    "unit": "1 kg zip pack",
    "badge": "Molasses Rich",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80",
    "description": "Golden-brown unbleached sugar crystals rich in natural molasses for coffee and baking."
  },
  {
    "id": "prod_38",
    "name": "Dark Soy Sauce & Stir-Fry Glaze",
    "category": "pantry",
    "price": 135,
    "unit": "210 ml bottle",
    "badge": "Umami Rich",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80",
    "description": "Naturally brewed aged dark soy sauce providing deep color and savory umami depth."
  },
  {
    "id": "prod_39",
    "name": "Korean Spicy Ramen Multi-Pack",
    "category": "pantry",
    "price": 160,
    "unit": "Pack of 5 noodles",
    "badge": "Late Night Fuel",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "description": "Chewy wheat ramen noodles in a savory, fiery chili vegetable broth. Dorm favorite."
  },
  {
    "id": "prod_40",
    "name": "Roasted White Sesame Seeds (Til)",
    "category": "pantry",
    "price": 80,
    "unit": "200g jar",
    "badge": "Calcium Rich",
    "badgeColor": "light",
    "image": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    "description": "Lightly toasted nutty sesame seeds to garnish noodles, salads, and Asian rice bowls."
  },
  {
    "id": "prod_41",
    "name": "Sparkling Lemon Water (6-Pack)",
    "category": "snacks",
    "price": 180,
    "unit": "6 x 250 ml cans",
    "badge": "Zero Sugar",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    "description": "Crisp sparkling water infused with natural Italian lemon zest. Zero calories."
  },
  {
    "id": "prod_42",
    "name": "Bottled Cold Brew Concentrate",
    "category": "snacks",
    "price": 220,
    "unit": "500 ml bottle",
    "badge": "Ultra Smooth",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    "description": "Steeped for 18 hours in cold filtered water. Delivers an intensely smooth brew."
  },
  {
    "id": "prod_43",
    "name": "Sea Salt Kettle Potato Chips",
    "category": "snacks",
    "price": 75,
    "unit": "120g party pack",
    "badge": "Extra Crunchy",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    "description": "Thick cut batch-cooked russet potatoes seasoned with hand-harvested sea salt."
  },
  {
    "id": "prod_44",
    "name": "Roasted Salted Cashews & Almonds",
    "category": "snacks",
    "price": 349,
    "unit": "250g jar",
    "badge": "Keto Friendly",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
    "description": "Slow-roasted jumbo cashews and California almonds dusted in fine pink salt."
  },
  {
    "id": "prod_45",
    "name": "72% Dark Chocolate Almond Bar",
    "category": "snacks",
    "price": 145,
    "unit": "100g bar",
    "badge": "Fair Trade",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80",
    "description": "Velvety single-origin dark chocolate studded with roasted whole almond slivers."
  },
  {
    "id": "prod_46",
    "name": "Double Chocolate Chunk Cookies",
    "category": "snacks",
    "price": 120,
    "unit": "200g bakery box",
    "badge": "Oven Fresh",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
    "description": "Soft-baked decadent cookies loaded with melty milk and dark chocolate chips."
  },
  {
    "id": "prod_47",
    "name": "Assam Masala CTC Kadak Chai",
    "category": "snacks",
    "price": 195,
    "unit": "500g vacuum pouch",
    "badge": "Strong Aroma",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    "description": "Robust CTC tea leaves blended with cardamom, ginger, cloves, and cinnamon."
  },
  {
    "id": "prod_48",
    "name": "Peri-Peri Roasted Makhana (Foxnuts)",
    "category": "snacks",
    "price": 110,
    "unit": "100g pouch",
    "badge": "Guilt-Free",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "description": "Crisp roasted lotus seeds tossed in zesty African peri-peri herb seasoning."
  },
  {
    "id": "prod_49",
    "name": "Tender Coconut Water (Tetra Pack)",
    "category": "snacks",
    "price": 50,
    "unit": "200 ml pack",
    "badge": "Natural Electrolytes",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80",
    "description": "100% pure tender coconut water from coastal palms. Refreshingly hydrating."
  },
  {
    "id": "prod_50",
    "name": "All-Natural Crunchy Peanut Butter",
    "category": "snacks",
    "price": 260,
    "unit": "500g jar",
    "badge": "No Added Sugar",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
    "description": "Slow-ground roasted peanuts with crunchy bites. Pure protein, zero palm oil."
  },
  {
    "id": "prod_51",
    "name": "Kerala Pepper Banana Chips",
    "category": "snacks",
    "price": 80,
    "unit": "150g pouch",
    "badge": "Traditional Crunch",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80",
    "description": "Thinly sliced raw bananas fried in pure coconut oil and dusted with Malabar black pepper."
  },
  {
    "id": "prod_52",
    "name": "Salted California Roasted Pistachios",
    "category": "snacks",
    "price": 390,
    "unit": "250g zip pouch",
    "badge": "Naturally Opened",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    "description": "Jumbo Californian in-shell pistachios, dry-roasted with a hint of natural sea salt."
  },
  {
    "id": "prod_53",
    "name": "Fruit & Nut Omega Energy Trail Mix",
    "category": "snacks",
    "price": 210,
    "unit": "200g pouch",
    "badge": "Brain Food",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1536591375315-1b838b97d312?auto=format&fit=crop&w=600&q=80",
    "description": "Power-packed medley of almonds, cranberries, pumpkin seeds, walnuts, and raisins."
  },
  {
    "id": "prod_54",
    "name": "Sparkling Orange Pulp Juice Drink",
    "category": "snacks",
    "price": 70,
    "unit": "300 ml glass bottle",
    "badge": "Real Fruit Pulp",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    "description": "Bubbly citrus soda infused with real Valencia orange juice and bursty fruit pulp."
  },
  {
    "id": "prod_55",
    "name": "Organic Detox Green Tea Bags",
    "category": "snacks",
    "price": 175,
    "unit": "Box of 25 bags",
    "badge": "Antioxidant Boost",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    "description": "Certified organic whole leaf green tea combined with holy tulsi and lemongrass."
  },
  {
    "id": "prod_56",
    "name": "Movie Theater Butter Microwave Popcorn",
    "category": "snacks",
    "price": 60,
    "unit": "Pack of 3 bags",
    "badge": "Movie Night",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80",
    "description": "Fluffy whole grain corn kernels popping in golden melted butter aroma in 3 minutes."
  },
  {
    "id": "prod_57",
    "name": "Chocolate Hazelnut Cream Spread",
    "category": "snacks",
    "price": 260,
    "unit": "350g glass jar",
    "badge": "Rich & Creamy",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "description": "Smooth, decadent roasted hazelnut and cocoa spread. Heaven over toast and pancakes."
  },
  {
    "id": "prod_58",
    "name": "Oats & Honey Crunchy Granola Bars",
    "category": "snacks",
    "price": 150,
    "unit": "Box of 6 snack bars",
    "badge": "Pocket Energy",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80",
    "description": "Crispy whole grain oats baked with golden honey and roasted almonds for campus days."
  },
  {
    "id": "prod_59",
    "name": "Salted Caramel Pretzel Crisps",
    "category": "snacks",
    "price": 110,
    "unit": "120g pouch",
    "badge": "Sweet & Salty",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
    "description": "Flat, crunchy pretzel crackers drizzled with buttery salted caramel glaze."
  },
  {
    "id": "prod_60",
    "name": "Raw Apple Cider Vinegar with Mother",
    "category": "snacks",
    "price": 275,
    "unit": "500 ml bottle",
    "badge": "Raw & Unfiltered",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=600&q=80",
    "description": "Naturally fermented unpasteurized organic apple cider vinegar with live probiotic mother."
  },
  {
    "id": "prod_61",
    "name": "Kitchen Paper Towels (2 Rolls)",
    "category": "dorm",
    "price": 110,
    "unit": "Pack of 2 mega rolls",
    "badge": "Super Absorbent",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80",
    "description": "Tough, embossed 2-ply kitchen towel sheets that soak up spills without tearing."
  },
  {
    "id": "prod_62",
    "name": "Concentrated Liquid Laundry Detergent",
    "category": "dorm",
    "price": 280,
    "unit": "1 Litre bottle",
    "badge": "Tough on Stains",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80",
    "description": "High-efficiency liquid formula that penetrates stains and keeps clothes fresh and bright."
  },
  {
    "id": "prod_63",
    "name": "Citrus Dishwashing Liquid Gel",
    "category": "dorm",
    "price": 99,
    "unit": "500 ml bottle",
    "badge": "Grease Buster",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?auto=format&fit=crop&w=600&q=80",
    "description": "Active lime degreasing gel that strips stubborn cooking grease and eliminates odors."
  },
  {
    "id": "prod_64",
    "name": "Heavy Duty Drawstring Garbage Bags",
    "category": "dorm",
    "price": 140,
    "unit": "Pack of 30 bags (Large)",
    "badge": "Tear Proof",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80",
    "description": "Extra thick leak-resistant trash can liners with convenient drawstring closure handles."
  },
  {
    "id": "prod_65",
    "name": "Disinfectant Surface Cleaner Spray",
    "category": "dorm",
    "price": 135,
    "unit": "500 ml trigger spray",
    "badge": "99.9% Germ Kill",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80",
    "description": "Antibacterial spray for countertops, study desks, door handles, and laptop covers."
  },
  {
    "id": "prod_66",
    "name": "Antibacterial Handwash Gel Pump",
    "category": "dorm",
    "price": 85,
    "unit": "250 ml pump bottle",
    "badge": "Gentle on Skin",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1608248597359-56cb3e4811a2?auto=format&fit=crop&w=600&q=80",
    "description": "Moisturizing aloe vera hand wash pump that effectively cleanses while softening hands."
  },
  {
    "id": "prod_67",
    "name": "Multi-Surface Pine Floor Cleaner",
    "category": "dorm",
    "price": 160,
    "unit": "1 Litre bottle",
    "badge": "Fresh Pine Fragrance",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80",
    "description": "Powerful disinfectant floor cleaner that cuts grime and leaves a lingering forest scent."
  },
  {
    "id": "prod_68",
    "name": "Heavy-Duty Cellulose Dish Sponges",
    "category": "dorm",
    "price": 75,
    "unit": "Pack of 4 sponges",
    "badge": "Dual Sided",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "description": "Absorbent yellow cellulose sponge backed with green abrasive scouring pad for utensils."
  },
  {
    "id": "prod_69",
    "name": "Soft 3-Ply Facial Tissue Box",
    "category": "dorm",
    "price": 85,
    "unit": "Box of 100 pulls",
    "badge": "Extra Soft",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    "description": "Gentle, virgin-pulp facial tissues ideal for study desk, colds, and quick touchups."
  },
  {
    "id": "prod_70",
    "name": "Pocket Hand Sanitizer Spray (75% Alcohol)",
    "category": "dorm",
    "price": 55,
    "unit": "100 ml pocket spray",
    "badge": "Rinse Free",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80",
    "description": "Fast-drying disinfectant mist that sanitizes hands in 5 seconds with zero stickiness."
  },
  {
    "id": "prod_71",
    "name": "Wooden Clothes Pegs / Clips",
    "category": "dorm",
    "price": 99,
    "unit": "Pack of 24 clips",
    "badge": "Natural Birch",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    "description": "Durable, rust-free birchwood laundry clips with strong galvanized steel springs."
  },
  {
    "id": "prod_72",
    "name": "Floral Fabric Softener Conditioner",
    "category": "dorm",
    "price": 220,
    "unit": "1 Litre bottle",
    "badge": "All-Day Freshness",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80",
    "description": "Anti-static fabric conditioner that gives bedsheets and towels heavenly softness."
  },
  {
    "id": "prod_73",
    "name": "Power Toilet Bowl Disinfectant Gel",
    "category": "dorm",
    "price": 115,
    "unit": "750 ml angled nozzle",
    "badge": "Limescale Buster",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80",
    "description": "Thick clinging blue formula that dissolves tough hard water stains and disinfects."
  },
  {
    "id": "prod_74",
    "name": "Multi-Utility Desk & Shelf Baskets",
    "category": "dorm",
    "price": 180,
    "unit": "Set of 3 baskets",
    "badge": "Space Saver",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    "description": "Stackable woven-style plastic storage crates to declutter cosmetics and dorm cables."
  },
  {
    "id": "prod_75",
    "name": "Extra Sticky Fabric Lint Roller",
    "category": "dorm",
    "price": 160,
    "unit": "Handle + 2 Refills",
    "badge": "Pet & Hair Clean",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    "description": "Removes lint, dust, and pet fur from blazers, blankets, and dark sweaters in seconds."
  },
  {
    "id": "prod_76",
    "name": "Quick-Drying Microfiber Bath Towel",
    "category": "dorm",
    "price": 320,
    "unit": "Large 70x140cm",
    "badge": "Ultra Compact",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    "description": "High-density microfiber towel that absorbs 4x its weight in water and dries in an hour."
  },
  {
    "id": "prod_77",
    "name": "Mosquito Repellent Liquid Refills",
    "category": "dorm",
    "price": 140,
    "unit": "Twin pack (90 nights)",
    "badge": "Deep Sleep Shield",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80",
    "description": "Standard plug-in vaporizing liquid refills for peaceful, bite-free hostel nights."
  },
  {
    "id": "prod_78",
    "name": "Stainless Steel Kitchen & Craft Scissors",
    "category": "dorm",
    "price": 95,
    "unit": "8-Inch ergonomic",
    "badge": "Multi-Purpose",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?auto=format&fit=crop&w=600&q=80",
    "description": "Ultra-sharp heavy duty scissors for cutting parcel tape, packaging, herbs, and paper."
  },
  {
    "id": "prod_79",
    "name": "Insulated Stainless Steel Water Bottle",
    "category": "dorm",
    "price": 349,
    "unit": "1 Litre leakproof",
    "badge": "24hr Cold / 12hr Hot",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    "description": "Double-walled vacuum insulated flask with powder coated matte sweat-proof finish."
  },
  {
    "id": "prod_80",
    "name": "Foldable Canvas Dorm Laundry Hamper",
    "category": "dorm",
    "price": 260,
    "unit": "55 Litre capacity",
    "badge": "Collapsible",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1545184180-25d471fe75eb?auto=format&fit=crop&w=600&q=80",
    "description": "Waterproof PE-coated canvas laundry basket with reinforced aluminum ring handles."
  },
  {
    "id": "prod_81",
    "name": "Gel Pen Smooth 0.5mm Pack",
    "category": "study",
    "price": 99,
    "unit": "Pack of 5 (Black/Blue)",
    "badge": "Quick Dry Ink",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1585336261026-77884ff36665?auto=format&fit=crop&w=600&q=80",
    "description": "Smudge-proof quick-drying micro point gel pens for high-speed lecture notes."
  },
  {
    "id": "prod_82",
    "name": "A5 Ruled Wirebound Spiral Notebooks",
    "category": "study",
    "price": 180,
    "unit": "Set of 3 (160 pgs each)",
    "badge": "70 GSM Paper",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "Sturdy water-resistant poly covers and thick ink-bleed proof lined paper."
  },
  {
    "id": "prod_83",
    "name": "Pastel Chisel Tip Highlighters",
    "category": "study",
    "price": 120,
    "unit": "Set of 6 pastel tones",
    "badge": "No Bleed Through",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80",
    "description": "Aesthetic soft pastel shades that emphasize key textbook formulas without straining eyes."
  },
  {
    "id": "prod_84",
    "name": "Self-Adhesive Neon Sticky Notes",
    "category": "study",
    "price": 80,
    "unit": "4 Pads (400 sheets total)",
    "badge": "Strong Adhesive",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    "description": "Bright neon 3x3 inch memo pads that stick securely to monitors and fridge doors."
  },
  {
    "id": "prod_85",
    "name": "Mechanical Pencils 0.7mm with Lead",
    "category": "study",
    "price": 90,
    "unit": "Pack of 3 + 2B Lead Tube",
    "badge": "Comfort Grip",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    "description": "Rubberized grip drafting mechanical pencils with extra dark polymer lead tubes."
  },
  {
    "id": "prod_86",
    "name": "Compact Metal Desktop Stapler & Pins",
    "category": "study",
    "price": 110,
    "unit": "Stapler + 1000 Pins",
    "badge": "Jam Free",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1585336261026-77884ff36665?auto=format&fit=crop&w=600&q=80",
    "description": "Sturdy steel mechanism desktop stapler with built-in staple remover and 1000 pins."
  },
  {
    "id": "prod_87",
    "name": "Standard 10-Digit Desktop Calculator",
    "category": "study",
    "price": 249,
    "unit": "Dual Power (Solar + Batt)",
    "badge": "Large LCD Display",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=600&q=80",
    "description": "Ergonomic tilted display calculator with tax calculation keys for accounting."
  },
  {
    "id": "prod_88",
    "name": "Minimalist Metal Mesh Pen Cup Holder",
    "category": "study",
    "price": 85,
    "unit": "Matte black metal mesh",
    "badge": "Desk Organizer",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "description": "Modern wire mesh desk cup that holds up to 35 pens, highlighters, and styluses."
  },
  {
    "id": "prod_89",
    "name": "Portable 10000mAh Power Bank",
    "category": "study",
    "price": 899,
    "unit": "Dual USB + Type-C Output",
    "badge": "22.5W Fast Charge",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=600&q=80",
    "description": "Slim lightweight pocket backup battery for marathon library study sessions."
  },
  {
    "id": "prod_90",
    "name": "Flexible USB LED Desk Reading Light",
    "category": "study",
    "price": 199,
    "unit": "Clip-on Gooseneck Lamp",
    "badge": "Eye Care Warm LED",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80",
    "description": "360-degree flexible gooseneck night study lamp with 3 touch brightness modes."
  },
  {
    "id": "prod_91",
    "name": "Permanent Chisel Tip Markers (4-Pack)",
    "category": "study",
    "price": 140,
    "unit": "Assorted 4 colors",
    "badge": "Waterproof Ink",
    "badgeColor": "danger",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
    "description": "Bold indelible permanent markers that write on cardboard boxes, plastic, and metal."
  },
  {
    "id": "prod_92",
    "name": "Stainless Steel Precision Scale (30cm)",
    "category": "study",
    "price": 45,
    "unit": "12-Inch steel ruler",
    "badge": "Metric & Imperial",
    "badgeColor": "secondary",
    "image": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
    "description": "Anti-bend stainless steel ruler with etched millimeter calibration for drafting."
  },
  {
    "id": "prod_93",
    "name": "Ergonomic Foldable Aluminum Laptop Stand",
    "category": "study",
    "price": 499,
    "unit": "6-Level height adjust",
    "badge": "Heat Dissipation",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&q=80",
    "description": "Sturdy aircraft-grade aluminum alloy laptop riser that prevents neck fatigue."
  },
  {
    "id": "prod_94",
    "name": "Extended Gaming & Desk Mousepad",
    "category": "study",
    "price": 299,
    "unit": "800 x 300 mm",
    "badge": "Non-Slip Base",
    "badgeColor": "dark",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    "description": "Spacious desk mat with micro-woven textured fabric and anti-fray stitched edges."
  },
  {
    "id": "prod_95",
    "name": "Heavy Duty 2-Hole Paper Puncher",
    "category": "study",
    "price": 160,
    "unit": "16-Sheet punch capacity",
    "badge": "Removable Waste Tray",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    "description": "Accurate centering guide hole punch for filing assignments into dorm ring binders."
  },
  {
    "id": "prod_96",
    "name": "Clear Book Covers & Tape Set",
    "category": "study",
    "price": 90,
    "unit": "10 Rolls + Mini Cutter",
    "badge": "Crystal Clear",
    "badgeColor": "light",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    "description": "Transparent adhesive book tape to preserve textbook covers and mend ripped pages."
  },
  {
    "id": "prod_97",
    "name": "32GB High-Speed USB 3.0 Flash Drive",
    "category": "study",
    "price": 320,
    "unit": "Metal body keychain",
    "badge": "Shockproof & Mini",
    "badgeColor": "primary",
    "image": "https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=600&q=80",
    "description": "Fast file transfer USB thumb drive with robust all-metal casing for keychains."
  },
  {
    "id": "prod_98",
    "name": "Adhesive Cable Clips & Cord Ties",
    "category": "study",
    "price": 110,
    "unit": "Pack of 20 clips",
    "badge": "Clutter-Free Desk",
    "badgeColor": "success",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "description": "Silicone cord clips with strong 3M adhesive backing to keep phone and laptop chargers organized."
  },
  {
    "id": "prod_99",
    "name": "Correction Tape & Precision Glue Pen",
    "category": "study",
    "price": 85,
    "unit": "Twin duo pack",
    "badge": "Instant Dry",
    "badgeColor": "warning",
    "image": "https://images.unsplash.com/photo-1585336261026-77884ff36665?auto=format&fit=crop&w=600&q=80",
    "description": "Tear-resistant white tape applicator that covers writing errors cleanly without drying time."
  },
  {
    "id": "prod_100",
    "name": "Ultra-Soft Noise Cancelling Earplugs",
    "category": "study",
    "price": 130,
    "unit": "Pack of 5 pairs in case",
    "badge": "34dB SNR Rating",
    "badgeColor": "info",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "description": "Hypoallergenic slow-rebound foam earplugs that block out roommate noise for deep focus."
  }
];


const STORAGE_PREFIX = 'cartshare_room_';
const USER_KEY = 'cartshare_current_user';
const ROOM_CODE_KEY = 'cartshare_active_room';
const BROADCAST_CHANNEL_NAME = 'cartshare_broadcast_channel';

let broadcastChannel = null;
try {
  if (typeof BroadcastChannel !== 'undefined') {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  }
} catch (e) {
  console.warn('BroadcastChannel not supported, falling back to storage events only.', e);
}

const subscribers = new Set();

function notifySubscribers(event) {
  subscribers.forEach(cb => {
    try {
      cb(event);
    } catch (err) {
      console.error('Error in subscriber callback:', err);
    }
  });
}

if (broadcastChannel) {
  broadcastChannel.onmessage = (event) => {
    if (event.data && event.data.type) {
      notifySubscribers(event.data);
    }
  };
}

window.addEventListener('storage', (event) => {
  if (event.key && event.key.startsWith(STORAGE_PREFIX)) {
    const roomCode = event.key.replace(STORAGE_PREFIX, '');
    let roomData = null;
    try {
      roomData = event.newValue ? JSON.parse(event.newValue) : null;
    } catch (e) {
      console.error('Failed to parse storage event payload:', e);
    }
    if (!roomData) {
      notifySubscribers({
        type: 'ROOM_DELETED',
        roomCode,
        source: 'storage-event'
      });
    } else {
      notifySubscribers({
        type: 'STORAGE_SYNC',
        roomCode,
        roomData,
        source: 'storage-event'
      });
    }
  }
});

const StorageService = {
  
  subscribe(callback) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },

  broadcast(message) {
    if (broadcastChannel) {
      try {
        broadcastChannel.postMessage(message);
      } catch (e) {
        console.warn('Broadcast postMessage failed:', e);
      }
    }
  },

  getCurrentUser() {
    try {
      const sessionUser = sessionStorage.getItem(USER_KEY);
      if (sessionUser) return JSON.parse(sessionUser);

      const localUser = localStorage.getItem(USER_KEY);
      if (localUser) return JSON.parse(localUser);
    } catch (e) {
      console.error('Error reading current user:', e);
    }
    return null;
  },

  setCurrentUser(user, persistAcrossTabs = false) {
    try {
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      if (persistAcrossTabs) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      }
    } catch (e) {
      console.error('Error saving current user:', e);
    }
  },

  clearCurrentUser() {
    sessionStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getActiveRoomCode() {
    return sessionStorage.getItem(ROOM_CODE_KEY) || localStorage.getItem(ROOM_CODE_KEY) || null;
  },

  setActiveRoomCode(roomCode) {
    if (roomCode) {
      sessionStorage.setItem(ROOM_CODE_KEY, roomCode.toUpperCase().trim());
      localStorage.setItem(ROOM_CODE_KEY, roomCode.toUpperCase().trim());
    } else {
      sessionStorage.removeItem(ROOM_CODE_KEY);
      localStorage.removeItem(ROOM_CODE_KEY);
    }
  },

  getRoom(roomCode) {
    if (!roomCode) return null;
    const key = STORAGE_PREFIX + roomCode.toUpperCase().trim();
    try {
      const data = localStorage.getItem(key);
      if (!data) return null;
      return JSON.parse(data);
    } catch (e) {
      console.error(`Error loading room ${roomCode}:`, e);
      return null;
    }
  },

  deleteRoom(roomCode) {
    if (!roomCode) return false;
    const formattedCode = roomCode.toUpperCase().trim();
    const key = STORAGE_PREFIX + formattedCode;
    try {
      localStorage.removeItem(key);

      const activeCode = this.getActiveRoomCode();
      if (!activeCode || activeCode.toUpperCase().trim() === formattedCode) {
        this.setActiveRoomCode(null);
      }

      this.broadcast({
        type: 'ROOM_DELETED',
        roomCode: formattedCode,
        senderId: this.getCurrentUser()?.id || 'anonymous'
      });
      return true;
    } catch (e) {
      console.error(`Error deleting room ${roomCode}:`, e);
      return false;
    }
  },

  saveRoom(roomCode, roomData, broadcastMessage = null) {
    if (!roomCode || !roomData) return;
    const formattedCode = roomCode.toUpperCase().trim();
    const key = STORAGE_PREFIX + formattedCode;
    try {
      roomData.lastUpdated = Date.now();
      localStorage.setItem(key, JSON.stringify(roomData));

      const msg = broadcastMessage || {
        type: 'ROOM_UPDATED',
        roomCode: formattedCode,
        roomData,
        senderId: this.getCurrentUser()?.id || 'anonymous'
      };
      this.broadcast(msg);
    } catch (e) {
      console.error(`Error saving room ${roomCode}:`, e);
    }
  },

  addActivity(roomCode, activity) {
    const room = this.getRoom(roomCode);
    if (!room) return;
    
    if (!room.activities) room.activities = [];
    
    const activityEntry = {
      id: 'act_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      timestamp: Date.now(),
      ...activity
    };

    room.activities.unshift(activityEntry);
    if (room.activities.length > 50) {
      room.activities = room.activities.slice(0, 50);
    }

    this.saveRoom(roomCode, room, {
      type: 'ACTIVITY_LOGGED',
      roomCode: roomCode.toUpperCase().trim(),
      activity: activityEntry,
      senderId: activity.userId || this.getCurrentUser()?.id
    });

    return activityEntry;
  },

  getAllRooms() {
    const rooms = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_PREFIX)) {
          const roomCode = key.replace(STORAGE_PREFIX, '');
          const data = JSON.parse(localStorage.getItem(key));
          if (data && data.code) {
            rooms.push(data);
          }
        }
      }
    } catch (e) {
      console.error('Error fetching all rooms:', e);
    }
    return rooms;
  }
};


const RoomManager = {
  
  generateRoomCode(prefix = 'CART') {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}-${code}`;
  },

  createRoom({ name, code, threshold = 750.00, user }) {
    let roomCode = code ? code.toUpperCase().trim() : '';
    if (!roomCode) {
      do {
        roomCode = this.generateRoomCode();
      } while (StorageService.getRoom(roomCode));
    }

    const existing = StorageService.getRoom(roomCode);
    if (existing) {
      return this.joinRoom(roomCode, user);
    }

    const newRoom = {
      code: roomCode,
      name: name?.trim() || `Room ${roomCode}`,
      threshold: parseFloat(threshold) || 750.00,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
      creator: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color
      },
      members: [
        {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          color: user.color,
          joinedAt: Date.now(),
          isOnline: true
        }
      ],
      items: [],
      activities: []
    };

    StorageService.saveRoom(roomCode, newRoom);
    StorageService.setActiveRoomCode(roomCode);

    StorageService.addActivity(roomCode, {
      text: `${user.name} created room "${newRoom.name}"`,
      type: 'room_create',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });

    return newRoom;
  },

  joinRoom(roomCode, user) {
    if (!roomCode || !user) return null;
    const formattedCode = roomCode.toUpperCase().trim();
    const room = StorageService.getRoom(formattedCode);

    if (!room) {
      throw new Error(`Room "${formattedCode}" does not exist. Check the code or create a new room.`);
    }

    const existingMemberIndex = room.members.findIndex(m => m.id === user.id || m.name.toLowerCase() === user.name.toLowerCase());
    
    if (existingMemberIndex >= 0) {
      room.members[existingMemberIndex] = {
        ...room.members[existingMemberIndex],
        avatar: user.avatar,
        color: user.color,
        isOnline: true,
        lastSeen: Date.now()
      };
    } else {
      room.members.push({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color,
        joinedAt: Date.now(),
        isOnline: true
      });

      StorageService.addActivity(formattedCode, {
        text: `${user.name} joined the room!`,
        type: 'member_join',
        userName: user.name,
        userAvatar: user.avatar,
        userColor: user.color,
        userId: user.id
      });
    }

    StorageService.saveRoom(formattedCode, room, {
      type: 'MEMBER_JOINED',
      roomCode: formattedCode,
      roomData: room,
      newMember: user,
      senderId: user.id
    });

    StorageService.setActiveRoomCode(formattedCode);
    return room;
  },

  leaveCurrentRoom(user) {
    const currentCode = StorageService.getActiveRoomCode();
    if (currentCode && user) {
      const room = StorageService.getRoom(currentCode);
      if (room) {
        room.members = room.members.filter(m => m.id !== user.id);
        StorageService.saveRoom(currentCode, room);
        StorageService.addActivity(currentCode, {
          text: `${user.name} left the room`,
          type: 'member_leave',
          userName: user.name,
          userAvatar: user.avatar,
          userColor: user.color,
          userId: user.id
        });
      }
    }
    StorageService.setActiveRoomCode(null);
  },

  deleteRoom(roomCode, user) {
    if (!roomCode) return false;
    return StorageService.deleteRoom(roomCode);
  },

  getInviteLink(roomCode) {
    const base = window.location.origin + window.location.pathname;
    return `${base}?room=${encodeURIComponent(roomCode)}`;
  },

  async copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn('Navigator clipboard failed, using fallback:', err);
      }
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error('Fallback clipboard copy failed:', err);
      return false;
    }
  },

  getUrlRoomCode() {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) return roomParam.toUpperCase().trim();

    if (window.location.hash && window.location.hash.length > 1) {
      return window.location.hash.substring(1).toUpperCase().trim();
    }
    return null;
  }
};


const CartManager = {
  
  addItem(roomCode, itemData, user) {
    if (!roomCode || !user) return null;
    const room = StorageService.getRoom(roomCode);
    if (!room) return null;

    if (!room.items) room.items = [];

    const existingIndex = room.items.findIndex(i => 
      (itemData.id && i.productId === itemData.id) || 
      (i.name.toLowerCase() === itemData.name.toLowerCase() && i.price === itemData.price)
    );

    let updatedItem = null;
    const qtyToAdd = parseInt(itemData.qty, 10) || 1;

    if (existingIndex >= 0) {
      
      const existing = room.items[existingIndex];
      existing.qty += qtyToAdd;
      existing.lastModifiedBy = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color
      };
      existing.lastModifiedAt = Date.now();

      if (!existing.contributors) {
        existing.contributors = [{ ...existing.addedBy, qty: existing.qty - qtyToAdd }];
      }
      existing.contributors.push({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color,
        qty: qtyToAdd,
        addedAt: Date.now()
      });

      updatedItem = existing;
    } else {
      
      updatedItem = {
        id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        productId: itemData.id || null,
        name: itemData.name,
        category: itemData.category || 'Custom Request',
        price: parseFloat(itemData.price),
        qty: qtyToAdd,
        unit: itemData.unit || 'each',
        image: itemData.image || null,
        notes: itemData.notes || '',
        addedBy: {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          color: user.color
        },
        addedAt: Date.now()
      };
      room.items.push(updatedItem);
    }

    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} added ${qtyToAdd}x "${updatedItem.name}" (₹${(updatedItem.price * qtyToAdd).toFixed(2)})`,
      type: 'item_add',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id,
      item: { name: updatedItem.name, price: updatedItem.price, qty: qtyToAdd }
    });

    return updatedItem;
  },

  updateQuantity(roomCode, itemId, newQty, user) {
    const room = StorageService.getRoom(roomCode);
    if (!room || !room.items) return null;

    const itemIndex = room.items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return null;

    const item = room.items[itemIndex];
    const qty = parseInt(newQty, 10);

    if (qty <= 0) {
      
      return this.removeItem(roomCode, itemId, user);
    }

    const diff = qty - item.qty;
    item.qty = qty;
    item.lastModifiedBy = {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      color: user.color
    };
    item.lastModifiedAt = Date.now();

    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} changed "${item.name}" qty to ${qty} (${diff > 0 ? '+' : ''}${diff})`,
      type: 'qty_change',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });

    return item;
  },

  removeItem(roomCode, itemId, user) {
    const room = StorageService.getRoom(roomCode);
    if (!room || !room.items) return null;

    const itemIndex = room.items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return null;

    const [removedItem] = room.items.splice(itemIndex, 1);
    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} removed "${removedItem.name}" from cart`,
      type: 'item_remove',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });

    return removedItem;
  },

  clearCart(roomCode, user) {
    const room = StorageService.getRoom(roomCode);
    if (!room) return;

    const count = room.items?.length || 0;
    room.items = [];
    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} cleared all ${count} items from the cart`,
      type: 'cart_clear',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });
  },

  calculateSummary(room) {
    const items = room?.items || [];
    const threshold = parseFloat(room?.threshold) || 750.00;

    let subtotal = 0;
    let itemCount = 0;

    items.forEach(item => {
      const q = parseInt(item.qty, 10) || 1;
      const p = parseFloat(item.price) || 0;
      subtotal += p * q;
      itemCount += q;
    });

    subtotal = Math.round(subtotal * 100) / 100;

    const isThresholdReached = subtotal >= threshold;
    const thresholdRemaining = Math.max(0, Math.round((threshold - subtotal) * 100) / 100);
    const progressPercent = Math.min(100, threshold > 0 ? (subtotal / threshold) * 100 : 100);

    const standardDeliveryFee = 49.00;
    const deliveryFee = isThresholdReached ? 0.00 : standardDeliveryFee;
    const deliverySavings = isThresholdReached ? standardDeliveryFee : 0.00;

    const taxRate = 0.05;
    const estimatedTax = Math.round(subtotal * taxRate * 100) / 100;

    const grandTotal = Math.round((subtotal + deliveryFee + estimatedTax) * 100) / 100;

    const splits = this.calculateExpenseSplits(room, subtotal, estimatedTax, deliveryFee);

    return {
      itemCount,
      subtotal,
      threshold,
      thresholdRemaining,
      progressPercent,
      isThresholdReached,
      deliveryFee,
      deliverySavings,
      estimatedTax,
      grandTotal,
      splits
    };
  },

  calculateExpenseSplits(room, totalSubtotal, totalTax, deliveryFee) {
    const items = room?.items || [];
    const members = room?.members || [];

    const memberMap = new Map();

    members.forEach(m => {
      memberMap.set(m.id, {
        id: m.id,
        name: m.name,
        avatar: m.avatar,
        color: m.color,
        itemsSubtotal: 0,
        itemCount: 0,
        items: [],
        taxShare: 0,
        deliveryShare: 0,
        totalOwed: 0,
        paid: false
      });
    });

    items.forEach(item => {
      const ownerId = item.addedBy?.id || 'unknown';
      let entry = memberMap.get(ownerId);

      if (!entry) {
        entry = {
          id: ownerId,
          name: item.addedBy?.name || 'Unknown Participant',
          avatar: item.addedBy?.avatar || '👤',
          color: item.addedBy?.color || '#64748B',
          itemsSubtotal: 0,
          itemCount: 0,
          items: [],
          taxShare: 0,
          deliveryShare: 0,
          totalOwed: 0,
          paid: false
        };
        memberMap.set(ownerId, entry);
      }

      const lineTotal = (item.price || 0) * (item.qty || 1);
      entry.itemsSubtotal += lineTotal;
      entry.itemCount += item.qty || 1;
      entry.items.push({
        name: item.name,
        qty: item.qty,
        price: item.price,
        lineTotal
      });
    });

    const activeParticipants = Array.from(memberMap.values()).filter(m => m.itemsSubtotal > 0);
    const participantCount = activeParticipants.length;

    activeParticipants.forEach(p => {
      p.itemsSubtotal = Math.round(p.itemsSubtotal * 100) / 100;

      if (totalSubtotal > 0) {
        p.taxShare = Math.round((p.itemsSubtotal / totalSubtotal) * totalTax * 100) / 100;
      } else {
        p.taxShare = 0;
      }

      if (deliveryFee > 0 && participantCount > 0) {
        p.deliveryShare = Math.round((deliveryFee / participantCount) * 100) / 100;
      } else {
        p.deliveryShare = 0;
      }

      p.totalOwed = Math.round((p.itemsSubtotal + p.taxShare + p.deliveryShare) * 100) / 100;
    });

    return activeParticipants;
  }
};


const AVATAR_OPTIONS = [
  { emoji: '👨‍💻', color: '#2563eb' },
  { emoji: '👩‍🎨', color: '#0d9488' },
  { emoji: '🧑‍🔬', color: '#8b5cf6' },
  { emoji: '👩‍🚀', color: '#f59e0b' },
  { emoji: '🧑‍🍳', color: '#ef4444' },
  { emoji: '🏃‍♂️', color: '#10b981' },
  { emoji: '🎧', color: '#ec4899' },
  { emoji: '⚡', color: '#6366f1' }
];

class CartShareApp {
  constructor() {
    this.currentUser = null;
    this.currentRoom = null;
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.selectedAvatar = AVATAR_OPTIONS[0];

    this.modals = {};
  }

  init() {
    this.initModals();
    this.renderAvatarSelectors();
    this.renderCategoryNav();
    this.bindEvents();
    this.checkInitialSession();
    this.setupRealtimeSync();
  }

  initModals() {
    const modalIds = ['userLoginModal', 'roomShareModal', 'customItemModal', 'splitModal', 'receiptModal', 'futureEnhancementsModal'];
    modalIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.bootstrap) {
        this.modals[id] = new window.bootstrap.Modal(el);
      }
    });
  }

  switchView(viewName) {
    const loginView = document.getElementById('view-login');
    const appView = document.getElementById('view-app');

    if (viewName === 'login') {
      if (loginView) {
        loginView.classList.remove('d-none');
        loginView.classList.add('d-flex');
      }
      if (appView) {
        appView.classList.remove('d-flex');
        appView.classList.add('d-none');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (loginView) {
        loginView.classList.remove('d-flex');
        loginView.classList.add('d-none');
      }
      if (appView) {
        appView.classList.remove('d-none');
        appView.classList.add('d-flex');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  renderAvatarSelectors() {
    const containers = [
      document.getElementById('pageAvatarSelectorContainer'),
      document.getElementById('avatarSelectorContainer')
    ];

    containers.forEach(container => {
      if (!container) return;

      container.innerHTML = AVATAR_OPTIONS.map((item, index) => `
        <button type="button" class="avatar-radio-btn ${index === 0 ? 'active' : ''}" 
                data-emoji="${item.emoji}" data-color="${item.color}">
          ${item.emoji}
        </button>
      `).join('');

      container.querySelectorAll('.avatar-radio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          containers.forEach(c => {
            if (c) c.querySelectorAll('.avatar-radio-btn').forEach(b => b.classList.remove('active'));
          });
          const target = e.currentTarget;
          target.classList.add('active');
          this.selectedAvatar = {
            emoji: target.dataset.emoji,
            color: target.dataset.color
          };
        });
      });
    });
  }

  checkInitialSession() {
    const user = StorageService.getCurrentUser();
    let roomCode = RoomManager.getUrlRoomCode() || StorageService.getActiveRoomCode();

    const urlRoom = RoomManager.getUrlRoomCode();
    if (urlRoom) {
      const roomExists = StorageService.getRoom(urlRoom);
      if (roomExists) {
        const pageCodeInput = document.getElementById('pageInputRoomCode');
        if (pageCodeInput) pageCodeInput.value = urlRoom;

        const note = document.getElementById('pageRoomDetectedNote');
        if (note) note.innerHTML = '<span class="badge bg-success-subtle text-success">Invite code ' + urlRoom + ' detected!</span>';
      } else {
        try {
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        } catch (e) {}
      }
    }

    if (user && roomCode) {
      try {
        const room = StorageService.getRoom(roomCode);
        if (room) {
          this.currentUser = user;
          this.currentRoom = RoomManager.joinRoom(roomCode, user);
          this.switchView('app');
          this.renderAll();
          return;
        } else {
          StorageService.setActiveRoomCode(null);
          try {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          } catch (e) {}
          const pageCodeInput = document.getElementById('pageInputRoomCode');
          if (pageCodeInput) pageCodeInput.value = '';
          const note = document.getElementById('pageRoomDetectedNote');
          if (note) note.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';
        }
      } catch (err) {
        console.warn('Could not load stored room:', err);
      }
    }

    this.switchView('login');
  }

  setupRealtimeSync() {
    StorageService.subscribe((event) => {
      if (!this.currentRoom) return;

      const incomingCode = event.roomCode || event.roomData?.code;
      if (incomingCode && incomingCode.toUpperCase() === this.currentRoom.code.toUpperCase()) {
        
        if (event.type === 'ROOM_DELETED') {
          this.currentRoom = null;
          StorageService.setActiveRoomCode(null);
          try {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          } catch (e) {}
          const pageCodeInput = document.getElementById('pageInputRoomCode');
          if (pageCodeInput) pageCodeInput.value = '';
          const detectedNote = document.getElementById('pageRoomDetectedNote');
          if (detectedNote) detectedNote.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';
          this.switchView('login');
          this.showToast('Room Closed', 'Room ' + incomingCode + ' was permanently deleted by the host.', '🗑️', 'warning');
          return;
        }

        const refreshedRoom = StorageService.getRoom(this.currentRoom.code);
        if (refreshedRoom) {
          this.currentRoom = refreshedRoom;
          this.renderAll();

          if (event.senderId && this.currentUser && event.senderId !== this.currentUser.id) {
            if (event.type === 'ITEM_ADDED' || event.type === 'ACTIVITY_LOGGED') {
              const act = event.activity || refreshedRoom.activities?.[0];
              if (act) {
                this.showToast(act.userName || 'Roommate', act.text, act.userAvatar || '🛒', 'info');
              }
            } else if (event.type === 'MEMBER_JOINED') {
              this.showToast('New Participant', `${event.newMember?.name || 'A roommate'} joined your room!`, '👋', 'success');
            }
          }
        }
      }
    });
  }

  bindEvents() {
    
    const mainLoginForm = document.getElementById('mainLoginForm');
    if (mainLoginForm) {
      mainLoginForm.addEventListener('submit', (e) => this.handleMainLoginFormSubmit(e));
    }

    const modalLoginForm = document.getElementById('userLoginForm');
    if (modalLoginForm) {
      modalLoginForm.addEventListener('submit', (e) => this.handleModalLoginFormSubmit(e));
    }

    document.querySelectorAll('.page-demo-btn, .demo-user-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const nameInput = document.getElementById('pageInputUserName') || document.getElementById('inputUserName');
        if (nameInput) nameInput.value = btn.dataset.name;
        this.selectedAvatar = {
          emoji: btn.dataset.avatar,
          color: btn.dataset.color
        };

        document.querySelectorAll('.avatar-radio-btn').forEach(b => {
          if (b.dataset.emoji === btn.dataset.avatar) {
            b.click();
          }
        });
      });
    });

    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProductGrid();
      });
    }

    const customItemForm = document.getElementById('customItemForm');
    if (customItemForm) {
      customItemForm.addEventListener('submit', (e) => this.handleCustomItemSubmit(e));
    }

    const clearCartBtn = document.getElementById('btnClearCartBtn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        if (!this.currentRoom || !this.currentRoom.items?.length) return;
        if (confirm('Are you sure you want to clear all items in the shared cart?')) {
          CartManager.clearCart(this.currentRoom.code, this.currentUser);
          this.refreshCurrentRoom();
          this.showToast('Cart Cleared', 'All items were removed from the shared cart.', '🗑️', 'warning');
        }
      });
    }

    const btnCopyLink = document.getElementById('btnCopyInviteLink');
    if (btnCopyLink) {
      btnCopyLink.addEventListener('click', () => this.handleCopyInviteLink());
    }

    const btnCopyCode = document.getElementById('btnCopyRoomCodeOnly');
    if (btnCopyCode) {
      btnCopyCode.addEventListener('click', () => this.handleCopyRoomCodeOnly());
    }

    const btnPrintReceipt = document.getElementById('btnPrintReceiptBtn');
    if (btnPrintReceipt) {
      btnPrintReceipt.addEventListener('click', () => {
        window.print();
      });
    }

    const navBtnLogout = document.getElementById('navBtnLogout');
    if (navBtnLogout) {
      navBtnLogout.addEventListener('click', () => this.logoutUser());
    }

    const btnSwitchRoom = document.getElementById('btnSwitchRoom');
    if (btnSwitchRoom) {
      btnSwitchRoom.addEventListener('click', () => this.logoutUser());
    }

    const btnDeleteRoomNav = document.getElementById('btnDeleteRoomNav');
    if (btnDeleteRoomNav) {
      btnDeleteRoomNav.addEventListener('click', () => this.handleDeleteCurrentRoom());
    }

    const btnDeleteRoomModal = document.getElementById('btnDeleteRoomModal');
    if (btnDeleteRoomModal) {
      btnDeleteRoomModal.addEventListener('click', () => this.handleDeleteCurrentRoom());
    }

    const receiptModalEl = document.getElementById('receiptModal');
    if (receiptModalEl) {
      receiptModalEl.addEventListener('show.bs.modal', () => this.renderReceipt());
    }

    const splitModalEl = document.getElementById('splitModal');
    if (splitModalEl) {
      splitModalEl.addEventListener('show.bs.modal', () => this.renderExpenseSplits());
    }
  }

  handleMainLoginFormSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('pageInputUserName');
    const userName = nameInput?.value.trim();
    if (!userName) return;

    const user = {
      id: 'usr_' + userName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Math.random().toString(36).substr(2, 4),
      name: userName,
      avatar: this.selectedAvatar.emoji,
      color: this.selectedAvatar.color
    };

    StorageService.setCurrentUser(user, true);
    this.currentUser = user;

    const isCreateTab = document.getElementById('pane-login-create')?.classList.contains('active');

    try {
      if (isCreateTab) {
        
        const roomName = document.getElementById('pageInputNewRoomName')?.value.trim();
        const threshold = parseFloat(document.getElementById('pageInputThreshold')?.value) || 750.00;
        
        this.currentRoom = RoomManager.createRoom({
          name: roomName,
          threshold,
          user
        });

        this.showToast('Room Created', `Room "${this.currentRoom.name}" (${this.currentRoom.code}) is ready!`, '🎉', 'success');
      } else {
        const codeInput = document.getElementById('pageInputRoomCode');
        const code = codeInput ? codeInput.value.trim().toUpperCase() : '';

        if (!code) {
          alert('Please enter a room code to join, or select the "Create Room" tab to start a new room.');
          return;
        }

        const existingRoom = StorageService.getRoom(code);
        if (!existingRoom) {
          alert('Room "' + code + '" does not exist or has been deleted. Please check the code or select "Create Room" to start a new room.');
          return;
        }

        this.currentRoom = RoomManager.joinRoom(code, user);
        this.showToast('Room Joined', 'Connected to Room ' + this.currentRoom.code + '!', '👋', 'success');
      }

      const newUrl = `${window.location.origin}${window.location.pathname}?room=${this.currentRoom.code}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);

      this.switchView('app');
      this.renderAll();

    } catch (err) {
      alert(err.message || 'Error entering room');
    }
  }

  handleModalLoginFormSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('inputUserName');
    const userName = nameInput?.value.trim();
    if (!userName) return;

    const user = {
      id: 'usr_' + userName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Math.random().toString(36).substr(2, 4),
      name: userName,
      avatar: this.selectedAvatar.emoji,
      color: this.selectedAvatar.color
    };

    StorageService.setCurrentUser(user, true);
    this.currentUser = user;

    if (this.modals.userLoginModal) {
      this.modals.userLoginModal.hide();
    }

    this.renderAll();
    this.showToast('Profile Updated', `Welcome back, ${userName}!`, '👤', 'info');
  }

  logoutUser() {
    if (confirm('Log out and return to the login screen?')) {
      if (this.currentUser) {
        RoomManager.leaveCurrentRoom(this.currentUser);
      }
      StorageService.clearCurrentUser();
      StorageService.setActiveRoomCode(null);
      this.currentUser = null;
      this.currentRoom = null;
      try {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (e) {}
      const pageCodeInput = document.getElementById('pageInputRoomCode');
      if (pageCodeInput) pageCodeInput.value = '';
      const detectedNote = document.getElementById('pageRoomDetectedNote');
      if (detectedNote) detectedNote.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';
      this.switchView('login');
      this.showToast('Logged Out', 'Returned to the login page.', '👋', 'info');
    }
  }

  handleDeleteCurrentRoom() {
    if (!this.currentRoom) return;

    const code = this.currentRoom.code;
    const name = this.currentRoom.name;

    const confirmed = confirm(
      '⚠️ PERMANENT ACTION:\n\nAre you sure you want to permanently delete room "' + name + '" (' + code + ')?\n\nThis will delete all shared cart items, member records, and history for everyone in this room.'
    );

    if (confirmed) {
      if (this.modals.roomShareModal) {
        this.modals.roomShareModal.hide();
      }

      RoomManager.deleteRoom(code, this.currentUser);
      this.currentRoom = null;
      StorageService.setActiveRoomCode(null);

      try {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (e) {}

      const pageCodeInput = document.getElementById('pageInputRoomCode');
      if (pageCodeInput) pageCodeInput.value = '';

      const detectedNote = document.getElementById('pageRoomDetectedNote');
      if (detectedNote) detectedNote.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';

      this.switchView('login');
      this.showToast('Room Deleted', 'Room "' + name + '" (' + code + ') was permanently deleted.', '🗑️', 'warning');
    }
  }

  handleCustomItemSubmit(e) {
    e.preventDefault();
    if (!this.currentRoom || !this.currentUser) return;

    const name = document.getElementById('customItemName').value.trim();
    const price = parseFloat(document.getElementById('customItemPrice').value);
    const qty = parseInt(document.getElementById('customItemQty').value, 10) || 1;
    const category = document.getElementById('customItemCategory').value;
    const notes = document.getElementById('customItemNotes').value.trim();

    if (!name || isNaN(price)) return;

    const updatedItem = CartManager.addItem(this.currentRoom.code, {
      name,
      price,
      qty,
      category,
      unit: 'custom request',
      notes,
      image: null
    }, this.currentUser);

    document.getElementById('customItemForm').reset();
    if (this.modals.customItemModal) {
      this.modals.customItemModal.hide();
    }

    this.currentRoom = StorageService.getRoom(this.currentRoom.code);
    this.renderDeliveryThreshold();
    this.renderCart(updatedItem?.id);
    this.renderProductGrid();
    this.renderActivityFeed();

    this.showToast('Custom Item Added', `"${name}" added to the group cart!`, '🛒', 'success');
  }

  handleAddToCart(prod, btnElement) {
    if (!this.currentRoom || !this.currentUser) {
      this.switchView('login');
      return;
    }

    const updatedItem = CartManager.addItem(this.currentRoom.code, prod, this.currentUser);

    if (btnElement) {
      const originalHtml = btnElement.innerHTML;
      btnElement.classList.add('btn-added-feedback');
      btnElement.innerHTML = '<i class="bi bi-check-lg"></i> <span>Added!</span>';
      setTimeout(() => {
        btnElement.classList.remove('btn-added-feedback');
        btnElement.innerHTML = originalHtml;
      }, 1000);
    }

    this.currentRoom = StorageService.getRoom(this.currentRoom.code);
    this.renderDeliveryThreshold();
    this.renderCart(updatedItem?.id);
    this.renderProductGrid();
    this.renderActivityFeed();

    this.showToast('Cart Updated', `Added "${prod.name}" to the shared cart.`, '🛒', 'success');
  }

  refreshCurrentRoom() {
    if (!this.currentRoom) return;
    this.currentRoom = StorageService.getRoom(this.currentRoom.code);
    this.renderAll();
  }

  renderAll() {
    this.updateNavbarUser();
    this.renderRoomHeaders();
    this.renderDeliveryThreshold();
    this.renderProductGrid();
    this.renderCart();
    this.renderActivityFeed();
  }

  updateNavbarUser() {
    if (!this.currentUser) return;
    const avatarEl = document.getElementById('navUserAvatar');
    const nameEl = document.getElementById('navUserName');
    if (avatarEl) avatarEl.textContent = this.currentUser.avatar || '👤';
    if (nameEl) nameEl.textContent = this.currentUser.name || 'User';
  }

  renderRoomHeaders() {
    if (!this.currentRoom) return;

    const codeLabel = document.getElementById('currentRoomCodeLabel');
    if (codeLabel) codeLabel.textContent = this.currentRoom.code;

    const cartRoomName = document.getElementById('cartRoomNameLabel');
    if (cartRoomName) cartRoomName.textContent = this.currentRoom.name;

    const mobileRoomCode = document.getElementById('mobileOffcanvasRoomCode');
    if (mobileRoomCode) mobileRoomCode.textContent = `Room: ${this.currentRoom.code}`;

    const stackEl = document.getElementById('activeMembersStack');
    if (stackEl) {
      const members = this.currentRoom.members || [];
      stackEl.innerHTML = members.slice(0, 5).map(m => `
        <div class="member-avatar-chip" title="${m.name} (${m.id === this.currentUser?.id ? 'You' : 'Member'})" style="background-color: ${m.color || '#e2e8f0'}20; border-color: ${m.color || '#3b82f6'};">
          ${m.avatar || '👤'}
        </div>
      `).join('') + (members.length > 5 ? `<div class="member-avatar-chip bg-dark text-white small" style="font-size:0.75rem;">+${members.length - 5}</div>` : '');
    }

    const modalCode = document.getElementById('modalRoomCodeDisplay');
    if (modalCode) modalCode.textContent = this.currentRoom.code;

    const modalName = document.getElementById('modalRoomNameDisplay');
    if (modalName) modalName.textContent = this.currentRoom.name;

    const modalLink = document.getElementById('modalInviteLinkInput');
    if (modalLink) modalLink.value = RoomManager.getInviteLink(this.currentRoom.code);

    const modalMembersList = document.getElementById('modalMembersList');
    if (modalMembersList) {
      const members = this.currentRoom.members || [];
      modalMembersList.innerHTML = members.map(m => `
        <div class="list-group-item d-flex align-items-center justify-content-between px-0">
          <div class="d-flex align-items-center gap-2">
            <span class="fs-4">${m.avatar || '👤'}</span>
            <div>
              <div class="fw-bold">${m.name} ${m.id === this.currentUser?.id ? '<span class="badge bg-primary-subtle text-primary ms-1">You</span>' : ''}</div>
              <small class="text-muted">Joined ${new Date(m.joinedAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
            </div>
          </div>
          <span class="badge bg-success-subtle text-success border border-success-subtle">Online</span>
        </div>
      `).join('');

      const countBadge = document.getElementById('modalMemberCountBadge');
      if (countBadge) countBadge.textContent = `${members.length} Member${members.length !== 1 ? 's' : ''}`;
    }
  }

  renderCategoryNav() {
    const navWrapper = document.getElementById('categoryNavWrapper');
    if (!navWrapper) return;

    navWrapper.innerHTML = CATEGORIES.map(cat => `
      <button type="button" class="category-pill-btn ${cat.id === this.activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <i class="bi ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    navWrapper.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        navWrapper.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        this.activeCategory = target.dataset.category;
        this.renderProductGrid();
      });
    });
  }

  renderDeliveryThreshold() {
    if (!this.currentRoom) return;

    const summary = CartManager.calculateSummary(this.currentRoom);
    const container = document.getElementById('thresholdContainer');
    const fillBar = document.getElementById('thresholdFillBar');
    const statusHeadline = document.getElementById('thresholdStatusHeadline');
    const statusMsg = document.getElementById('thresholdStatusMessage');
    const subMsg = document.getElementById('thresholdSubmessage');
    const iconEl = document.getElementById('thresholdStatusIcon');
    const badgeEl = document.getElementById('thresholdBadge');

    if (badgeEl) badgeEl.textContent = `₹${summary.threshold.toFixed(2)} Target`;

    if (fillBar) {
      fillBar.style.width = `${summary.progressPercent}%`;
    }

    if (summary.isThresholdReached) {
      container?.classList.add('unlocked');
      if (iconEl) iconEl.textContent = '🎉';
      if (statusHeadline) statusHeadline.textContent = 'FREE Group Shipping Unlocked!';
      if (statusMsg) {
        statusMsg.className = 'fw-bold text-success';
        statusMsg.textContent = `Target Reached! (₹${summary.subtotal.toFixed(2)} total)`;
      }
      if (subMsg) {
        subMsg.textContent = 'Your team unlocked ₹0.00 delivery (₹49.00 saved)!';
      }
    } else {
      container?.classList.remove('unlocked');
      if (iconEl) iconEl.textContent = '🚚';
      if (statusHeadline) statusHeadline.textContent = 'Group Delivery Threshold Tracker';
      if (statusMsg) {
        statusMsg.className = 'fw-bold text-primary';
        statusMsg.textContent = `Add ₹${summary.thresholdRemaining.toFixed(2)} more for FREE Delivery! (${Math.round(summary.progressPercent)}%)`;
      }
      if (subMsg) {
        subMsg.textContent = `Current cart: ₹${summary.subtotal.toFixed(2)} / ₹${summary.threshold.toFixed(2)} target`;
      }
    }
  }

  renderProductGrid() {
    const grid = document.getElementById('productGridContainer');
    if (!grid) return;

    const cartItems = this.currentRoom?.items || [];

    const filtered = PRODUCTS.filter(prod => {
      const matchCat = this.activeCategory === 'all' || prod.category === this.activeCategory;
      const matchSearch = !this.searchQuery || 
        prod.name.toLowerCase().includes(this.searchQuery) || 
        prod.description.toLowerCase().includes(this.searchQuery) ||
        prod.category.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });

    let html = '';

    filtered.forEach(prod => {
      
      const existingInCart = cartItems.find(i => i.productId === prod.id);
      const cartQty = existingInCart ? existingInCart.qty : 0;

      html += `
        <div class="col">
          <div class="product-card">
            
            
            <div class="product-img-wrapper">
              <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'1.5\'%3E%3Cpath d=\'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\'/%3E%3Cline x1=\'3\' y1=\'6\' x2=\'21\' y2=\'6\'/%3E%3Cpath d=\'M16 10a4 4 0 0 1-8 0\'/%3E%3C/svg%3E'">
              ${prod.badge ? `<span class="badge bg-${prod.badgeColor || 'primary'} product-badge-overlay">${prod.badge}</span>` : ''}
              ${cartQty > 0 ? `<span class="product-in-cart-indicator"><i class="bi bi-cart-check-fill me-1"></i>${cartQty} in cart</span>` : ''}
            </div>

            
            <div class="product-body">
              <h6 class="product-title">${prod.name}</h6>
              <div class="product-unit">${prod.unit}</div>
              <p class="product-desc">${prod.description}</p>
              
              <div class="product-footer">
                <div class="product-price">
                  ₹${prod.price.toFixed(2)}
                </div>
                <button type="button" class="btn btn-add-cart btn-add-product" data-product-id="${prod.id}">
                  <i class="bi bi-plus-lg"></i>
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      `;
    });

    html += `
      <div class="col">
        <div class="custom-request-card" data-bs-toggle="modal" data-bs-target="#customItemModal">
          <div class="custom-request-icon">
            <i class="bi bi-plus-lg"></i>
          </div>
          <h6 class="fw-bold text-primary mb-1">Request Custom Item</h6>
          <p class="small text-muted mb-3">Roommate need something not in our catalog? Add any custom item.</p>
          <span class="btn btn-sm btn-outline-primary rounded-pill px-3">Add Custom</span>
        </div>
      </div>
    `;

    grid.innerHTML = html;

    grid.querySelectorAll('.btn-add-product').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.dataset.productId;
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) {
          this.handleAddToCart(prod, e.currentTarget);
        }
      });
    });
  }

  renderCart(highlightItemId = null) {
    if (!this.currentRoom) return;

    const items = this.currentRoom.items || [];
    const summary = CartManager.calculateSummary(this.currentRoom);

    const desktopList = document.getElementById('cartItemsList');
    const mobileList = document.getElementById('mobileCartItemsList');

    const desktopBadge = document.getElementById('cartItemCountBadge');
    if (desktopBadge) desktopBadge.textContent = `${summary.itemCount} item${summary.itemCount !== 1 ? 's' : ''}`;

    const mobileBadge = document.getElementById('mobileCartBadge');
    if (mobileBadge) mobileBadge.textContent = summary.itemCount;

    const mobileFloatCount = document.getElementById('mobileFloatItemCount');
    if (mobileFloatCount) mobileFloatCount.textContent = summary.itemCount;

    let itemsHtml = '';

    if (items.length === 0) {
      itemsHtml = `
        <div class="text-center py-5 text-muted">
          <div class="fs-1 mb-2">🛒</div>
          <h6 class="fw-bold mb-1">Your Shared Cart is Empty</h6>
          <p class="small px-3">Add products from the catalog or request custom items to start pooling orders!</p>
        </div>
      `;
    } else {
      itemsHtml = items.map(item => {
        const lineTotal = (item.price * item.qty).toFixed(2);
        const author = item.addedBy || { name: 'Roommate', avatar: '👤', color: '#3b82f6' };
        const isSelf = this.currentUser && author.id === this.currentUser.id;
        const isHighlighted = highlightItemId && item.id === highlightItemId;

        return `
          <div class="cart-item-card ${isHighlighted ? 'cart-item-highlight' : ''}" data-item-id="${item.id}">
            <div class="cart-item-top">
              <h6 class="cart-item-title">${item.name}</h6>
              <div class="fw-bold text-dark font-monospace">₹${lineTotal}</div>
            </div>

            
            <div class="d-flex align-items-center justify-content-between">
              <span class="cart-item-author-tag" style="border: 1px solid ${author.color || '#e2e8f0'}40;">
                <span>${author.avatar || '👤'}</span>
                <span>Added by ${isSelf ? 'You' : author.name}</span>
              </span>
              <small class="text-muted">₹${item.price.toFixed(2)} each</small>
            </div>

            ${item.notes ? `<div class="small text-muted fst-italic mb-2 bg-light p-1 rounded">"${item.notes}"</div>` : ''}

            
            <div class="cart-item-controls mt-2">
              <div class="qty-pill-group">
                <button type="button" class="qty-pill-btn btn-cart-dec" data-item-id="${item.id}">-</button>
                <span class="qty-pill-value">${item.qty}</span>
                <button type="button" class="qty-pill-btn btn-cart-inc" data-item-id="${item.id}">+</button>
              </div>

              <button type="button" class="btn btn-sm btn-link text-danger text-decoration-none p-0 btn-cart-remove" data-item-id="${item.id}" title="Remove item">
                <i class="bi bi-trash3 me-1"></i> Remove
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    if (desktopList) desktopList.innerHTML = itemsHtml;
    if (mobileList) mobileList.innerHTML = itemsHtml;

    [desktopList, mobileList].forEach(container => {
      if (!container) return;

      container.querySelectorAll('.btn-cart-inc').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.dataset.itemId;
          const item = items.find(i => i.id === itemId);
          if (item && this.currentRoom && this.currentUser) {
            CartManager.updateQuantity(this.currentRoom.code, itemId, item.qty + 1, this.currentUser);
            this.refreshCurrentRoom();
          }
        });
      });

      container.querySelectorAll('.btn-cart-dec').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.dataset.itemId;
          const item = items.find(i => i.id === itemId);
          if (item && this.currentRoom && this.currentUser) {
            CartManager.updateQuantity(this.currentRoom.code, itemId, item.qty - 1, this.currentUser);
            this.refreshCurrentRoom();
          }
        });
      });

      container.querySelectorAll('.btn-cart-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.dataset.itemId;
          if (this.currentRoom && this.currentUser) {
            CartManager.removeItem(this.currentRoom.code, itemId, this.currentUser);
            this.refreshCurrentRoom();
            this.showToast('Item Removed', 'Removed item from cart.', '🗑️', 'secondary');
          }
        });
      });
    });

    this.updateSummaryValues('summary', summary);
    
    this.updateSummaryValues('mobileSummary', summary);

    const floatTotal = document.getElementById('mobileFloatTotal');
    if (floatTotal) floatTotal.textContent = `₹${summary.grandTotal.toFixed(2)}`;
  }

  updateSummaryValues(prefix, summary) {
    const subtotalEl = document.getElementById(`${prefix}Subtotal`);
    if (subtotalEl) subtotalEl.textContent = `₹${summary.subtotal.toFixed(2)}`;

    const taxEl = document.getElementById(`${prefix}Tax`);
    if (taxEl) taxEl.textContent = `₹${summary.estimatedTax.toFixed(2)}`;

    const delivEl = document.getElementById(`${prefix}DeliveryFee`) || document.getElementById(`${prefix}Delivery`);
    if (delivEl) {
      if (summary.isThresholdReached) {
        delivEl.innerHTML = '<span class="text-success fw-bold">FREE (₹0.00)</span>';
      } else {
        delivEl.textContent = `₹${summary.deliveryFee.toFixed(2)}`;
      }
    }

    const savingsLine = document.getElementById(`${prefix}SavingsLine`);
    if (savingsLine) {
      savingsLine.style.display = summary.isThresholdReached ? 'flex' : 'none';
    }

    const savingsVal = document.getElementById(`${prefix}Savings`);
    if (savingsVal) {
      savingsVal.textContent = `-₹${summary.deliverySavings.toFixed(2)}`;
    }

    const totalEl = document.getElementById(`${prefix}GrandTotal`) || document.getElementById(`${prefix}Total`);
    if (totalEl) totalEl.textContent = `₹${summary.grandTotal.toFixed(2)}`;
  }

  renderActivityFeed() {
    if (!this.currentRoom) return;

    const listEl = document.getElementById('desktopActivityList');
    if (!listEl) return;

    const activities = this.currentRoom.activities || [];

    if (activities.length === 0) {
      listEl.innerHTML = `<div class="text-muted small text-center py-3">No activity recorded yet. Start adding items!</div>`;
      return;
    }

    listEl.innerHTML = activities.slice(0, 15).map(act => {
      const timeStr = new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `
        <div class="activity-item">
          <div class="activity-avatar" style="border: 1px solid ${act.userColor || '#3b82f6'};">
            ${act.userAvatar || '👤'}
          </div>
          <div class="activity-text">
            ${act.text}
          </div>
          <div class="activity-time">${timeStr}</div>
        </div>
      `;
    }).join('');
  }

  renderExpenseSplits() {
    if (!this.currentRoom) return;

    const summary = CartManager.calculateSummary(this.currentRoom);
    const container = document.getElementById('splitBreakdownContainer');
    if (!container) return;

    if (!summary.splits || summary.splits.length === 0) {
      container.innerHTML = `
        <div class="text-center py-4 text-muted">
          <div class="fs-1 mb-2">📊</div>
          <h6>No items in cart to split yet!</h6>
          <p class="small">When members add items to the cart, the automated expense calculator divides taxes proportionally and delivery fees equally.</p>
        </div>
      `;
      return;
    }

    let html = `
      <div class="row g-3 mb-4">
        <div class="col-md-4">
          <div class="p-3 bg-light rounded text-center">
            <small class="text-muted text-uppercase fw-bold">Cart Subtotal</small>
            <div class="fs-4 fw-bold text-dark">₹${summary.subtotal.toFixed(2)}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 bg-light rounded text-center">
            <small class="text-muted text-uppercase fw-bold">Delivery Status</small>
            <div class="fs-5 fw-bold ${summary.isThresholdReached ? 'text-success' : 'text-primary'}">
              ${summary.isThresholdReached ? 'FREE Delivery 🎉' : `₹${summary.deliveryFee.toFixed(2)} (Split)`}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 bg-light rounded text-center">
            <small class="text-muted text-uppercase fw-bold">Order Grand Total</small>
            <div class="fs-4 fw-bold text-primary">₹${summary.grandTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <h6 class="fw-bold mb-3">Participant Breakdown</h6>
      <div class="row g-3">
    `;

    summary.splits.forEach(split => {
      const isSelf = this.currentUser && split.id === this.currentUser.id;

      html += `
        <div class="col-12 col-md-6">
          <div class="card h-100 border ${isSelf ? 'border-primary shadow-sm' : ''}">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center gap-2">
                  <span class="fs-4">${split.avatar}</span>
                  <div>
                    <h6 class="mb-0 fw-bold">${split.name} ${isSelf ? '<span class="badge bg-primary ms-1">You</span>' : ''}</h6>
                    <small class="text-muted">${split.itemCount} items contributed</small>
                  </div>
                </div>
                <div class="text-end">
                  <span class="badge bg-primary-subtle text-primary fs-6 fw-bold font-monospace">₹${split.totalOwed.toFixed(2)}</span>
                </div>
              </div>

              
              <div class="small border-top pt-2 mt-2">
                <div class="d-flex justify-content-between text-secondary">
                  <span>Items cost:</span>
                  <span>₹${split.itemsSubtotal.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between text-secondary">
                  <span>Proportional tax (8%):</span>
                  <span>₹${split.taxShare.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between text-secondary">
                  <span>Share of delivery fee:</span>
                  <span>₹${split.deliveryShare.toFixed(2)}</span>
                </div>
              </div>

              
              <div class="mt-2 pt-2 border-top">
                <small class="text-muted fw-bold d-block mb-1">Items added:</small>
                <ul class="list-unstyled small mb-0 ps-1 text-muted">
                  ${split.items.map(it => `<li>• ${it.qty}x ${it.name} (₹${it.lineTotal.toFixed(2)})</li>`).join('')}
                </ul>
              </div>

            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  renderReceipt() {
    if (!this.currentRoom) return;

    const summary = CartManager.calculateSummary(this.currentRoom);
    const items = this.currentRoom.items || [];

    const orderNumEl = document.getElementById('receiptOrderNumber');
    if (orderNumEl) {
      orderNumEl.textContent = `CS-REC-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${this.currentRoom.code}`;
    }

    const timeEl = document.getElementById('receiptTimestamp');
    if (timeEl) {
      timeEl.textContent = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
    }

    const roomCodeEl = document.getElementById('receiptRoomCode');
    if (roomCodeEl) roomCodeEl.textContent = this.currentRoom.code;

    const roomNameEl = document.getElementById('receiptRoomName');
    if (roomNameEl) roomNameEl.textContent = this.currentRoom.name;

    const hostEl = document.getElementById('receiptGeneratedBy');
    if (hostEl) hostEl.textContent = this.currentUser?.name || 'Group Host';

    const participantsEl = document.getElementById('receiptParticipants');
    if (participantsEl) {
      const memberNames = (this.currentRoom.members || []).map(m => m.name).join(', ');
      participantsEl.textContent = memberNames || 'Group Members';
    }

    const tbody = document.getElementById('receiptItemTableBody');
    if (tbody) {
      if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">No items in the receipt.</td></tr>`;
      } else {
        tbody.innerHTML = items.map(item => `
          <tr>
            <td>
              <div class="fw-semibold text-dark">${item.name}</div>
              <small class="text-muted">${item.category || 'Grocery'} ${item.notes ? `• Note: "${item.notes}"` : ''}</small>
            </td>
            <td>
              <span class="badge bg-light text-dark border">
                ${item.addedBy?.avatar || '👤'} ${item.addedBy?.name || 'Member'}
              </span>
            </td>
            <td class="text-center font-monospace">${item.qty}</td>
            <td class="text-end font-monospace">₹${item.price.toFixed(2)}</td>
            <td class="text-end font-monospace fw-bold">₹${(item.price * item.qty).toFixed(2)}</td>
          </tr>
        `).join('');
      }
    }

    const subtotalEl = document.getElementById('receiptSubtotal');
    if (subtotalEl) subtotalEl.textContent = `₹${summary.subtotal.toFixed(2)}`;

    const taxEl = document.getElementById('receiptTax');
    if (taxEl) taxEl.textContent = `₹${summary.estimatedTax.toFixed(2)}`;

    const delivEl = document.getElementById('receiptDeliveryFee');
    if (delivEl) delivEl.textContent = `₹${summary.deliveryFee.toFixed(2)}`;

    const promoRow = document.getElementById('receiptPromoRow');
    if (promoRow) {
      promoRow.style.display = summary.isThresholdReached ? 'flex' : 'none';
    }

    const discountEl = document.getElementById('receiptDiscount');
    if (discountEl) {
      discountEl.textContent = `-₹${summary.deliverySavings.toFixed(2)}`;
    }

    const totalEl = document.getElementById('receiptGrandTotal');
    if (totalEl) totalEl.textContent = `₹${summary.grandTotal.toFixed(2)}`;

    const splitsTbody = document.getElementById('receiptSplitsTableBody');
    if (splitsTbody) {
      if (!summary.splits || summary.splits.length === 0) {
        splitsTbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No contributions.</td></tr>`;
      } else {
        splitsTbody.innerHTML = summary.splits.map(split => `
          <tr>
            <td>
              <span class="me-1">${split.avatar}</span>
              <strong>${split.name}</strong>
            </td>
            <td class="text-center">${split.itemCount}</td>
            <td class="text-end font-monospace">₹${split.itemsSubtotal.toFixed(2)}</td>
            <td class="text-end font-monospace">₹${split.taxShare.toFixed(2)}</td>
            <td class="text-end font-monospace">₹${split.deliveryShare.toFixed(2)}</td>
            <td class="text-end font-monospace fw-bold text-primary">₹${split.totalOwed.toFixed(2)}</td>
          </tr>
        `).join('');
      }
    }
  }

  async handleCopyInviteLink() {
    if (!this.currentRoom) return;
    const link = RoomManager.getInviteLink(this.currentRoom.code);
    const success = await RoomManager.copyToClipboard(link);

    const btn = document.getElementById('btnCopyInviteLink');
    if (btn) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Copied!';
      btn.classList.replace('btn-primary', 'btn-success');
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.replace('btn-success', 'btn-primary');
      }, 2000);
    }

    if (success) {
      this.showToast('Invite Link Copied', 'Share this link with roommates to pool shopping orders in real-time!', '📋', 'success');
    }
  }

  async handleCopyRoomCodeOnly() {
    if (!this.currentRoom) return;
    const code = this.currentRoom.code;
    const success = await RoomManager.copyToClipboard(code);

    const btn = document.getElementById('btnCopyRoomCodeOnly');
    if (btn) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Code Copied!';
      setTimeout(() => {
        btn.innerHTML = originalHtml;
      }, 2000);
    }

    if (success) {
      this.showToast('Room Code Copied', `Room Code "${code}" copied to clipboard!`, '🔑', 'success');
    }
  }

  showToast(title, message, icon = '🛒', type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toastId = 'toast_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center shadow-lg border-0';
    toastEl.id = toastId;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <span class="fs-4">${icon}</span>
          <div>
            <div class="fw-bold text-${type}">${title}</div>
            <div class="small text-secondary">${message}</div>
          </div>
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    container.appendChild(toastEl);

    if (window.bootstrap && window.bootstrap.Toast) {
      const bsToast = new window.bootstrap.Toast(toastEl, { delay: 3500 });
      bsToast.show();
      toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
      });
    } else {
      setTimeout(() => toastEl.remove(), 3500);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartShareApp = new CartShareApp();
  window.cartShareApp.init();
});
