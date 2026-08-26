import { useState } from 'react'
import Logo from './Logo'
import styles from './Header.module.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <header className={styles.header}>
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