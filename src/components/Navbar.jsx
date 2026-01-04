import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-orange-600 text-white shadow-md">
      <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          R.K. Traders
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-orange-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-200 transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-orange-200 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-700 px-6 py-4 space-y-3 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
