export default function Resume() {
  const workExperience = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2022 - Present',
      description: 'Developed and maintained responsive web applications using React and Tailwind CSS.'
    },
    {
      role: 'Web Developer Intern',
      company: 'Creative Web Studio',
      period: 'Jun 2021 - Dec 2021',
      description: 'Assisted in building client websites and learned modern frontend technologies.'
    }
  ]

  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'State University',
      period: '2017 - 2021'
    }
  ]

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Responsive Web Design - freeCodeCamp'
  ]

  const achievements = [
    'Built a portfolio site with 100% Lighthouse scores',
    'Contributed to open-source projects on GitHub'
  ]

  return (
    <section id="resume" className="py-20 bg-green-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Resume</h2>
        <div className="text-center mb-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Work Experience</h3>
          <ul className="space-y-4">
            {workExperience.map((job, idx) => (
              <li key={idx}>
                <h4 className="text-xl font-medium text-green-900">{job.role} - {job.company}</h4>
                <p className="text-sm text-green-600">{job.period}</p>
                <p className="text-green-800">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, idx) => (
              <li key={idx}>
                <h4 className="text-xl font-medium text-green-900">{edu.degree}</h4>
                <p className="text-sm text-green-600">{edu.institution} | {edu.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Certifications</h3>
          <ul className="list-disc list-inside text-green-800 space-y-1">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Achievements</h3>
          <ul className="list-disc list-inside text-green-800 space-y-1">
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
