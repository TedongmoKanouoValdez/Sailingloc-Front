"use client"
import {Link} from "@heroui/link";
import React from "react";

const PartenairesPage: React.FC = () => {
  const submitPartnerForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      "Merci pour votre candidature ! Notre équipe partenariats vous contactera sous 48h."
    );
    event.currentTarget.reset();
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800">NaviShare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Accueil</Link>
              <Link href="/nosbateaux" className="text-gray-600 hover:text-blue-600 transition-colors">Bateaux</Link>
              <Link href="/NosPartenaire" className="text-gray-600 hover:text-blue-600 transition-colors">Partenaires</Link>
              <Link href="/contrat" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* === HERO === */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
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
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Nos Partenaires
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nous collaborons avec les meilleurs acteurs du secteur nautique pour
            vous offrir une expérience de location exceptionnelle et sécurisée.
          </p>
        </div>
      </section>

      {/* === FORMULAIRE DEVENIR PARTENAIRE === */}
    
    </div>
  );
};

export default PartenairesPage;
