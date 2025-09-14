import React from "react";

export default function CGV() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 mt-16 max-w-5xl mx-auto leading-relaxed text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Conditions Générales de Vente
      </h1>

      <p className="mb-10 text-lg text-black text-center max-w-3xl mx-auto">
        Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
        entre <strong>SailingLoc</strong> et ses utilisateurs. En réservant un bateau via notre
        plateforme, vous reconnaissez avoir lu, compris et accepté les présentes conditions.
      </p>

      <div className="space-y-8">
        {/* Préambule */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Préambule</h2>
          <p>
            SailingLoc, SAS au capital de 30 000 €, immatriculée au RCS de Paris sous le numéro
            B 123 456 789, dont le siège social est situé 12 Rue de la Mer, 75001 Paris,
            propose une plateforme numérique de mise en relation entre propriétaires et
            locataires de bateaux.
          </p>
        </section>

        {/* Article 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Article 1 - Objet et champ d&apos;application
          </h2>
          <p className="mb-2">
            Les présentes CGV s&apos;appliquent à l&apos;ensemble des services proposés par
            SailingLoc, notamment :
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Mise à disposition d&apos;une plateforme de réservation en ligne</li>
            <li>Système de paiement sécurisé</li>
            <li>Contrats de location automatisés</li>
            <li>Service client et assistance</li>
            <li>Gestion des avis et évaluations</li>
          </ul>
        </section>

        {/* Exemple d'autres articles */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Article 2 - Conditions de réservation
          </h2>
          <p>
            Toute réservation effectuée sur la plateforme est ferme et engage le locataire comme
            le propriétaire. Un email de confirmation est adressé aux deux parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Article 3 - Tarifs et modalités de paiement
          </h2>
          <p>
            Les prix affichés sur la plateforme sont exprimés en euros, toutes taxes comprises.
            Le paiement s&apos;effectue en ligne via un système sécurisé. SailingLoc perçoit une
            commission sur chaque réservation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Article 4 - Annulation et remboursement
          </h2>
          <p>
            Les conditions d&apos;annulation varient selon les bateaux et sont précisées au
            moment de la réservation. Des frais de service peuvent s&apos;appliquer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Article 5 - Obligations des parties</h2>
          <p>
            Les propriétaires s&apos;engagent à fournir un bateau conforme, en bon état et
            assuré. Les locataires s&apos;engagent à respecter le bien loué, la réglementation
            nautique et les conditions du contrat.
          </p>
        </section>

        {/* 👉 Tu continues avec Article 6 (Assurance), 7 (Responsabilités), 
            8 (Force majeure), 9 (Données personnelles), 
            10 (Propriété intellectuelle), 11 (Service client), 
            12 (Résiliation) */}

        {/* Article 13 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Article 13 - Droit applicable et juridiction
          </h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux
            de Paris seront seuls compétents. Un recours préalable à la médiation est possible
            via : <strong>Médiateur de la consommation : Emmanuel ENGONGOMO</strong>.
          </p>
        </section>

        {/* Infos pratiques */}
        <div className="mt-10 border-t pt-6 text-gray-700">
          <p className="mb-2">
            <em>Date d&apos;entrée en vigueur : 01 août 2025 — Version : 1.0</em>
          </p>
          <p>
            Pour toute question relative aux présentes CGV : <br />
            📧{" "}
            <a href="mailto:contact@sailingloc.fr" className="text-blue-600 underline">
              contact@sailingloc.fr
            </a>{" "}
            <br />
            📞 06 12 34 56 78
          </p>
        </div>
      </div>
    </section>
  );
}
