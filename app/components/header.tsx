import Link from 'next/link'
import Image from 'next/image'
import logoImg from "../../public/images/logo.png"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <Link href="/">
                        <Image src={logoImg} alt="logo" />
                    </Link>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/project">Project</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/about">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
