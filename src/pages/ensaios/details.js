import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { handleAuthentionToRedirectUrl } from '@/helpers/functions'
import EssayEdit from '@/components/Essay/EssayEdit'
import EssayCompleted from '@/components/Essay/EssayCompleted'
import PreLoader from '@/components/PreLoader'

export default function Details() {
  const router = useRouter()

  useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios/details') }, []);

  const {
    query: { essay }
  } = router

  const props = { essay }

  function renderSwitch(essay) {
    switch (essay) {
      case 'edit':
        return <EssayEdit />
      case 'download':
        return <EssayCompleted />
    }
  }

  return (
    <React.Fragment>
      <PreLoader />
      {renderSwitch(props.essay)}
    </React.Fragment>
  )
}
