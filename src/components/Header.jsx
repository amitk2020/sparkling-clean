import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'
import Logo from './Logo'
import styles from './Header.module.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

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
                <button
                    className={styles.themeButton}
                    type="button"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
                </button>
            </nav>
        </header>
    )
}

export default Header