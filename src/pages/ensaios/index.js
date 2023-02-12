import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from 'antd'

import PreLoader from '@/components/PreLoader'
import EssayView from '@/components/Essay/EssayView'
import { handleAuthentionToRedirectUrl } from '@/helpers/functions'

// export default function Ensaios() {
//   const router = useRouter()
//   const [essays, setEssays] = useState([]);

//   useEffect(() => {
//     essayList().then((response) => { setEssays(response.data.essays) })
//   }, [])

//   useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios') }, []);

//   return (
//     <React.Fragment>
//       <PreLoader />
//       <EssayView essays={essays} />
//     </React.Fragment>
//   )
// }

export default function Ensaios() {
  const router = useRouter()

  useEffect(() => { handleAuthentionToRedirectUrl(router, '/ensaios') }, []);

  const items = [
    {
      key: '1',
      label: `Todos`,
      children: <EssayView />,
    },
    {
      key: '2',
      label: `Pendente de edição`,
      children: <EssayView status="edited" />,
    },
    {
      key: '3',
      label: `Concluídos`,
      children: <EssayView category="created" />,
    }
  ];

  return (
    <React.Fragment>
      <PreLoader />
      <div className="cavani_tm_section animated">
        <div className="section_inner">
          <div className="cavani_tm_title">
            <span>Ensaios</span>
          </div>

          <div className="cavani_tm_essay">
            <div className="essay_filter">
              <ul>
                <Tabs defaultActiveKey="1" items={items} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
