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
        <section className="services-section" id="services">
            <div className="section-heading">
                <p className="eyebrow">A clean for every season</p>
                <h2>Small details. Big difference.</h2>
            </div>

            <div className="service-grid">
                {services.map((service) => (
                    <article className="service-card" key={service.number}>
                        <span className="service-number">{service.number}</span>
                        <span className="service-icon">{service.icon}</span>

                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <a href="#contact">
                            Learn more <span>→</span>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services