import { Users, Monitor, BookOpen, Code } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: <Users size={36} className="text-primary-500" />,
    title: 'Certified Instructors',
    desc: 'Highly qualified, TSC-registered teachers dedicated to holistic child development.',
    to: '/about#team',
  },
  {
    icon: <Monitor size={36} className="text-primary-500" />,
    title: 'Modern Classrooms',
    desc: 'Spacious, well-equipped learning spaces designed to inspire creativity and focus.',
    to: '/academics',
  },
  {
    icon: <BookOpen size={36} className="text-primary-500" />,
    title: 'E-Learning Resources',
    desc: 'Blended learning tools and digital resources that extend education beyond the classroom.',
    to: '/academics#elearning',
  },
  {
    icon: <Code size={36} className="text-primary-500" />,
    title: 'Coding Lessons',
    desc: 'Age-appropriate coding and STEM programmes preparing children for the digital future.',
    to: '/academics#coding',
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title}
              className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-heading font-bold text-xl text-primary-500 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.desc}</p>
              <Link to={f.to}
                className="mt-4 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
