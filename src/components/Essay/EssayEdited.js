import React, { useEffect, useState } from 'react'
import { Image as _image } from 'antd'
import Image from 'next/image'
import { saveAs } from 'file-saver'

import DowloadIcon from 'public/dowload-icon.svg'
import { essayDetails } from '@/pages/api/requests/client'

export default function EssayEdited({ essay }) {
    const [essays, setEssays] = useState([]);

    useEffect(() => {
        essayDetails(essay.id).then((response) => { setEssays(response.data.items) })
    }, [essay.id, essays.lenght])

    return (
        <div className="essay_filter">
            <ul>
                <li><a>{essay.name}</a></li>
            </ul>

            <div className="essay_list">
                <ul className="gallery_zoom">
                    <_image.PreviewGroup>
                        {essays && essays.map((item, index) => (
                            item.isSelected && <li className="image" key={index}>
                                <div className="list_inner">
                                    <div className="image">
                                        <a className="top-side-right"
                                            onClick={() => saveAs(item.downloadUrl)}>
                                            <Image className="img" src={DowloadIcon} alt="essay_icon_dowload" />
                                        </a>

                                        <_image src={`data:image/png;base64, ${item.base64Image}`} alt="client-essay" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </_image.PreviewGroup>
                </ul>
            </div>
        </div>
    )
}
