'use client';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { DataTable } from '@/components/data-table-reservation';
import { SectionCards } from '@/components/section-cards';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useRouter } from 'next/navigation';
// import data from "../data.json";

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

export default function ReservationsPage() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState('');
  const router = useRouter();
  const [utilisateurId, setUtilisateurId] = useState<number>(0);
  const [reservations, setReservations] = useState<any[]>([]);

  useEffect(() => {
    const sessionData = localStorage.getItem('token');
    if (sessionData) {
      const decodedToken = decodeJWT(sessionData);
      if (decodedToken) {
        setRole(decodedToken.role);
        setUtilisateurId(Number(decodedToken.userId));
        if (decodedToken.role !== 'PROPRIETAIRE' && decodedToken.role !== 'ADMIN') {
          router.push('/');
        }
      }
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    async function fetchReservations() {
      try {
        let reservationsUrl = '';

        if (role === 'ADMIN') {
          // Admin → toutes les données
          reservationsUrl = 'https://sailingloc-back.vercel.app/api/reservations/admin';
        } else if (role === 'PROPRIETAIRE') {
          // Propriétaire → seulement ses bateaux et réservations
          if (!utilisateurId) throw new Error('proprietaireId manquant');
          reservationsUrl = `https://sailingloc-back.vercel.app/api/reservations/proprietaire/${utilisateurId}`;
        }

        const [reservationsRes] = await Promise.all([
          reservationsUrl
            ? fetch(reservationsUrl)
            : Promise.resolve({
                ok: true,
                json: async () => ({ reservations: [] }),
              }),
        ]);

        if (!reservationsRes.ok) throw new Error('Erreur chargement réservations');

        const json = await reservationsRes.json();
        console.log(json);
        if (json.success) {
          // Adapter au format attendu par ton DataTable (schema zod)
          const formatted = json.reservations.map((r: any) => ({
            id: r.id,
            nomdubateau: r.bateau.nom,
            client: `${r.utilisateur.prenom} ${r.utilisateur.nom}`,
            dates: `${new Date(r.dateDebut).toLocaleDateString()} - ${new Date(
              r.dateFin
            ).toLocaleDateString()}`,
            statutdepaiement: r.statut,
            paiement: r.Total ? r.Total : '0',
            statusduproprietaire: r.data ? r.data : 'EN ATTENTE',
            reviewer: r.utilisateur.email,
            contratUrl: r.contrat?.medias?.[0]?.url || null,
            recuUrl: r.paiement?.recu?.media?.url || null,
            userconnect: utilisateurId || 0,
            montantFinal: r.montantFinal || 0,
          }));
          setData(formatted);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchReservations();
  }, [role, utilisateurId]);

  console.log(data);

  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 mx-[3rem]">
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
