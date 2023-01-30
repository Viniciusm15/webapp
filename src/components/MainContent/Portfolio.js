import { Image } from 'antd'

export default function Portfolio() {
    return (
        <div className="cavani_tm_portfolio">
            <div className="cavani_tm_title">
                <span>Portfolio Criativo</span>
            </div>

            <div className="portfolio_filter">
                <ul>
                    {/* Buscar infos da api e seus filtros */}
                    <li><a href="#" className="current" data-filter="*">Todos</a></li>
                    <li><a href="#" data-filter=".vimeo">Ar livre</a></li>
                    <li><a href="#" data-filter=".youtube">Em estúdio</a></li>
                    <li><a href="#" data-filter=".soundcloud">Temático</a></li>
                </ul>
            </div>
            
            <div className="portfolio_list">
                <ul className="gallery_zoom">
                    <Image.PreviewGroup>
                        <li className="image">
                            <div className="list_inner">
                                <div className="image">
                                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="" />
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
                                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt=""/>
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
                                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" alt=""/>
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
                                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" alt=""/>
                                    <div className="details">
                                        <h3>Título</h3>
                                        <span>Descrição</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Image.PreviewGroup>
                </ul>
            </div>
        </div>
    )
}
