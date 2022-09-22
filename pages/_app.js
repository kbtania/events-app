import '../styles/globals.css'

import Layout from './../components/layout/layout';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Events Explorer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
