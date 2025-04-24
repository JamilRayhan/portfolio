import { Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-sm">&copy; 2025 Jane Doe. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#about" className="hover:underline text-sm">About</a>
          <a href="#projects" className="hover:underline text-sm">Projects</a>
          <a href="#contact" className="hover:underline text-sm">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" className="hover:text-blue-400">
            <Github size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
