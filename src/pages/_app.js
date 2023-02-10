import { useEffect } from 'react'
import Head from 'next/head'

import Layout from '@/components/PageLayout/Layout'
import { handleScripts } from '../js/init'

import { AuthProvider } from '@/providers/AuthProvider'
import { bootstrap, handleLogin, handleLogout } from '@/services/Auth'
import Providers from '@/providers'

import '@/styles/globals.css'
import '@/styles/plugins.css'

export default function App({ Component, pageProps }) {

  useEffect(() => { handleScripts() }, [])

  return (
    <Providers >
      <AuthProvider bootstrap={bootstrap} onLogin={handleLogin} onLogout={handleLogout}>
        <Layout>
          <Head>
            <title>Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Providers>
  )
}
