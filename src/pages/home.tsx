import hyd2 from "../assets/hyd2.jpeg"
import { SearchCard } from "../components/SearchCard"
import { Button } from "../components/Button"

// Replace hyd2 below with your own images once added to src/assets:
// card1: src/assets/valuation.jpg
// card2: src/assets/rules.jpg
// card3: src/assets/firsttime.jpg

type HomeProps = {
  onNavigate: (view: 'home' | 'services' | 'faq' | 'contact') => void
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col bg-neutral-50 font-sans antialiased text-neutral-800">

      {/* ── Full-Width Hero ── */}
      <div className="relative w-full h-[72vh] overflow-hidden">
        {/* Background image */}
        <img
          src={hyd2}
          className="w-full h-full object-cover"
          alt="Hero view"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 pointer-events-none" />

        {/* Centered headline + search card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Headline */}
          <div className="text-center mb-8 drop-shadow-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="text-cyan-400">believe</span> in finding it
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mt-2">
              with India's largest choice of homes
            </p>
          </div>

          {/* Search Card */}
          <div className="w-full max-w-2xl">
            <SearchCard />
          </div>
        </div>
      </div>

      {/* Grid of Valuation Features */}
      <div className='max-w-7xl mx-auto w-full px-4 md:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          {/* Card 1 – Free home valuation */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out w-full">
            <div className="overflow-hidden h-52">
              <img 
                src={hyd2}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                alt="Free home valuation"
              />
            </div>
            <div className="p-6">
              <div className='text-lg font-bold text-neutral-800 mb-1 group-hover:text-cyan-600 transition-colors duration-200'>
                Free home valuation
              </div>
              <div className="text-neutral-500 text-sm mb-4">
                Find out how much your home's worth from an expert
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="text-cyan-600 font-semibold text-sm underline underline-offset-2 hover:text-cyan-800 transition-colors duration-200 cursor-pointer"
              >
                Get a free agent valuation
              </button>
            </div>
          </div>

          {/* Card 2 – Homebuying rules */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out w-full">
            <div className="overflow-hidden h-52">
              <img 
                src={hyd2}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                alt="Homebuying rules changing"
              />
            </div>
            <div className="p-6">
              <div className='text-lg font-bold text-neutral-800 mb-1 group-hover:text-cyan-600 transition-colors duration-200'>
                Are homebuying rules changing?
              </div>
              <div className="text-neutral-500 text-sm mb-4">
                See what the government's proposed reforms could mean for you.
              </div>
              <button
                onClick={() => onNavigate('faq')}
                className="text-cyan-600 font-semibold text-sm underline underline-offset-2 hover:text-cyan-800 transition-colors duration-200 cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>

          {/* Card 3 – First-time homebuyer guides */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out w-full">
            <div className="overflow-hidden h-52">
              <img 
                src={hyd2}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                alt="First-time homebuyer guides"
              />
            </div>
            <div className="p-6">
              <div className='text-lg font-bold text-neutral-800 mb-1 group-hover:text-cyan-600 transition-colors duration-200'>
                First-time homebuyer guides
              </div>
              <div className="text-neutral-500 text-sm mb-4">
                Feel confident in what you can afford and understand the buying process.
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="text-cyan-600 font-semibold text-sm underline underline-offset-2 hover:text-cyan-800 transition-colors duration-200 cursor-pointer"
              >
                Take a look
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Selling CTA Banner */}
      <div className="max-w-4xl mx-auto w-full px-6 mb-16">
        <div className='rounded-3xl bg-neutral-100 border border-neutral-200/60 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300'>
          <div className="text-2xl font-extrabold text-neutral-800">
            Looking to sell? Find a trusted expert.
          </div>
          <div className="text-base text-neutral-500 mt-2 max-w-md">
            Enter your address to review and compare agents
          </div>
          <div className="mt-6 flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}