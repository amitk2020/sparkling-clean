import { CalendarCheck, HeartHandshake, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import sharedStyles from './Shared.module.css'
import styles from './WhyChooseUs.module.css'

const promises = [
    {
        icon: HeartHandshake,
        title: 'People you can trust',
        description: 'Thoughtful, respectful cleaners who treat your home like their own.',
    },
    {
        icon: CalendarCheck,
        title: 'A rhythm that works',
        description: 'Flexible visits and clear communication that fit around real life.',
    },
    {
        icon: Sparkles,
        title: 'The details matter',
        description: 'Careful finishing touches that leave every room feeling lighter.',
    },
]

function WhyChooseUs() {
    return (
        <section className={styles.section}>
            <Reveal className={styles.intro}>
                <p className={sharedStyles.eyebrow}>The Sparkling Clean promise</p>
                <h2>Good cleaning feels <em>different.</em></h2>
                <p>
                    We bring a little more care to the everyday job, so your home
                    feels easy to come back to.
                </p>
            </Reveal>

            <div className={styles.promiseGrid}>
                {promises.map(({ icon: Icon, title, description }, index) => (
                    <Reveal
                        as="article"
                        className={styles.promise}
                        delay={index * 110}
                        key={title}
                    >
                        <span className={styles.icon}>
                            <Icon aria-hidden="true" />
                        </span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs