import { AppShell } from '@mantine/core';

import HeaderBar from './header/header';
import NavbarLeft from './nav-bar/navbar';

export default function Layout() {
  const links = [
    {
      link: '/about',
      label: 'Features',
    },
    {
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '/learn',
      label: 'Learn',
    },
    {
      link: '/community',
      label: 'Community',
    },
  ];
  return (
    <AppShell
      padding="md"
      navbar={<NavbarLeft />}
      header={<HeaderBar links={links} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      Your application here
    </AppShell>
  );
}
