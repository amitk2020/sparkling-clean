import styles from './Services.module.css'
import sharedStyles from './Shared.module.css'
import Reveal from './Reveal';

const services = [
    {
        number: '01',
        icon: '✦',
        title: 'House cleaning',
        description: 'A reliable regular clean that keeps your home fresh and calm.',
    },
    {
        number: '02',
        icon: '⌁',
        title: 'Oven cleaning',
        description: 'A detailed deep clean to bring your oven back to its best.',
    },
    {
        number: '03',
        icon: '☼',
        title: 'Window cleaning',
        description: 'Streak-free windows that let more light into your home.',
    },
    {
        number: '04',
        icon: '▧',
        title: 'Carpet cleaning',
        description: 'A thorough refresh for cleaner, softer, more comfortable carpets.',
    },
]

function Services() {
    return (
        <section className={styles.servicesSection} id="services">
            <Reveal className={styles.sectionHeading}>
                <p className={sharedStyles.eyebrow}>A clean for every season</p>
                <h2>Small details. Big difference.</h2>
            </Reveal>

            <div className={styles.serviceGrid}>
                {services.map((service, index) => (
                    <Reveal
                        as="article"
                        className={styles.serviceCard}
                        delay={index * 110}
                        key={service.number}
                    >
                        <span className={styles.serviceNumber}>{service.number}</span>
                        <span className={styles.serviceIcon}>{service.icon}</span>

                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <a href="#contact">
                            Learn more <span>→</span>
                        </a>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Services