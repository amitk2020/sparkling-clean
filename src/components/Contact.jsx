function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-intro">
                <p className="eyebrow">Let’s make it sparkle</p>

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

            <form
                className="quote-form"
                name="cleaning-request"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="cleaning-request" />

                <p className="honeypot">
                    <label>
                        Don’t fill this out:
                        <input name="bot-field" />
                    </label>
                </p>
                <div className="form-row">
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

                <div className="form-row">
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

                <button className="primary-button" type="submit">
                    Request my clean <span>→</span>
                </button>
            </form>
        </section>
    )
}

export default Contact