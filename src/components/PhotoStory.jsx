import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import sharedStyles from './Shared.module.css'
import styles from './PhotoStory.module.css'

function PhotoStory() {
    return (
        <section className={styles.section}>
            <Reveal className={styles.imageFrame}>
                <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                    alt="Cleaner wiping a bright kitchen surface"
                    loading="lazy"
                />
                <span className={styles.imageNote}>The good kind of reset</span>
            </Reveal>

            <Reveal className={styles.content} delay={120}>
                <p className={sharedStyles.eyebrow}>A little lighter at home</p>
                <h2>More room for the things that <em>matter.</em></h2>
                <p>
                    From the first wipe to the final thoughtful detail, we leave
                    your space feeling calm, cared for, and ready to enjoy.
                </p>
                <a className={styles.link} href="#contact">
                    Find your fresh start <ArrowRight aria-hidden="true" />
                </a>
            </Reveal>
        </section>
    )
}

export default PhotoStory