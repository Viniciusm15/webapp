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
            children: <PortfolioList setEssayId={setEssayId} onKeyChange={onKeyChange} />
        },
        {
            key: '2',
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
