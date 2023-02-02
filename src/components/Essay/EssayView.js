import { Image as _image } from 'antd'
import Router from 'next/router'

export default function EssayView() {

    //Buscar lista de ensaios da API
    //Assim iremos listar TODOS/EDIÇÃO/CONCLUIDOS

    function sendProps(essay) {
        Router.push({
            pathname: "/ensaios/details",
            query: {
                essay,
            }
        })
    }

    return (
        <div className="cavani_tm_section animated">
            <div className="section_inner">
                <div className="cavani_tm_title">
                    <span>Ensaios</span>
                </div>

                <div className="cavani_tm_essay">
                    <div className="essay_filter">
                        <ul>
                            <li><a href="/ensaios">Todos</a></li>
                            <li><a href="/ensaios/editar">Pendentes de edição</a></li>
                            <li><a href="/ensaios/concluidos">Concluídos</a></li>
                        </ul>
                    </div>

                    <div className="essay_list">
                        <ul className="gallery_zoom">
                            <_image.PreviewGroup >
                                <li className="image">
                                    <div className="list_inner">
                                        <div className="image">
                                            <a onClick={() => sendProps("edit")}>
                                                <_image preview={false} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="" />
                                            </a>

                                            <div className="details">
                                                <h3>Título</h3>
                                                <span>Descrição</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="image">
                                    <div className="list_inner">
                                        <div className="image">
                                            <a onClick={() => sendProps("download")}>
                                                <_image preview={false} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="" />
                                            </a>

                                            <div className="details">
                                                <h3>Título</h3>
                                                <span>Descrição</span>
                                            </div>
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
