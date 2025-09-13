'use client';
import { useEffect, useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import { DataTable } from '@/components/data-table';
import { SiteHeader } from '@/components/site-header';
import { schema } from '@/components/data-table';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

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

export default function GestionDesBateauxPage() {
  const [data, setData] = useState<z.infer<typeof schema>[]>([]);
  const [loading, setLoading] = useState(true);

  const [utilisateurId, setUtilisateurId] = useState<number>(0);
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const sessionData = localStorage.getItem('token');

    if (sessionData) {
      const decodedToken = decodeJWT(sessionData);
      if (decodedToken) {
        setUtilisateurId(Number(decodedToken.userId));
        setRole(decodedToken.role);

        // Vérification d’accès
        if (decodedToken.role !== 'PROPRIETAIRE' && decodedToken.role !== 'ADMIN') {
          router.push('/');
        }
      }
    } else {
      router.push('/');
    }
  }, [router]);

  const refetch = () => {
    setLoading(true);

    // Choix de l’URL en fonction du rôle
    let url = '';
    if (role === 'ADMIN') {
      url = 'https://sailingloc-back.vercel.app/api/bateaux'; // tous les bateaux
    } else if (role === 'PROPRIETAIRE') {
      if (!utilisateurId) {
        console.error('❌ proprietaireId manquant');
        setLoading(false);
        return;
      }
      url = `https://sailingloc-back.vercel.app/api/bateaux/proprietaire/${utilisateurId}`;
    }

    if (!url) {
      setLoading(false);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (!json || !Array.isArray(json.bateaux)) {
          console.error('Format de données inattendu :', json);
          setLoading(false);
          return;
        }
        console.log(json);

        setData(
          json.bateaux.map((bateau: any) => ({
            id: bateau.id,
            header: bateau.nom ?? 'Nom inconnu',
            slug: bateau.slug ?? 0,
            type: bateau.modele ?? 'Modèle inconnu',
            port: bateau.portdefault ?? 'Port inconnu',
            target: bateau.prix ?? '0',
            detail: bateau.details ?? [],
            description: bateau.description ?? '',
            datesIndisponibles: bateau.datesIndisponibles ?? [],
            proprietaireId: bateau.proprietaireId ?? 0,
            nomproprietaire: `${bateau.proprietaire?.nom ?? ''} ${bateau.proprietaire?.prenom ?? ''}`,
            roleproprietaire: bateau.proprietaire
              ? bateau.proprietaire.role === 'ADMIN'
                ? 'administrateur'
                : 'propriétaire'
              : 'inconnu',
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erreur lors du rafraîchissement :', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (role) {
      refetch();
    }
  }, [role, utilisateurId]);

  if (loading) return <p>Chargement…</p>;

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable data={data} refreshTable={refetch} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
