'use client';
import { useEffect, useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import { DataTable } from '@/components/data-table-user';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useRouter } from "next/navigation";

type Token = {
  userId: number;
  email: string;
  role: string;
  nom: string;
  prenom: string;
  telephone: string | null;
  photoProfil: string | null;
  iat: number;
  exp: number;
};

function decodeJWT(token: string): Token | null {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded as Token;
  } catch (e) {
    console.error('Erreur decoding JWT :', e);
    return null;
  }
}

export default function GestionDesUtilisateursPage() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [utilisateurId, setUtilisateurId] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const sessionData = localStorage.getItem("token");

    if (sessionData) {
      const decodedToken = decodeJWT(sessionData);
      if (decodedToken) {
        setUtilisateurId(Number(decodedToken.userId));
        if (
          decodedToken.role !== "PROPRIETAIRE" &&
          decodedToken.role !== "ADMIN"
        ) {
          router.push("/");
        }
      }
    } else {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    fetch('https://sailingloc-back.vercel.app/api/utilisateur')
      .then((res) => res.json())
      .then((json) => {
        if (!json || !Array.isArray(json.utilisateurs)) {
          console.error('Format de données inattendu :', json);
          setLoading(false);
          return;
        }
        console.log(json.utilisateurs);
        setUtilisateurs(
          json.utilisateurs.map((user: any) => ({
            id: user.id,
            nomcomplet: `${user.nom ?? ''} ${user.prenom ?? ''}`.trim() || 'Nom inconnu',
            nom: `${user.nom ?? ''}`.trim() || 'Nom inconnu',
            prenom: `${user.prenom ?? ''}`.trim() || 'Nom inconnu',
            email: user.email ?? 'Email inconnu',
            telephone: user.telephone ?? 'Non renseigné',
            adresse: user.adresse ?? 'Non renseignée',
            role: user.role ?? 'Non défini',
            nbbateau: user.nbbateau ?? 0,
            photoProfil: user.photoProfil ?? '',
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur lors du chargement des utilisateurs :', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {loading ? (
                  <p className="text-center text-gray-500">Chargement...</p>
                ) : (
                  <DataTable data={utilisateurs} />
                )}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
