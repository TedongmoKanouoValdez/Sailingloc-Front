'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { FooterWrapper } from '@/components/FooterWrapper';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarRoutes = [
    '/dashboard',
    '/dashboard/gestiondesbateaux',
    '/dashboard/gestiondesbateaux/creer',
    '/dashboard/gestiondesbateaux/edit',
    '/dashboard/demandepartenaire',
    '/dashboard/gestiondesbateaux/creer/finalisation',
    '/dashboard/gestiondesutilisateurs',
    '/dashboard/support&messages',
    '/dashboard/reservations',
  ];

  // Vérifie si l'URL commence par l'une des routes définies
  const shouldHideNavbar = hideNavbarRoutes.some((route) => pathname.startsWith(route));

  return (
    <div className="relative flex flex-col h-screen">
      {!shouldHideNavbar && <Navbar />}
      <main>{children}</main>
      {!shouldHideNavbar && <FooterWrapper />}
    </div>
  );
}
