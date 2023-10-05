import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/common/Layout'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        titleTemplate='Immersive | %s'
        defaultTitle='Immersive | HUMAN-CENTERED AR/MR/VR'
        description='Immersive - HUMAN-CENTERED AR/MR/VR'
      />
      <Head>
        <link rel='shourtcut icon' href='img/favicon.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
