import React from "react";

const ConditionsAcces: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Conditions d&apos;accès et d&apos;utilisation
      </h1>

      <p className="mb-10 text-lg text-gray-600 text-center max-w-2xl mx-auto">
        L&apos;accès aux services de <span className="font-semibold">SailingLoc</span> 
        implique le respect de certaines règles afin de garantir une expérience
        sûre, transparente et agréable pour tous les membres de notre communauté nautique.
      </p>

      {/* Conditions d'accès */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2.1 Conditions d&apos;accès</h2>
        <p className="mb-4">
          Pour utiliser notre plateforme et réserver un bateau, chaque utilisateur doit :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Être âgé de 18 ans minimum</li>
          <li>Créer un compte utilisateur avec des informations exactes et complètes</li>
          <li>Accepter sans réserve les présentes <strong>CGV</strong> et <strong>CGU</strong></li>
          <li>Disposer d&apos;un permis bateau valide (pour les locataires concernés)</li>
          <li>Respecter les règles de navigation en vigueur dans la zone concernée</li>
        </ul>
        <p className="mt-4 text-gray-600">
          SailingLoc se réserve le droit de refuser l&apos;accès ou de suspendre un compte en cas de non-respect de ces conditions.
        </p>
      </section>

      {/* Inscription */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2.2 Inscription</h2>
        <p className="mb-4">
          L&apos;inscription est gratuite, simple et obligatoire pour accéder aux services de réservation. 
          Lors de cette étape, l&apos;utilisateur doit fournir des informations personnelles exactes et 
          s&apos;engage à les maintenir à jour.
        </p>
        <p className="mb-4">
          Afin de garantir la sécurité des échanges, une vérification d&apos;identité peut être demandée, 
          notamment pour les locataires de bateaux avec permis requis. 
          Cette étape permet de renforcer la confiance entre propriétaires et locataires.
        </p>
        <p>
          Tout compte créé est personnel et ne peut être transféré à un tiers. 
          L&apos;utilisateur est responsable de la confidentialité de ses identifiants 
          et doit immédiatement signaler toute utilisation frauduleuse.
        </p>
      </section>

      {/* Responsabilités */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">2.3 Responsabilités de l&apos;utilisateur</h2>
        <p className="mb-4">
          En accédant aux services SailingLoc, l&apos;utilisateur s&apos;engage à :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respecter les conditions de navigation et de sécurité imposées par la loi</li>
          <li>Utiliser les services de manière loyale et conforme à leur finalité</li>
          <li>Ne pas fournir de fausses informations ou usurper l&apos;identité d&apos;un tiers</li>
          <li>Respecter les autres membres de la communauté et adopter un comportement responsable</li>
        </ul>
        <p className="mt-4 text-gray-600">
          En cas de non-respect de ces obligations, SailingLoc pourra suspendre ou supprimer le compte 
          concerné, sans préjudice d&apos;autres actions légales.
        </p>
      </section>
    </div>
  );
};

export default ConditionsAcces;
