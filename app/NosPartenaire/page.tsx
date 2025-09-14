"use client";
import React from "react";
import Image from "next/image";

const PartenairesPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Nos Partenaires
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Nous collaborons avec les meilleurs acteurs du secteur nautique pour
          offrir une expérience de location exceptionnelle et sécurisée.
        </p>
      </div>

      {/* Cartes partenaires */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Port / Marina */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Image
            src="https://i0.wp.com/blog.navily.com/wp-content/uploads/2025/05/Marine-Sifredi-Carloforte-_-Carloforte.jpg?resize=1170%2C536&ssl=1"
            alt="Port de plaisance"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Ports & Marinas</h3>
          <p className="text-gray-600 text-sm">
            Des ports partenaires offrant des places sécurisées et un service de qualité.
          </p>
        </div>

        {/* Assurance nautique */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Image
            src="https://www.pagesjaunes.fr/media/agc/4a/93/10/00/00/fb/46/5e/44/c5/60254a93100000fb465e44c5/60254a93100000fb465e44c6.jpg"
            alt="Assurance bateau"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Assurances Nautiques</h3>
          <p className="text-gray-600 text-sm">
            Des partenaires assurant vos locations pour une navigation en toute sérénité.
          </p>
        </div>

        {/* Écoles de voile */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Image
            src="https://le-lavandou.fr/wp-content/uploads/2022/07/home_evm_2022-6.jpg"
            alt="École de voile"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Écoles de Voile</h3>
          <p className="text-gray-600 text-sm">
            Des instructeurs et écoles partenaires pour tous les niveaux de navigation.
          </p>
        </div>

        {/* Entretien et maintenance */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Image
            src="https://www.locationventebateaux.com/Portals/29/NBrightUpload/gallery/211210103458dPAMqAb3.jpg"
            alt="Entretien bateau"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Entretien & Maintenance</h3>
          <p className="text-gray-600 text-sm">
            Partenaires spécialisés dans la maintenance et la sécurité des bateaux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartenairesPage;
