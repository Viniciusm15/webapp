import { useRouter } from 'next/router'

import EssayEdit from '@/components/Essay/EssayEdit'
import EssayCompleted from '@/components/Essay/EssayCompleted'

export default function Details() {

  const router = useRouter()

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
      {renderSwitch(props.essay)}
    </React.Fragment>
  )
}
