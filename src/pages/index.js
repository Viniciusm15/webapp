import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import MainPart from '@/components/HomeContent/MainPart'
import PreLoader from '@/components/PreLoader'
import { getToken } from '@/services/Auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = getToken()
    token ? router.push("/ensaios") : router.push("/");
  }, []);

  return (
    <React.Fragment>
      <PreLoader />
      <MainPart />
    </React.Fragment>
  )
}
