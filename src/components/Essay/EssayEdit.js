import React, { useState } from 'react'
import { Image, Checkbox } from 'antd'

import { essayDetails } from '@/pages/api/requests/client'

export default function EssayEdit({ essayId }) {

    const [essays, setEssays] = useState([]);
    const [imageSrcList, setImageSrcList] = useState([]);

    useEffect(() => {
        essayDetails(essayId).then((response) => { setEssays(response.data.essays) })
    }, [])

    console.log(essays)

    function handleRemove(imageSrc) {
        const newList = (Object.values(imageSrcList).filter((src) => src !== imageSrc));
        setImageSrcList(newList);
    }

    const onChange = (checkedImage) => {
        if (imageSrcList.includes(checkedImage.target.value))
            return handleRemove(checkedImage.target.value);

        setImageSrcList([...imageSrcList, checkedImage.target.value]);
    };

    return (
        <div className="cavani_tm_section animated">
            <div className="section_inner">
                <div className="cavani_tm_title">
                    <span>Detalhes do ensaio</span>
                </div>

                <div className="cavani_tm_essay">
                    <div className="essay_filter">
                        <ul className="essay_edit">
                            <li><a>Nome do ensaio</a></li>
                            <li><a>Selecionado 1 de 10</a></li>
                        </ul>
                    </div>

                    <div className="essay_list">
                        <ul className="gallery_zoom">
                            <Checkbox.Group>
                                <Image.PreviewGroup>
                                    {essays && essays.map((item, index) => (
                                        <li className="image">
                                            <div className="list_inner">
                                                <div className="image">
                                                    <Checkbox className="top-side-right" value="1" onChange={onChange} />
                                                    <Image
                                                        preview={false}
                                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                    {/* <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="2" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </li> */}
                                </Image.PreviewGroup>
                            </Checkbox.Group>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
