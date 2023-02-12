import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { handleAuthenticationToRedirectUrl } from '@/helpers/functions'
import MainPart from '@/components/HomeContent/MainPart'
import PreLoader from '@/components/PreLoader'

export default function Home() {
  const router = useRouter()

  useEffect(() => { handleAuthenticationToRedirectUrl(router, '/ensaios') }, []);

  return (
    <React.Fragment>
      <PreLoader />
      <MainPart />
    </React.Fragment>
  )
}
