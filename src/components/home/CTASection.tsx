import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80')" }}
    >
      <div className="absolute inset-0 bg-primary-900/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-secondary-400 font-semibold text-sm tracking-widest uppercase mb-4">Begin Your Journey</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5">
          Let's Get Your Child Started
        </h2>
        <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
          You are one click away from beginning an extraordinary journey at Mount Moriah International Christian School — where faith, excellence and character converge.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admissions"
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors shadow-xl">
            Start Admission Now
          </Link>
          <Link to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-bold px-10 py-4 rounded-lg text-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
