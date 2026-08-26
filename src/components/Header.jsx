import Logo from './Logo'

function Header() {
    return (
        <header className="site-header">
            <Logo />

            <nav className="navigation">
                <a href="#services">Services</a>
                <a href="#how-it-works">How it works</a>
                <a className="nav-button" href="#contact">
                    Book a clean
                </a>
            </nav>
        </header>
    )
}

export default Header