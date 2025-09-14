"use client";
import React from "react";

const PolitiqueAnnulation: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 max-w-4xl mt-16 mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Politique d&apos;annulation et de remboursement
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5.1 Annulation par le Locataire</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Plus de 30 jours avant la location :</strong> Remboursement intégral
            moins 50€ de frais de dossier
          </li>
          <li>
            <strong>Entre 15 et 30 jours :</strong> Remboursement de 50% du montant payé
          </li>
          <li>
            <strong>Moins de 15 jours :</strong> Aucun remboursement sauf cas de force majeure
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5.2 Annulation par le Propriétaire</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Remboursement intégral immédiat</li>
          <li>Pénalité de 100€ à la charge du Propriétaire</li>
          <li>SailingLoc s&apos;efforce de proposer une solution de remplacement</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5.3 Conditions météorologiques</h2>
        <p>
          En cas de conditions météorologiques dangereuses (avis de tempête, mer force 6 ou plus),
          l&apos;annulation peut être effectuée sans frais jusqu&apos;à 24h avant le début de la location.
        </p>
      </section>

      <p className="mt-6 text-sm text-gray-500">
        Pour toute question concernant cette politique, veuillez contacter notre service client :
        <br />
        Email : <a href="mailto:support@sailingloc.fr" className="text-blue-600 underline">support@sailingloc.fr</a>
        <br />
        Téléphone : +33 1 23 45 67 89
      </p>
    </section>
  );
};

export default PolitiqueAnnulation;
