import React, { useState } from 'react'
import { Tabs } from 'antd'

import PortfolioList from './PortfolioList';
import PortfolioDetails from './PorfolioDetails';

export default function Portfolio() {
    const [essayId, setEssayId] = useState('')
    const [activeKey, setActiveKey] = useState('1')
    const onKeyChange = (key) => setActiveKey(key)

    const items = [
        {
            key: '1',
            label: `Todos`,
            children: <PortfolioList category="all" setEssayId={setEssayId} onKeyChange={onKeyChange} />
        },
        {
            key: '2',
            label: `Ar livre`,
            children: <PortfolioList category="openAir" setEssayId={setEssayId} onKeyChange={onKeyChange} />
        },
        {
            key: '3',
            label: `Em estúdio`,
            children: <PortfolioList category="inStudio" setEssayId={setEssayId} onKeyChange={onKeyChange} />
        },
        {
            key: '4',
            label: `Temático`,
            children: <PortfolioList category="thematic" setEssayId={setEssayId} onKeyChange={onKeyChange} />
        },
        {
            key: '5',
            label: `Detalhes`,
            disabled: true,
            children: <PortfolioDetails essayId={essayId} />
        },
    ];

    return (
        <div className="cavani_tm_portfolio">
            <div className="cavani_tm_title">
                <span>Portfolio Criativo</span>
            </div>

            <div className="portfolio_filter">
                <ul>
                    <Tabs defaultActiveKey="1" activeKey={activeKey} items={items} onChange={onKeyChange} />
                </ul>
            </div>
        </div>
    )
}
