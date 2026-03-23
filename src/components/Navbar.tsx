import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/legaworkx-logo.png";

const navLinks = [
  { label: "Home", href: "/#hero", to: "/" },
  { label: "About", href: "/#about", to: "/#about" },
  { label: "Why Us", href: "/#why-us", to: "/#why-us" },
  { label: "Contact", href: "/#contact", to: "/#contact" },
];

const serviceLinks = [
  { label: "Car Care & Detailing", to: "/services/car-care-detailing" },
  { label: "Mechanical & Maintenance", to: "/services/mechanical-maintenance" },
  { label: "Customization & Upgrades", to: "/services/customization" },
  { label: "AI & Technology Services", to: "/services/ai-technology" },
  { label: "Car Sales & Brokerage", to: "/services/car-sales" },
  { label: "Accessories & Parts", to: "/services/accessories-parts" },
  { label: "Additional Services", to: "/services/additional" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isHome && href.startsWith("/#")) {
      const el = document.querySelector(href.replace("/", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    if (isHome) {
      const el = document.querySelector("#services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass =
    "text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LEGAWORKX Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          {isHome ? (
            <a
              href="#hero"
              className={navLinkClass}
            >
              Home
            </a>
          ) : (
            <Link to="/" className={navLinkClass}>Home</Link>
          )}

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <div className="flex items-center gap-1">
              {isHome ? (
                <a
                  href="#services"
                  onClick={handleServicesClick}
                  className={navLinkClass}
                >
                  Services
                </a>
              ) : (
                <Link
                  to="/#services"
                  onClick={() => setServicesOpen(false)}
                  className={navLinkClass}
                >
                  Services
                </Link>
              )}
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-0.5"
                aria-label="Toggle services menu"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl py-1.5 animate-fade-up">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted/40 transition-colors duration-200 tracking-wide"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) =>
            isHome ? (
              <a
                key={link.href}
                href={link.href.replace("/", "")}
                className={navLinkClass}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.to}
                className={navLinkClass}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <button
          className="md:hidden text-foreground active:scale-95 transition-transform"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-up">
          <div className="flex flex-col items-center gap-4 py-6">
            {/* Home */}
            {isHome ? (
              <a
                href="#hero"
                onClick={() => handleNavClick("/#hero")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                Home
              </a>
            ) : (
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                Home
              </Link>
            )}

            {/* Mobile Services */}
            <div className="flex flex-col items-center gap-2 w-full px-8">
              <div className="flex items-center gap-1">
                {isHome ? (
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    Services
                  </a>
                ) : (
                  <Link
                    to="/#services"
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    Services
                  </Link>
                )}
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="text-muted-foreground hover:text-primary transition-colors p-0.5"
                  aria-label="Toggle services submenu"
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="flex flex-col items-center gap-2 w-full border-t border-border pt-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining links */}
            {navLinks.slice(1).map((link) =>
              isHome ? (
                <a
                  key={link.href}
                  href={link.href.replace("/", "")}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
