import React from "react";

const ConditionsAcces: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Conditions d&apos;accès et d&apos;utilisation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2.1 Conditions d&apos;accès</h2>
        <p className="mb-4">L&apos;accès aux services de SailingLoc nécessite :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>D&apos;être âgé de 18 ans minimum</li>
          <li>De créer un compte utilisateur avec des informations exactes</li>
          <li>D&apos;accepter les présentes CGV et les CGU</li>
          <li>De disposer d&apos;un permis bateau valide (pour les locataires)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2.2 Inscription</h2>
        <p>
          L&apos;inscription est gratuite et obligatoire pour accéder aux services de réservation. 
          L&apos;utilisateur s&apos;engage à fournir des informations exactes et à les maintenir à jour.
        </p>
      </section>
    </div>
  );
};

export default ConditionsAcces;
