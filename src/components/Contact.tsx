import { Mail, Linkedin, Github, Twitter, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-8">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>

        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 space-y-4 text-gray-700">
          <div className="flex justify-center items-center gap-2">
            <Mail size={20} />
            <span>jane@example.com</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Phone size={20} />
            <span>+1 234 567 8901</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <MapPin size={20} />
            <span>San Francisco, USA</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://linkedin.com" target="_blank" className="text-gray-700 hover:text-black">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com" target="_blank" className="text-gray-700 hover:text-black">
            <Github size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-gray-700 hover:text-black">
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
