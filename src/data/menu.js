export const MENU_DATA = {
  breakfast: {
    title: "Breakfast / Desayunos",
    subtitle: "Iniciando el día con el sazón de casa",
    items: [
      {
        id: "b1",
        name: "Huevos Rancheros",
        description: "Two farm-fresh eggs cooked to order, served on hot corn tortillas, topped with ranchera sauce, queso fresco, cilantro, and warm refried beans.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop",
        spicy: true,
        popular: true
      },
      {
        id: "b2",
        name: "Breakfast Tacos Trios",
        description: "A combination of three fresh handmade flour tortillas filled with scrambled eggs, melted cheese, and fresh pico de gallo.",
        price: 8.50,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
        customizable: true
      },
      {
        id: "b3",
        name: "Grande Breakfast Burrito",
        description: "Giant handmade warm flour tortilla stuffed with scrambled eggs, crispy potatoes, refried beans, cheddar blend, and green salsa.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1626700051175-6518c4793f06?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "b4",
        name: "Chilaquiles Divorciados",
        description: "Crispy homemade tortilla chips simmered in red and green salsas, topped with two fried eggs, Mexican cream, queso cotija, and fresh avocado.",
        price: 11.50,
        image: "https://images.unsplash.com/photo-1626700051175-6518c4793f06?q=80&w=600&auto=format&fit=crop",
        spicy: true,
        popular: true
      },
      {
        id: "b5",
        name: "Café de Olla Tradicional",
        description: "Authentic Mexican coffee brewed in a traditional clay pot with real piloncillo sugar, cinnamon sticks, and star anise.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "b6",
        name: "Breakfast Vegetariano",
        description: "Scrambled farm eggs mixed with sauteed baby nopales, sweet onions, juicy tomatoes, fresh bell peppers, and fresh sliced avocado.",
        price: 9.50,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "b7",
        name: "Huevito en Salsa",
        description: "Scrambled eggs cooked in a piping hot, fire-roasted tomato and jalapeño salsa. Served with refried beans and warm handmade corn tortillas.",
        price: 9.25,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop",
        spicy: true
      }
    ]
  },
  tacos: {
    title: "Tacos Tradicionales",
    subtitle: "En tortilla hecha a mano al momento",
    items: [
      {
        id: "t1",
        name: "Taco de Tocino y Huevo",
        description: "Handmade warm flour tortilla loaded with smoky crispy bacon and scrambled fluffy eggs.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "t2",
        name: "Taco de Papas y Huevo",
        description: "Savory seasoned gold potatoes scrambled with farm eggs in a handmade tortilla.",
        price: 2.75,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "t3",
        name: "Taco de Jamón y Huevo",
        description: "Classic smoked ham paired with scrambled eggs inside a warm, thick tortilla.",
        price: 2.85,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "t4",
        name: "Taco de Nopal y Huevo",
        description: "Tender, grilled local cactus pads scrambled with fresh eggs. Nutritious and packed with heritage flavor.",
        price: 2.95,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "t5",
        name: "Taco de Salchicha y Huevo",
        description: "Pan-fried Mexican sausage coins scrambled with fluffy eggs in a handmade tortilla.",
        price: 2.80,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "t6",
        name: "Migas con Huevo",
        description: "Traditional crunchy corn tortilla strips scrambled with fresh eggs, onions, tomatoes, and melted cheese.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "t7",
        name: "Taco de Chorizo y Huevo",
        description: "Rich, spicy artisanal Mexican pork chorizo scrambled with eggs. Vibrant and delicious.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "t8",
        name: "Taco de Frijoles y Queso",
        description: "Simple yet glorious. Creamy pinto refried beans with melted mixed Monterey Jack and Cheddar cheese.",
        price: 2.50,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop"
      }
    ]
  },
  specialties: {
    title: "Especialidades de la Casa",
    subtitle: "Los favoritos y gigantes del Zacazonapan",
    items: [
      {
        id: "s1",
        name: "Quesadilla Gigante",
        description: "Huge grilled flour tortilla stuffed with melted Oaxaca cheese and your choice of sizzling hot grilled meat. Served with crema and guacamole.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=600&auto=format&fit=crop",
        customizable: true,
        popular: true
      },
      {
        id: "s2",
        name: "Torta Cubana Monumental",
        description: "The ultimate Mexican sandwich: bolillo roll toasted with butter, filled with milanesa, ham, chorizo, scrambled eggs, hot dogs, cheese, avocado, and pickled jalapeños.",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "s3",
        name: "Picaditas Estilo Veracruz",
        description: "Three thick handmade corn masa shells pinched at the edges, layered with refried beans, hot green or red salsa, crumbled queso cotija, onions, and crema.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop",
        spicy: true
      },
      {
        id: "s4",
        name: "Quesabirria con Consomé",
        description: "Three crispy, cheese-stuffed corn tortillas dipped in birria broth, filled with slow-cooked shredded beef birria. Served with a cup of hot consomé for dipping.",
        price: 14.50,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "s5",
        name: "Sopes Surtidos (3)",
        description: "Crispy handmade sopes filled with beans, choice of meat (pastor, suadero, cecina), lettuce, tomato, cream, fresh cheese, and spicy salsa.",
        price: 10.50,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
        customizable: true
      },
      {
        id: "s6",
        name: "Make Your Own Burrito",
        description: "Customize your dream burrito: choose your meat, choice of beans, rice, melted cheeses, fresh veggies, and spicy or mild house salsas.",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1626700051175-6518c4793f06?q=80&w=600&auto=format&fit=crop",
        customizable: true
      }
    ]
  },
  barbacoa: {
    title: "Barbacoa y Caldos",
    subtitle: "El tesoro del fin de semana - ¡Siempre caliente!",
    items: [
      {
        id: "ba1",
        name: "Rica Barbacoa de Res y Chivo",
        description: "Slow steam-cooked shredded beef and goat barbacoa, deeply seasoned with avocado leaves and chiles. Melt-in-your-mouth tender, served by the pound or plate.",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "ba2",
        name: "Menudo Tradicional Calientito",
        description: "Authentic Mexican tripe soup simmered in a red chili pepper broth with lime, onions, oregano, and crushed chiles. Served with handmade hot tortillas.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
        spicy: true,
        popular: true
      },
      {
        id: "ba3",
        name: "Servido de Chivo Premium",
        description: "A deluxe platter featuring tender goat barbacoa accompanied by rich chickpeas consomé broth, hot cebollitas, cilantro, lime, and red salsa.",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop"
      }
    ]
  },
  drinks: {
    title: "Bebidas",
    subtitle: "Para calmar la sed con sabor mexicano",
    items: [
      {
        id: "d1",
        name: "Agua Fresca de Horchata",
        description: "Traditional milky rice water blended with cinnamon and vanilla. Sweet and refreshing.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop",
        popular: true
      },
      {
        id: "d2",
        name: "Agua Fresca de Jamaica",
        description: "Iced sweet hibiscus flower tea. Tart, crisp, and thirst-quenching.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "d3",
        name: "Café de Olla Caliente",
        description: "Fragrant Mexican traditional sweet coffee brewed with dark piloncillo and cinnamon stick.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "d4",
        name: "Jarritos Surtidos",
        description: "Assorted classic Mexican sodas in glass bottles. Choose Mandarin, Tamarind, Lime, or Pineapple.",
        price: 3.00,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop"
      },
      {
        id: "d5",
        name: "Mexican Coca-Cola (Glass)",
        description: "The gold standard sweet soft drink. Ice cold imported glass bottle sweetened with pure cane sugar.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
        popular: true
      }
    ]
  }
};

export const MEATS_DATA = [
  { name: "Chorizo", description: "Spicy & loaded house-cured sausage", icon: "🌶️" },
  { name: "Al Pastor", description: "Sweet & tangy spit-roasted pork with pineapple", icon: "🍍" },
  { name: "Campechanos", description: "Tasty blend of savory beef bistec and crispy chorizo", icon: "🌮" },
  { name: "Suadero", description: "Confit-style tender, crispy fried beef brisket", icon: "🔥" },
  { name: "Cecina", description: "Thinly sliced, salted cured dry Mexican beef jerky", icon: "🥩" },
  { name: "Fajita de Pollo", description: "Juicy citrus-marinated grilled chicken breast slices", icon: "🍗" },
  { name: "Tripa de Res", description: "Golden, extra crispy boiled-then-fried beef tripe", icon: "⚡" },
  { name: "Lengua de Res", description: "Slow simmered, super tender melt-in-mouth beef tongue", icon: "👑" },
  { name: "Bistec de Res", description: "Classic grilled, perfectly seasoned thin beef steak", icon: "🥘" },
  { name: "Cabeza de Res", description: "Traditional steam-cooked tender beef cheek & head meats", icon: "💀" }
];
