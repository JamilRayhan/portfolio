export default function Skills() {
  const technicalSkills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'React', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'AWS', level: 'Beginner' },
    { name: 'Figma', level: 'Intermediate' }
  ]

  const softSkills = [
    { name: 'Communication', level: 'Advanced' },
    { name: 'Teamwork', level: 'Advanced' },
    { name: 'Problem Solving', level: 'Advanced' },
    { name: 'Leadership', level: 'Intermediate' },
    { name: 'Adaptability', level: 'Advanced' }
  ]

  const getBarWidth = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'w-1/3'
      case 'Intermediate':
        return 'w-2/3'
      case 'Advanced':
        return 'w-full'
      default:
        return 'w-0'
    }
  }

  return (
    <section id="skills" className="py-20 bg-green-50 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Skills</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-700">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-green-900 font-medium">{skill.name}</span>
                  <span className="text-sm text-green-600">{skill.level}</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2.5">
                  <div className={`bg-green-600 h-2.5 rounded-full ${getBarWidth(skill.level)}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-700">Soft Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-green-900 font-medium">{skill.name}</span>
                  <span className="text-sm text-green-600">{skill.level}</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2.5">
                  <div className={`bg-green-500 h-2.5 rounded-full ${getBarWidth(skill.level)}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
