import { useState } from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'

type ContactProps = {
  onBack: () => void
}

export function Contact({ onBack }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setSubmitted(true)
  }

  const inputClass = (field: keyof typeof form) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-cyan-400/40 ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-neutral-200 bg-white hover:border-neutral-300 focus:border-cyan-400'
    }`

  const contactDetails = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Office Address',
      value: '24 Restate Tower, Banjara Hills, Hyderabad, 500034',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email Address',
      value: 'hello@restate.in',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone Number',
      value: '+91 98765 43210',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Business Hours',
      value: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 font-sans pb-20">
      <Breadcrumbs current="Contact Us" onBack={onBack} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-neutral-800 mb-2">Contact Us</h1>
          <p className="text-neutral-500 text-lg">
            We'd love to hear from you. Reach out for inquiries, agent matching, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Info + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8 flex flex-col gap-6">
              {contactDetails.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-sm text-neutral-700 font-medium whitespace-pre-line">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-200 h-72 relative flex items-center justify-center">
              {/* Stylized Map SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none">
                <rect width="400" height="300" fill="#e5e7eb" />
                {[0,40,80,120,160,200,240,280,320,360,400].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#9ca3af" strokeWidth="0.5" />
                ))}
                {[0,30,60,90,120,150,180,210,240,270,300].map(y => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#9ca3af" strokeWidth="0.5" />
                ))}
                <rect x="60" y="60" width="80" height="40" rx="4" fill="#d1d5db" />
                <rect x="180" y="40" width="60" height="60" rx="4" fill="#d1d5db" />
                <rect x="270" y="80" width="90" height="50" rx="4" fill="#d1d5db" />
                <rect x="50" y="160" width="120" height="60" rx="4" fill="#d1d5db" />
                <rect x="220" y="170" width="70" height="70" rx="4" fill="#d1d5db" />
                <rect x="320" y="160" width="60" height="80" rx="4" fill="#d1d5db" />
              </svg>
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <span className="text-neutral-600 font-semibold text-sm bg-white/90 px-4 py-1.5 rounded-full shadow">
                  Restate HQ — Hyderabad
                </span>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800">Message Sent!</h3>
                <p className="text-neutral-500 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="mt-4 px-6 py-2.5 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-neutral-800 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(v => ({ ...v, name: '' })) }}
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5 block">Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(v => ({ ...v, email: '' })) }}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className={inputClass('phone')}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5 block">Subject</label>
                      <input
                        type="text"
                        placeholder="Property Inquiry"
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        className={inputClass('subject')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5 block">Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(v => ({ ...v, message: '' })) }}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
