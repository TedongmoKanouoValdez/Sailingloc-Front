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
import AdminDemandesTable from '@/components/pages/DemandePartenaireTable';
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
        if (decodedToken.role !== 'ADMIN') {
          router.push('/');
        }
      }
    } else {
      router.push('/');
    }
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 mx-[3rem]">
                <AdminDemandesTable />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
