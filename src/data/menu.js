// ─────────────────────────────────────────────────────────────────────────────
// MI ZACAZONAPAN — Menu Data (extracted from physical printed menu)
// Bilingual: ES / EN names and descriptions
// Orden: Breakfast → Lonches/Tortas → Tacos → Quesadillas → Burritos → Sopes/Picaditas → Tipos de Carne → Barbacoa → Menudo → Extras
// ─────────────────────────────────────────────────────────────────────────────

export const MENU_DATA = {
  // ── 1. DESAYUNOS / BREAKFAST ──────────────────────────────────────────────
  breakfast: {
    title: "Breakfast / Desayunos",
    subtitle: "Iniciando el día con el sazón de casa",
    items: [
      {
        id: "b1",
        name: "Huevos Rancheros",
        nameEn: "Ranchero Eggs",
        description:
          "Dos huevos frescos sobre tortillas de maíz calientes, bañados en salsa ranchera, queso fresco y cilantro.",
        descriptionEn:
          "Two farm-fresh eggs on hot corn tortillas, smothered in ranchera sauce, queso fresco, and cilantro.",
        image: "/images/huevos-rancheros.webp",
        spicy: true,
        popular: true,
      },
      {
        id: "b2",
        name: "Breakfast Tacos",
        nameEn: "Breakfast Tacos",
        description:
          "Taco de desayuno individual (por pieza) en tortilla hecha a mano (harina o maíz). Relleno de huevo revuelto con tu ingrediente a elegir: tocino, papa, chorizo, jamón, salchicha, chicharrón, frijol, migas o a la mexicana. Se pueden añadir ingredientes extras.",
        descriptionEn:
          "Single breakfast taco on a handmade tortilla (flour or corn). Filled with scrambled eggs and your choice of ingredient: bacon, potato, chorizo, ham, sausage, pork rind, beans, migas, or Mexican style. Extra ingredients can be added.",
        image: "/images/breackfast-tacos.webp",
        customizable: true,
        popular: true,
      },
      {
        id: "b3",
        name: "Burrito de Desayuno",
        nameEn: "Breakfast Burrito",
        description:
          "Burrito ala carta con arroz y frijoles.",
        descriptionEn:
          "Burrito a la carte with rice and beans.",
        image: "/images/burrito (3).webp",
        popular: true,
        customizable: true,
      },
      {
        id: "b4",
        name: "Café de Olla",
        nameEn: "Mexican Clay Pot Coffee",
        description:
          "Café auténtico mexicano preparado en olla de barro con piloncillo real, rajas de canela y anís estrella. Caliente y aromático.",
        descriptionEn:
          "Authentic Mexican coffee brewed in a traditional clay pot with real piloncillo sugar, cinnamon sticks, and star anise.",
        image: "/images/cafe-de-olla.webp",
        popular: true,
      },
      {
        id: "b5",
        name: "Huevito en Salsa",
        nameEn: "Eggs in Salsa",
        description:
          "Arroz, frijoles y cecina.",
        descriptionEn:
          "Rice, beans and cecina.",
        image: "/images/huevito en salasa.webp",
        spicy: true,
      },
      {
        id: "b6",
        name: "Vegetariano",
        nameEn: "Vegetarian Breakfast",
        description:
          "Huevos de granja revueltos con nopales tiernos salteados, cebolla, jitomate, jalapeño y rebanadas de aguacate fresco.",
        descriptionEn:
          "Farm eggs scrambled with sautéed baby nopales, sweet onions, juicy tomatoes, jalapeño, and fresh sliced avocado.",
        image: "/images/vegetariano.webp",
      },
      {
        id: "b7",
        name: "Chilaquiles",
        nameEn: "Chilaquiles",
        description:
          "Totopos caseros en salsa roja o verde, cubiertos con dos huevos fritos, crema mexicana, queso fresco y aguacate fresco.",
        descriptionEn:
          "Homemade tortilla chips simmered in red or green salsa, topped with two fried eggs, Mexican cream, queso fresco, and fresh avocado.",
        image: "/images/chilaquiles-finales.webp",
        spicy: true,
        popular: true,
      },
    ],
  },

  // ── 2. LONCHES / TORTAS ──────────────────────────────────────────────────
  lonches: {
    title: "Lonches / Tortas",
    subtitle: "El sándwich mexicano de la casa",
    items: [
      {
        id: "l1",
        name: "Torta Cubana",
        nameEn: "Cuban Torta",
        description:
          "El sándwich definitivo: bolillo tostado con milanesa, jamón, chorizo, huevo, hot dog, queso, aguacate y jalapeños encurtidos.",
        descriptionEn:
          "The ultimate Mexican sandwich: toasted bolillo with milanesa, ham, chorizo, scrambled eggs, hot dog, cheese, avocado, and pickled jalapeños.",
        image: "/images/torta-cubana.webp",
        popular: true,
      },
    ],
  },

  // ── 3. TACOS ────────────────────────────────────────────────────────────
  tacos: {
    title: "Tacos",
    subtitle: "En tortilla hecha a mano al momento",
    items: [
      {
        id: "tc1",
        name: "Tacos de Carne",
        nameEn: "Street Tacos",
        description:
          "Tres tacos auténticos en tortilla de maíz hecha a mano con tu elección de carne, cilantro, cebolla y salsa de la casa.",
        descriptionEn:
          "Three authentic tacos on handmade corn tortillas with your choice of meat, cilantro, onion, and house salsa.",
        image: "/images/tacos (2).webp",
        customizable: true,
        popular: true,
      },
      {
        id: "tc2",
        name: "Tocino y Huevo",
        nameEn: "Bacon and Egg",
        description:
          "Tocino ahumado crujiente revuelto con huevo esponjoso en tortilla de harina hecha a mano.",
        descriptionEn: "Smoky crispy bacon scrambled with fluffy eggs in a handmade flour tortilla.",
        image: null,
        popular: true,
      },
      {
        id: "tc3",
        name: "Papas y Huevo",
        nameEn: "Potato and Egg",
        description:
          "Papas doradas sazonadas revueltas con huevos de granja en tortilla casera.",
        descriptionEn: "Savory seasoned golden potatoes scrambled with farm eggs in a handmade tortilla.",
        image: null,
      },
      {
        id: "tc4",
        name: "Jamón y Huevo",
        nameEn: "Ham and Egg",
        description:
          "Jamón ahumado clásico con huevo revuelto dentro de una tortilla gruesa y caliente.",
        descriptionEn: "Classic smoked ham paired with scrambled eggs inside a warm, thick tortilla.",
        image: null,
      },
      {
        id: "tc5",
        name: "Nopal y Huevo",
        nameEn: "Cactus and Egg",
        description:
          "Nopales tiernos a la plancha revueltos con huevos frescos. Nutritivo y lleno de sabor.",
        descriptionEn:
          "Tender grilled cactus pads scrambled with fresh eggs. Nutritious and packed with heritage flavor.",
        image: null,
      },
      {
        id: "tc6",
        name: "Salchicha y Huevo",
        nameEn: "Sausage and Egg",
        description:
          "Salchicha mexicana a la sartén revuelta con huevos esponjosos en tortilla hecha a mano.",
        descriptionEn:
          "Pan-fried Mexican sausage scrambled with fluffy eggs in a handmade tortilla.",
        image: null,
      },
      {
        id: "tc7",
        name: "Migas",
        nameEn: "Migas",
        description:
          "Tiras crujientes de tortilla de maíz revueltas con huevos frescos, cebolla, jitomate y queso derretido.",
        descriptionEn:
          "Traditional crunchy corn tortilla strips scrambled with fresh eggs, onions, tomatoes, and melted cheese.",
        image: null,
        popular: true,
      },
      {
        id: "tc8",
        name: "Frijol y Huevo",
        nameEn: "Bean and Egg",
        description:
          "Frijoles pintos refritos cremosos con huevo revuelto suave en tortilla hecha a mano.",
        descriptionEn:
          "Creamy pinto refried beans scrambled with soft eggs in a handmade tortilla.",
        image: null,
      },
      {
        id: "tc9",
        name: "Frijoles y Queso",
        nameEn: "Beans and Cheese",
        description:
          "Frijoles refritos con mezcla de queso Monterey Jack y Cheddar derretido. Sencillo y glorioso.",
        descriptionEn:
          "Simple yet glorious. Creamy refried pinto beans with melted Monterey Jack and Cheddar cheese blend.",
        image: null,
      },
      {
        id: "tc10",
        name: "Mexicano y Huevo",
        nameEn: "Mexican Style and Egg",
        description:
          "Huevo revuelto estilo mexicano con jitomate, cebolla, chile serrano y cilantro fresco.",
        descriptionEn:
          "Scrambled egg Mexican style with tomato, onion, serrano chile, and fresh cilantro.",
        image: null,
        spicy: true,
      },
      {
        id: "tc11",
        name: "Fajita y Huevo",
        nameEn: "Fajita and Egg",
        description:
          "Tiras de fajita de pollo marinadas a la parrilla revueltas con huevo en tortilla hecha a mano.",
        descriptionEn:
          "Grilled marinated chicken fajita strips scrambled with egg in a handmade tortilla.",
        image: null,
        popular: true,
      },
      {
        id: "tc12",
        name: "Chicharrón y Huevos",
        nameEn: "Pork Rind and Eggs",
        description:
          "Chicharrón de cerdo crujiente guisado con huevos en salsa verde o roja. Un clásico irresistible.",
        descriptionEn:
          "Crispy pork rinds braised with eggs in green or red salsa. An irresistible classic.",
        image: null,
        spicy: true,
        popular: true,
      },
      {
        id: "tc13",
        name: "Chorizo y Huevo",
        nameEn: "Chorizo and Egg",
        description:
          "Chorizo artesanal de cerdo bien dorado y revuelto con huevos frescos. Vibrante y delicioso.",
        descriptionEn:
          "Rich artisanal pork chorizo browned and scrambled with fresh eggs. Vibrant and delicious.",
        image: null,
        popular: true,
      },
    ],
  },

  // ── 4. QUESADILLAS ───────────────────────────────────────────────────────
  quesadillas: {
    title: "Quesadillas",
    subtitle: "Queso Oaxaca fundido en tortilla artesanal",
    items: [
      {
        id: "q1",
        name: "Quesadilla Gigante",
        nameEn: "Giant Quesadilla",
        description:
          "Tortilla de harina gigante asada a la plancha con queso Oaxaca derretido y tu elección de carne. Servida con crema y guacamole.",
        descriptionEn:
          "Giant grilled flour tortilla with melted Oaxaca cheese and your choice of sizzling grilled meat. Served with crema and guacamole.",
        image: "/images/quesadilla (2).webp",
        customizable: true,
        popular: true,
      },
      {
        id: "q2",
        name: "Quesabirria con Consomé",
        nameEn: "Quesabirria with Consommé",
        description:
          "Tres tortillas de maíz fritas rellenas de queso fundido y birria de res deshebrada, servidas con taza de consomé caliente para sumergir.",
        descriptionEn:
          "Three crispy cheese-stuffed corn tortillas filled with slow-cooked shredded beef birria. Served with hot consommé broth for dipping.",
        image: "/images/quesabirria.webp",
        popular: true,
      },
    ],
  },

  // ── 5. BURRITOS ──────────────────────────────────────────────────────────
  burritos: {
    title: "Burritos",
    subtitle: "Gigantes, enrollados y llenos de sabor",
    items: [
      {
        id: "bu1",
        name: "Burrito a la Carta (Armado al gusto)",
        nameEn: "A La Carte Burrito (Build Your Own)",
        description:
          "Crea tu burrito ideal a la carta: elige tu carne, frijoles, arroz, quesos derretidos, verduras frescas y salsas de la casa.",
        descriptionEn:
          "Customize your dream burrito a la carte: choose your meat, beans, rice, melted cheeses, fresh veggies, and house salsas.",
        image: "/images/burrito (2).webp",
        customizable: true,
        popular: true,
      },
      {
        id: "bu2",
        name: "Plato de Burrito",
        nameEn: "Burrito Platter",
        description:
          "Tu burrito favorito servido en plato, acompañado con arroz y frijoles.",
        descriptionEn:
          "Your favorite burrito served on a plate, accompanied by a side of rice and beans.",
        image: "/images/burrito (3).webp",
        customizable: true,
        popular: false,
      },
    ],
  },

  // ── 6. SOPES / PICADITAS ─────────────────────────────────────────────────
  sopes: {
    title: "Sopes / Picaditas",
    subtitle: "Masa artesanal con todos los toppings",
    items: [
      {
        id: "sp1",
        name: "Sopes Surtidos",
        nameEn: "Sopes Trio",
        description:
          "Tres sopes caseros crujientes con frijoles, tu elección de carne, lechuga, jitomate, crema, queso fresco y salsa picosa.",
        descriptionEn:
          "Three crispy handmade sopes with beans, choice of meat, lettuce, tomato, cream, fresh cheese, and spicy salsa.",
        image: "/images/sopes (2).webp",
        customizable: true,
        popular: true,
      },
      {
        id: "sp2",
        name: "Picaditas",
        nameEn: "Picaditas",
        description:
          "Tres gorditas de masa de maíz pellizcadas en los bordes, cubiertas con frijoles, salsa verde o roja, queso fresco, cebolla y crema.",
        descriptionEn:
          "Three thick handmade corn masa shells pinched at the edges, layered with refried beans, salsa, crumbled queso fresco, onions, and crema.",
        image: null,
        spicy: true,
      },
      {
        id: "sp3",
        name: "Platillo Mi Zacazonapan",
        nameEn: "Mi Zacazonapan Special",
        description:
          "El platillo estrella de la casa: carne a la plancha acompañada de nopales, frijoles de olla, arroz, tortillas hechas a mano y toda la salsa.",
        descriptionEn:
          "The house star dish: grilled meat accompanied by nopales, pot-cooked beans, rice, handmade tortillas, and all the salsa.",
        image: "/images/mi-zacazonapan.webp",
        popular: true,
      },
    ],
  },

  // ── 7. BARBACOA ──────────────────────────────────────────────────────────
  barbacoa: {
    title: "Ricas Barbacoas",
    subtitle: "Viernes y Sábado · Barbacoa de Res y de Chivo",
    items: [
      {
        id: "ba1",
        name: "Barbacoa de Res",
        nameEn: "Beef Barbacoa",
        description:
          "Barbacoa de res cocida a vapor lentamente, profundamente sazonada con hojas de aguacate y chiles. Se deshace en la boca. Por libra o por taco.",
        descriptionEn:
          "Slow steam-cooked shredded beef barbacoa, seasoned with avocado leaves and chiles. Melt-in-your-mouth tender. By the pound or by taco.",
        image: "/images/barbacoa-de-res.webp",
        popular: true,
      },
      {
        id: "ba2",
        name: "Barbacoa de Chivo",
        nameEn: "Goat Barbacoa",
        description:
          "Rica barbacoa de chivo los sábados. Carne de chivo cocida a baja temperatura con especias tradicionales. Servida con consomé caliente.",
        descriptionEn:
          "Goat barbacoa available Saturdays only. Slow-cooked with traditional spices and served with hot consommé broth.",
        image: "/images/BerbacoaDeChivo.webp",
        popular: true,
      },
      {
        id: "ba3",
        name: "Servido de Chivo",
        nameEn: "Goat Plate",
        description:
          "Plato completo con barbacoa de chivo tierna, consomé de garbanzo, cebollitas, cilantro, limón y salsa roja. Sábados únicamente.",
        descriptionEn:
          "Full platter with tender goat barbacoa, chickpea consommé broth, cebollitas, cilantro, lime, and red salsa. Saturdays only.",
        image: "/images/servido-de-chivo.webp",
      },
      {
        id: "ba4",
        name: "Cabeza de Res",
        nameEn: "Beef Head Meat",
        description:
          "Carne de cabeza de res cocida a vapor, ultra tierna. Disponible viernes y sábados. Servida en taco o por libra con cilantro y cebolla.",
        descriptionEn:
          "Steam-cooked beef head meat, ultra tender. Available Fridays and Saturdays. Served as taco or by the pound with cilantro and onion.",
        image: null,
      },
    ],
  },

  // ── 8. MENUDO ────────────────────────────────────────────────────────────
  menudo: {
    title: "Menudo",
    subtitle: "Viernes y Sábado · El remedio de la casa",
    items: [
      {
        id: "m1",
        name: "Menudo Tradicional",
        nameEn: "Traditional Menudo",
        description:
          "Caldo de panza de res auténtico simmered en caldo de chile rojo con limón, cebolla, orégano y chiles quebrados. Con tortillas calientes.",
        descriptionEn:
          "Authentic Mexican tripe soup simmered in red chile broth with lime, onion, oregano, and crushed chiles. Served with hot handmade tortillas.",
        image: "/images/menudo.webp",
        spicy: true,
        popular: true,
      },
    ],
  },

  // ── 9. EXTRAS / BEBIDAS ──────────────────────────────────────────────────
  extras: {
    title: "Extras / Bebidas",
    subtitle: "Para complementar tu orden",
    items: [
      {
        id: "ex1",
        name: "Agua de Horchata Tradicional",
        nameEn: "Traditional Horchata",
        description:
          "Nuestra receta de la casa. Bebida cremosa de arroz, leche y un toque de canela premium. Servida bien fría.",
        descriptionEn:
          "Our house recipe. Creamy rice drink with a hint of premium cinnamon. Served ice cold.",
        image: null,
        popular: true,
      },
      {
        id: "ex2",
        name: "Agua de Jamaica",
        nameEn: "Hibiscus Flower Tea",
        description:
          "El clásico sabor de México. Infusión natural de flores de jamaica, perfecta entre ácido y dulce.",
        descriptionEn:
          "The classic taste of Mexico. Natural hibiscus flower infusion, perfect balance between tart and sweet.",
        image: null,
      },
      {
        id: "ex3",
        name: "Agua de Naranja",
        nameEn: "Fresh Orange Water",
        description:
          "Preparada con jugo de naranjas frescas exprimidas. Ligera, dulce y con el punto exacto de acidez natural.",
        descriptionEn:
          "Prepared with freshly squeezed orange juice. Light, sweet, and perfectly refreshing.",
        image: null,
      },
      {
        id: "ex4",
        name: "Agua de Pepino con Limón",
        nameEn: "Cucumber Lime Water",
        description:
          "La definición de frescura absoluta. Mezcla ligera de pepino fresco con un toque de limón verde.",
        descriptionEn:
          "The definition of absolute freshness. Light blend of fresh cucumber with a squeeze of lime.",
        image: null,
      },
      {
        id: "ex5",
        name: "Café de Olla",
        nameEn: "Clay Pot Coffee",
        description:
          "Café mexicano tradicional aromático con piloncillo oscuro y canela.",
        descriptionEn:
          "Fragrant traditional Mexican coffee brewed with dark piloncillo and cinnamon stick.",
        image: "/images/cafe-de-olla.webp",
      },
      {
        id: "ex6",
        name: "Jarritos Surtidos",
        nameEn: "Assorted Jarritos",
        description:
          "Refrescos mexicanos clásicos en botella. Elige Mandarina, Tamarindo, Limón o Piña.",
        descriptionEn:
          "Classic Mexican sodas in glass bottles. Choose Mandarin, Tamarind, Lime, or Pineapple.",
        image: null,
      },
      {
        id: "ex7",
        name: "Coca-Cola Mexicana",
        nameEn: "Mexican Coca-Cola",
        description:
          "La original en botella de vidrio importada, endulzada con caña de azúcar pura. Muy fría.",
        descriptionEn:
          "The gold standard. Ice cold imported glass bottle sweetened with pure cane sugar.",
        image: null,
        popular: true,
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// MEATS DATA — 14 tipos de carne del menú impreso (columna izquierda + derecha)
// ─────────────────────────────────────────────────────────────────────────────

export const MEATS_DATA = [
  // ── Columna Izquierda ────────────────────────────────────────────────────
  {
    name: "Fajita de Res",
    nameEn: "Beef Fajita",
    description: "c/Cebolla y Jalapeño asado",
    descriptionEn: "with Onion & Roasted Jalapeño",
    icon: "🥩",
  },
  {
    name: "Taco de Asada",
    nameEn: "Carne Asada",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "🔥",
  },
  {
    name: "Bistec de Res",
    nameEn: "Beef Bistec",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "🥘",
  },
  {
    name: "Adobada",
    nameEn: "Adobada Pork",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "🍍",
  },
  {
    name: "Fajita de Pollo",
    nameEn: "Chicken Fajita",
    description: "c/Cebolla y Jalapeño asado",
    descriptionEn: "with Onion & Roasted Jalapeño",
    icon: "🍗",
  },
  {
    name: "Tripa",
    nameEn: "Beef Tripe",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "⚡",
  },
  {
    name: "Lengua",
    nameEn: "Beef Tongue",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "👑",
  },
  {
    name: "Campechano",
    nameEn: "Campechano",
    description: "Mezcla de carnes (Asada y Chorizo)",
    descriptionEn: "Mixed meats (Steak & Chorizo)",
    icon: "🌮",
  },
  {
    name: "Chicharrón",
    nameEn: "Pork Rind",
    description: "En salsa verde o roja",
    descriptionEn: "In green or red sauce",
    icon: "🐷",
  },
  // ── Columna Derecha ──────────────────────────────────────────────────────
  {
    name: "Cecina",
    nameEn: "Dried Beef",
    description: "c/Nopales/Cebolla",
    descriptionEn: "with Nopales & Onion",
    icon: "🌵",
  },
  {
    name: "Chorizo",
    nameEn: "Chorizo",
    description: "c/Nopales/Cebolla",
    descriptionEn: "with Nopales & Onion",
    icon: "🌶️",
  },
  {
    name: "Pastor",
    nameEn: "Al Pastor",
    description: "c/Nopales/Cebolla y Piña al gusto",
    descriptionEn: "with Nopales, Onion & Pineapple to taste",
    icon: "🌮",
  },
  {
    name: "Barbacoa de Chivo",
    nameEn: "Goat Barbacoa",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "🐐",
  },
  {
    name: "Cabeza de Res",
    nameEn: "Beef Head",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "🥩",
  },
  {
    name: "Taco Vegetariano (Nopalitos y Cebolla Asada)",
    nameEn: "Vegetarian Taco (Nopales & Roasted Onion)",
    description: "c/Cilantro/Salsa",
    descriptionEn: "with Cilantro & Salsa",
    icon: "🌵",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TOPPINGS — Ingredientes disponibles para personalizar
// ─────────────────────────────────────────────────────────────────────────────

export const TOPPINGS_DATA = [
  { name: "Cecina",        nameEn: "Cecina",          icon: "🥩" },
  { name: "Chorizo",       nameEn: "Chorizo",          icon: "🌶️" },
  { name: "Adobada",       nameEn: "Adobada",          icon: "🍖" },
  { name: "Jamón",         nameEn: "Ham",              icon: "🍖" },
  { name: "Salchicha",     nameEn: "Sausage",          icon: "🌭" },
  { name: "Piña Asada",    nameEn: "Grilled Pineapple",icon: "🍍" },
  { name: "Lechuga",       nameEn: "Lettuce",          icon: "🥬" },
  { name: "Aguacate",      nameEn: "Avocado",          icon: "🥑" },
  { name: "Jitomate",      nameEn: "Tomato",           icon: "🍅" },
  { name: "Mayonesa",      nameEn: "Mayonnaise",       icon: "🥣" },
  { name: "Mantequilla",   nameEn: "Butter",           icon: "🧈" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PLATILLOS — Platillos especiales de la carta
// ─────────────────────────────────────────────────────────────────────────────

export const PLATILLOS_DATA = [
  {
    name: "Quesabirria",
    nameEn: "Quesabirria",
    description: "A la carta · Arroz y frijoles · Tortillas a mano",
    descriptionEn: "A la carte · Rice & beans · Handmade tortillas",
    icon: "🧀",
    image: "/images/quesabirria.webp",
  },
  {
    name: "Quesadilla",
    nameEn: "Quesadilla",
    description: "A la carta · Arroz y frijoles · Tortillas a mano",
    descriptionEn: "A la carte · Rice & beans · Handmade tortillas",
    icon: "🫓",
    image: "/images/quesadilla (2).webp",
  },
  {
    name: "Picaditas",
    nameEn: "Picaditas",
    description: "A la carta · Arroz y frijoles · Tortillas a mano",
    descriptionEn: "A la carte · Rice & beans · Handmade tortillas",
    icon: "🌽",
    image: null,
  },
  {
    name: "Sopes",
    nameEn: "Sopes",
    description: "A la carta · Arroz y frijoles · Tortillas a mano",
    descriptionEn: "A la carte · Rice & beans · Handmade tortillas",
    icon: "🫓",
    image: "/images/sopes (2).webp",
  },
  {
    name: "Bistec Ranchero",
    nameEn: "Ranchero Steak",
    description: "A la carta · Arroz y frijoles · Tortillas a mano",
    descriptionEn: "A la carte · Rice & beans · Handmade tortillas",
    icon: "🥩",
    image: null,
  },
  {
    name: "Chicharrón",
    nameEn: "Chicharron",
    description: "A la carta · Arroz y frijoles · Tortillas a mano",
    descriptionEn: "A la carte · Rice & beans · Handmade tortillas",
    icon: "🐷",
    image: null,
  },
];
