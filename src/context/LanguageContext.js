"use client";
import React, { createContext, useContext, useState } from "react";

const translations = {
  es: {
    lang: "es",
    langLabel: "ES",
    switchLabel: "Switch to English",

    // Navbar
    nav: {
      inicio: "Inicio",
      breakfast: "Desayunos",
      tacos: "Tacos",
      specialties: "Especialidades",
      barbacoa: "Barbacoa",
      carnes: "Carnes",
      tortillas: "Tortillas",
      contacto: "Contacto",
      miOrden: "Mi Orden",
      callLabel: "Llamar al restaurante",
      callTitle: "Llamar: (512) 909-8530",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      cartLabel: (n) => `Ver mi orden${n > 0 ? ` (${n} artículo${n > 1 ? "s" : ""})` : ""}`,
    },

    // Hero
    hero: {
      badge: "100% Auténtico Sazón Casero",
      title1: "Auténtico",
      title2: "Sabor",
      title3: "Mexicano",
      subtitle:
        "Tortillas hechas a mano, tacos cargados, burritos colosales, auténtica barbacoa y desayunos mexicanos calientes y tradicionales cocinados con recetas de generación en generación.",
      cta1: "Ver Menú Digital",
      cta2: "Llamar (512) 909-8530",
      address: "2601 W Braker Ln, Austin, TX",
      handmade: "Tortillas Hechas a Mano Diariamente",
      exploreMenu: "Explorar Menú",
      badge1: "¡Calientitos!",
      badge2: "Hecho a Mano",
    },

    // Menu Section
    menu: {
      overline: "Menú Interactivo",
      title: "Menú Digital",
      categories: {
        breakfast: "Desayuno / Breakfast",
        tacos: "Tacos",
        specialties: "Especialidades",
        barbacoa: "Barbacoa",
        drinks: "Bebidas",
      },
      popular: "⭐ Popular",
      spicy: "🌶️ Picoso",
      customizable: "Personalizable",
      fastDelivery: "Entrega Rápida",
      add: "Agregar",
      addLabel: (name) => `Agregar ${name} al carrito`,
      // Customizer modal
      customizeTitle: "Personalizar Platillo",
      meatLabel: "Selecciona Tipo de Carne",
      tortillaLabel: "Tipo de Tortilla",
      extrasLabel: "Extras / Adiciones",
      extraCheese: "Añadir Queso Extra (+$1.50)",
      cancel: "Cancelar",
      confirm: "Confirmar Orden",
    },

    // MeatGrill
    grill: {
      overline: "Directo de la Parrilla",
      title: "Tipos de Carne",
      subtitle:
        "Nuestras carnes son marinadas diariamente con recetas secretas de la casa y cocinadas a fuego lento para garantizar la máxima jugosidad.",
      callout:
        "🌮 ¿Ya probaste los Campechanos?",
      calloutDesc:
        "Es la combinación legendaria: carne de bistec de res tierna revuelta con nuestro chorizo artesanal bien dorado. Pídelo en tortilla de harina hecha a mano con salsa roja y cilantro fresco. ¡Es la especialidad preferida de Austin!",
    },

    // Handmade Tortillas
    tortillas: {
      overline: "Orgullo & Tradición",
      title1: "Tortillas",
      title2: "Artesanales",
      desc: "En <strong>Mi Zacazonapan</strong>, no hay atajos. Cada taco y platillo especial se sirve con tortillas de maíz y de harina hechas a mano en nuestra cocina al momento de ordenar. Calientes, infladas en el comal y deliciosas.",
      badge: "El Sabor de la Autenticidad",
      steps: [
        {
          icon: "🌽",
          title: "Maíz Criollo",
          desc: "Seleccionamos el mejor maíz criollo entero para garantizar un sabor y textura inconfundibles.",
        },
        {
          icon: "🪵",
          title: "Nixtamalización",
          desc: "Cocemos y reposamos el maíz con cal artesanal, un proceso milenario que suaviza el grano.",
        },
        {
          icon: "👩‍🍳",
          title: "Hechas al Momento",
          desc: "Nuestras tortilleras expertas las amasan y las prensan a mano directamente en el comal de la cocina.",
        },
      ],
    },

    // Contact
    contact: {
      overline: "¿Hambre o Preguntas?",
      title: "Contáctanos",
      callTitle: "📞 ¡Llama Directo!",
      phoneLabel: "Teléfono de Pedidos",
      locationLabel: "Ubicación",
      copyAddress: "Copiar Dirección",
      copied: "Copiado",
      hoursTitle: "Horarios de Servicio",
      schedule: [
        { day: "Lunes a Jueves", hours: "7:00 AM - 10:00 PM" },
        { day: "Viernes y Sábados", hours: "7:00 AM - Midnight" },
        { day: "Domingos", hours: "7:00 AM - 10:00 PM" },
      ],
      mapTitle: "📍 ¿Cómo Llegar?",
      mapDesc: "Estamos ubicados convenientemente sobre W Braker Ln, Austin TX.",
      openMaps: "Abrir en Google Maps",
    },

    // CartDrawer
    cart: {
      title: "Mi Orden",
      empty: "Tu carrito está vacío.\n¡Agrega unos buenos tacos!",
      subtotal: "Subtotal de la Orden",
      sendWhatsApp: "Enviar Pedido por WhatsApp",
      whatsappNote:
        "Al presionar se abrirá un chat de WhatsApp con el desglose exacto de tu pedido para que te lo preparen de inmediato.",
      remove: "Eliminar de la orden",
      closeCart: "Cerrar carrito",
      whatsappMsg: (items, subtotal) => {
        let msg = `🇲🇽 *NUEVO PEDIDO - MI ZACAZONAPAN* 🇲🇽\n\n`;
        msg += `Hola, me gustaría hacer el siguiente pedido:\n`;
        msg += `-------------------------------------------\n`;
        items.forEach((item) => {
          msg += `*${item.quantity}x* ${item.name}\n`;
          if (item.customOptions) msg += `   _Opción: ${item.customOptions}_\n`;
          msg += `   Precio: $${(item.price * item.quantity).toFixed(2)}\n\n`;
        });
        msg += `-------------------------------------------\n`;
        msg += `*Total de la Orden:* $${subtotal}\n\n`;
        msg += `📍 _Ubicación de recogida:_ 2601 W Braker Ln, Austin, TX\n`;
        msg += `⏰ _¡Muchas gracias! Cocinar con el auténtico sazón._`;
        return msg;
      },
    },

    // Footer
    footer: {
      slogan:
        "El verdadero sabor de una auténtica taquería mexicana callejera tradicional en Austin, Texas. Hecho con orgullo y sazón familiar de generación en generación.",
      rights: (year) => `© ${year} Mi Zacazonapan. Todos los derechos reservados.`,
      madeWith: "Hecho con",
      in: "en Austin, TX",
    },
  },

  // ─────────────────────────────────────────────
  en: {
    lang: "en",
    langLabel: "EN",
    switchLabel: "Cambiar a Español",

    // Navbar
    nav: {
      inicio: "Home",
      breakfast: "Breakfast",
      tacos: "Tacos",
      specialties: "Specialties",
      barbacoa: "Barbacoa",
      carnes: "Meats",
      tortillas: "Tortillas",
      contacto: "Contact",
      miOrden: "My Order",
      callLabel: "Call the restaurant",
      callTitle: "Call: (512) 909-8530",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      cartLabel: (n) => `View my order${n > 0 ? ` (${n} item${n > 1 ? "s" : ""})` : ""}`,
    },

    // Hero
    hero: {
      badge: "100% Authentic Home-Style Flavor",
      title1: "Authentic",
      title2: "Mexican",
      title3: "Flavor",
      subtitle:
        "Handmade tortillas, loaded tacos, colossal burritos, authentic barbacoa, and traditional hot Mexican breakfast cooked with generation-old recipes.",
      cta1: "View Digital Menu",
      cta2: "Call (512) 909-8530",
      address: "2601 W Braker Ln, Austin, TX",
      handmade: "Handmade Tortillas Daily",
      exploreMenu: "Explore Menu",
      badge1: "Hot & Fresh!",
      badge2: "Handmade",
    },

    // Menu Section
    menu: {
      overline: "Interactive Menu",
      title: "Digital Menu",
      categories: {
        breakfast: "Breakfast / Desayunos",
        tacos: "Tacos",
        specialties: "Specialties",
        barbacoa: "Barbacoa",
        drinks: "Drinks",
      },
      popular: "⭐ Popular",
      spicy: "🌶️ Spicy",
      customizable: "Customizable",
      fastDelivery: "Quick Ready",
      add: "Add",
      addLabel: (name) => `Add ${name} to cart`,
      // Customizer modal
      customizeTitle: "Customize Your Order",
      meatLabel: "Select Meat Type",
      tortillaLabel: "Tortilla Type",
      extrasLabel: "Extras / Add-ons",
      extraCheese: "Add Extra Cheese (+$1.50)",
      cancel: "Cancel",
      confirm: "Confirm Order",
    },

    // MeatGrill
    grill: {
      overline: "Straight from the Grill",
      title: "Our Meats",
      subtitle:
        "Our meats are marinated daily with our secret house recipes and slow-cooked to guarantee maximum juiciness and flavor.",
      callout: "🌮 Have you tried the Campechanos?",
      calloutDesc:
        "The legendary combination: tender beef steak mixed with our house-crafted golden chorizo. Order it in a handmade flour tortilla with red salsa and fresh cilantro. Austin's #1 favorite!",
    },

    // Handmade Tortillas
    tortillas: {
      overline: "Pride & Tradition",
      title1: "Handmade",
      title2: "Tortillas",
      desc: "At <strong>Mi Zacazonapan</strong>, there are no shortcuts. Every taco and specialty dish is served with handmade corn and flour tortillas made fresh in our kitchen the moment you order. Hot, puffed on the comal, and delicious.",
      badge: "The Taste of Authenticity",
      steps: [
        {
          icon: "🌽",
          title: "Heirloom Corn",
          desc: "We select the finest whole heirloom corn to guarantee an unmistakable flavor and texture.",
        },
        {
          icon: "🪵",
          title: "Nixtamalization",
          desc: "We cook and soak the corn with artisan lime, a centuries-old process that softens the grain.",
        },
        {
          icon: "👩‍🍳",
          title: "Made to Order",
          desc: "Our expert tortilla makers knead and press them by hand directly on the kitchen comal.",
        },
      ],
    },

    // Contact
    contact: {
      overline: "Hungry or Have Questions?",
      title: "Contact Us",
      callTitle: "📞 Call Us Directly!",
      phoneLabel: "Order by Phone",
      locationLabel: "Location",
      copyAddress: "Copy Address",
      copied: "Copied!",
      hoursTitle: "Hours of Service",
      schedule: [
        { day: "Monday to Thursday", hours: "7:00 AM - 10:00 PM" },
        { day: "Friday & Saturday", hours: "7:00 AM - Midnight" },
        { day: "Sunday", hours: "7:00 AM - 10:00 PM" },
      ],
      mapTitle: "📍 How to Get Here?",
      mapDesc: "Conveniently located on W Braker Ln, Austin TX.",
      openMaps: "Open in Google Maps",
    },

    // CartDrawer
    cart: {
      title: "My Order",
      empty: "Your cart is empty.\nAdd some great tacos!",
      subtotal: "Order Subtotal",
      sendWhatsApp: "Send Order via WhatsApp",
      whatsappNote:
        "Tapping this will open a WhatsApp chat with the full breakdown of your order so we can prepare it right away.",
      remove: "Remove from order",
      closeCart: "Close cart",
      whatsappMsg: (items, subtotal) => {
        let msg = `🇲🇽 *NEW ORDER - MI ZACAZONAPAN* 🇲🇽\n\n`;
        msg += `Hello! I would like to place the following order:\n`;
        msg += `-------------------------------------------\n`;
        items.forEach((item) => {
          msg += `*${item.quantity}x* ${item.name}\n`;
          if (item.customOptions) msg += `   _Option: ${item.customOptions}_\n`;
          msg += `   Price: $${(item.price * item.quantity).toFixed(2)}\n\n`;
        });
        msg += `-------------------------------------------\n`;
        msg += `*Order Total:* $${subtotal}\n\n`;
        msg += `📍 _Pickup location:_ 2601 W Braker Ln, Austin, TX\n`;
        msg += `⏰ _Thank you! We cook with authentic flavor._`;
        return msg;
      },
    },

    // Footer
    footer: {
      slogan:
        '"The true taste of an authentic traditional Mexican street taquería in Austin, Texas. Made with pride and generations of family flavors."',
      rights: (year) => `© ${year} Mi Zacazonapan. All rights reserved.`,
      madeWith: "Made with",
      in: "in Austin, TX",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
