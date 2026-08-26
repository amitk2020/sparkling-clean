import styles from './Services.module.css'
import sharedStyles from './Shared.module.css'
import Reveal from './Reveal';
import { ArrowRight, BrushCleaning, CookingPot, House, PanelsTopLeft } from 'lucide-react'

const services = [
    {
        number: '01',
        icon: House,
        title: 'House cleaning',
        description: 'A reliable regular clean that keeps your home fresh and calm.',
    },
    {
        number: '02',
        icon: CookingPot,
        title: 'Oven cleaning',
        description: 'A detailed deep clean to bring your oven back to its best.',
    },
    {
        number: '03',
        icon: PanelsTopLeft,
        title: 'Window cleaning',
        description: 'Streak-free windows that let more light into your home.',
    },
    {
        number: '04',
        icon: BrushCleaning,
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

            <div className={styles.serviceGallery} aria-label="Examples of our cleaning work">
                {[
                    ['https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=85', 'Home office with a tidy desk and chair'],
                    ['https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=85', 'Bright kitchen with a clean sink and counter'],
                    ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85', 'Office space with big glass doors'],
                    ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', 'Freshly cleaned carpet in a living room'],
                ].map(([src, alt], index) => (
                    <Reveal
                        className={styles.galleryItem}
                        delay={index * 100}
                        key={src}
                    >
                        <img src={src} alt={alt} loading="lazy" />
                    </Reveal>
                ))}
            </div>

            <div className={styles.serviceGrid}>
                {services.map((service, index) => (
                    <Reveal
                        as="article"
                        className={styles.serviceCard}
                        delay={index * 110}
                        key={service.number}
                    >
                        <span className={styles.serviceNumber}>{service.number}</span>
                        <span className={styles.serviceIcon}>
                            <service.icon aria-hidden="true" />
                        </span>

                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <a className={styles.serviceLink} href="#contact">
                            Learn more <ArrowRight aria-hidden="true" />
                        </a>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Services