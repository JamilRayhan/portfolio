import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-4 transition-opacity duration-1000 ease-in-out">
      <img
        src="https://images.unsplash.com/photo-1603415526960-f7e0328f7e94"
        alt="Profile"
        className={`w-40 h-40 rounded-full object-cover mb-6 shadow-lg transform transition duration-1000 ${
          animate ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      />
      <h1
        className={`text-5xl font-bold mb-4 text-green-800 transition-all duration-1000 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        Hi, I’m Jane Doe, a Frontend Developer
      </h1>
      <p
        className={`text-xl text-green-700 mb-6 max-w-xl transition-opacity duration-1000 delay-200 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        I build beautiful, fast, and accessible web applications using modern technologies like React, TypeScript, and Tailwind CSS.
      </p>
      <button
        onClick={scrollToProjects}
        className={`flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300 transform ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        View My Work <ArrowRight size={20} />
      </button>
    </section>
  )
}
