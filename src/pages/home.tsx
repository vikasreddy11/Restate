import hyd2 from "../assets/hyd2.jpeg"
import { SearchCard } from "../components/SearchCard"
import { Button } from "../components/Button"
import { Footer } from "./Footer"

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 font-sans antialiased text-neutral-800">
      {/* Navbar Header */}
      <div className='sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm h-20 flex justify-between items-center border-b border-neutral-100 px-8 py-4 transition-all duration-300'>
        <div className='text-3xl text-cyan-600 font-extrabold tracking-tight cursor-pointer hover:opacity-90 transition-opacity'>
          Restate
        </div>
        <div className='hidden md:flex items-center space-x-6'>
          <div className='text-base text-neutral-600 hover:text-cyan-500 font-medium transition-colors duration-200 cursor-pointer'>Buy</div>
          <div className='text-base text-neutral-600 hover:text-cyan-500 font-medium transition-colors duration-200 cursor-pointer'>House prices</div>
          <div className='text-base text-neutral-600 hover:text-cyan-500 font-medium transition-colors duration-200 cursor-pointer'>Rent</div>
          <div className='text-base text-neutral-600 hover:text-cyan-500 font-medium transition-colors duration-200 cursor-pointer'>Find Agent</div>
          <div className='text-base text-neutral-600 hover:text-cyan-500 font-medium transition-colors duration-200 cursor-pointer'>Mortgage</div>
          <div className='text-base text-neutral-900 hover:text-cyan-600 font-semibold transition-colors duration-200 cursor-pointer border border-neutral-300 rounded-lg px-4 py-2 hover:border-cyan-500'>
            Login/Sign-in
          </div>
        </div>
      </div>

      {/* Main Hero Section with Search Card */}
      <div className='relative flex justify-center max-w-7xl mx-auto w-full px-4 md:px-8 mt-6'>
        <div className='relative w-full h-[65vh] md:h-[75vh] overflow-hidden rounded-3xl shadow-xl group'>
          <img 
            src={hyd2}
            className='w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-out group-hover:scale-105' 
            alt="Hero view"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4">
            <SearchCard />
          </div>
        </div>
      </div>

      {/* Grid of Valuation Features */}
      <div className='max-w-7xl mx-auto w-full px-4 md:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
          <div className="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out max-w-sm w-full">
            <div className="overflow-hidden h-52">
              <img 
                src={hyd2}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                alt="Valuation Card"
              />
            </div>
            <div className="p-6">
              <div className='text-xl font-bold text-neutral-800 transition-colors duration-200 group-hover:text-cyan-500'>
                Free home valuation
              </div>
              <div className="text-neutral-500 mt-2 text-sm">Find out how much it costs</div>
            </div>
          </div>

          <div className="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out max-w-sm w-full">
            <div className="overflow-hidden h-52">
              <img 
                src={hyd2}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                alt="Valuation Card"
              />
            </div>
            <div className="p-6">
              <div className='text-xl font-bold text-neutral-800 transition-colors duration-200 group-hover:text-cyan-500'>
                Free home valuation
              </div>
              <div className="text-neutral-500 mt-2 text-sm">Find out how much it costs</div>
            </div>
          </div>

          <div className="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out max-w-sm w-full">
            <div className="overflow-hidden h-52">
              <img 
                src={hyd2}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                alt="Valuation Card"
              />
            </div>
            <div className="p-6">
              <div className='text-xl font-bold text-neutral-800 transition-colors duration-200 group-hover:text-cyan-500'>
                Free home valuation
              </div>
              <div className="text-neutral-500 mt-2 text-sm">Find out how much it costs</div>
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

      {/* Footer */}
      <Footer />
    </div>
  )
}