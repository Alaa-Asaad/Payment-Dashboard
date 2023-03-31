import { Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import data from '@/public/data/sidebar-links.json';
import NavbarLeft from '@/src/components/nav-bar/navbar';

export default function DashBoard() {
  const isDesktopScreen = useMediaQuery('(min-width: 45em)');
  const [raw] = useState(data);
  const router = useRouter();
  const { filter } = router.query;

  return (
    <>
      <Head>
        <title>Create DashBoard</title>
        <meta name="description" content="DashBoard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container size="xxl">
        <Grid>
          <Grid.Col span={2}>
            <NavbarLeft sideLinks={raw} />
          </Grid.Col>
          <Grid.Col
            span={isDesktopScreen ? 10 : 12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {filter}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
