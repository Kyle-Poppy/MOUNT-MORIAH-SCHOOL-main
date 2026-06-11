import { CheckCircle } from 'lucide-react'

/*const team = [
  { name: 'Dr. Ruth Njoroge', role: 'School Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
  { name: 'Mr. Samuel Mwangi', role: 'Deputy Principal — Academics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Ms. Grace Akinyi', role: 'Head of Early Childhood', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
  { name: 'Mr. Peter Kamau', role: 'Head of Primary', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { name: 'Ms. Faith Wambua', role: 'Head of Junior Secondary', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
  { name: 'Mr. Daniel Ochieng', role: 'Dean of Students', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
]*/

const values = [
  'Faith — We root every activity in Christian principles and prayer.',
  'Excellence — We hold every student to their highest potential.',
  'Integrity — We build honesty and transparency in all we do.',
  'Discipline — We cultivate self-regulation and responsibility.',
  'Community — We foster belonging, compassion and teamwork.',
]

export default function About() {
  return (
    <>
      {/* Page hero */}
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">About Us</h1>
          <p className="text-primary-200">Home › About Us</p>
        </div>
      </div>

      {/* About content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Who We Are</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Mount Moriah International Christian School
            </h2>
            <p className="text-secondary-500 font-semibold text-lg mb-4 italic">
                "Learning Today for a Better Tomorrow"
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mount Moriah International Christian School is located in Fedha Estate Phase III, Church Road, Nairobi. The school provides quality Christian education within a caring and supportive environment. We are committed to academic excellence, discipline, integrity and nurturing every learner to achieve their full potential.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our school combines the national CBC curriculum with a strong Christian foundation, co-curricular excellence, and 21st-century skills — producing confident, disciplined and compassionate graduates who are prepared for life.
            </p>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={18} className="text-secondary-500 mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="/images/school-building.jpg"  alt="School campus" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-secondary-500 text-white rounded-xl p-5 shadow-xl">
              <div className="font-heading font-bold text-3xl">10+</div>
              <div className="text-sm">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-primary-500">
            <h3 className="font-heading text-2xl font-bold text-primary-500 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide excellent academic founded upon and integrated with God's word that offers children the opportunity to grow to their fullest pontential intellectually, social, physically and spiritually.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-secondary-500">
            <h3 className="font-heading text-2xl font-bold text-primary-500 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To prepare everychild regardless of their background for success in life. 
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Dedicated professionals committed to shaping the next generation with faith, expertise and love.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-100 group-hover:border-secondary-400 transition-colors">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-heading font-bold text-lg text-primary-500">{m.name}</h4>
                <p className="text-sm text-secondary-500 font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
