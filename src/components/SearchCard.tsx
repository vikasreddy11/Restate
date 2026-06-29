import { useState } from 'react'

export function SearchCard() {
  const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'Sold'>('Buy')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs: ('Buy' | 'Rent' | 'Sold')[] = ['Buy', 'Rent', 'Sold']

  return (
    <div className="backdrop-blur-md bg-black/40 border border-white/10 shadow-2xl rounded-2xl p-6 w-full max-w-md mx-auto transition-all duration-300 hover:border-white/20">
      <div className="flex justify-center space-x-1 bg-black/25 p-1 rounded-xl mb-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-2 px-3 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white text-cyan-600 shadow'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      <div className="space-y-4">
        <div className="text-white text-xs font-semibold tracking-wider uppercase opacity-85 text-center">
          search properties to {activeTab.toLowerCase()}
        </div>
        <div className="relative flex items-center bg-white/10 rounded-xl border border-white/10 overflow-hidden shadow-inner focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400 transition-all duration-200">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter location or postcode..."
            className="w-full bg-transparent text-white placeholder-neutral-300 text-sm px-4 py-3 focus:outline-none"
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm px-5 py-3 rounded-r-xl transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center cursor-pointer">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}