import { useState } from "react";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const shopBrands = [
    "VERSACE",
    "GUCCI",
    "D & G",
    "Zara",
    "Calvin Klein",
    "Prada",
  ];

  const handleMouseEnter = () => {
    setIsShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsShopDropdownOpen(false);
  };

  return (
    <div className="bg-white w-full border-b border-gray-100 relative z-40">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-8 flex-shrink-0">
          <Link to="/">
            <img
              src="/navbarSHOPCO.svg"
              alt="logo"
              className="h-7 w-auto pr-[40px]"
            />
          </Link>
          <ul className="flex gap-7 font-satoshi text-base font-medium items-center">
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors duration-200">
                Shop
                <ChevronDown
                  className={`w-4 h-4 inline-block transition-transform duration-300 ease-in-out ${
                    isShopDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-48 h-2 bg-transparent"></div>

              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
                  isShopDropdownOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {shopBrands.map((brand, index) => (
                    <a
                      key={brand}
                      href="#"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      style={{
                        animationDelay: isShopDropdownOpen
                          ? `${index * 50}ms`
                          : "0ms",
                      }}
                    >
                      {brand}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors duration-200">
              On Sale
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors duration-200">
              New Arrivals
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors duration-200">
              Brands
            </li>
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
          <div className="relative group">
            <ShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-gray-600 hover:scale-110 transition-all duration-300 transform group-hover:rotate-12" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <Link to="/user" className="relative group">
            <User className="w-6 h-6 text-black cursor-pointer hover:text-gray-600 hover:scale-110 transition-all duration-300 transform group-hover:rotate-12" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
              Profile
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
