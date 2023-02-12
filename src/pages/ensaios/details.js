import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import PreLoader from '@/components/PreLoader'
import EssayEdit from '@/components/Essay/EssayEdit'
import EssayCompleted from '@/components/Essay/EssayCompleted'
import { handleAuthentionToRedirectUrl } from '@/helpers/functions'

export default function Details() {
  const router = useRouter()

  useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios/details') }, []);

  const {
    query: { essayId, essayStatus }
  } = router

  const props = { essayId, essayStatus }

  function renderSwitch(essayId, essayStatus) {
    switch (essayStatus) {
      case 'edited':
        return <EssayEdit essayId={essayId} />
      case 'created':
        return <EssayCompleted essayId={essayId} />
    }
  }

  return (
    <React.Fragment>
      <PreLoader />
      {renderSwitch(props.essayId, props.essayStatus)}
    </React.Fragment>
  )
}
