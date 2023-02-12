import React, { useEffect, useState } from 'react'
import { Image } from 'antd'

import { essayList } from '@/pages/api/requests/public'

export default function PortfolioList({ category }) {
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        essayList().then((response) => { setEssays(response.data.essays) }) //passar a categoria para filtrar
    }, [])

    return (
        <div className="portfolio_list">
            <ul className="gallery_zoom">
                <Image.PreviewGroup>
                    {essays && essays.map((item, index) => (
                        item.isActive && <li className="image" key={index}>
                            <div className="list_inner">
                                <div className="image">
                                    <React.Fragment>
                                        <Image preview={false} src={`data:image/png;base64, ${item.frontCoverUrl}`} alt="public_essays" />
                                        <div className="details">
                                            <h3>{item.name}</h3>
                                            <span>{item.description}</span>
                                        </div>
                                    </React.Fragment>
                                </div>
                            </div>
                        </li>
                    ))}
                </Image.PreviewGroup>
            </ul>
        </div>
    )
}
