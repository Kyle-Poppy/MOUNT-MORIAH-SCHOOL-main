import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const news = [
  {
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80',
    tag: 'Admissions Open',
    title: 'Enrolment for 2026/2027 Academic Year Now Open',
    excerpt: 'Mount Moriah International Christian School is pleased to announce that applications for the new academic year are now being accepted across all grades.',
    date: 'June 1, 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&q=80',
    tag: 'Academics',
    title: 'Our Grade 6 Students Excel in National Assessments',
    excerpt: 'Mount Moriah students posted outstanding results in the KNAT assessment, with 92% achieving proficiency across all learning areas.',
    date: 'May 20, 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&q=80',
    tag: 'School Life',
    title: 'End of Term Thanksgiving Service',
    excerpt: "Parents, students and staff gathered for a powerful end-of-term thanksgiving service, giving glory to God for the term's achievements.",
    date: 'May 5, 2026',
  },
]

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Stay Informed</p>
          <h2 className="section-title">Latest News</h2>
          <p className="section-subtitle mx-auto text-center">
            Stay updated with the latest happenings, achievements and announcements from Mount Moriah International Christian School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {news.map((n) => (
            <div key={n.title} className="group rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src={n.image} alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-secondary-500 uppercase tracking-widest">{n.tag}</span>
                <h3 className="font-heading font-bold text-lg text-primary-500 mt-1 mb-3 leading-snug">{n.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{n.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{n.date}</span>
                  <Link to="/about#news"
                    className="text-sm font-semibold text-accent-500 hover:text-accent-600 flex items-center gap-1 transition-colors">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
