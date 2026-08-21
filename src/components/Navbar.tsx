import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, Menu, X, Calendar, Stethoscope, ChevronRight, MessageSquare } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (type?: 'clinic' | 'teleconsultation') => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Doctor', path: '/about' },
    { name: 'Conditions & Services', path: '/services' },
    { name: 'Laser & Tech', path: '/technology' },
    { name: 'Teleconsultation', path: '/teleconsultation' },
    { name: 'Location & Contact', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Bhabua, Kaimur (In front of Devi Ji Mandir)</span>
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 5:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${CLINIC_CONTACT.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 transition-colors font-medium"
              id="top-bar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>{CLINIC_CONTACT.phone}</span>
            </a>
            <a
              href={CLINIC_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 bg-emerald-700/80 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors"
              id="top-bar-whatsapp-link"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Doctor Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 text-white flex items-center justify-center shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform shrink-0">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-teal-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight leading-tight">
                  Dr. Sumit Kumar
                </span>
                <span className="bg-teal-50 text-teal-800 text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded border border-teal-200">
                  MBBS
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Clinic for Skin Conditions • Bhabua
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg transition-colors text-xs xl:text-sm font-medium ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 font-bold border border-teal-200/60'
                      : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenBooking('clinic')}
              className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              id="nav-book-appointment-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-5 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 font-bold border border-teal-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('clinic');
              }}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2.5 rounded-lg font-semibold text-center flex items-center justify-center gap-2 shadow-sm text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Clinic Visit</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('teleconsultation');
              }}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-lg font-semibold text-center flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>Book Teleconsultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
