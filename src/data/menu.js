// ─────────────────────────────────────────────────────────────────────────────
// MI ZACAZONAPAN — Menu Data (extracted from physical printed menu)
// Bilingual: ES / EN names and descriptions
// ─────────────────────────────────────────────────────────────────────────────

export const MENU_DATA = {
  // ── DESAYUNOS / BREAKFAST ────────────────────────────────────────────────
  breakfast: {
    title: "Breakfast / Desayunos",
    subtitle: "Iniciando el día con el sazón de casa",
    items: [
      {
        id: "b1",
        name: "Huevos Rancheros",
        nameEn: "Ranchero Eggs",
        description:
          "Dos huevos frescos sobre tortillas de maíz calientes, bañados en salsa ranchera, queso fresco, cilantro y frijoles negros refritos.",
        descriptionEn:
          "Two farm-fresh eggs on hot corn tortillas, smothered in ranchera sauce, queso fresco, cilantro, and refried beans.",
        price: 9.99,
        image:
          "/images/huevos-rancheros.png",
        spicy: true,
        popular: true,
      },
      {
        id: "b2",
        name: "Breakfast Tacos",
        nameEn: "Breakfast Tacos",
        description:
          "Tres tacos en tortilla de harina hecha a mano, rellenos de huevo revuelto, tu elección de carne, queso y pico de gallo fresco.",
        descriptionEn:
          "Three handmade flour tortilla tacos filled with scrambled eggs, your choice of meat, melted cheese, and fresh pico de gallo.",
        price: 8.50,
        image:
          "/images/breackfast-tacos.png",
        customizable: true,
        popular: true,
      },
      {
        id: "b3",
        name: "Burrito de Desayuno",
        nameEn: "Breakfast Burrito",
        description:
          "Tortilla de harina gigante hecha a mano, rellena de huevo revuelto, papas crujientes, frijoles refritos, queso cheddar y salsa verde.",
        descriptionEn:
          "Giant handmade warm flour tortilla stuffed with scrambled eggs, crispy potatoes, refried beans, cheddar blend, and green salsa.",
        price: 10.99,
        image:
          "/images/burrito (3).png",
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
        price: 3.50,
        image:
          "/images/cafe-de-olla.png",
        popular: true,
      },
      {
        id: "b5",
        name: "Huevito en Salsa",
        nameEn: "Eggs in Salsa",
        description:
          "Huevos revueltos cocinados en salsa de jitomate tatemado con jalapeño. Se sirven con frijoles refritos y tortillas de maíz hechas a mano.",
        descriptionEn:
          "Scrambled eggs cooked in a fire-roasted tomato and jalapeño salsa. Served with refried beans and handmade corn tortillas.",
        price: 9.25,
        image:
          "/images/huevito en salasa.png",
        spicy: true,
      },
      {
        id: "b6",
        name: "Vegetariano",
        nameEn: "Vegetarian Breakfast",
        description:
          "Huevos de granja revueltos con nopales tiernos salteados, cebolla, jitomate, pimiento morrón y rebanadas de aguacate fresco.",
        descriptionEn:
          "Farm eggs scrambled with sautéed baby nopales, sweet onions, juicy tomatoes, bell peppers, and fresh sliced avocado.",
        price: 9.50,
        image:
          "/images/vegetariano.png",
      },
      {
        id: "b7",
        name: "Chilaquiles",
        nameEn: "Chilaquiles",
        description:
          "Totopos caseros en salsa roja o verde, cubiertos con dos huevos fritos, crema mexicana, queso cotija y aguacate fresco.",
        descriptionEn:
          "Homemade tortilla chips simmered in red or green salsa, topped with two fried eggs, Mexican cream, queso cotija, and fresh avocado.",
        price: 11.50,
        image:
          "/images/chilaquiles.png",
        spicy: true,
        popular: true,
      },
    ],
  },

  // ── TACOS Y PLATILLOS (Bilingüe — del menú impreso) ──────────────────────
  tacos: {
    title: "Tacos y Platillos",
    subtitle: "En tortilla hecha a mano al momento",
    items: [
      {
        id: "t1",
        name: "Tocino y Huevo",
        nameEn: "Bacon and Egg",
        description:
          "Tocino ahumado crujiente revuelto con huevo esponjoso en tortilla de harina hecha a mano.",
        descriptionEn: "Smoky crispy bacon scrambled with fluffy eggs in a handmade flour tortilla.",
        price: 2.99,
        image: null,
        popular: true,
      },
      {
        id: "t2",
        name: "Papas y Huevo",
        nameEn: "Potato and Egg",
        description:
          "Papas doradas sazonadas revueltas con huevos de granja en tortilla casera.",
        descriptionEn: "Savory seasoned golden potatoes scrambled with farm eggs in a handmade tortilla.",
        price: 2.75,
        image: null,
      },
      {
        id: "t3",
        name: "Jamón y Huevo",
        nameEn: "Ham and Egg",
        description:
          "Jamón ahumado clásico con huevo revuelto dentro de una tortilla gruesa y caliente.",
        descriptionEn: "Classic smoked ham paired with scrambled eggs inside a warm, thick tortilla.",
        price: 2.85,
        image: null,
      },
      {
        id: "t4",
        name: "Nopal y Huevo",
        nameEn: "Cactus and Egg",
        description:
          "Nopales tiernos a la plancha revueltos con huevos frescos. Nutritivo y lleno de sabor.",
        descriptionEn:
          "Tender grilled cactus pads scrambled with fresh eggs. Nutritious and packed with heritage flavor.",
        price: 2.95,
        image: null,
      },
      {
        id: "t5",
        name: "Salchicha y Huevo",
        nameEn: "Sausage and Egg",
        description:
          "Salchicha mexicana a la sartén revuelta con huevos esponjosos en tortilla hecha a mano.",
        descriptionEn:
          "Pan-fried Mexican sausage scrambled with fluffy eggs in a handmade tortilla.",
        price: 2.80,
        image: null,
      },
      {
        id: "t6",
        name: "Migas",
        nameEn: "Migas",
        description:
          "Tiras crujientes de tortilla de maíz revueltas con huevos frescos, cebolla, jitomate y queso derretido.",
        descriptionEn:
          "Traditional crunchy corn tortilla strips scrambled with fresh eggs, onions, tomatoes, and melted cheese.",
        price: 2.99,
        image: null,
        popular: true,
      },
      {
        id: "t7",
        name: "Frijol y Huevo",
        nameEn: "Bean and Egg",
        description:
          "Frijoles pintos refritos cremosos con huevo revuelto suave en tortilla hecha a mano.",
        descriptionEn:
          "Creamy pinto refried beans scrambled with soft eggs in a handmade tortilla.",
        price: 2.75,
        image: null,
      },
      {
        id: "t8",
        name: "Frijoles y Queso",
        nameEn: "Beans and Cheese",
        description:
          "Frijoles refritos con mezcla de queso Monterey Jack y Cheddar derretido. Sencillo y glorioso.",
        descriptionEn:
          "Simple yet glorious. Creamy refried pinto beans with melted Monterey Jack and Cheddar cheese blend.",
        price: 2.50,
        image: null,
      },
      {
        id: "t9",
        name: "Mexicano y Huevo",
        nameEn: "Mexican Style and Egg",
        description:
          "Huevo revuelto estilo mexicano con jitomate, cebolla, chile serrano y cilantro fresco.",
        descriptionEn:
          "Scrambled egg Mexican style with tomato, onion, serrano chile, and fresh cilantro.",
        price: 2.95,
        image: null,
        spicy: true,
      },
      {
        id: "t10",
        name: "Fajita y Huevo",
        nameEn: "Fajita and Egg",
        description:
          "Tiras de fajita de pollo marinadas a la parrilla revueltas con huevo en tortilla hecha a mano.",
        descriptionEn:
          "Grilled marinated chicken fajita strips scrambled with egg in a handmade tortilla.",
        price: 3.25,
        image: null,
        popular: true,
      },
      {
        id: "t11",
        name: "Chicharrón y Huevos",
        nameEn: "Pork Rind and Eggs",
        description:
          "Chicharrón de cerdo crujiente guisado con huevos en salsa verde o roja. Un clásico irresistible.",
        descriptionEn:
          "Crispy pork rinds braised with eggs in green or red salsa. An irresistible classic.",
        price: 3.25,
        image: null,
        spicy: true,
        popular: true,
      },
      {
        id: "t12",
        name: "Chorizo y Huevo",
        nameEn: "Chorizo and Egg",
        description:
          "Chorizo artesanal de cerdo bien dorado y revuelto con huevos frescos. Vibrante y delicioso.",
        descriptionEn:
          "Rich artisanal pork chorizo browned and scrambled with fresh eggs. Vibrant and delicious.",
        price: 2.99,
        image: null,
        popular: true,
      },
    ],
  },

  // ── ESPECIALIDADES ───────────────────────────────────────────────────────
  specialties: {
    title: "Especialidades de la Casa",
    subtitle: "Los favoritos y gigantes del Zacazonapan",
    items: [
      {
        id: "s1",
        name: "Tacos de Carne",
        nameEn: "Street Tacos",
        description:
          "Tres tacos auténticos en tortilla de maíz hecha a mano con tu elección de carne, cilantro, cebolla y salsa de la casa.",
        descriptionEn:
          "Three authentic tacos on handmade corn tortillas with your choice of meat, cilantro, onion, and house salsa.",
        price: 9.99,
        image:
          "/images/tacos (2).png",
        customizable: true,
        popular: true,
      },
      {
        id: "s2",
        name: "Sopes Surtidos",
        nameEn: "Sopes Trio",
        description:
          "Tres sopes caseros crujientes con frijoles, tu elección de carne, lechuga, jitomate, crema, queso fresco y salsa picosa.",
        descriptionEn:
          "Three crispy handmade sopes with beans, choice of meat, lettuce, tomato, cream, fresh cheese, and spicy salsa.",
        price: 10.50,
        image:
          "/images/sopes (2).png",
        customizable: true,
      },
      {
        id: "s3",
        name: "Quesabirria con Consomé",
        nameEn: "Quesabirria with Consommé",
        description:
          "Tres tortillas de maíz fritas rellenas de queso fundido y birria de res deshebrada, servidas con taza de consomé caliente para sumergir.",
        descriptionEn:
          "Three crispy cheese-stuffed corn tortillas filled with slow-cooked shredded beef birria. Served with hot consommé broth for dipping.",
        price: 14.50,
        image:
          "/images/quesabirria.png",
        popular: true,
      },
      {
        id: "s4",
        name: "Torta Cubana",
        nameEn: "Cuban Torta",
        description:
          "El sándwich definitivo: bolillo tostado con milanesa, jamón, chorizo, huevo, hot dog, queso, aguacate y jalapeños encurtidos.",
        descriptionEn:
          "The ultimate Mexican sandwich: toasted bolillo with milanesa, ham, chorizo, scrambled eggs, hot dog, cheese, avocado, and pickled jalapeños.",
        price: 13.99,
        image:
          "/images/torta-cubana.png",
        popular: true,
      },
      {
        id: "s5",
        name: "Quesadilla Gigante",
        nameEn: "Giant Quesadilla",
        description:
          "Tortilla de harina gigante asada a la plancha con queso Oaxaca derretido y tu elección de carne. Servida con crema y guacamole.",
        descriptionEn:
          "Giant grilled flour tortilla with melted Oaxaca cheese and your choice of sizzling grilled meat. Served with crema and guacamole.",
        price: 11.99,
        image:
          "/images/quesadilla (2).png",
        customizable: true,
        popular: true,
      },
      {
        id: "s6",
        name: "Picaditas",
        nameEn: "Picaditas",
        description:
          "Tres gorditas de masa de maíz pellizcadas en los bordes, cubiertas con frijoles, salsa verde o roja, queso cotija, cebolla y crema.",
        descriptionEn:
          "Three thick handmade corn masa shells pinched at the edges, layered with refried beans, salsa, crumbled queso cotija, onions, and crema.",
        price: 8.99,
        image: null,
        spicy: true,
      },
      {
        id: "s7",
        name: "Burrito Personalizado",
        nameEn: "Build Your Own Burrito",
        description:
          "Crea tu burrito ideal: elige tu carne, frijoles, arroz, quesos derretidos, verduras frescas y salsas de la casa.",
        descriptionEn:
          "Customize your dream burrito: choose your meat, beans, rice, melted cheeses, fresh veggies, and house salsas.",
        price: 12.50,
        image:
          "/images/burrito (2).png",
        customizable: true,
      },
      {
        id: "s8",
        name: "Platillo Mi Zacazonapan",
        nameEn: "Mi Zacazonapan Special",
        description:
          "El platillo estrella de la casa: carne a la plancha acompañada de nopales, frijoles de olla, arroz, tortillas hechas a mano y toda la salsa.",
        descriptionEn:
          "The house star dish: grilled meat accompanied by nopales, pot-cooked beans, rice, handmade tortillas, and all the salsa.",
        price: 15.99,
        image:
          "/images/mi-zacazonapan.png",
        popular: true,
      },
    ],
  },

  // ── BARBACOA Y CALDOS ────────────────────────────────────────────────────
  // Viernes y Sábado: Menudo, Barbacoa, Cabeza de Res
  // Sábados: Rica Barbacoa de Chivo y Res
  barbacoa: {
    title: "Ricas Barbacoas de Res y de Chivo",
    subtitle: "Viernes y Sábado · Por libra o por taco con su rico consomé",
    items: [
      {
        id: "ba1",
        name: "Barbacoa de Res",
        nameEn: "Beef Barbacoa",
        description:
          "Barbacoa de res cocida a vapor lentamente, profundamente sazonada con hojas de aguacate y chiles. Se deshace en la boca. Por libra o por taco.",
        descriptionEn:
          "Slow steam-cooked shredded beef barbacoa, seasoned with avocado leaves and chiles. Melt-in-your-mouth tender. By the pound or by taco.",
        price: 16.99,
        image:
          "/images/barbacoa-de-res.png",
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
        price: 18.50,
        image:
          "/images/BerbacoaDeChivo.png",
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
        price: 21.00,
        image:
          "/images/servido-de-chivo.png",
      },
      {
        id: "ba4",
        name: "Menudo Tradicional",
        nameEn: "Traditional Menudo",
        description:
          "Caldo de panza de res auténtico simmered en caldo de chile rojo con limón, cebolla, orégano y chiles quebrados. Con tortillas calientes.",
        descriptionEn:
          "Authentic Mexican tripe soup simmered in red chile broth with lime, onion, oregano, and crushed chiles. Served with hot handmade tortillas.",
        price: 12.99,
        image:
          "/images/menudo.png",
        spicy: true,
        popular: true,
      },
      {
        id: "ba5",
        name: "Cabeza de Res",
        nameEn: "Beef Head Meat",
        description:
          "Carne de cabeza de res cocida a vapor, ultra tierna. Disponible viernes y sábados. Servida en taco o por libra con cilantro y cebolla.",
        descriptionEn:
          "Steam-cooked beef head meat, ultra tender. Available Fridays and Saturdays. Served as taco or by the pound with cilantro and onion.",
        price: 14.99,
        image: null,
      },
    ],
  },

  // ── BEBIDAS ──────────────────────────────────────────────────────────────
  drinks: {
    title: "Bebidas",
    subtitle: "Para calmar la sed con sabor mexicano",
    items: [
      {
        id: "d1",
        name: "Agua de Horchata",
        nameEn: "Horchata",
        description:
          "Agua fresca tradicional de arroz con canela y vainilla. Dulce y refrescante.",
        descriptionEn:
          "Traditional milky rice water blended with cinnamon and vanilla. Sweet and refreshing.",
        price: 3.50,
        image: null,
        popular: true,
      },
      {
        id: "d2",
        name: "Agua de Jamaica",
        nameEn: "Hibiscus Flower Tea",
        description:
          "Té de flor de jamaica con hielo. Ácido, fresco y muy hidratante.",
        descriptionEn:
          "Iced sweet hibiscus flower tea. Tart, crisp, and thirst-quenching.",
        price: 3.50,
        image: null,
      },
      {
        id: "d3",
        name: "Café de Olla",
        nameEn: "Clay Pot Coffee",
        description:
          "Café mexicano tradicional aromático con piloncillo oscuro y canela.",
        descriptionEn:
          "Fragrant traditional Mexican coffee brewed with dark piloncillo and cinnamon stick.",
        price: 3.50,
        image:
          "/images/cafe-de-olla.png",
      },
      {
        id: "d4",
        name: "Jarritos Surtidos",
        nameEn: "Assorted Jarritos",
        description:
          "Refrescos mexicanos clásicos en botella. Elige Mandarina, Tamarindo, Limón o Piña.",
        descriptionEn:
          "Classic Mexican sodas in glass bottles. Choose Mandarin, Tamarind, Lime, or Pineapple.",
        price: 3.00,
        image: null,
      },
      {
        id: "d5",
        name: "Coca-Cola Mexicana",
        nameEn: "Mexican Coca-Cola",
        description:
          "La original en botella de vidrio importada, endulzada con caña de azúcar pura. Muy fría.",
        descriptionEn:
          "The gold standard. Ice cold imported glass bottle sweetened with pure cane sugar.",
        price: 3.50,
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
    description: "c/Cebolla/Morrón",
    descriptionEn: "with Onion & Bell Pepper",
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
    description: "c/Cilantro/Morrón",
    descriptionEn: "with Cilantro & Bell Pepper",
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
    description: "c/Nopales/Cebolla",
    descriptionEn: "with Nopales & Onion",
    icon: "🌮",
  },
  {
    name: "Campechanos",
    nameEn: "Campechano Mix",
    description: "c/Nopales/Cebolla",
    descriptionEn: "with Nopales & Onion",
    icon: "💥",
  },
  {
    name: "Suadero",
    nameEn: "Beef Suadero",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "🥩",
  },
  {
    name: "Cabeza de Res",
    nameEn: "Beef Head",
    description: "c/Cilantro/Cebolla",
    descriptionEn: "with Cilantro & Onion",
    icon: "💀",
  },
  {
    name: "Fajita Campechana",
    nameEn: "Mixed Fajita",
    description: "c/Cebolla/Morrón",
    descriptionEn: "with Onion & Bell Pepper",
    icon: "🔥",
  },
];
