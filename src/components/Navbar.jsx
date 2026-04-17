import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-4 lg:px-8 sm:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-sm font-semibold text-white shadow-sm">
            RK
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              R.K. Traders
            </span>
            <span className="text-xs text-slate-500">Construction Materials</span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors ${
                  isActive ? "text-orange-600" : "hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="tel:+917890390985"
          className="rounded-full bg-orange-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-orange-700"
          >
            Call now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-slate-700 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-orange-100 bg-white/95 px-6 pb-4 pt-2 text-sm text-slate-800 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`py-1 ${
                    isActive
                      ? "font-semibold text-orange-600"
                      : "hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="tel:+917890390985"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-700"
            >
              Call now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
