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
    <section className="how-it-works" id="how-it-works">
      <div className="steps-intro">
        <p className="eyebrow">Easy as can be</p>
        <h2>
          Your home,
          <br />
          <em>our happy place.</em>
        </h2>
      </div>

      <ol className="steps-list">
        {steps.map((step) => (
          <li className="step" key={step.number}>
            <span className="step-number">{step.number}</span>

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