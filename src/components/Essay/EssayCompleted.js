import { Image as _image } from 'antd'
import Image from 'next/image'
import DowloadIcon from 'public/dowload-icon.svg'
import { saveAs } from 'file-saver'

export default function EssayCompleted() {
    return (
        <div className="cavani_tm_section animated">
            <div className="section_inner">
                <div className="cavani_tm_title">
                    <span>Detalhes do ensaio</span>
                </div>

                <div className="cavani_tm_essay">
                    <div className="essay_filter">
                        <ul>
                            <li><a>Nome do ensaio</a></li>
                        </ul>
                    </div>

                    <div className="essay_list">
                        <ul className="gallery_zoom">
                            <_image.PreviewGroup>
                                <li className="image">
                                    <div className="list_inner">
                                        <div className="image">
                                            <a className="top-side-right"
                                                onClick={() => saveAs("https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp")}>
                                                <Image className="img" src={DowloadIcon} alt="" />
                                            </a>

                                            <_image
                                                preview={false}
                                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="" />
                                        </div>
                                    </div>
                                </li>

                                <li className="image">
                                    <div className="list_inner">
                                        <div className="image">
                                            <a className="top-side-right"
                                                onClick={() => saveAs("https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp")}>
                                                <Image className="img" src={DowloadIcon} alt="" />
                                            </a>

                                            <_image
                                                preview={false}
                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="" />
                                        </div>
                                    </div>
                                </li>
                            </_image.PreviewGroup>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
