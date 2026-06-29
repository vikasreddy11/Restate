export function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200/50 pt-16 pb-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-neutral-800 text-base">Download the App</h3>
          <a
            href="#"
            className="bg-neutral-900 text-white rounded-xl px-4 py-2.5 flex items-center gap-3 w-40 hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            <div className="leading-tight">
              <div className="text-[10px] text-neutral-400">Download on the</div>
              <div className="font-semibold text-xs">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="bg-neutral-900 text-white rounded-xl px-4 py-2.5 flex items-center gap-3 w-40 hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            <div className="leading-tight">
              <div className="text-[10px] text-neutral-400">GET IT ON</div>
              <div className="font-semibold text-xs">Google Play</div>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-neutral-800 text-base mb-1">Resources</h3>
          {[
            "Stamp Duty Calculator",
            "House Price Index",
            "Property guides",
            "Property news",
            "Buyer guides",
            "Seller guides",
            "Renter guides",
            "Landlord guides",
            "Removals",
            "Energy efficiency",
            "Mortgage in Principle",
            "Mortgage Calculator",
            "Mortgage guides",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-neutral-500 hover:text-cyan-600 transition-colors duration-200 hover:underline text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-neutral-800 text-base mb-1">Search</h3>
          {[
            "Search homes for sale",
            "Search homes for rent",
            "Commercial for sale",
            "Commercial to rent",
            "Overseas homes for sale",
            "Search sold house prices",
            "Find an agent",
            "Student accommodation",
            "Retirement homes",
            "New homes",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-neutral-500 hover:text-cyan-600 transition-colors duration-200 hover:underline text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-neutral-800 text-base mb-1">Locations</h3>
          {[
            "Major towns and cities in the UK",
            "London",
            "Cornwall",
            "Glasgow",
            "Cardiff",
            "Edinburgh",
            "Spain",
            "France",
            "Portugal",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-neutral-500 hover:text-cyan-600 transition-colors duration-200 hover:underline text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-neutral-800 text-base mb-1">Rightmove</h3>
          {[
            "Tech blog",
            "About",
            "Press centre",
            "Investor relations",
            "Contact us",
            "Careers",
            "Sign in or create account",
            "HomeViews",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-neutral-500 hover:text-cyan-600 transition-colors duration-200 hover:underline text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-neutral-800 text-base mb-1">Professional</h3>
          <a
            href="#"
            className="bg-neutral-800 text-white font-semibold px-4 py-2 rounded-lg text-sm w-fit mb-2 hover:bg-neutral-700 transition-colors duration-200"
          >
            Rightmove Plus
          </a>
          {[
            "Data Services",
            "Advertise on Rightmove",
            "Overseas agents and developers",
            "Home and property related services",
            "Advertise commercial property",
            "HomeViews Business Hub",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-neutral-500 hover:text-cyan-600 transition-colors duration-200 hover:underline text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-200 mt-12 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-neutral-500">
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {[
            "Site map",
            "Help",
            "Safety and Security",
            "Terms of Use",
            "Privacy Policy",
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              <a href="#" className="hover:text-cyan-600 hover:underline transition-colors duration-200">
                {item}
              </a>
              {i < 4 && <span className="text-neutral-300">|</span>}
            </span>
          ))}
          <span className="border border-neutral-300 text-neutral-600 rounded-full px-3 py-0.5 text-xs font-medium">
            New updates
          </span>
        </div>
        <div className="flex gap-6 text-neutral-400">
          <a href="#" className="hover:text-cyan-600 transition-colors duration-250" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </a>
          <a href="#" className="hover:text-cyan-600 transition-colors duration-250" aria-label="X">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className="hover:text-cyan-600 transition-colors duration-250" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="#" className="hover:text-cyan-600 transition-colors duration-250" aria-label="TikTok">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.14.99 1.09 2.37 1.78 3.82 1.94v3.9c-1.78-.07-3.49-.66-4.9-1.68-.07.05-.13.1-.19.16-.01 2.85.01 5.69-.01 8.54-.09 2.22-.96 4.38-2.6 5.86-1.89 1.76-4.66 2.36-7.07 1.58-2.31-.71-4.14-2.67-4.75-5.01-.76-2.78.36-5.88 2.68-7.39 1.25-.85 2.78-1.22 4.28-1.07V12.1c-.91-.25-1.92-.04-2.65.55-.71.55-1.06 1.48-1.04 2.38.01.99.6 1.91 1.48 2.31.96.46 2.12.33 2.92-.37.52-.44.78-1.12.78-1.79.02-3.83.01-7.66.02-11.49-.03-.06-.06-.13-.09-.2-.04-.15-.05-.31-.05-.47V.02z" />
            </svg>
          </a>
          <a href="#" className="hover:text-cyan-600 transition-colors duration-250" aria-label="YouTube">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}