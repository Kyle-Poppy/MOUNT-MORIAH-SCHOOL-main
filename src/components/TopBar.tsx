import { Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="bg-primary-500 text-white text-sm py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+254700000000" className="flex items-center gap-1 hover:text-secondary-300 transition-colors">
            <Phone size={13} />
            <span>+254 705473250</span>
          </a>
          <a href="mailto:mountmoriahschool2016@gmail.com" className="flex items-center gap-1 hover:text-secondary-300 transition-colors">
            <Mail size={13} />
            <span>mountmoriahschool2016@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-secondary-300 transition-colors">Parent Portal</a>
          <span className="text-primary-300">|</span>
          <Link to="/admissions" className="hover:text-secondary-300 transition-colors">Apply Now</Link>
          <span className="text-primary-300">|</span>
          <a href="#" className="hover:text-secondary-300 transition-colors">Careers</a>
          <span className="text-primary-300">|</span>
          <a href="#fees" className="hover:text-secondary-300 transition-colors">Fee Structure</a>
        </div>
      </div>
    </div>
  )
}
