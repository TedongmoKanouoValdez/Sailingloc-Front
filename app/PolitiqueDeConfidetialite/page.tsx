import React from "react";

export default function PolitiqueConfidentialite() {
  return (
    <section className="px-6 md:px-12 lg:px-24 mt-16 py-12 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Politique de Confidentialité – SailingLoc
      </h1>

      <p className="mb-6 text-lg text-black">
        La confidentialité et la sécurité de vos données personnelles sont
        essentielles pour <strong>SailingLoc</strong>. Cette politique a pour
        objectif de vous expliquer, en toute transparence, quelles informations
        nous collectons, pourquoi nous les utilisons et comment vous pouvez
        exercer vos droits.
      </p>

      {/* Données collectées */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Données collectées</h2>
      <p>
        Nous collectons uniquement les informations nécessaires au bon
        fonctionnement de la plateforme :
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Données de compte : nom, prénom, adresse e-mail, mot de passe.</li>
        <li>Données de réservation : informations sur le bateau, dates, paiements.</li>
        <li>Données de navigation : cookies et statistiques d’utilisation.</li>
      </ul>

      {/* Utilisation */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Utilisation des données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Gérer les réservations et paiements en toute sécurité.</li>
        <li>Assurer la mise en relation entre propriétaires et locataires.</li>
        <li>Améliorer l’expérience utilisateur et nos services.</li>
        <li>Respecter nos obligations légales (facturation, fiscalité).</li>
      </ul>

      {/* Partage */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Partage des données</h2>
      <p>
        Nous ne vendons jamais vos données personnelles. Elles peuvent être
        partagées uniquement avec :
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Nos partenaires techniques (hébergement, paiements sécurisés).</li>
        <li>Les compagnies d’assurance partenaires (si nécessaire).</li>
        <li>Les autorités légales, uniquement en cas d’obligation.</li>
      </ul>

      {/* Conservation */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Conservation des données</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Les données de compte sont conservées tant que vous utilisez la plateforme.</li>
        <li>Les données liées aux transactions sont conservées jusqu’à 10 ans, conformément à la loi.</li>
      </ul>

      {/* Droits */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Droit d’accès, de rectification et de suppression de vos données.</li>
        <li>Droit de limitation ou d’opposition à leur traitement.</li>
        <li>Droit à la portabilité de vos données.</li>
      </ul>
      <p className="mt-2">
        Vous pouvez exercer vos droits à tout moment en nous écrivant à :{" "}
        <a
          href="mailto:contact@sailingloc.com"
          className="text-blue-600 underline"
        >
          contact@sailingloc.com
        </a>
      </p>

      {/* Cookies */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies</h2>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience, notamment
        pour :
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Faciliter la navigation sur le site.</li>
        <li>Réaliser des statistiques anonymes de fréquentation.</li>
      </ul>
      <p className="mt-2">
        Vous pouvez à tout moment désactiver les cookies dans les paramètres de
        votre navigateur.
      </p>

      {/* Sécurité */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Sécurité</h2>
      <p>
        SailingLoc met en place des mesures techniques et organisationnelles
        adaptées pour protéger vos données contre tout accès non autorisé,
        perte ou divulgation. Toutes les données sont hébergées en Europe.
      </p>

      {/* Contact DPO */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Délégué à la Protection des Données</h2>
      <p>
        Pour toute question ou demande concernant vos données personnelles, vous
        pouvez contacter notre DPO :
      </p>
      <p className="mt-2">
        📧{" "}
        <a href="mailto:rgpd@sailingloc.com" className="text-blue-600 underline">
          rgpd@sailingloc.com
        </a>
        <br />
        📞 06 12 34 56 78
      </p>

      {/* Modifications */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications</h2>
      <p>
        Cette politique peut être mise à jour à tout moment. La date de la
        dernière révision est indiquée ci-dessous.
      </p>

      <p className="mt-6 text-sm text-gray-500 italic">
        Dernière mise à jour : 01 août 2025
      </p>
    </section>
  );
}
