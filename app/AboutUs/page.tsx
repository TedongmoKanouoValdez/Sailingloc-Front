import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal et introduction */}
        <div className="text-center mb-20">
          <div className="inline-block p-2 bg-blue-50 rounded-full mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 
                  5S4.168 5.477 3 6.253v13C4.168 18.477 
                  5.754 18 7.5 18s3.332.477 
                  4.5 1.253m0-13C13.168 5.477 14.754 5 
                  16.5 5c1.747 0 3.332.477 
                  4.5 1.253v13C19.832 18.477 18.247 18 
                  16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            À propos de nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nous connectons les propriétaires de bateaux avec les passionnés de
            navigation pour créer des expériences nautiques inoubliables en
            toute sécurité.
          </p>
        </div>

        {/* Photo d équipe principale */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-purple-700 p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image SVG */}
                <div className="flex-1">
                  {/* --- TON SVG ENTIER ICI (inchangé) --- */}
                </div>

                {/* Texte à côté */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Passionnés de navigation depuis toujours
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Notre équipe est composée de marins expérimentés et de
                    professionnels du nautisme qui partagent la même passion
                    pour la mer. Nous facilitons l accès aux plaisirs de la
                    navigation en créant des liens de confiance entre
                    propriétaires et locataires.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">A</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">M</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">S</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">L</span>
                      </div>
                      <div className="w-10 h-10 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">+3</span>
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium">
                      Une équipe de marins passionnés
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille avec cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Carte 1 */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
              {/* ... contenu inchangé ... */}
            </div>
          </div>

          {/* Carte 2 */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
              {/* ... contenu inchangé ... */}
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        <div className="mt-20 bg-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Notre impact en chiffres
            </h3>
            <p className="text-gray-300 text-lg">
              La confiance de notre communauté nautique
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                2,500+
              </div>
              <div className="text-gray-300">Bateaux disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                15,000+
              </div>
              <div className="text-gray-300">Locations réussies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                4.9/5
              </div>
              <div className="text-gray-300">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                50+
              </div>
              <div className="text-gray-300">Ports partenaires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
