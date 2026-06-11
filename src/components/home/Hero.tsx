import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/hero1.jpg',
    title: 'Learning Today,\nFor A Better Tomorrow',
    subtitle: 'Providing quality Christian education that nurtures academic excellence, discipline and godly character.',
  },
  {
    image: '/images/hero2.jpg',
    title: 'Academic Excellence\nWith Christian Values',
    subtitle: 'Empowering learners through the CBC curriculum in a caring and supportive environment.',
  },
  {
    image: '/images/hero3.jpg',
    title: 'Building Future\nLeaders Today',
    subtitle: 'Developing confident, responsible and innovative learners prepared for the future.',
  },
  {
    image: '/images/hero4.jpg',
    title: 'A Safe And\nNurturing Environment',
    subtitle: 'Every child is valued, encouraged and inspired to achieve their full potential.',
  },
  {
    image: '/images/hero5.jpg',
    title: 'Join Mount Moriah\nInternational Christian School',
    subtitle: 'Admissions are open for PP1, PP2, Primary and Junior Secondary.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="mb-5">
              <img src="/images/logo.png" alt="Mount Moriah Logo" className="w-24 h-24 object-contain mb-5"/>
             <div className="inline-block bg-secondary-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded">
                Mount Moriah International Christian School
             </div>

             <p className="text-secondary-300 mt-3 text-sm md:text-base font-medium">
              Learning Today for a Better Tomorrow
             </p>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 whitespace-pre-line">
              {slides[current].title}
            </h1>
            <p className="text-primary-100 text-lg md:text-xl mb-8 leading-relaxed">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
                Apply for Admission
              </Link>
              <Link to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-bold px-8 py-3 rounded-lg transition-colors">
                About Our School
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
        <ChevronLeft size={22} />
      </button>
      <button onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-secondary-400 w-8' : 'bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
