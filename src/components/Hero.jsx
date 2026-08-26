import styles from './Hero.module.css'
import sharedStyles from './Shared.module.css'
import { ArrowRight } from 'lucide-react'

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <p className={sharedStyles.eyebrow}>Thoughtful home cleaning</p>

                <h1>
                    More time for
                    <br />
                    the <em>good stuff.</em>
                </h1>

                <p className={styles.heroDescription}>
                    House, oven, window, and carpet cleaning — booked in minutes, done right the first time.
                </p>

                <a className={sharedStyles.primaryButton} href="#contact">
                    Get your free quote <ArrowRight className={sharedStyles.buttonArrow} aria-hidden="true" />
                </a>

                <p className={styles.smallPrint}>
                    No obligation. Replies within one business day.
                </p>
            </div>

            <div className={styles.heroArt} aria-hidden="true">
                <div className={styles.sun} />

                <div className={styles.window}>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>

                <div className={styles.plant}>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <span className={`${styles.sparkle} ${styles.sparkleOne}`}>✦</span>
                <span className={`${styles.sparkle} ${styles.sparkleTwo}`}>✦</span>
            </div>
        </section>
    )
}

export default Hero