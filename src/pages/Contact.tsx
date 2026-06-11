import { Phone, Mail, MapPin, Clock, Facebook, } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static form — just show confirmation (no backend without Supabase)
    setSubmitted(true)
  }

  return (
    <>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-primary-200">Home › Contact</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">Get In Touch</p>
            <h2 className="font-heading text-3xl font-bold text-primary-500 mb-5">We'd Love to Hear From You</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you have questions about admissions, academics, fees, or school activities, our team is ready to assist you.
            </p>

            <div className="space-y-5 mb-8">
              {[
                
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    lines: [
      '+254 741 869 181',
      '+254 787 245 932',
      '+254 777 869 181',
      '0705 473 250'
    ]
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    lines: [
      'mountmoriahschool2016@gmail.com',
      'mtmoriahchristianschool@gmail.com'
    ]
  },
  {
    icon: <MapPin size={18} />,
    label: 'Address',
    lines: [
      'Fedha Estate Phase III, Church Road',
      'Near CLG Church, Nairobi, Kenya',
      'P.O. Box 69482-00400, Nairobi'
    ]
  },
  {
    icon: <Clock size={18} />,
    label: 'Office Hours',
    lines: [
      'Mon - Fri: 7:00 AM - 5:00 PM',
      'Sat: 8:00 AM - 12:00 PM'
    ]
  },
].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-500 text-sm mb-0.5">{item.label}</div>
                    {item.lines.map((l) => <div key={l} className="text-gray-600 text-sm">{l}</div>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                 {icon: <Facebook size={18} />,
    href: 'https://www.facebook.com/mountainmoriahschool'},
                { icon: <Instagram size={18} />, href: 'https://instagram.com' },
                { icon: <Youtube size={18} />, href: 'https://youtube.com' },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-500 hover:bg-secondary-500 text-white flex items-center justify-center transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-500 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. Our team will get back to you within 2 business days.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-bold text-primary-500 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="+254 700 000 000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white">
                      <option value="">Select a subject</option>
                      <option>Admission Enquiry</option>
                      <option>Fee Structure</option>
                      <option>School Tour Request</option>
                      <option>General Enquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                      placeholder="How can we help you?" />
                  </div>
                  <button type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-colors">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="h-80 bg-primary-100 flex items-center justify-center">
        <div className="text-center text-primary-400">
          <MapPin size={40} className="mx-auto mb-2" />
          <p className="font-medium">Fedha Estate Phase III, Church Road,Near CLG Church, Nairobi, Kenya</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer"
            className="text-sm text-primary-500 hover:underline mt-1 inline-block">Open in Google Maps →</a>
        </div>
      </div>
    </>
  )
}
