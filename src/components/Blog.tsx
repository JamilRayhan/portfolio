type Article = {
  title: string
  date: string
  summary: string
  link: string
}

const articles: Article[] = [
  {
    title: 'Understanding React Hooks',
    date: '2024-04-10',
    summary: 'A deep dive into React Hooks and how they simplify state and side effects in functional components.',
    link: '#'
  },
  {
    title: 'Tailwind CSS Tips for Clean UI',
    date: '2024-03-22',
    summary: 'Practical tips and patterns for building clean and responsive UIs using Tailwind CSS.',
    link: '#'
  },
  {
    title: 'How to Structure a Scalable React App',
    date: '2024-02-15',
    summary: 'Best practices for organizing your React project for long-term maintainability and scalability.',
    link: '#'
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Blog &amp; Articles</h2>
        <ul className="space-y-8">
          {articles.map((article, idx) => (
            <li key={idx} className="border-b pb-6">
              <a href={article.link} className="block hover:underline">
                <h3 className="text-2xl font-semibold text-blue-700">{article.title}</h3>
              </a>
              <p className="text-sm text-gray-500">{article.date}</p>
              <p className="text-gray-700 mt-2">{article.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
