import { useState } from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'

type ServicesProps = {
  onBack: () => void
}

type Category = 'All' | 'Buying' | 'Selling' | 'Renting' | 'Mortgage'

const categories: Category[] = ['All', 'Buying', 'Selling', 'Renting', 'Mortgage']

const services = [
  {
    category: 'Buying' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
    title: 'Property Search',
    description: 'Browse thousands of properties for sale across all locations. Filter by price, size, and neighbourhood.',
  },
  {
    category: 'Buying' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Home Inspection',
    description: 'Get a certified professional inspection before purchase to identify any hidden issues or concerns.',
  },
  {
    category: 'Selling' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Free Home Valuation',
    description: 'Discover your home\'s true market value with a free, expert-led assessment by local agents.',
  },
  {
    category: 'Selling' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Agent Matching',
    description: 'We match you with the top-rated local estate agents who specialize in your property type and area.',
  },
  {
    category: 'Renting' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Rental Listings',
    description: 'Find your perfect rental home or apartment. Search by location, price range, and furnished options.',
  },
  {
    category: 'Renting' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Tenancy Support',
    description: 'Legal tenancy agreements, deposit protection advice, and ongoing support throughout your tenancy.',
  },
  {
    category: 'Mortgage' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mortgage Calculator',
    description: 'Plan your finances with our easy-to-use mortgage calculator. Estimate monthly repayments instantly.',
  },
  {
    category: 'Mortgage' as Category,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Mortgage in Principle',
    description: 'Get a Mortgage in Principle decision in minutes to show sellers you\'re a serious buyer.',
  },
]

export function Services({ onBack }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [requested, setRequested] = useState<string | null>(null)

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Breadcrumbs current="Services" onBack={onBack} />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h1 className="text-4xl font-extrabold text-neutral-800 mb-3">Our Services</h1>
        <p className="text-neutral-500 text-lg max-w-2xl">
          Everything you need to buy, sell, rent, or finance a property — all in one place.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white border-cyan-500 shadow-sm'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-cyan-400 hover:text-cyan-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {filtered.map(service => (
            <div
              key={service.title}
              className="bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Category Badge */}
              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                {service.category}
              </span>

              {/* Title & Description */}
              <div>
                <h3 className="text-base font-bold text-neutral-800 mb-1 group-hover:text-cyan-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Request Button */}
              {requested === service.title ? (
                <div className="mt-auto flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Request Sent!
                </div>
              ) : (
                <button
                  onClick={() => setRequested(service.title)}
                  className="mt-auto px-4 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  Request Service
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
