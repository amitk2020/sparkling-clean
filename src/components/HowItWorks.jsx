import styles from './HowItWorks.module.css'
import sharedStyles from './Shared.module.css'

const steps = [
    {
        number: '1',
        title: 'Tell us what you need',
        description:
            'Share a few details about your home and the cleaning service you have in mind.',
    },
    {
        number: '2',
        title: 'Choose a time that suits',
        description:
            'We’ll get in touch to find a day and time that works beautifully for you.',
    },
    {
        number: '3',
        title: 'Come home to calm',
        description:
            'Put your feet up and enjoy the feeling of a freshly cleaned home.',
    },
]

function HowItWorks() {
    return (
        <section className={styles.howItWorks} id="how-it-works">
            <div className={styles.stepsIntro}>
                <p className={sharedStyles.eyebrow}>Easy as can be</p>
                <h2>
                    Your home,
                    <br />
                    <em>our happy place.</em>
                </h2>
            </div>

            <ol className={styles.stepsList}>
                {steps.map((step) => (
                    <li className={styles.step} key={step.number}>
                        <span className={styles.stepNumber}>{step.number}</span>

                        <div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default HowItWorks