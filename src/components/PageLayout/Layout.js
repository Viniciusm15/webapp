import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="cavani_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInUp" data-exit="">
            <div className="cavani_tm_left_border"></div>
            <div className="cavani_tm_right_border"></div>

            <Header />
            <MobileMenu />
            {children}
            <Footer />

            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>
        </div>
    )
}
