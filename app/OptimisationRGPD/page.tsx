import React from "react";

export default function RGPD() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 mt-16 max-w-4xl mx-auto leading-relaxed text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Politique de Protection des Données (RGPD)
      </h1>

      <p className="mb-6 text-lg text-black text-center">
        Chez <strong>SailingLoc</strong>, nous accordons une importance
        particulière à la protection de vos données personnelles. La présente
        politique explique de manière claire et transparente comment nous
        collectons, utilisons et protégeons vos informations.
      </p>

      {/* Collecte des données */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Données collectées
      </h2>
      <p>
        Nous collectons uniquement les données nécessaires à la fourniture de
        nos services, notamment :
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Données d&apos;identité (nom, prénom, date de naissance)</li>
        <li>Coordonnées (adresse email, téléphone, adresse postale)</li>
        <li>Données de navigation (cookies, adresses IP, préférences)</li>
        <li>Données liées à la réservation et au paiement</li>
      </ul>

      {/* Finalités */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Finalités du traitement
      </h2>
      <p>
        Les données collectées sont utilisées dans le cadre suivant :
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Gestion des comptes utilisateurs et des réservations</li>
        <li>Communication avec les propriétaires et les locataires</li>
        <li>Amélioration de l&apos;expérience utilisateur</li>
        <li>Respect des obligations légales et fiscales</li>
      </ul>

      {/* Droits */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Vos droits
      </h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants concernant vos
        données personnelles :
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Droit d&apos;accès et de rectification</li>
        <li>Droit d&apos;opposition et de limitation du traitement</li>
        <li>Droit à la portabilité des données</li>
        <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
      </ul>
      <p className="mt-2 text-gray-600">
        Vous pouvez exercer ces droits à tout moment en nous contactant.
      </p>

      {/* Sécurité */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Sécurité et conservation
      </h2>
      <p>
        SailingLoc met en place des mesures techniques et organisationnelles
        afin de protéger vos données contre toute perte, utilisation abusive ou
        accès non autorisé. Les données sont conservées uniquement pour la
        durée nécessaire aux finalités prévues.
      </p>

      {/* Optimisations RGPD */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Nos engagements de conformité
      </h2>
      <ul className="list-disc ml-6 space-y-3">
        <li>
          <strong>Consentement clair et explicite :</strong> via une bannière
          cookies et des formulaires transparents.
        </li>
        <li>
          <strong>Politique de confidentialité :</strong> documentée et
          accessible à tout moment.
        </li>
        <li>
          <strong>Sécurisation des données :</strong> chiffrement, hébergement
          sécurisé, protocole HTTPS.
        </li>
        <li>
          <strong>Formulaires conformes :</strong> avec explication des usages
          et cases à cocher explicites.
        </li>
        <li>
          <strong>Droit à l’oubli :</strong> suppression des données sur simple
          demande.
        </li>
        <li>
          <strong>Registre des traitements :</strong> tenu à jour en interne et
          disponible en cas de contrôle CNIL.
        </li>
      </ul>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Contact Délégué à la Protection des Données
      </h2>
      <p>
        Pour toute question relative à vos données personnelles ou pour
        exercer vos droits, vous pouvez nous contacter à :
      </p>
      <p className="mt-2">
        📧{" "}
        <a
          href="mailto:rgpd@sailingloc.fr"
          className="text-blue-600 underline"
        >
          rgpd@sailingloc.fr
        </a>{" "}
        <br />
        📞 06 12 34 56 78
      </p>
    </section>
  );
}
