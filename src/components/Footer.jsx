import Logo from './Logo'
import styles from './Footer.module.css'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div>
                    <Logo tone="light" />
                    <p className={styles.tagline}>Thoughtful cleaning for calmer homes.</p>
                </div>

                <nav className={styles.links} aria-label="Footer navigation">
                    <a href="#services">Services</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#contact">Request a quote</a>
                </nav>
            </div>

            <div className={styles.bottom}>
                <p>© {year} Sparkling Clean</p>
                <p>Made with care for your home.</p>
            </div>
        </footer>
    )
}

export default Footer