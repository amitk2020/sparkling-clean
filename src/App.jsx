import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
    </>
  )
}

export default App