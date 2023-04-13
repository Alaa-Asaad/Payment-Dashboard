import { Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Head from 'next/head';
import { useCallback, useState } from 'react';

import data from '@/public/data/sidebar-links.json';
import NavbarLeft from '@/src/components/nav-bar/navbar';
import GoPay from '@/src/payment-methods/go-pay';
import PayPal from '@/src/payment-methods/paypal';
import Stripe from '@/src/payment-methods/stripe';

interface Props {
  paramString: string;
}

export default function DashBoard({ paramString }: Props) {
  const isDesktopScreen = useMediaQuery('(min-width: 45em)');
  const [raw] = useState(data);

  const showActivePaymentMethod = useCallback((filterString?: string) => {
    switch (filterString) {
      case 'stripe':
        return <Stripe />;
      case 'paypal':
        return <PayPal />;
      case 'go-pay':
        return <GoPay />;

      default:
        return null;
    }
  }, []);

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
            <NavbarLeft sideLinks={raw} activeLinkChoose={paramString} />
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
            {showActivePaymentMethod(paramString)}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      paramString: context.params.filter[0],
    },
  };
}
