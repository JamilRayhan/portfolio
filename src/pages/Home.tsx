import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Blog from '../components/Blog'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
