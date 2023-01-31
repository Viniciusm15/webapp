import Image from 'next/image'
import FacebookIcon from 'public/social/facebook.svg'
import InstagramIcon from 'public/social/instagram.svg'
import WhatsAppIcon from 'public/social/whatsapp-fill.svg'

export default function Footer() {
    return (
        <div className="cavani_tm_footer">
            <div className="copyright">
                <p>Copyright &copy; 2023</p>
            </div>

            <div className="social">
                <ul>
                    <li><a href="#"><Image className="svg" src={FacebookIcon} alt="" /></a></li>
                    <li><a href="#"><Image className="svg" src={InstagramIcon} alt="" /></a></li>
                    <li><a href="#"><Image className="svg" src={WhatsAppIcon} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}
