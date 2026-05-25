import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "MI ZACAZONAPAN | Taquería Mexicana & Menú Digital Premium",
  description:
    "Disfruta de la auténtica taquería mexicana en Austin, TX. Tortillas hechas a mano, barbacoa los fines de semana, deliciosos desayunos, tacos, especialidades y caldos. ¡Pide en línea!",
  keywords: [
    "Tacos Austin",
    "Mi Zacazonapan",
    "Comida Mexicana Austin",
    "Menú Digital Mexicano",
    "Taqueria Austin TX",
    "Barbacoa Austin",
  ],
  openGraph: {
    title: "MI ZACAZONAPAN | Taquería & Menú Digital Premium",
    description:
      "El verdadero sabor mexicano con tortillas hechas a mano y barbacoa de chivo y res.",
    images: [
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="bg-mexican-black text-mexican-cream antialiased min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
