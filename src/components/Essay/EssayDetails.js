import React from 'react'

import EssayCreated from '@/components/Essay/EssayCreated'
import EssayEdited from '@/components/Essay/EssayEdited'

export default function Details({ essay }) {

  function renderSwitch(essay) {
    switch (essay.status) {
      case 'edited':
        return <EssayEdited essay={essay} />
      case 'created':
        return <EssayCreated essay={essay} />
    }
  }

  return (
    <React.Fragment>
      {renderSwitch(essay)}
    </React.Fragment>
  )
}
