export function Footer (){
    return (
        <footer className="bg-gray-100 pt-10 pb-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-6 gap-6 text-sm">

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base">Download the Rightmove app</h3>
          <a href="#" className="bg-black text-white rounded-lg px-3 py-2 flex items-center gap-2 w-36">
            <div className="leading-tight">
              <div className="text-xs">Download on the</div>
              <div className="font-semibold text-sm">App Store</div>
            </div>
          </a>
          <a href="#" className="bg-black text-white rounded-lg px-3 py-2 flex items-center gap-2 w-36">
            <div className="leading-tight">
              <div className="text-xs">GET IT ON</div>
              <div className="font-semibold text-sm">Google Play</div>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base mb-1">Resources</h3>
          {["Stamp Duty Calculator","House Price Index","Property guides","Property news","Buyer guides","Seller guides","Renter guides","Landlord guides","Removals","Energy efficiency","Mortgage in Principle","Mortgage Calculator","Mortgage guides"].map(item => (
            <a key={item} href="#" className="text-gray-600 hover:underline">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base mb-1">Search</h3>
          {["Search homes for sale","Search homes for rent","Commercial for sale","Commercial to rent","Overseas homes for sale","Search sold house prices","Find an agent","Student accommodation","Retirement homes","New homes"].map(item => (
            <a key={item} href="#" className="text-gray-600 hover:underline">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base mb-1">Locations</h3>
          {["Major towns and cities in the UK","London","Cornwall","Glasgow","Cardiff","Edinburgh","Spain","France","Portugal"].map(item => (
            <a key={item} href="#" className="text-gray-600 hover:underline">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base mb-1">Rightmove</h3>
          {["Tech blog","About","Press centre","Investor relations","Contact us","Careers","Sign in or create account","HomeViews"].map(item => (
            <a key={item} href="#" className="text-gray-600 hover:underline">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base mb-1">Professional</h3>
          <a href="#" className="bg-gray-900 text-white font-semibold px-4 py-2 rounded text-sm w-fit mb-2">Rightmove Plus</a>
          {["Data Services","Advertise on Rightmove","Overseas agents and developers","Home and property related services","Advertise commercial property","HomeViews Business Hub"].map(item => (
            <a key={item} href="#" className="text-gray-600 hover:underline">{item}</a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
        <div className="flex gap-4 items-center">
          {["Site map","Help","Safety and Security","Terms of Use","Privacy Policy"].map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              <a href="#" className="hover:underline">{item}</a>
              {i < 4 && <span className="text-gray-400">|</span>}
            </span>
          ))}
          <span className="border border-gray-400 rounded-full px-3 py-1 text-xs">New updates</span>
        </div>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-black">F</a>
          <a href="#" className="hover:text-black">X</a>
          <a href="#" className="hover:text-black">In</a>
          <a href="#" className="hover:text-black">Tk</a>
          <a href="#" className="hover:text-black">Yt</a>
        </div>
      </div>
    </footer>
    )
}