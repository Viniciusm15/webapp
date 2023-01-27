import '@/styles/globals.css'
import '@/styles/plugins.css'
import PreLoader from '@/components/PreLoader'
import Layout from '@/components/PageLayout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <PreLoader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
