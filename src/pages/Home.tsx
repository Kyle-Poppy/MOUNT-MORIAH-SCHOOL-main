import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Stats from '../components/home/Stats'
import Curriculum from '../components/home/Curriculum'
import PhotoGallery from '../components/home/PhotoGallery'
import Events from '../components/home/Events'
import News from '../components/home/News'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Curriculum />
      <PhotoGallery />
      <Events />
      <News />
      <Testimonials />
      <CTASection />
    </>
  )
}
