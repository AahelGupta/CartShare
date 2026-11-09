const CATEGORIES = [
  { id: 'all', name: 'All Products (100)', icon: 'bi-grid-fill' },
  { id: 'groceries', name: 'Fresh Groceries', icon: 'bi-basket2-fill' },
  { id: 'pantry', name: 'Pantry & Staples', icon: 'bi-egg-fried' },
  { id: 'snacks', name: 'Snacks & Drinks', icon: 'bi-cup-straw' },
  { id: 'dorm', name: 'Dorm & Cleaning', icon: 'bi-house-heart-fill' },
  { id: 'study', name: 'Study & Work', icon: 'bi-pen-fill' }
];

const PRODUCTS = [
{
    id: 'prod_1',
    name: 'Fresh Crisp Apples',
    category: 'groceries',
    price: 180.00,
    unit: '1 kg pack',
    badge: 'Fresh & Crisp',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    description: 'Sweet, juicy, and crisp premium apples. Perfect for communal healthy snacking.'
  },
  {
    id: 'prod_2',
    name: 'Organic Cavendish Bananas',
    category: 'groceries',
    price: 65.00,
    unit: 'per dozen (~1.2 kg)',
    badge: 'Organic',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    description: 'Fresh organic ripe bananas packed with potassium. Great for morning smoothies.'
  },
  {
    id: 'prod_3',
    name: 'Farm-Fresh Brown Eggs (Dozen)',
    category: 'groceries',
    price: 95.00,
    unit: '12 large eggs',
    badge: 'Farm Fresh',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80',
    description: 'Grade A rich golden yolk farm eggs for hearty roommate breakfasts.'
  },
  {
    id: 'prod_4',
    name: 'Artisan Sourdough Loaf',
    category: 'groceries',
    price: 85.00,
    unit: '400g loaf',
    badge: 'Bakery Fresh',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80',
    description: 'Naturally fermented rustic sourdough with crispy crust and chewy, airy crumb.'
  },
  {
    id: 'prod_5',
    name: 'Fresh Full Cream Milk',
    category: 'groceries',
    price: 68.00,
    unit: '1 Litre pouch',
    badge: 'Essential',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy, nutrient-rich pasteurized full-cream fresh milk.'
  },
  {
    id: 'prod_6',
    name: 'Hass Avocados (2-Pack)',
    category: 'groceries',
    price: 199.00,
    unit: 'Pack of 2',
    badge: 'Popular',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    description: 'Ripe and ready-to-eat creamy avocados for guacamole and healthy salads.'
  },
  {
    id: 'prod_7',
    name: 'Vine-Ripened Red Tomatoes',
    category: 'groceries',
    price: 45.00,
    unit: '1 kg pack',
    badge: 'Farm Picked',
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    description: 'Firm, juicy red tomatoes rich in lycopene, perfect for curries, salads, and sandwiches.'
  },
  {
    id: 'prod_8',
    name: 'Fresh Hydroponic Baby Spinach',
    category: 'groceries',
    price: 40.00,
    unit: '250g bunch',
    badge: 'Iron Rich',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
    description: 'Crisp, washed organic spinach leaves ready for green salads, pastas, or palak paneer.'
  },
  {
    id: 'prod_9',
    name: 'Sweet Alphonso Mangoes',
    category: 'groceries',
    price: 250.00,
    unit: '1 kg (approx 4-5 pcs)',
    badge: 'Seasonal King',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    description: 'Aromatic, rich golden pulp mangoes loved by everyone in the apartment.'
  },
  {
    id: 'prod_10',
    name: 'Fresh Soft Malai Paneer',
    category: 'groceries',
    price: 110.00,
    unit: '200g vacuum block',
    badge: 'High Protein',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    description: 'Soft, melt-in-the-mouth cottage cheese paneer block for protein-packed dinners.'
  },

  {
    id: 'prod_11',
    name: 'Premium Aged Basmati Rice',
    category: 'pantry',
    price: 340.00,
    unit: '5 kg bag',
    badge: 'Pantry Staple',
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    description: 'Aromatic long-grain aged Basmati rice, an absolute essential for shared meal preps.'
  },
  {
    id: 'prod_12',
    name: 'Cold Pressed Extra Virgin Olive Oil',
    category: 'pantry',
    price: 420.00,
    unit: '500 ml bottle',
    badge: 'Cold Pressed',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'First cold-pressed extra virgin olive oil with rich fruity flavor for pastas and cooking.'
  },
  {
    id: 'prod_13',
    name: 'Durum Wheat Rigatoni Pasta',
    category: 'pantry',
    price: 110.00,
    unit: '500g pack',
    badge: '100% Durum',
    badgeColor: 'danger',
    image: 'assets/images/pasta.svg',
    description: 'Rough-textured bronze die extruded rigatoni that holds every drop of hearty sauce.'
  },
  {
    id: 'prod_14',
    name: 'Classic Basil Pasta Sauce',
    category: 'pantry',
    price: 145.00,
    unit: '350g jar',
    badge: 'Slow Cooked',
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80',
    description: 'Made with vine-ripened tomatoes, sweet garlic, and fresh fragrant basil.'
  },
  {
    id: 'prod_15',
    name: 'Artisan Dark Roast Ground Coffee',
    category: 'pantry',
    price: 280.00,
    unit: '250g pack',
    badge: 'Best Seller',
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    description: 'Single-origin dark roast blend with rich cocoa notes to power late-night study sessions.'
  },
  {
    id: 'prod_16',
    name: 'Whole Grain Rolled Oats',
    category: 'pantry',
    price: 140.00,
    unit: '1 kg zip pouch',
    badge: 'Fiber Rich',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=600&q=80',
    description: '100% whole grain jumbo rolled oats for overnight porridge and pre-workout meals.'
  },
  {
    id: 'prod_17',
    name: 'Organic Toor Dal (Arhar Dal)',
    category: 'pantry',
    price: 160.00,
    unit: '1 kg pack',
    badge: 'Unpolished',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1585994192701-f1a505c817ea?auto=format&fit=crop&w=600&q=80',
    description: 'Nutrient-rich unpolished yellow pigeon peas for authentic comforting homemade dal.'
  },
  {
    id: 'prod_18',
    name: 'Sharbati Whole Wheat Atta',
    category: 'pantry',
    price: 260.00,
    unit: '5 kg bag',
    badge: 'Chakki Fresh',
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional stone-ground whole wheat flour for fluffy, soft rotis and parathas.'
  },
  {
    id: 'prod_19',
    name: 'Pure Desi Cow Ghee',
    category: 'pantry',
    price: 380.00,
    unit: '500 ml glass jar',
    badge: 'A2 Vedic',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    description: 'Clarified aromatic butter ghee prepared using traditional bilona curd churning.'
  },
  {
    id: 'prod_20',
    name: 'Mixed Herb & Chili Flakes Seasoning',
    category: 'pantry',
    price: 85.00,
    unit: 'Twin 80g sprinklers',
    badge: 'Pizza & Pasta',
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    description: 'Dried Mediterranean oregano, thyme, and fiery red chili flakes for fast food upgrades.'
  },

  {
    id: 'prod_21',
    name: 'Sparkling Lemon Water (6-Pack)',
    category: 'snacks',
    price: 180.00,
    unit: '6 x 250 ml cans',
    badge: 'Zero Sugar',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80',
    description: 'Crisp lemon and lime sparkling soda water with micro-bubbles for refreshing breaks.'
  },
  {
    id: 'prod_22',
    name: 'Bottled Cold Brew Concentrate',
    category: 'snacks',
    price: 160.00,
    unit: '500 ml bottle',
    badge: 'High Energy',
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    description: 'Smooth, 18-hour slow-steeped cold brew concentrate. Makes up to 6 iced coffee glasses.'
  },
  {
    id: 'prod_23',
    name: 'Sea Salt Kettle Potato Chips',
    category: 'snacks',
    price: 50.00,
    unit: '120g party pack',
    badge: 'Crunchy',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    description: 'Thick-cut golden kettle-cooked chips seasoned with pure sea salt crystals.'
  },
  {
    id: 'prod_24',
    name: 'Roasted Salted Cashews & Almonds',
    category: 'snacks',
    price: 320.00,
    unit: '250g jar',
    badge: 'High Protein',
    badgeColor: 'success',
    image: 'assets/images/cashews.svg',
    description: 'Deluxe mix of jumbo cashews and California almonds roasted in Himalayan pink salt.'
  },
  {
    id: 'prod_25',
    name: '72% Dark Chocolate Almond Bar',
    category: 'snacks',
    price: 140.00,
    unit: '100g bar',
    badge: 'Sweet Treat',
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80',
    description: 'Rich bittersweet dark chocolate studded with crunchy roasted almond slivers.'
  },
  {
    id: 'prod_26',
    name: 'Double Chocolate Chunk Cookies',
    category: 'snacks',
    price: 75.00,
    unit: '200g bakery box',
    badge: 'Oven Baked',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy edges and chewy center cookies packed with dark and milk chocolate chunks.'
  },
  {
    id: 'prod_27',
    name: 'Assam Masala CTC Kadak Chai',
    category: 'snacks',
    price: 180.00,
    unit: '500g vacuum pouch',
    badge: 'Strong Aroma',
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'Bold Assam tea leaves blended with cardamom, clove, cinnamon, and dry ginger.'
  },
  {
    id: 'prod_28',
    name: 'Peri-Peri Roasted Makhana (Foxnuts)',
    category: 'snacks',
    price: 99.00,
    unit: '100g pouch',
    badge: 'Guilt-Free',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    description: 'Crunchy lotus seed pops slow-roasted in olive oil and zesty peri-peri seasoning.'
  },
  {
    id: 'prod_29',
    name: 'Tender Coconut Water (Tetra Pack)',
    category: 'snacks',
    price: 60.00,
    unit: '200 ml pack',
    badge: 'Electrolytes',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80',
    description: '100% natural, refreshing coconut water packed with potassium for instant hydration.'
  },
  {
    id: 'prod_30',
    name: 'All-Natural Crunchy Peanut Butter',
    category: 'snacks',
    price: 195.00,
    unit: '500g jar',
    badge: 'No Added Sugar',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    description: 'Made from slow-roasted peanuts with peanut chunks. 30g protein per 100g serving.'
  },

  {
    id: 'prod_31',
    name: 'Kitchen Paper Towels (2 Rolls)',
    category: 'dorm',
    price: 175.00,
    unit: 'Pack of 2 mega rolls',
    badge: 'Essential',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80',
    description: 'Strong 2-ply quick-tear sheets to handle kitchen spills and room cleanup duties.'
  },
  {
    id: 'prod_32',
    name: 'Concentrated Liquid Laundry Detergent',
    category: 'dorm',
    price: 349.00,
    unit: '1 Litre bottle',
    badge: 'High Value',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80',
    description: 'Concentrated stain-fighting liquid detergent that keeps clothes clean and fresh.'
  },
  {
    id: 'prod_33',
    name: 'Citrus Dishwashing Liquid Gel',
    category: 'dorm',
    price: 95.00,
    unit: '500 ml bottle',
    badge: 'Grease Buster',
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?auto=format&fit=crop&w=600&q=80',
    description: 'Cuts through oily cookware grease quickly with real lemon extracts.'
  },
  {
    id: 'prod_34',
    name: 'Heavy Duty Drawstring Garbage Bags',
    category: 'dorm',
    price: 130.00,
    unit: 'Pack of 30 bags',
    badge: 'Tear Proof',
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
    description: 'Flexible leak-proof garbage bags with sturdy tie strings for dorm bins.'
  },
  {
    id: 'prod_35',
    name: 'Disinfectant Surface Cleaner Spray',
    category: 'dorm',
    price: 165.00,
    unit: '500 ml trigger spray',
    badge: 'Kills 99.9%',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80',
    description: 'Antibacterial cleaning spray for study tables, keyboards, and kitchen counters.'
  },
  {
    id: 'prod_36',
    name: 'Antibacterial Handwash Refill',
    category: 'dorm',
    price: 120.00,
    unit: '750 ml value pouch',
    badge: 'Moisturizing',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1608248597359-56cb3e4811a2?auto=format&fit=crop&w=600&q=80',
    description: 'Gentle pH-balanced liquid hand soap enriched with aloe vera and tea tree oil.'
  },
  {
    id: 'prod_37',
    name: 'Microfiber Cleaning Cloths (4-Pack)',
    category: 'dorm',
    price: 149.00,
    unit: 'Pack of 4 colors',
    badge: 'Lint Free',
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
    description: 'Super absorbent microfiber towels for dusting monitors, mirrors, and tabletops.'
  },
  {
    id: 'prod_38',
    name: 'Lavender Breeze Room Air Freshener',
    category: 'dorm',
    price: 190.00,
    unit: '250 ml automatic spray',
    badge: 'Long Lasting',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
    description: 'Eliminates dorm odor and keeps the shared common room smelling relaxed.'
  },
  {
    id: 'prod_39',
    name: 'Ultra-Soft 3-Ply Facial Tissues',
    category: 'dorm',
    price: 90.00,
    unit: 'Pop-up box (100 pulls)',
    badge: 'Skin Friendly',
    badgeColor: 'light',
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80',
    description: 'Gentle, virgin wood-pulp facial tissues for daily use, cold relief, and desktop care.'
  },
  {
    id: 'prod_40',
    name: 'Non-Scratch Dish Sponge Scrubbers',
    category: 'dorm',
    price: 80.00,
    unit: 'Pack of 6 scrubbers',
    badge: 'Durable',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
    description: 'Double-sided cleaning sponges that clean non-stick pans without leaving scratches.'
  },

  {
    id: 'prod_41',
    name: 'Gel Ink Rollerball Pens (Pack of 5)',
    category: 'study',
    price: 90.00,
    unit: '5 pens (assorted)',
    badge: 'Smooth Ink',
    badgeColor: 'primary',
    image: 'assets/images/pens.svg',
    description: 'Quick-drying, no-smear 0.7mm gel pens for color-coded notes and assignments.'
  },
  {
    id: 'prod_42',
    name: 'Ruled Spiral Notebooks (3-Pack)',
    category: 'study',
    price: 180.00,
    unit: '3 notebooks (300 pgs)',
    badge: 'Premium Paper',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80',
    description: 'Heavyweight bleed-resistant smooth paper with sturdy spiral coil bindings.'
  },
  {
    id: 'prod_43',
    name: 'Super Sticky Note Pads (3-Pack)',
    category: 'study',
    price: 85.00,
    unit: '3 pads x 100 sheets',
    badge: 'Bright Neon',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    description: 'Self-adhesive reminder notes for dorm door memos, task tracking, and exam goals.'
  },
  {
    id: 'prod_44',
    name: 'Fluorescent Chisel Tip Highlighters',
    category: 'study',
    price: 110.00,
    unit: 'Pack of 5 colors',
    badge: 'No Bleed',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
    description: 'Vibrant non-toxic highlighters for textbook revision, key terms, and summary sheets.'
  },
  {
    id: 'prod_45',
    name: 'Metal Mesh Desk Pen & Caddy Organizer',
    category: 'study',
    price: 240.00,
    unit: 'Multi-compartment caddy',
    badge: 'Desk Declutter',
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    description: 'Sturdy black powder-coated wire mesh organizer for pens, scissors, sticky notes, and clips.'
  },
  {
    id: 'prod_46',
    name: 'Nylon Braided 65W Fast USB-C Cable',
    category: 'study',
    price: 199.00,
    unit: '2-Meter tough cable',
    badge: 'Fast Charge',
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80',
    description: 'Tangle-free reinforced cable compatible with laptops, tablets, and Android smartphones.'
  },
  {
    id: 'prod_47',
    name: 'Framed Magnetic Whiteboard with Markers',
    category: 'study',
    price: 350.00,
    unit: '1.5 x 1 ft board + 2 pens',
    badge: 'Exam Prep',
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    description: 'Smooth magnetic writing board for project scheduling, roommate chore charts, and study formulas.'
  },
  {
    id: 'prod_48',
    name: 'Ergonomic Silent Wireless Mouse',
    category: 'study',
    price: 399.00,
    unit: '2.4GHz + Bluetooth',
    badge: 'Silent Clicks',
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    description: 'Rechargeable wireless optical mouse with quiet click switches that will not disturb roommates.'
  },
  {
    id: 'prod_49',
    name: 'Rechargeable LED Desk Gooseneck Lamp',
    category: 'study',
    price: 450.00,
    unit: '3 brightness levels',
    badge: 'Eye Care',
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    description: 'Flexible 360-degree neck LED study lamp with eye-friendly warm and cool dimmable light.'
  },
  {
    id: 'prod_50',
    name: '4-Socket Spike Guard Extension Board',
    category: 'study',
    price: 380.00,
    unit: '2-Meter heavy duty cord',
    badge: 'Surge Protected',
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    description: 'Equipped with master switch and safety shutter sockets to charge laptop, phone, and lamp together.'
  },
  {
    id: 'prod_51',
    name: "Fresh Seedless Red Grapes",
    category: 'groceries',
    price: 140.00,
    unit: "500g box",
    badge: "Sweet & Crisp",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80',
    description: "Juicy and plump seedless red globe grapes, perfect for study break snacking."
  },
  {
    id: 'prod_52',
    name: "Crisp European Cucumbers",
    category: 'groceries',
    price: 40.00,
    unit: "500g pack",
    badge: "Cool & Fresh",
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80',
    description: "Thin-skinned refreshing cucumbers ideal for healthy salads and sandwiches."
  },
  {
    id: 'prod_53',
    name: "Fresh Red Bell Peppers (Capsicum)",
    category: 'groceries',
    price: 60.00,
    unit: "Pack of 2",
    badge: "Vitamin C",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80',
    description: "Sweet and crunchy red capsicum peppers for pastas, pizzas, and fajitas."
  },
  {
    id: 'prod_54',
    name: "Fresh White Button Mushrooms",
    category: 'groceries',
    price: 75.00,
    unit: "200g tray",
    badge: "Farm Picked",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=600&q=80',
    description: "Plump earthy button mushrooms great for garlic saut\u00e9s, omelets, and soups."
  },
  {
    id: 'prod_55',
    name: "Sweet Golden American Corn",
    category: 'groceries',
    price: 50.00,
    unit: "Pack of 2 cobs",
    badge: "Juicy Kernels",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    description: "Tender sweet corn cobs for boiling, steaming, or making hot buttered corn cups."
  },
  {
    id: 'prod_56',
    name: "Crisp Crunchy Baby Carrots",
    category: 'groceries',
    price: 55.00,
    unit: "500g pouch",
    badge: "Beta Carotene",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
    description: "Sweet washed baby carrots ready to dip in hummus or munch between lectures."
  },
  {
    id: 'prod_57',
    name: "Thick Greek Style Natural Yogurt",
    category: 'groceries',
    price: 90.00,
    unit: "400g tub",
    badge: "Probiotics",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    description: "Creamy high-protein plain Greek dahi yogurt for fruit bowls and dressings."
  },
  {
    id: 'prod_58',
    name: "Fresh Sweet Strawberries Box",
    category: 'groceries',
    price: 120.00,
    unit: "250g punnet",
    badge: "Berry Fresh",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80',
    description: "Hand-picked fragrant ripe strawberries for shakes, pancakes, and desserts."
  },
  {
    id: 'prod_59',
    name: "Fresh Juicy Yellow Lemons",
    category: 'groceries',
    price: 35.00,
    unit: "Pack of 6",
    badge: "Zesty Citrus",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    description: "Tangy juicy lemons essential for refreshing lemonade and seasoning curries."
  },
  {
    id: 'prod_60',
    name: "Whole Wheat Multigrain Bread",
    category: 'groceries',
    price: 60.00,
    unit: "400g sliced loaf",
    badge: "High Fiber",
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: "Hearty multigrain bread studded with flax, sesame, and sunflower seeds."
  },
  {
    id: 'prod_61',
    name: "Organic Yellow Moong Dal (Split)",
    category: 'pantry',
    price: 145.00,
    unit: "1 kg pack",
    badge: "Easy Digest",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    description: "Light, protein-rich split yellow lentils ideal for quick khichdi and soups."
  },
  {
    id: 'prod_62',
    name: "Kabuli Chana (White Chickpeas)",
    category: 'pantry',
    price: 165.00,
    unit: "1 kg pack",
    badge: "High Protein",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80',
    description: "Large plump chickpeas perfect for spicy chole, creamy hummus, and salads."
  },
  {
    id: 'prod_63',
    name: "Pure Ground Turmeric (Haldi) Powder",
    category: 'pantry',
    price: 70.00,
    unit: "200g pack",
    badge: "High Curcumin",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    description: "Aromatic golden turmeric with strong natural anti-inflammatory benefits."
  },
  {
    id: 'prod_64',
    name: "Kashmiri Red Chili Powder",
    category: 'pantry',
    price: 95.00,
    unit: "200g pack",
    badge: "Rich Color",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    description: "Mild heat red chili powder that gives gravies an appetizing vibrant red color."
  },
  {
    id: 'prod_65',
    name: "Himalayan Pink Rock Salt Jar",
    category: 'pantry',
    price: 65.00,
    unit: "500g shaker jar",
    badge: "84 Minerals",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=600&q=80',
    description: "Pure unrefined crystalline mineral pink salt for daily cooking."
  },
  {
    id: 'prod_66',
    name: "Pure Raw Forest Wild Honey",
    category: 'pantry',
    price: 220.00,
    unit: "500g glass jar",
    badge: "Unprocessed",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: "100% pure raw amber honey, a natural healthy sweetener for teas and oats."
  },
  {
    id: 'prod_67',
    name: "Organic Brown Unrefined Sugar",
    category: 'pantry',
    price: 90.00,
    unit: "1 kg zip pack",
    badge: "Unbleached",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80',
    description: "Natural brown cane sugar crystals rich in molasses for baking and beverages."
  },
  {
    id: 'prod_68',
    name: "Dark Soy Sauce & Stir-Fry Glaze",
    category: 'pantry',
    price: 135.00,
    unit: "300 ml glass bottle",
    badge: "Umami Rich",
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80',
    description: "Naturally brewed deep savory soy sauce for roommate midnight noodle preps."
  },
  {
    id: 'prod_69',
    name: "Korean Spicy Ramen Multi-Pack",
    category: 'pantry',
    price: 160.00,
    unit: "Pack of 8 individual packs",
    badge: "Dorm Favorite",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: "Chewy springy ramen noodles with rich savory vegetable broth seasoning."
  },
  {
    id: 'prod_70',
    name: "Roasted White Sesame Seeds (Til)",
    category: 'pantry',
    price: 80.00,
    unit: "200g jar",
    badge: "Calcium Rich",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
    description: "Golden toasted white sesame seeds for garnishing noodles, rice, and salads."
  },
  {
    id: 'prod_71',
    name: "Kerala Pepper Banana Chips",
    category: 'snacks',
    price: 80.00,
    unit: "150g pouch",
    badge: "Coconut Oil",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    description: "Thin-sliced raw plantain chips fried crisp in pure coconut oil with black pepper."
  },
  {
    id: 'prod_72',
    name: "Salted California Roasted Pistachios",
    category: 'snacks',
    price: 390.00,
    unit: "250g zip pouch",
    badge: "Premium Snack",
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80',
    description: "In-shell slow-roasted pistachios lightly salted for mindful snacking."
  },
  {
    id: 'prod_73',
    name: "Fruit & Nut Omega Energy Trail Mix",
    category: 'snacks',
    price: 210.00,
    unit: "200g pouch",
    badge: "Brain Food",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1536591375315-1b838b97d312?auto=format&fit=crop&w=600&q=80',
    description: "Nutritious blend of walnuts, cranberries, pumpkin seeds, and dark raisins."
  },
  {
    id: 'prod_74',
    name: "Sparkling Orange Pulp Juice Drink",
    category: 'snacks',
    price: 70.00,
    unit: "300 ml glass bottle",
    badge: "Real Fruit",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    description: "Effervescent citrus soda made with real Valencia orange juice and pulp."
  },
  {
    id: 'prod_75',
    name: "Organic Detox Green Tea Bags",
    category: 'snacks',
    price: 175.00,
    unit: "Box of 25 bags",
    badge: "Antioxidants",
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
    description: "Whole leaf green tea blended with tulsi and mint for focus and digestion."
  },
  {
    id: 'prod_76',
    name: "Movie Theater Butter Microwave Popcorn",
    category: 'snacks',
    price: 60.00,
    unit: "Pack of 3 bags",
    badge: "Movie Night",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80',
    description: "Warm buttery fluffy popcorn ready in 3 minutes for group binge sessions."
  },
  {
    id: 'prod_77',
    name: "Chocolate Hazelnut Cream Spread",
    category: 'snacks',
    price: 260.00,
    unit: "350g glass jar",
    badge: "Rich Cocoa",
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    description: "Decadent cocoa and hazelnut spread for morning toast, waffles, or by the spoonful."
  },
  {
    id: 'prod_78',
    name: "Oats & Honey Crunchy Granola Bars",
    category: 'snacks',
    price: 150.00,
    unit: "Box of 6 snack bars",
    badge: "On-the-Go",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80',
    description: "Wholesome baked oat bars lightly sweetened with honey to fuel active days."
  },
  {
    id: 'prod_79',
    name: "Salted Caramel Pretzel Crisps",
    category: 'snacks',
    price: 110.00,
    unit: "120g pouch",
    badge: "Sweet & Salty",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80',
    description: "Flat, crispy pretzel crackers coated in a decadent salted caramel glaze."
  },
  {
    id: 'prod_80',
    name: "Raw Apple Cider Vinegar with Mother",
    category: 'snacks',
    price: 275.00,
    unit: "500 ml bottle",
    badge: "Immunity",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=600&q=80',
    description: "Naturally fermented unfiltered apple cider vinegar for morning health tonics."
  },
  {
    id: 'prod_81',
    name: "Wooden Clothes Pegs / Clips",
    category: 'dorm',
    price: 99.00,
    unit: "Pack of 24 clips",
    badge: "Eco Friendly",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
    description: "Sturdy natural birchwood clothespins with rust-resistant steel coil springs."
  },
  {
    id: 'prod_82',
    name: "Floral Fabric Softener Conditioner",
    category: 'dorm',
    price: 220.00,
    unit: "1 Litre bottle",
    badge: "Touch Soft",
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?auto=format&fit=crop&w=600&q=80',
    description: "Keeps bedsheets, hoodies, and towels luxuriously soft and smelling like fresh roses."
  },
  {
    id: 'prod_83',
    name: "Power Toilet Bowl Disinfectant Gel",
    category: 'dorm',
    price: 115.00,
    unit: "750 ml angled nozzle",
    badge: "10x Cleaner",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80',
    description: "Thick clinging formula that removes tough stains and kills 99.9% of bathroom germs."
  },
  {
    id: 'prod_84',
    name: "Multi-Utility Desk & Shelf Baskets",
    category: 'dorm',
    price: 180.00,
    unit: "Set of 3 baskets",
    badge: "Organization",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80',
    description: "Nesting plastic organizer bins for toiletries, medicines, and cables."
  },
  {
    id: 'prod_85',
    name: "Extra Sticky Fabric Lint Roller",
    category: 'dorm',
    price: 160.00,
    unit: "Handle + 2 Refills",
    badge: "Pet & Dust",
    badgeColor: 'light',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
    description: "Quickly removes lint, pet hair, and fuzz from dark jackets and blankets."
  },
  {
    id: 'prod_86',
    name: "Quick-Drying Microfiber Bath Towel",
    category: 'dorm',
    price: 320.00,
    unit: "Large 70x140cm",
    badge: "Ultra Absorbent",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
    description: "Super lightweight and fast-drying plush bath towel perfect for hostel showers."
  },
  {
    id: 'prod_87',
    name: "Mosquito Repellent Liquid Refills",
    category: 'dorm',
    price: 140.00,
    unit: "Twin pack (90 nights)",
    badge: "Sound Sleep",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
    description: "Fits all standard electrical plug-in vaporizers to keep insects away all night."
  },
  {
    id: 'prod_88',
    name: "Stainless Steel Kitchen & Craft Scissors",
    category: 'dorm',
    price: 95.00,
    unit: "8-Inch ergonomic",
    badge: "Sharp & Sturdy",
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    description: "Versatile rust-resistant shears to open delivery packages and cut groceries."
  },
  {
    id: 'prod_89',
    name: "Insulated Stainless Steel Water Bottle",
    category: 'dorm',
    price: 349.00,
    unit: "1 Litre leakproof",
    badge: "24hr Cold",
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    description: "Double-wall vacuum flask that keeps water chilled through long college lectures."
  },
  {
    id: 'prod_90',
    name: "Foldable Canvas Dorm Laundry Hamper",
    category: 'dorm',
    price: 260.00,
    unit: "55 Litre capacity",
    badge: "Space Saver",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
    description: "Collapsible waterproof fabric basket with handles to carry clothes to the laundry."
  },
  {
    id: 'prod_91',
    name: "Permanent Chisel Tip Markers (4-Pack)",
    category: 'study',
    price: 140.00,
    unit: "Assorted 4 colors",
    badge: "Waterproof",
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
    description: "Quick-drying indelible ink markers for labeling dorm boxes, files, and posters."
  },
  {
    id: 'prod_92',
    name: "Stainless Steel Precision Scale (30cm)",
    category: 'study',
    price: 45.00,
    unit: "12-Inch steel ruler",
    badge: "Laser Etched",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1585336261026-77884ff36665?auto=format&fit=crop&w=600&q=80',
    description: "Durable metal ruler with millimeter and inch markings for technical sketches."
  },
  {
    id: 'prod_93',
    name: "Ergonomic Foldable Aluminum Laptop Stand",
    category: 'study',
    price: 499.00,
    unit: "6-Level height adjust",
    badge: "Neck Relief",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
    description: "Elevates laptop screen to eye level to improve posture and enhance cooling airflow."
  },
  {
    id: 'prod_94',
    name: "Extended Gaming & Desk Mousepad",
    category: 'study',
    price: 299.00,
    unit: "800 x 300 mm",
    badge: "Smooth Glide",
    badgeColor: 'dark',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    description: "Spacious anti-slip rubber base mat covering both keyboard and mouse area."
  },
  {
    id: 'prod_95',
    name: "Heavy Duty 2-Hole Paper Puncher",
    category: 'study',
    price: 160.00,
    unit: "16-Sheet punch capacity",
    badge: "Metal Build",
    badgeColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    description: "Precision hole punch machine with center guide to neatly file lecture notes."
  },
  {
    id: 'prod_96',
    name: "Clear Book Covers & Tape Set",
    category: 'study',
    price: 90.00,
    unit: "10 Rolls + Mini Cutter",
    badge: "Stationery Kit",
    badgeColor: 'info',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80',
    description: "Self-adhesive transparent protective film to laminate reference textbooks."
  },
  {
    id: 'prod_97',
    name: "32GB High-Speed USB 3.0 Flash Drive",
    category: 'study',
    price: 320.00,
    unit: "Metal body keychain",
    badge: "Fast Transfer",
    badgeColor: 'primary',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80',
    description: "Compact metal flash drive to backup project code, presentations, and submissions."
  },
  {
    id: 'prod_98',
    name: "Adhesive Cable Clips & Cord Ties",
    category: 'study',
    price: 110.00,
    unit: "Pack of 20 clips",
    badge: "Tidy Desk",
    badgeColor: 'warning',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    description: "Cable management clamps to keep phone, tablet, and charger cables organized."
  },
  {
    id: 'prod_99',
    name: "Correction Tape & Precision Glue Pen",
    category: 'study',
    price: 85.00,
    unit: "Twin duo pack",
    badge: "Instant Dry",
    badgeColor: 'danger',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
    description: "Tear-resistant white-out tape that allows immediate rewriting with no mess."
  },
  {
    id: 'prod_100',
    name: "Ultra-Soft Noise Cancelling Earplugs",
    category: 'study',
    price: 130.00,
    unit: "Pack of 5 pairs in case",
    badge: "Silent Study",
    badgeColor: 'success',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: "High-density soft memory foam earplugs for undisturbed study sessions and deep sleep."
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
              <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
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
