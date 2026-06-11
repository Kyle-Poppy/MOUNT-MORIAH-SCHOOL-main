import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-96 flex items-center justify-center text-center px-4 py-24">
      <div>
        <div className="font-heading text-8xl font-bold text-primary-100 mb-4">404</div>
        <h1 className="font-heading text-3xl font-bold text-primary-500 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
