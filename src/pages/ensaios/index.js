import React, { useEffect } from 'react'

import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import { useRouter } from 'next/router'
import EssayView from '@/components/Essay/EssayView'
import PreLoader from '@/components/PreLoader'

export default function Ensaios() {
  const router = useRouter()

  useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios') }, []);

  return (
    <React.Fragment>
      <PreLoader />
      <EssayView />
    </React.Fragment>
  )
}
