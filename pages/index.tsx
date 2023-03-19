// import { Inter } from 'next/font/google';
import { Container } from '@mantine/core';
import Head from 'next/head';

import Layout from '@/src/components/app-shell';

// import styles from '@/styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create DashBoard</title>
        <meta name="description" content="DashBoard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container size="xxl">
        <Layout />
      </Container>
    </>
  );
}
