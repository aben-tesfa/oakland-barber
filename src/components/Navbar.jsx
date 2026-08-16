import React, { useState, useEffect } from 'react';
import { studioConfig } from '../data/services';
import Button from './Button';
import { HiMenuAlt3, HiX, HiOutlinePhone, HiOutlineCalendar } from 'react-icons/hi';
import { RiScissorsCutLine } from 'react-icons/ri';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'The Studio', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Lookbook', href: '#gallery' },
    { name: 'Location & Hours', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBooking = () => {
    setMobileOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      // Fallback scroll to booking section
      const bookSec = document.querySelector('#booking');
      if (bookSec) {
        bookSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-studio-950/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg'
          : 'bg-gradient-to-b from-studio-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-studio-900 border border-brass/30 flex items-center justify-center text-brass group-hover:border-brass transition-colors">
              <RiScissorsCutLine className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-studio-50 leading-none">
                CLASSIC CUT
              </span>
              <span className="text-[10px] tracking-[0.2em] text-brass uppercase font-semibold mt-1">
                Barbershop by Binyam
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-studio-300 hover:text-brass transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${studioConfig.formattedPhone}`}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-studio-400 hover:text-studio-100 transition-colors py-2 px-3"
            >
              <HiOutlinePhone className="w-4 h-4 text-brass" />
              <span>{studioConfig.phone}</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={handleBooking}
              icon={<HiOutlineCalendar className="w-4 h-4" />}
            >
              Book with Binyam
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded bg-studio-900 border border-studio-800 text-studio-200 hover:text-brass transition-colors"
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-studio-950/98 border-b border-studio-800 px-6 py-8 mt-3 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif font-medium text-studio-200 hover:text-brass transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-studio-800 my-2" />
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${studioConfig.formattedPhone}`}
                className="flex items-center gap-3 text-sm text-studio-300 py-2"
              >
                <HiOutlinePhone className="w-5 h-5 text-brass" />
                <span>{studioConfig.phone}</span>
              </a>
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={handleBooking}
                icon={<HiOutlineCalendar className="w-5 h-5" />}
              >
                Book Appointment (Calendly)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
