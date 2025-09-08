export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'SailingLoc - Location de bateaux entre particuliers',
  description: 'Trouvez et louez des bateaux en toute simplicité avec SailingLoc.',
  navItems: [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Nos bateaux',
      href: '/nosbateaux',
    },
    {
      label: 'Nos destinations',
      href: '/#destinations',
    },
    {
      label: 'Devenir partenaire',
      href: '/devenirpartenaire',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    // {
    //   label: "A propos",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Nos bateaux',
      href: '/nosbateaux',
    },
    {
      label: 'Nos destinations',
      href: '/#destinations',
    },
    {
      label: 'Devenir partenaire',
      href: '/devenirpartenaire',
    },
  ],
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
