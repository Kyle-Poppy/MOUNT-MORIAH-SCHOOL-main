import { BookOpen, Cpu, Music, Trophy, Globe, Leaf } from 'lucide-react'

const programmes = [
  {
    icon: <BookOpen size={32} className="text-white" />,
    id: 'cbc',
    image: '/images/cbc-curriculum.jpeg',
    title: 'CBC Curriculum',
    desc: 'Our fully CBC-aligned curriculum develops competencies across all learning areas — language, mathematics, sciences, social studies, creative arts and religious education.',
  },
  {
    icon: <Cpu size={32} className="text-white" />,
    id: 'coding',
    image: '/images/coding-stem.jpeg',
    title: 'Coding & STEM',
    desc: 'All students learn computational thinking, robotics and programming using age-appropriate tools. Our STEM lab makes learning practical and fun.',
  },
  {
    icon: <Music size={32} className="text-white" />,
    id: 'cocurricular',
    image: '/images/co-curricular.jpeg',
    title: 'Co-Curricular Activities',
    desc: 'Music, drama, choir, debate, scouts, guides and clubs help students discover talents and build confidence beyond the classroom.',
  },
  {
    icon: <Trophy size={32} className="text-white" />,
    id: 'sports',
    image: '/images/sports-athletics.jpeg',
    title: 'Sports & Athletics',
    desc: 'Football, basketball, netball, athletics and swimming programmes help students develop teamwork, discipline and physical fitness.',
  },
  {
    icon: <Globe size={32} className="text-white" />,
    id: 'elearning',
    image: '/images/e-learning.jpeg',
    title: 'E-Learning Resources',
    desc: 'Students access digital learning platforms, educational resources and teacher-curated content through our blended learning approach.',
  },
  {
    icon: <Leaf size={32} className="text-white" />,
    id: 'christian',
    image: '/images/christian-education.jpeg',
    title: 'Christian Religious Education',
    desc: 'Daily devotion, chapel services and CRE lessons provide a strong moral and spiritual foundation for every learner.',
  },
]

export default function Academics() {
  return (
    <>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Academics</h1>
          <p className="text-primary-200">Home › Academics</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Learning & Growth</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Academic Programmes</h2>
            <p className="text-secondary-500 font-semibold italic mb-4">
                Learning Today for a Better Tomorrow
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We offer a richly integrated academic experience that goes far beyond textbooks — combining the CBE framework with Christian values, technology and co-curricular development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {programmes.map((p) => (
    <div
      key={p.id}
      id={p.id}
      className="relative overflow-hidden rounded-xl h-[520px] group cursor-pointer"
    >
      <img
        src={p.image}
        alt={p.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/60 to-primary-900/20"></div>

      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <div className="mb-5">{p.icon}</div>

        <h3 className="font-heading text-2xl font-bold mb-4">
          {p.title}
        </h3>

        <p className="text-white/90 leading-relaxed mb-6">
          {p.desc}
        </p>

        <span className="font-semibold text-lg">
          Find out more →
        </span>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Assessment approach */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-primary-500 mb-4">Our Approach to Assessment</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            In line with CBE, assessment at Mount Moriah is continuous and competency-based. We use portfolios, projects, observations and term examinations to give a full picture of each child's progress. Reports are issued every term and parent-teacher meetings held to discuss growth and development.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[['Formative', 'Ongoing class-based assessments & projects'], ['Summative', 'End-of-term examinations & portfolios'], ['Holistic', 'Character, co-curricular & spiritual growth']].map(([t, d]) => (
              <div key={t} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="font-heading font-bold text-primary-500 text-lg mb-1">{t}</div>
                <p className="text-gray-500 text-xs">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-500">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="font-heading text-3xl font-bold text-white mb-4">
      Learn More About Our Programmes
    </h2>

    <p className="text-primary-100 mb-6">
      Contact our office for information about academics, admissions and school activities.
    </p>

    <div className="space-y-2 text-white">
      <p>+254 741 869 181</p>
      <p>+254 0705473250</p>
      <p>mountmoriahschool2016@gmail.com</p>
    </div>
  </div>
</section>
    </>
  )
}
