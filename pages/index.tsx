import Head from 'next/head';

import DashBoard from './dashboard/[[...filter]]';

export default function Home() {
  return (
    <>
      <Head>
        <title>Payment DashBoard</title>
        <meta name="description" content="DashBoard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <DashBoard paramString="" />
    </>
  );
}
