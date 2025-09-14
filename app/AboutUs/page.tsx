import React from "react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Titre principal et introduction */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            À propos de nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nous connectons les propriétaires de bateaux avec les passionnés de
            navigation pour créer des expériences nautiques inoubliables en
            toute sécurité. Notre objectif est de rendre la navigation accessible
            à tous, tout en garantissant une expérience simple et fiable.
          </p>
        </div>

        {/* Photo d'équipe principale */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">

                {/* Image SVG */}
                <div className="flex-1">
                  {/* --- TON SVG ENTIER ICI --- */}
                </div>

                {/* Texte à côté */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Passionnés de navigation depuis toujours
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Notre équipe est composée de marins expérimentés et de
                    professionnels du nautisme qui partagent la même passion
                    pour la mer. Nous facilitons l'accès aux plaisirs de la
                    navigation en créant des liens de confiance entre
                    propriétaires et locataires.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nous croyons que chaque expérience en mer est unique et doit
                    être vécue dans le respect des normes de sécurité les plus
                    strictes. Notre mission est de vous offrir des moments
                    mémorables, que ce soit pour une sortie en famille, une
                    aventure entre amis ou une expédition personnelle.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">E</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">V</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Y</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">E</span>
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

        {/* Texte supplémentaire */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Chez SailingLoc, nous souhaitons démocratiser l’accès aux bateaux et
            offrir des expériences de navigation de qualité, fiables et sécurisées.
            Chaque bateau, chaque location est sélectionné avec soin pour garantir
            satisfaction et sérénité à nos utilisateurs.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous mettons également un point d’honneur à préserver l’environnement
            marin en encourageant les pratiques responsables et le respect des
            écosystèmes locaux. Notre plateforme est pensée pour concilier passion
            de la mer et respect de la nature.
          </p>
        </div>

        {/* Grille avec cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
            {/* Contenu carte 1 */}
          </div>
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
            {/* Contenu carte 2 */}
          </div>
        </div>

        {/* Section statistiques */}
        <div className="mt-20 bg-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Notre impact en chiffres
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              La confiance de notre communauté nautique
            </p>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Chaque chiffre reflète notre engagement à fournir des services fiables
              et des expériences de navigation inoubliables pour tous nos utilisateurs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                500+
              </div>
              <div className="text-gray-300">Bateaux disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                1,000+
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
