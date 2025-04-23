export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  link: string
  technologies: string[]
  role?: string
  challenges?: string
  demo?: string
  github?: string
}

export class ProjectRepository {
  getAll(): Project[] {
    return [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'A personal portfolio built with React and Tailwind CSS.',
        image: 'https://source.unsplash.com/featured/?portfolio',
        category: 'Web Development',
        link: '#',
        technologies: ['React', 'Tailwind CSS', 'TypeScript'],
        role: 'Frontend Developer',
        challenges: 'Responsive design and performance optimization',
        demo: 'https://example.com/portfolio',
        github: 'https://github.com/username/portfolio'
      },
      {
        id: 2,
        title: 'E-commerce App',
        description: 'A full-stack e-commerce application.',
        image: 'https://source.unsplash.com/featured/?ecommerce',
        category: 'Full Stack',
        link: '#',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        role: 'Full Stack Developer',
        challenges: 'Handling complex state and secure payments',
        demo: 'https://example.com/ecommerce',
        github: 'https://github.com/username/ecommerce'
      }
    ]
  }
}
