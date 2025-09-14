import React from "react";

const MentionsLegales: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-black mt-16 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Éditeur du site</h2>
          <p>
            <strong>Dénomination sociale :</strong> SailingLoc <br />
            <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée) <br />
            <strong>Capital social :</strong> 50 000 € <br />
            <strong>Siège social :</strong> 12 Rue de la Mer, 75001 Paris, France <br />
            <strong>Numéro RCS :</strong> Paris B 123 456 789 <br />
            <strong>Numéro SIREN :</strong> 123 456 789 <br />
            <strong>Numéro SIRET :</strong> 123 456 789 00010 <br />
            <strong>Code APE/NAF :</strong> 7732Z (Location et location-bail de biens personnels et domestiques) <br />
            <strong>Numéro de TVA intracommunautaire :</strong> FR 12 123 456 789 <br />
            <strong>Responsable de la publication :</strong> M. Voisin, Directeur Général <br />
            <strong>Email :</strong> contact@sailingloc.fr <br />
            <strong>Téléphone :</strong> 06 12 34 56 78
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Hébergement</h2>
          <p>
            <strong>Hébergeur :</strong> OVHcloud <br />
            <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France <br />
            <strong>Téléphone :</strong> 1007 (numéro gratuit) <br />
            <strong>Site web :</strong> <a href="https://www.ovhcloud.com" className="text-blue-600 underline">ovhcloud.com</a> <br />
            <strong>Hébergement front-end :</strong> Vercel Inc. <br />
            <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis <br />
            <strong>Site web :</strong> <a href="https://vercel.com" className="text-blue-600 underline">vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Développement et conception</h2>
          <p>
            <strong>Agence développeuse :</strong> Pandawan <br />
            <strong>Forme juridique :</strong> SAS <br />
            <strong>Capital social :</strong> 100 000 € <br />
            <strong>Siège social :</strong> 15 Rue de l&apos;Innovation, 75001 Paris, France <br />
            <strong>Numéro RCS :</strong> Paris B 987 654 321 <br />
            <strong>Numéro SIREN :</strong> 987 654 321 <br />
            <strong>Numéro SIRET :</strong> 987 654 321 00010 <br />
            <strong>Code APE/NAF :</strong> 6201Z (Programmation informatique) <br />
            <strong>Numéro de TVA intracommunautaire :</strong> FR 98 987 654 321 <br />
            <strong>Contact technique :</strong> Emmanuel ENGONGOMO – emmanuel.engongomo@pandawan.fr
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Propriété intellectuelle</h2>
          <p>
            Le site internet SailingLoc, son contenu, sa structure, son design et tous les éléments qui le composent
            sont la propriété exclusive de SailingLoc ou font l&apos;objet d&apos;une autorisation d&apos;utilisation.
            Toute reproduction, représentation, modification ou adaptation sans autorisation écrite préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Protection des données personnelles</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et
            d&apos;effacement de vos données personnelles. <br />
            <strong>Responsable du traitement :</strong> SailingLoc <br />
            <strong>DPO :</strong> M. Voisin – dpo@sailingloc.fr <br />
            <strong>Email :</strong> contact@sailingloc.fr <br />
            Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
            <a href="https://www.cnil.fr" className="text-blue-600 underline">cnil.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Cookies</h2>
          <p>
            Le site SailingLoc utilise des cookies pour améliorer votre expérience. Vous pouvez accepter, refuser
            ou personnaliser vos choix via la bannière de consentement affichée lors de votre première visite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Responsabilité</h2>
          <p>
            SailingLoc s&apos;efforce de fournir des informations exactes mais ne peut garantir leur précision.
            La société ne pourra être tenue responsable de l&apos;utilisation du site ni des relations contractuelles
            établies entre les utilisateurs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d&apos;autres sites externes dont SailingLoc n&apos;est pas responsable.
            Tout lien vers SailingLoc doit être autorisé au préalable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Droit applicable et juridiction</h2>
          <p>
            Ces mentions légales sont soumises au droit français. En cas de litige, seuls les tribunaux français
            seront compétents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact</h2>
          <p>
            Email : contact@sailingloc.fr <br />
            Téléphone : 06 12 34 56 78 <br />
            Adresse postale : SailingLoc, 12 Rue de la Mer, 75001 Paris, France
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;
