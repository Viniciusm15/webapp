import Image from 'next/image';

export default function Footer() {
    return (
        <div className="cavani_tm_footer">
            <div className="copyright">
                <p>Copyright &copy; 2023</p>
            </div>
            <div className="social">
                <ul>
                    <li><a href="#"><Image
                        className="svg"
                        src="social/facebook.svg"
                        height={15}
                        width={15}
                    /></a></li>

                    <li><a href="#"><Image
                        className="svg"
                        src="social/instagram.svg"
                        height={15}
                        width={15}
                    /></a></li>

                    <li><a href="#"><Image
                        className="svg"
                        src="social/twitter.svg"
                        height={15}
                        width={15}
                    /></a></li>
                </ul>
            </div>
        </div>
    )
}