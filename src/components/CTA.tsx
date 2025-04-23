export default function CTA() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-blue-600 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Let’s Collaborate</h2>
        <p className="mb-8">Have a project in mind or just want to connect? I'm always open to discussing new opportunities.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleScroll('#contact')}
            className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition font-semibold"
          >
            Hire Me
          </button>
          <a
            href="/resume.pdf"
            download
            className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition font-semibold"
          >
            Download My Resume
          </a>
          <button
            onClick={() => handleScroll('#projects')}
            className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition font-semibold"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  )
}
