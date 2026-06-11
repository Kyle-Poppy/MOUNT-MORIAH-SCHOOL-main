import { Link } from 'react-router-dom'

const curricula = [
  {
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
    tag: 'CO-CURRICULAR ACTIVITIES',
    title: 'Beyond the Classroom',
    desc: 'Sports, music, drama, debate and community service — co-curricular activities develop social skills, moral values and leadership in every student.',
    to: '/academics#cocurricular',
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    tag: 'CBC CURRICULUM',
    title: 'Competency-Based Curriculum',
    desc: 'Our CBC approach monitors each learner\'s progress across the 2-6-3-3 pathway, fostering literacy, numeracy, creativity and self-confidence through play-based and experiential learning.',
    to: '/academics#cbc',
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    tag: 'CODING CLASSES',
    title: 'Future-Ready STEM',
    desc: 'We teach students to think computationally, solve problems logically, and communicate through technology — equipping them for the digital world ahead.',
    to: '/academics#coding',
  },
]

export default function Curriculum() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">What We Offer</p>
          <h2 className="section-title">Our Curriculum</h2>
          <p className="section-subtitle mx-auto text-center">
            Mount Moriah provides wholistic education in a happy, secure and stimulating environment where every child can reach their God-given potential.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curricula.map((c) => (
            <div key={c.tag} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/40" />
                <span className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary-500 mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <Link to={c.to}
                  className="inline-block text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 px-5 py-2 rounded transition-colors">
                  Find Out More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
