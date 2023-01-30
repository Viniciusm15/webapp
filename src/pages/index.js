import Head from 'next/head'
import MainPart from '@/components/MainContent/MainPart'
import { useEffect } from 'react'
import { loadAllScripts } from '../js/init'

export default function Home() {

  useEffect(() => {
    loadAllScripts()
  })

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPart />
    </>
  )
}
