import React, { useState } from 'react'
import { Image, Checkbox } from 'antd'

export default function Editar() {

    const [imageSrcList, setImageSrcList] = useState([]);

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

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="2" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="" />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="3" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" alt="" />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="4" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" alt="" />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="5" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="" />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="6" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="" />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="7" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" alt="" />
                                            </div>
                                        </div>
                                    </li>

                                    <li className="image">
                                        <div className="list_inner">
                                            <div className="image">
                                                <Checkbox className="top-side-right" value="8" onChange={onChange} />
                                                <Image
                                                    preview={false}
                                                    src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" alt="" />
                                            </div>
                                        </div>
                                    </li>
                                </Image.PreviewGroup>
                            </Checkbox.Group>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
