import React from "react";

export default function RGPD() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 max-w-4xl mx-auto leading-relaxed text-gray-800 mt-20s">

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Optimisations RGPD :
      </h2>

      <p>
        Pour être conforme au Règlement Général sur la Protection des Données
        (RGPD), SailingLoc doit mettre en place des mesures précises pour
        garantir la sécurité et la transparence dans le traitement des données
        personnelles. Voici les bonnes pratiques à adopter :
      </p>

      <ul className="list-disc ml-6 space-y-3 mt-4">
        <li>
          <strong>Consentement clair et explicite :</strong> Les utilisateurs
          doivent pouvoir accepter ou refuser la collecte de leurs données
          (cookies, formulaires, etc.) via une bannière conforme.
        </li>
        <li>
          <strong>Politique de confidentialité :</strong> Une page dédiée doit
          expliquer comment les données sont collectées, utilisées, stockées et
          protégées, ainsi que les droits des utilisateurs (accès, rectification,
          suppression, etc.).
        </li>
        <li>
          <strong>Sécurisation des données :</strong> Toutes les données
          sensibles (informations personnelles, données bancaires) doivent être
          chiffrées et stockées de manière sécurisée. Il est recommandé
          d’utiliser le protocole HTTPS sur tout le site.
        </li>
        <li>
          <strong>Formulaires conformes :</strong> Chaque formulaire
          (inscription, contact, réservation) doit indiquer pourquoi les données
          sont demandées et inclure une case à cocher pour le consentement.
        </li>
        <li>
          <strong>Droit à l’oubli :</strong> Le site doit permettre aux
          utilisateurs de demander la suppression de leurs données personnelles
          à tout moment.
        </li>
        <li>
          <strong>Registre des traitements :</strong> Un registre interne des
          traitements de données doit être tenu à jour pour prouver la conformité
          en cas de contrôle par la CNIL.
        </li>
      </ul>
    </section>
  );
}
