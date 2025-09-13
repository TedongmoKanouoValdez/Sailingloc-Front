import React from "react";

export default function PolitiqueConfidentialite() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Politique de Confidentialité – SailingLoc
      </h1>

      <p className="mb-6">
        Chez <strong>SailingLoc</strong>, la protection de vos données
        personnelles est une priorité. Cette politique explique quelles
        informations nous collectons, comment nous les utilisons et quels sont
        vos droits.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Données collectées</h2>
      <p>Nous collectons uniquement les informations nécessaires au bon fonctionnement de la plateforme :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Données de compte : nom, prénom, adresse e-mail, mot de passe.</li>
        <li>Données de réservation : informations sur le bateau, dates, paiements.</li>
        <li>Données de navigation : cookies et statistiques d’utilisation.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Utilisation des données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Gérer les réservations et paiements en toute sécurité.</li>
        <li>Assurer la mise en relation entre propriétaires et locataires.</li>
        <li>Améliorer l’expérience utilisateur et les services proposés.</li>
        <li>Respecter nos obligations légales (facturation, fiscalité).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Partage des données</h2>
      <p>Nous ne vendons jamais vos données. Elles peuvent être partagées uniquement avec :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Nos partenaires techniques (hébergement, paiements sécurisés).</li>
        <li>Les compagnies d’assurance partenaires (si nécessaire pour une couverture).</li>
        <li>Les autorités légales, uniquement en cas d’obligation légale.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Conservation des données</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Les données de compte sont conservées tant que vous utilisez la plateforme.</li>
        <li>
          Les données liées aux transactions sont conservées conformément aux
          obligations légales (jusqu’à 10 ans).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Accès, rectification, suppression de vos données.</li>
        <li>Limitation ou opposition à leur traitement.</li>
        <li>Portabilité de vos données.</li>
      </ul>
      <p className="mt-2">
        Pour exercer vos droits :{" "}
        <a href="mailto:contact@sailingloc.com" className="text-blue-600 underline">
          contact@sailingloc.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
      <p>Nous utilisons des cookies pour :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Faciliter la navigation.</li>
        <li>Réaliser des statistiques anonymes.</li>
      </ul>
      <p className="mt-2">
        Vous pouvez désactiver les cookies dans les paramètres de votre
        navigateur.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Sécurité</h2>
      <p>
        Nous mettons en place toutes les mesures techniques et organisationnelles
        nécessaires pour protéger vos données contre tout accès non autorisé,
        perte ou divulgation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications</h2>
      <p>
        Cette politique peut être mise à jour. La date de la dernière mise à jour
        sera indiquée en haut de la page.
      </p>
    </section>
  );
}
