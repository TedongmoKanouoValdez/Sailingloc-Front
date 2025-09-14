'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  LayoutDashboardIcon,
  ShipWheel,
  FileText,
  UserCog,
  MessageSquareLock,
  Bell,
  BanknoteArrowUp,
  SettingsIcon,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/icons';

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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const sessionData = localStorage.getItem('token');

    if (!sessionData) {
      router.push('/');
      return;
    }

    const decodedToken = decodeJWT(sessionData);
    if (!decodedToken) {
      router.push('/');
      return;
    }

    const utilisateurId = Number(decodedToken.userId);

    // Définition du menu avec les rôles autorisés
    const navMain = [
      { title: 'Tableau de bord', url: '/dashboard', icon: LayoutDashboardIcon, roles: ['ADMIN', 'PROPRIETAIRE', 'CLIENT'] },
      { title: 'Gestion des bateaux', url: '/dashboard/gestiondesbateaux', icon: ShipWheel, roles: ['ADMIN', 'PROPRIETAIRE'] },
      { title: 'Réservations', url: '/dashboard/reservations', icon: FileText, roles: ['ADMIN', 'PROPRIETAIRE', 'CLIENT'] },
      { title: 'Gestion des utilisateurs', url: '/dashboard/gestiondesutilisateurs', icon: UserCog, roles: ['ADMIN'] },
      { title: 'Gestion des demandes', url: '/dashboard/demandepartenaire', icon: FileText, roles: ['ADMIN'] },
      { title: 'Support & messages', url: '/dashboard/support&messages', icon: MessageSquareLock, roles: ['ADMIN', 'PROPRIETAIRE'] },
      { title: 'Notifications système', url: '/dashboard', icon: Bell, roles: ['ADMIN'] },
      { title: 'Transactions & paiements', url: '/dashboard/paiements', icon: BanknoteArrowUp, roles: ['ADMIN', 'PROPRIETAIRE'] },
      { title: 'Paramètres plateforme', url: '/dashboard/parametres', icon: SettingsIcon, roles: ['ADMIN'] },
    ];

    // Filtrage selon le rôle
    const navMainFiltered = navMain.filter(item => item.roles?.includes(decodedToken.role));

    setData({
      user: {
        name: decodedToken.nom || 'Utilisateur',
        email: decodedToken.email || 'no-reply@example.com',
        avatar: decodedToken.photoProfil || 'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757771997/3d-ship-with-sea-landscape_qutwk2.jpg',
        id: utilisateurId,
        role: decodedToken.role,
      },
      navMain: navMainFiltered,
    });
  }, [router]);

  if (!data) return <p>Chargement...</p>;

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/dashboard">
                <Logo className="h-5 w-5" />
                <span className="text-base font-semibold">SailingLoc</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
