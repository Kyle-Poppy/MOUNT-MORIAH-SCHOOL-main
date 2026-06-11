const stats = [
  { value: '1,200+', label: 'Students Enrolled' },
  { value: '85+', label: 'Qualified Teachers' },
  { value: '20+', label: 'Years of Excellence' },
  { value: '98%', label: 'Transition Rate' },
]

export default function Stats() {
  return (
    <section className="bg-secondary-500 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-bold text-4xl text-white mb-1">{s.value}</div>
              <div className="text-secondary-100 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
