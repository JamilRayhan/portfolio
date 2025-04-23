import { useEffect, useState } from 'react'

export default function About() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="about" className="py-20 bg-green-50 px-4 transition-opacity duration-1000">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328f7d1a?auto=format&amp;fit=crop&amp;w=400&amp;h=400&amp;q=80"
            alt="Profile"
            className={`rounded-full w-64 h-64 object-cover mx-auto md:mx-0 transform transition duration-1000 ${
              animate ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          />
        </div>
        <div
          className={`transition-all duration-1000 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-green-800">About Me</h2>
          <p className="text-green-700 text-lg mb-4">
            Hello! I'm Jane Doe, a passionate frontend developer with a background in Computer Science. I graduated from XYZ University and have been building web experiences ever since. My goal is to create intuitive, accessible, and beautiful digital products that make a difference.
          </p>
          <p className="text-green-700 text-lg mb-4">
            I specialize in React, TypeScript, and Tailwind CSS, and have 3+ years of experience crafting responsive and performant web applications. I enjoy solving complex problems and continuously learning new technologies to stay ahead in the field.
          </p>
          <p className="text-green-700 text-lg">
            Outside of coding, I love hiking, photography, and exploring new coffee shops. I believe in lifelong learning and enjoy sharing knowledge with the community.
          </p>
        </div>
      </div>
    </section>
  )
}
