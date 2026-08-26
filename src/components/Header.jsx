import { useEffect, useState } from 'react';
import Logo from './Logo'
import styles from './Header.module.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 24)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <Logo />

            <button
                className={styles.menuButton}
                type="button"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span />
                <span />
                <span />
            </button>

            <nav
                className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ''
                    }`}
                id="main-navigation"
            >
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#how-it-works" onClick={closeMenu}>How it works</a>
                <a className={styles.navButton} href="#contact" onClick={closeMenu}>
                    Book a clean
                </a>
            </nav>
        </header>
    )
}

export default Header