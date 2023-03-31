import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

import Footer from '@/src/components/footer/footer';
import HeaderBar from '@/src/components/header/header';

export default function App({ Component, pageProps }: AppProps) {
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
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: '30em',
          sm: '45em',
          md: '64em',
          lg: '74em',
          xl: '90em',
        },
      }}
    >
      <HeaderBar links={links} />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
