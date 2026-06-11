import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const events = [
  {
    image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=400&q=80',
    day: '18',
    month: 'Jul 26',
    venue: 'Main Hall — Mount Moriah',
    title: 'Annual Music & Arts Festival',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    day: '25',
    month: 'Jul 26',
    venue: 'School Grounds',
    title: 'Inter-House Athletics Championship',
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
    day: '02',
    month: 'Aug 26',
    venue: 'Science Labs',
    title: 'STEM Innovation & Science Fair',
  },
]

export default function Events() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">What's Happening</p>
          <h2 className="section-title">Our Events Calendar</h2>
          <p className="section-subtitle mx-auto text-center">
            Student participation in curricular and co-curricular activities enriches their overall educational experience by fostering collaboration, leadership, and school pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {events.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img src={e.image} alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-center rounded-lg px-3 py-1.5 min-w-14">
                  <div className="font-heading font-bold text-2xl leading-tight">{e.day}</div>
                  <div className="text-xs leading-tight text-primary-200">{e.month}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-secondary-500 font-semibold mb-2">
                  <MapPin size={12} />
                  {e.venue}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-500">{e.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/about#events"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            More Events
          </Link>
        </div>
      </div>
    </section>
  )
}
