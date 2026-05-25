"use client";
import React from "react";

const IMAGES = [
  "1 (2).png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png",
  "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "2026 A.png", "2026 B.png",
  "BerbacoaDeChivo.png", "Burrito.png", "Enchiladas.png", "Quesadilla.png", "chilaquiles.png",
  "consome.png", "flautas.png", "gorditas.png", "pambazo.png", "quesadillaDeMaiz.png",
  "sopes.png", "tacos.png", "torta.png", "logo.png"
];

const DISHES_TO_MATCH = [
  "Huevos Rancheros", "Breakfast Tacos Trios", "Grande Breakfast Burrito", "Chilaquiles Divorciados",
  "Café de Olla Tradicional", "Breakfast Vegetariano", "Huevito en Salsa", "Taco de Tocino y Huevo",
  "Taco de Papas y Huevo", "Taco de Jamón y Huevo", "Taco de Nopal y Huevo", "Taco de Salchicha y Huevo",
  "Migas con Huevo", "Taco de Chorizo y Huevo", "Taco de Frijoles y Queso", "Quesadilla Gigante",
  "Torta Cubana Monumental", "Picaditas Estilo Veracruz", "Quesabirria con Consomé", "Sopes Surtidos (3)",
  "Make Your Own Burrito", "Rica Barbacoa de Res y Chivo", "Menudo Tradicional Calientito", "Servido de Chivo Premium",
  "Agua Fresca de Horchata", "Agua Fresca de Jamaica", "Café de Olla Caliente", "Jarritos Surtidos",
  "Mexican Coca-Cola (Glass)", "Enchiladas (Extra)", "Flautas (Extra)", "Gorditas (Extra)", "Pambazo (Extra)",
  "Quesadilla de Maíz (Extra)"
];

export default function DebugImages() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-amber-400">Panel de Identificación de Imágenes - Mi Zacazonapan</h1>
        <p className="mb-8 text-slate-400">
          Usa este panel para identificar qué plato corresponde a cada imagen numerada.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
            {IMAGES.map((img) => (
              <div key={img} className="bg-slate-800 rounded-lg p-4 border border-slate-700 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-amber-500 mb-2 truncate" title={img}>{img}</h3>
                  <div className="aspect-video relative overflow-hidden rounded bg-slate-950 flex items-center justify-center mb-3">
                    <img
                      src={`/images/${img}`}
                      alt={img}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150?text=Error+Loading";
                      }}
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono select-all">
                  /images/{img}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-fit sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-amber-400 border-b border-slate-700 pb-2">Platos a Asignar</h2>
            <ul className="space-y-2 text-sm text-slate-300 max-h-[70vh] overflow-y-auto pr-2">
              {DISHES_TO_MATCH.map((dish) => (
                <li key={dish} className="flex items-center justify-between p-2 rounded hover:bg-slate-750 transition">
                  <span>{dish}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
