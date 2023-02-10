import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import MainPart from '@/components/HomeContent/MainPart'
import PreLoader from '@/components/PreLoader'
import { getToken } from '@/services/Auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios') }, []);

  return (
    <React.Fragment>
      <PreLoader />
      <MainPart />
    </React.Fragment>
  )
}
