
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import Cta from './components/Cta'
import Cursor from './components/Cursor'
import StatsBar from './components/Statsbar'
import Award from './components/Award'

export default function Home() {
  return (
    <>
    <Cursor />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Projects />
        {/* <Services /> */}
        <Award />
        <WhyUs />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}