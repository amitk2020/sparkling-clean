import { useState } from 'react';


import styles from './Contact.module.css'
import sharedStyles from './Shared.module.css'

function Contact() {

    const [formStatus, setFormStatus] = useState('idle');

    async function handleSubmit(event) {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)

        setFormStatus('sending')

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            })

            if (!response.ok) {
                throw new Error('Submission failed')
            }

            form.reset()
            setFormStatus('success')
        } catch {
            setFormStatus('error')
        }
    }
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactIntro}>
                <p className={sharedStyles.eyebrow}>Let’s make it sparkle</p>

                <h2>
                    Ready for a little
                    <br />
                    <em>breathing room?</em>
                </h2>

                <p>
                    Tell us a little about your space and we’ll send a tailored,
                    no-pressure quote.
                </p>
            </div>
            <div className={styles.formArea}>
                {formStatus === 'success' && (
                    <p className={`${styles.formFeedback} ${styles.formSuccess}`} aria-live="polite">
                        Thank you — your quote request has been received. We’ll be in touch soon!
                    </p>
                )}

                {formStatus === 'error' && (
                    <p className={`${styles.formFeedback} ${styles.formError}`} role="alert">
                        Sorry, we couldn’t send your request. Please try again.
                    </p>
                )}

                <form
                    className={styles.quoteForm}
                    name="cleaning-request"
                    method="POST"
                    action="/"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >

                    <input type="hidden" name="form-name" value="cleaning-request" />

                    <p className={styles.honeypot}>
                        <label>
                            Don’t fill this out:
                            <input name="bot-field" />
                        </label>
                    </p>
                    <div className={styles.formRow}>
                        <label>
                            Your name
                            <input
                                type="text"
                                name="name"
                                placeholder="Jane Smith"
                                required
                            />
                        </label>

                        <label>
                            Email address
                            <input
                                type="email"
                                name="email"
                                placeholder="jane@email.com"
                                required
                            />
                        </label>
                    </div>

                    <div className={styles.formRow}>
                        <label>
                            Phone number
                            <input
                                type="tel"
                                name="phone"
                                placeholder="021 123 4567"
                                required
                            />
                        </label>

                        <label>
                            Service needed
                            <select name="service" defaultValue="" required>
                                <option value="" disabled>
                                    Select a service
                                </option>
                                <option>House cleaning</option>
                                <option>Oven cleaning</option>
                                <option>Window cleaning</option>
                                <option>Carpet cleaning</option>
                            </select>
                        </label>
                    </div>

                    <label>
                        Home size
                        <select name="homeSize" defaultValue="" required>
                            <option value="" disabled>
                                Select home size
                            </option>
                            <option>1–2 bedrooms</option>
                            <option>3 bedrooms</option>
                            <option>4+ bedrooms</option>
                        </select>
                    </label>

                    <label>
                        Anything else we should know? <span>(optional)</span>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Tell us about your space or preferred times…"
                        />
                    </label>

                    <button
                        className={`${sharedStyles.primaryButton} ${styles.formButton}`}
                        type="submit"
                        disabled={formStatus === 'sending'}
                    >
                        {formStatus === 'sending' ? 'Sending…' : 'Request my clean'} <span>→</span>
                    </button>
                </form>
            </div>

        </section>
    )
}

export default Contact