import React from 'react'
import { Tabs } from 'antd'
import PortfolioList from './PortfolioList';

export default function Portfolio() {
    const items = [
        {
            key: '1',
            label: `Todos`,
            children: <PortfolioList category="all" />,
        },
        {
            key: '2',
            label: `Ar livre`,
            children: <PortfolioList category="openAir" />,
        },
        {
            key: '3',
            label: `Em estúdio`,
            children: <PortfolioList category="inStudio" />,
        },
        {
            key: '4',
            label: `Temático`,
            children: <PortfolioList category="thematic" />
        },
    ];

    return (
        <div className="cavani_tm_portfolio">
            <div className="cavani_tm_title">
                <span>Portfolio Criativo</span>
            </div>

            <div className="portfolio_filter">
                <ul>
                    <Tabs defaultActiveKey="1" items={items} />
                </ul>
            </div>
        </div>
    )
}
