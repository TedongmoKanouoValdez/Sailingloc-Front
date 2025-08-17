'use client';

import * as React from 'react';
import {
  ArrowUpCircleIcon,
  BanknoteArrowUp,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  MessageSquareLock,
  Bell,
  LayoutDashboardIcon,
  FileText,
  ShipWheel,
  UserCog,
  SettingsIcon,
} from 'lucide-react';
import { Link } from '@heroui/link';
import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
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

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Tableau de bord',
      url: '/dashboard',
      icon: LayoutDashboardIcon,
    },
    {
      title: 'Gestion des bateaux',
      url: '/dashboard/gestiondesbateaux',
      icon: ShipWheel,
    },
    {
      title: 'Réservations',
      url: '/dashboard/reservations',
      icon: FileText,
    },
    {
      title: 'Gestion des utilisateurs',
      url: '/dashboard/gestiondesutilisateurs',
      icon: UserCog,
    },
    {
      title: 'Support & messages',
      url: '/dashboard/support&messages',
      icon: MessageSquareLock,
    },
    {
      title: 'Notifications système',
      url: '/dashboard',
      icon: Bell,
    },
    {
      title: 'Transactions & paiements',
      url: '/dashboard',
      icon: BanknoteArrowUp,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: CameraIcon,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: FileTextIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: FileCodeIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Paramètres plateforme',
      url: '#',
      icon: SettingsIcon,
    },
    // {
    //   title: 'Get Help',
    //   url: '#',
    //   icon: HelpCircleIcon,
    // },
    // {
    //   title: 'Search',
    //   url: '#',
    //   icon: SearchIcon,
    // },
  ],
  documents: [
    {
      name: 'Data Library',
      url: '#',
      icon: DatabaseIcon,
    },
    {
      name: 'Reports',
      url: '#',
      icon: ClipboardListIcon,
    },
    {
      name: 'Word Assistant',
      url: '#',
      icon: FileIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/dashboard">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary className="mt-auto" items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
