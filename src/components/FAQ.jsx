import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'
import sharedStyles from './Shared.module.css'
import styles from './FAQ.module.css'

const questions = [
    {
        question: 'Do I need to provide cleaning products?',
        answer: 'We bring the products and equipment needed for your clean. If you have a preferred product or a surface that needs special care, just let us know.',
    },
    {
        question: 'Can I book a recurring clean?',
        answer: 'Absolutely. We can help you find a regular rhythm, whether that is weekly, fortnightly, or something that works better for your home.',
    },
    {
        question: 'How do you work out the price?',
        answer: 'We look at the size of your home, the service you need, and any details you share with us. We will send a clear quote before anything is booked.',
    },
    {
        question: 'What if I need to change my appointment?',
        answer: 'That is okay. Get in touch as soon as you can and we will do our best to find another time that suits.',
    },
]

function FAQ() {
    return (
        <section className={styles.section}>
            <Reveal className={styles.heading}>
                <p className={sharedStyles.eyebrow}>A few useful answers</p>
                <h2>Questions, <em>answered.</em></h2>
            </Reveal>

            <Reveal className={styles.list} delay={120}>
                {questions.map(({ question, answer }) => (
                    <details className={styles.item} key={question}>
                        <summary>
                            {question}
                            <ChevronDown aria-hidden="true" />
                        </summary>
                        <p>{answer}</p>
                    </details>
                ))}
            </Reveal>
        </section>
    )
}

export default FAQ