import { Link } from 'react-router-dom'

const images = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">School Life</p>
          <h2 className="section-title">A Place Where Your Child Will Grow!</h2>
          <p className="section-subtitle mx-auto text-center">
            Mount Moriah's success lies in our commitment to excellence and professionalism — in identifying strongly with the best outcome for every child.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={src}
                alt={`School life ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/gallery"
            className="inline-block border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
