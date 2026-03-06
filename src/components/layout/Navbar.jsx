import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../ui/Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/gallery", label: "Gallery" },
  { to: "/certificates", label: "Licenses" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const transparent = false
  const bg = transparent ? "bg-transparent" : "bg-white shadow-md";
  const border = transparent ? "" : "border-b border-gray-100";

  return (
    <>
      {/* Top info bar */}
      <div
        className={`hidden md:block transition-all duration-300 ${transparent ? "bg-navy-900/60 backdrop-blur-sm" : "bg-navy-900"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div
            className="flex items-center gap-6 text-xs text-white/60"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            <span className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              4/5 Apapa–Oshodi Expressway, Apapa, Lagos
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.1 2.82 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09A16 16 0 0014.36 15.54l.55-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.38z" />
              </svg>
              0803 718 5967
            </span>
          </div>
          <div
            className="flex items-center gap-4 text-xs text-white/60"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            <a
              href="mailto:info@raisevisionlogistics.com"
              className="hover:text-white   transition-colors"
            >
              info@raisevisionlogistics.com
            </a>
            <a
              href="https://wa.me/2348057972005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-semibold"
            >
              <svg
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-400 ${bg} ${border}`}
        style={{ top: scrolled ? 0 : undefined }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3">
          <Link to="/">
            <Logo variant={transparent ? "light" : "dark"} size="md" />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link transition-colors duration-200 ${isActive ? "active" : ""} ${
                    transparent
                      ? "text-black hover:text-white"
                      : "text-gray-600 hover:text-navy-800"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-xs px-6 py-3">
              Get a Quote
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 flex flex-col gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? "bg-black" : "bg-navy-900"} ${
                  i === 0 && open
                    ? "rotate-45 translate-y-2"
                    : i === 1 && open
                      ? "opacity-0"
                      : i === 2 && open
                        ? "-rotate-45 -translate-y-2"
                        : ""
                }`}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-400 ${open ? "max-h-[500px]" : "max-h-0"}`}
        >
          <nav className="px-6 py-5 flex flex-col gap-4">
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link text-sm py-1 border-b border-gray-100 ${isActive ? "text-forest-500 active" : "text-gray-600"}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2 justify-center">
              Request a Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
