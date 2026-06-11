import { Link } from 'react-router-dom'
import { CheckCircle, FileText, Calendar, Phone } from 'lucide-react'

const levels = [
  {
    id: 'early',
    label: 'Early Childhood',
    grades: 'Play Group, Pre-Primary 1 & 2',
    ages: 'Ages 4 – 6',
    image: '/images/admission/early-childhood.jpeg',
    desc: 'A nurturing, play-based environment where young learners develop language, numeracy, creativity and social skills through the CBC pre-primary framework.',
    requirements: ['Birth certificate (copy)', 'Passport-size photograph', 'Medical report', 'Previous school report (if any)', 'Completed application form'],
  },
  {
    id: 'primary',
    label: 'Primary',
    grades: 'Grade 1 – 6',
    ages: 'Ages 6 – 13',
    image: '/images/admission/primary.jpeg',
    desc: 'Our primary programme delivers a rigorous, integrated CBE curriculum that builds strong foundations in literacy, numeracy, sciences and social studies alongside character formation.',
    requirements: ['Birth certificate (copy)', 'Passport-size photograph', 'Previous school reports (last 2 terms)', 'Transfer letter (for transfers)', 'Completed application form', 'Placement test results'],
  },
  {
    id: 'secondary',
    label: 'Junior Secondary',
    grades: 'Grade 7 – 9',
    ages: 'Ages 13 – 16',
    image: '/images/admission/junior-secondary.jpeg',
    desc: 'Our junior secondary programme prepares students for the senior school pathway through CBE, with specialised teachers, coding classes and leadership development.',
    requirements: ['Birth certificate (copy)', 'Passport-size photograph', 'KNAT/Grade 6 assessment results', 'Previous school reports', 'Transfer letter & leaving certificate', 'Completed application form', 'Placement interview'],
  },
]

const steps = [
  { icon: <FileText size={28} />, title: 'Submit Application', desc: 'Fill and submit the application form with all required documents.' },
  { icon: <Calendar size={28} />, title: 'Placement Assessment', desc: 'Your child attends a brief assessment and interview with our admissions team.' },
  { icon: <Phone size={28} />, title: 'Receive Offer', desc: 'Our admissions team reviews your application and guides you through the next step.' },
  { icon: <CheckCircle size={28} />, title: 'Confirm & Enrol', desc: 'Pay the registration fee, collect the uniform list and report on opening day.' },
]

export default function Admissions() {
  return (
    <>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/admission/admissions-banner.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Admissions</h1>
          <p className="text-primary-200">Home › Admissions</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Welcome</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-4">Begin the Journey</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Mount Moriah International Christian School welcomes applications throughout the year, subject to available vacancies. Contact our admissions office for guidance on placement and enrolment.
          </p>
          <div className="mt-6 bg-primary-50 rounded-xl p-5">
            <p className="font-semibold text-primary-500 mb-2">
              Admissions Contacts
           </p>

              <p className="text-sm text-gray-700">+254 741 869 181</p>
             <p className="text-sm text-gray-700">+254 787 245 932</p>
             <p className="text-sm text-gray-700">mountmoriahschool2016@gmail.com</p>
          <p className="text-sm text-gray-700">
              Fedha Estate Phase III, Church Road, Near CLG Church, Nairobi
          </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="font-heading text-3xl font-bold text-primary-500 mb-4">
      Fee Structure
    </h2>

    <p className="text-gray-600 mb-6">
      Contact the school office for the latest fee structure and payment options.
    </p>

    <a
      href="tel:+254741869181"
      className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg"
    >
      Request Fee Structure
    </a>
  </div>
</section>

      {/* Level cards */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          {levels.map((l) => (
            <div key={l.id} id={l.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <img src={l.image} alt={l.label} className="w-full h-64 lg:h-auto object-cover" />
              <div className="p-8">
                <span className="inline-block bg-secondary-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                  {l.grades} · {l.ages}
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary-500 mb-3">{l.label} Admission</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{l.desc}</p>
                <h4 className="font-semibold text-primary-500 mb-3 text-sm">Required Documents</h4>
                <ul className="space-y-1.5 mb-6">
                  {l.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-secondary-500 mt-0.5 shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Apply for {l.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-3">Admission Process</h2>
            <p className="text-primary-200">Simple, transparent and welcoming — here's how to join the Mount Moriah family.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white/10 rounded-2xl p-6 text-white text-center">
                <div className="w-14 h-14 rounded-full bg-secondary-500 flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <div className="text-4xl font-heading font-bold text-white/20 mb-2">0{i + 1}</div>
                <h4 className="font-heading font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-primary-200 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
