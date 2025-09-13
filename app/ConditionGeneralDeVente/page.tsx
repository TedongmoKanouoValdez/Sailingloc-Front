import React from "react";

export default function CGV() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 max-w-5xl mx-auto leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente</h1>

      <div className="space-y-6">
        <p>
          <strong>Préambule</strong> <br />
          Les présentes Conditions Générales de Vente (CGV) régissent les
          relations contractuelles entre :
        </p>
        <p>
          <strong>SailingLoc</strong>, SAS au capital de 50 000 €, immatriculée
          au RCS de Paris sous le numéro B 123 456 789, dont le siège social est
          situé 12 Rue de la Mer, 75001 Paris, ci-après dénommée "SailingLoc" ou
          "la Société",
        </p>
        <p>
          ET Toute personne physique ou morale souhaitant accéder aux services
          proposés sur le site internet{" "}
          <a
            href="https://www.sailingloc.fr"
            className="text-blue-600 underline"
          >
            www.sailingloc.fr
          </a>
          , ci-après dénommée "l&apos;Utilisateur" ou "le Client".
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Article 1 - Objet et champ d&apos;application
        </h2>
        <p>
          <strong>1.1 Objet des services</strong> <br />
          SailingLoc exploite une plateforme numérique permettant la mise en
          relation entre :
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Les Propriétaires</strong> : particuliers proposant leurs
              voiliers et bateaux à moteur à la location
            </li>
            <li>
              <strong>Les Locataires</strong> : particuliers souhaitant louer
              des bateaux
            </li>
          </ul>
        </p>

        <p>
          <strong>1.2 Services proposés</strong> <br />
          SailingLoc propose les services suivants :
          <ul className="list-disc ml-6 mt-2">
            <li>Mise à disposition d&apos;une plateforme de réservation en ligne</li>
            <li>Système de paiement sécurisé</li>
            <li>Génération automatique de contrats de location</li>
            <li>Service client et assistance</li>
            <li>Gestion des avis et évaluations</li>
          </ul>
        </p>

        <p>
          <strong>1.3 Champ d&apos;application</strong> <br />
          Les présentes CGV s&apos;appliquent à toutes les commandes passées sur
          le site www.sailingloc.fr et prévalent sur toute autre condition
          figurant dans tout autre document.
        </p>

        {/* 👉 tu continues de la même manière pour Article 2 à 13 */}
        {/* Chaque article devient un <h2> et les détails en <p> ou <ul> */}

        <h2 className="text-2xl font-semibold mt-8">
          Article 13 - Droit applicable et juridiction
        </h2>
        <p>
          <strong>13.1 Droit applicable</strong> <br />
          Les présentes CGV sont soumises au droit français.
        </p>
        <p>
          <strong>13.2 Médiation</strong> <br />
          Conformément à la réglementation, SailingLoc adhère au service de
          médiation de la consommation suivant : Médiateur de la consommation :
          Emmanuel ENGONGOMO
        </p>
        <p>
          <strong>13.3 Juridiction compétente</strong> <br />
          En cas de litige, les tribunaux de Paris seront seuls compétents.
        </p>

        <p className="mt-8">
          <em>Date d&apos;entrée en vigueur : 01 août 2025 — Version : 1.0</em>
        </p>
        <p>
          Pour toute question relative aux présentes CGV : <br />
          Email :{" "}
          <a
            href="mailto:contact@sailingloc.fr"
            className="text-blue-600 underline"
          >
            contact@sailingloc.fr
          </a>{" "}
          <br />
          Téléphone : 06 12 34 56 78
        </p>
      </div>
    </section>
  );
}
