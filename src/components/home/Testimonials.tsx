import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    name: 'Mary Wanjiru',
    role: 'Parent, Grade 4',
    quote: 'The teachers at Mount Moriah truly care about each child. My daughter has grown in confidence, academics and most importantly, in faith. We are so grateful.',
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    name: 'David Kamau',
    role: 'Parent, Grade 2 & Grade 6',
    quote: 'Excellent environment, spacious classrooms and a very focused Christian foundation. I have two children here and I could not be happier.',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    name: 'Grace Achieng',
    role: 'Parent, PP2',
    quote: 'From the very first day, the teachers made my child feel welcome and loved. The school\'s commitment to CBC and faith-based learning is outstanding.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    name: 'James Otieno',
    role: 'Parent, Grade 7',
    quote: 'The discipline and academic standards here are top-notch. My son improved tremendously in his first term. The coding classes are a wonderful bonus!',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  const visible = [
    testimonials[idx],
    testimonials[(idx + 1) % testimonials.length],
    testimonials[(idx + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary-300 font-semibold text-sm tracking-widest uppercase mb-2">Parent Voices</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">What They Say About Us</h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            At Mount Moriah we believe the joy of the Lord is our strength, and that God has good plans for our children and their futures.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, s) => (
                  <Star key={s} size={14} className="fill-secondary-400 text-secondary-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-100" />
                <div>
                  <div className="font-semibold text-primary-500 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button onClick={prev}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
