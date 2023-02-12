import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from 'antd'

import PreLoader from '@/components/PreLoader'
import EssayView from '@/components/Essay/EssayView'
import EssayDetails from '@/components/Essay/EssayDetails'
import { handleAuthenticationToRedirectUrl } from '@/helpers/functions'

export default function Essays() {
  const router = useRouter()
  const [essay, setEssay] = useState('')
  const [activeKey, setActiveKey] = useState('1')

  useEffect(() => { handleAuthenticationToRedirectUrl(router, '/essays') }, []);

  const onKeyChange = (key) => setActiveKey(key)

  const items = [
    {
      key: '1',
      label: `Todos`,
      children: <EssayView setEssay={setEssay} onKeyChange={onKeyChange} />,
    },
    {
      key: '2',
      label: `Pendente de edição`,
      children: <EssayView status="created" setEssay={setEssay} onKeyChange={onKeyChange} />,
    },
    {
      key: '3',
      label: `Concluídos`,
      children: <EssayView status="edited" setEssay={setEssay} onKeyChange={onKeyChange} />,
    },
    {
      key: '4',
      label: `Detalhes`,
      disabled: true,
      children: <EssayDetails essay={essay} />,
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
                <Tabs defaultActiveKey="1" activeKey={activeKey} items={items} onChange={onKeyChange} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
