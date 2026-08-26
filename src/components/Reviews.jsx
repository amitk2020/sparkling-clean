import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'
import sharedStyles from './Shared.module.css'
import styles from './Reviews.module.css'

const reviews = [
    {
        quote: 'It feels like we get our Sunday back every fortnight. The house is beautifully clean and the whole process is so easy.',
        name: 'Sarah M.',
        detail: 'Fortnightly home clean',
    },
    {
        quote: 'The attention to detail is wonderful. They noticed the little things we had stopped seeing and left our home feeling brand new.',
        name: 'Tom and Elise R.',
        detail: 'One-off deep clean',
    },
    {
        quote: 'Reliable, kind, and thorough. I love coming home after a Sparkling Clean visit.',
        name: 'Mia K.',
        detail: 'Weekly home clean',
    },
]

function Reviews() {
    return (
        <section className={styles.section}>
            <Reveal className={styles.heading}>
                <p className={sharedStyles.eyebrow}>Kind words from tidy homes</p>
                <h2>It feels good to come <em>home.</em></h2>
            </Reveal>

            <div className={styles.grid}>
                {reviews.map(({ quote, name, detail }, index) => (
                    <Reveal as="article" className={styles.review} delay={index * 110} key={name}>
                        <Quote className={styles.quoteIcon} aria-hidden="true" />
                        <div className={styles.stars} aria-label="5 out of 5 stars">
                            {Array.from({ length: 5 }, (_, star) => (
                                <Star key={star} aria-hidden="true" />
                            ))}
                        </div>
                        <blockquote>“{quote}”</blockquote>
                        <footer>
                            <strong>{name}</strong>
                            <span>{detail}</span>
                        </footer>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Reviews