import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white w-full border-b border-gray-100">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center gap-8 flex-shrink-0">
          <a href="#"><img src="/navbarSHOPCO.svg" alt="logo" className="h-7 w-auto pr-[40px]" /></a>
          <ul className="flex gap-7 font-satoshi text-base font-medium items-center">
            <li className="flex items-center gap-1 cursor-pointer">Shop <ChevronDown className="w-4 h-4 inline-block" /></li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li className="cursor-pointer">Brands</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center px-8">
          <div className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-6 py-2">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer" />
            <input
              type="text"
              placeholder="Search for products..."
              className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 flex-shrink-0">
          <ShoppingCart className="w-6 h-6 text-black cursor-pointer" />
          <User className="w-6 h-6 text-black cursor-pointer" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
