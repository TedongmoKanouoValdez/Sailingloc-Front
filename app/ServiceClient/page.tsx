"use client";

import React, { useState } from "react";

export default function ServiceClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setFaqOpen(faqOpen === id ? null : id);
  };

  const openChat = () => {
    alert(
      "Fonctionnalité de chat en cours de développement. Utilisez le téléphone ou l'email pour le moment."
    );
  };

  const callSupport = () => {
    window.location.href = "tel:+330760271735";
  };

  const openEmailForm = () => {
    window.location.href = "mailto:sailingloc155@gmail.com";
  };

  const submitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      "Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais."
    );
    event.currentTarget.reset();
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Titre principal */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Service Client
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe vous accompagne 24h/24 et 7j/7. Avant, pendant ou après votre location, nous sommes à votre écoute.
          </p>
        </div>

        {/* Options de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Chat */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3582ae] to-[#3582ae] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Chat en direct</h3>
              <p className="text-gray-600 mb-6">Réponse immédiate de nos experts nautiques</p>
              <button onClick={openChat} className="w-full bg-gradient-to-br from-[#3582ae] to-[#3582ae] hover:from-[#3582ae] hover:to-[#3582ae] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Démarrer le chat
              </button>
              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                En ligne maintenant
              </div>
            </div>
          </div>

          {/* Téléphone */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3582ae] to-[#3582ae] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Assistance téléphonique</h3>
              <p className="text-gray-600 mb-6">Support vocal personnalisé avec nos conseillers</p>
              <button onClick={callSupport} className="w-full bg-gradient-to-br from-[#3582ae] to-[#3582ae] hover:from-[#3582ae] hover:to-[#3582ae] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Appeler maintenant
              </button>
              <div className="mt-4 text-lg font-semibold text-[#3582ae]">+33 1 23 45 67 89</div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3582ae] to-[#3582ae] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Support par email</h3>
              <p className="text-gray-600 mb-6">Réponse détaillée sous 2h en moyenne</p>
              <button onClick={openEmailForm} className="w-full bg-gradient-to-br from-[#3582ae] to-[#3582ae] hover:from-[#3582ae] hover:to-[#3582ae] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Envoyer un email
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 text-lg">Trouvez rapidement les réponses à vos questions</p>
          </div>

          <div className="space-y-4">
            {[
              { id: 1, question: "Comment réserver un bateau ?", answer: "Sélectionnez votre bateau, choisissez vos dates, remplissez vos informations et confirmez votre réservation. Le paiement est sécurisé et vous recevrez immédiatement votre confirmation par email." },
              { id: 2, question: "Que faire en cas de problème pendant la location ?", answer: "Contactez immédiatement notre assistance d'urgence au +33 1 23 45 67 89. Nous sommes disponibles 24h/24 pour vous aider et résoudre tout problème technique ou administratif." },
              { id: 3, question: "Puis-je annuler ma réservation ?", answer: "Oui, vous pouvez annuler selon nos conditions : remboursement intégral jusqu'à 48h avant, 50% jusqu'à 24h avant. Les conditions peuvent varier selon le propriétaire du bateau." },
              { id: 4, question: "L'assurance est-elle incluse ?", answer: "Oui, toutes nos locations incluent une assurance complète couvrant les dommages, le vol et la responsabilité civile. Une caution est demandée et restituée après vérification de l'état du bateau." },
            ].map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => toggleFAQ(faq.id)} className="w-full text-left p-6 flex justify-between items-center focus:outline-none">
                  <h3 className="text-lg font-semibold text-[#3582ae]">{faq.question}</h3>
                  <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${faqOpen === faq.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 pb-6 transition-max-height duration-500 overflow-hidden ${faqOpen === faq.id ? "max-h-96" : "max-h-0"}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        {/* <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
            <p className="text-gray-600 text-lg">Une question spécifique ? Envoyez-nous un message</p>
          </div>

          <form className="max-w-2xl mx-auto" onSubmit={submitContactForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Prénom *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3582ae] focus:border-transparent" />
              <input type="text" placeholder="Nom *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3582ae] focus:border-transparent" />
            </div>
            <input type="email" placeholder="Email *" required className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3582ae] focus:border-transparent" />
            <select required className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3582ae] focus:border-transparent">
              <option value="">Choisissez un sujet</option>
              <option value="reservation">Question sur une réservation</option>
              <option value="probleme">Signaler un problème</option>
              <option value="remboursement">Demande de remboursement</option>
              <option value="technique">Problème technique</option>
              <option value="autre">Autre</option>
            </select>
            <textarea rows={5} placeholder="Message *" required className="w-full px-4 py-3 mb-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3582ae] focus:border-transparent"></textarea>
            <button type="submit" className="w-full bg-gradient-to-br from-[#3582ae] to-[#3582ae] hover:from-[#3582ae] hover:to-[#3582ae] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300">
              Envoyer le message
            </button>
          </form>
        </div> */}

        {/* Horaires */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Nos horaires de support</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-blue-400 text-xl font-bold mb-2">Chat & Téléphone</div>
              <div className="text-gray-300">24h/24 - 7j/7</div>
              <div className="text-sm text-gray-400 mt-1">Réponse immédiate</div>
            </div>
            <div>
              <div className="text-blue-400 text-xl font-bold mb-2">Email</div>
              <div className="text-gray-300">Réponse sous 2h</div>
              <div className="text-sm text-gray-400 mt-1">En moyenne</div>
            </div>
            <div>
              <div className="text-blue-400 text-xl font-bold mb-2">Urgences</div>
              <div className="text-gray-300">Assistance immédiate</div>
              <div className="text-sm text-gray-400 mt-1">24h/24 - 7j/7</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
