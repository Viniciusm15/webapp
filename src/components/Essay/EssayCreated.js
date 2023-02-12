import React, { useState, useEffect } from 'react'
import { Image, Checkbox, message } from 'antd'

import { essayDetails, selectedEssays } from '@/pages/api/requests/client'

export default function EssayCreated({ essay }) {
    const [essays, setEssays] = useState([]);
    const [imageSrcList, setImageSrcList] = useState([]);

    useEffect(() => {
        essayDetails(essay.id).then((response) => { setEssays(response.data.items) })
    }, [essay.id, essays.length])

    function handleRemove(imageSrc) {
        const newList = (Object.values(imageSrcList).filter((src) => src !== imageSrc));
        setImageSrcList(newList);
    }

    const onChange = (checkedImage) => {
        if (imageSrcList.includes(checkedImage.target.value))
            return handleRemove(checkedImage.target.value);

        setImageSrcList([...imageSrcList, checkedImage.target.value]);
    }

    const handleSubmit = () => {
        selectedEssays(essay.id, imageSrcList).then((response) => {
            window.location.href = '/essays';
        })
    }

    return (
        <React.Fragment>
            <div className="essay_filter">
                <ul className="essay_edit">
                    <li><a>{essay.name}</a></li>
                    <li><a>Selecionado {imageSrcList.length} de {essays.length}</a></li>
                </ul>

                <div className="essay_list">
                    <ul className="gallery_zoom">
                        <Checkbox.Group>
                            <Image.PreviewGroup>
                                {essays && essays.map((item, index) => (
                                    !item.isSelected && <li className="image" key={index}>
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value={item.id} onChange={onChange} />
                                                <Image
                                                    alt="client_essays_edit"
                                                    src={`data:image/png;base64, ${item.base64Image}`}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </Image.PreviewGroup>
                        </Checkbox.Group>
                    </ul>
                </div>
            </div>
            <button className="cavani_tm_button essay_edit" onClick={handleSubmit}>Salvar</button>
        </React.Fragment>
    )
}
