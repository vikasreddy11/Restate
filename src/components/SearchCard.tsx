import { useState } from 'react'

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'Sold'>('Buy')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs: ('Buy' | 'Rent' | 'Sold')[] = ['Buy', 'Rent', 'Sold']

  const placeholder = {
    Buy: 'e.g. Hyderabad, Banjara Hills, or 500034',
    Rent: 'e.g. Pune, Kothrud, or 411038',
    Sold: 'e.g. Mumbai, Andheri, or 400053',
  }

  return (
    <div className="bg-[#1a2235]/95 backdrop-blur-sm rounded-2xl px-6 pt-5 pb-6 w-full shadow-2xl">
      {/* Tabs row */}
      <div className="flex items-center gap-1 mb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white/10 text-white border-b-2 border-cyan-400'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* Label */}
      <p className="text-neutral-300 text-sm font-medium mb-3">
        Search properties to {activeTab.toLowerCase()}
      </p>

      {/* Search row */}
      <div className="flex items-stretch gap-0 bg-white rounded-xl overflow-hidden shadow-inner">
        {/* Search icon */}
        <span className="flex items-center pl-4 pr-2 text-neutral-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>

        {/* Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder[activeTab]}
          className="flex-1 py-3.5 pr-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none bg-transparent"
        />

        {/* Search button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-white font-bold text-sm px-8 transition-all duration-200 cursor-pointer flex-shrink-0">
          Search
        </button>
      </div>
    </div>
  )
}
