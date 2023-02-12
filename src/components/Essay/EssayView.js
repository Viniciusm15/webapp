import React, { useEffect, useState } from 'react'
import { Image as _image } from 'antd'
import Router from 'next/router'

import { essayList } from '@/pages/api/requests/client'

export default function EssayView({ status }) {
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        essayList(status).then((response) => { setEssays(response.data.essays) })
    }, [])

    function sendProps(essayId, essayStatus) {
        Router.push({
            pathname: '/ensaios/details',
            query: {
                essayId,
                essayStatus
            }
        })
    }

    return (
        <div className="essay_list">
            <ul className="gallery_zoom">
                <_image.PreviewGroup >
                    {essays && essays.map((item, index) => (
                        <li className="image" key={index}>
                            <div className="list_inner">
                                <div className="image">
                                    <a onClick={() => sendProps(item.id, item.status)}>
                                        <_image preview={false} src={`data:image/png;base64, ${item.frontCoverUrl}`} alt="client_essays" />
                                    </a>

                                    <div className="details">
                                        <h3>{item.name}</h3>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </_image.PreviewGroup>
            </ul>
        </div>
    )
}
