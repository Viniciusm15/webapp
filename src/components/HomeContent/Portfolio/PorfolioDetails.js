import React, { useEffect, useState } from 'react'
import { Image } from 'antd'

import { essayDetails } from '@/pages/api/requests/public'

export default function PortfolioDetails({ essayId }) {
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        essayDetails(essayId).then((response) => { setEssays(response.data.items) })
    }, [essayId])

    return (
        <div className="portfolio_list">
            <ul className="gallery_zoom">
                <Image.PreviewGroup>
                    {essays && essays.map((item, index) => (
                        <li className="image" key={index}>
                            <div className="list_inner">
                                <div className="image">
                                    <React.Fragment>
                                        <Image src={`data:image/png;base64, ${item.base64Image}`} alt="public_essays" />
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
