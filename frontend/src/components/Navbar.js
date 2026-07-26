'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ setShowForm, setSelectedService }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
  ];

  const handleBookClick = () => {
    if (setSelectedService) setSelectedService("");
    if (setShowForm) setShowForm(true);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08080a]/90 backdrop-blur-md py-4 border-b border-amber-500/20 shadow-2xl shadow-black/80"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          href="/"
          className="flex items-center space-x-3 group text-left"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d0d12] rounded-full flex items-center justify-center">
              <i className="fa-solid fa-camera text-amber-400 text-lg group-hover:rotate-12 transition-transform duration-300"></i>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
              SUTTER COUNT
            </span>
            <span className="text-[10px] tracking-[0.25em] text-amber-400 uppercase font-semibold -mt-1">
              PHOTOGRAPHY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-semibold tracking-wide uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-amber-400 font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleBookClick}
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 bg-gold-gradient rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="fa-solid fa-calendar-check text-black text-sm"></i>
              Book Session
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <i
            className={`fa-solid ${
              mobileMenuOpen ? "fa-xmark text-amber-400" : "fa-bars"
            } text-2xl transition-transform duration-300`}
          ></i>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d14]/95 backdrop-blur-xl border-b border-amber-500/20 px-6 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold tracking-wider uppercase py-2 border-b border-white/5 transition-colors flex items-center justify-between ${
                    isActive ? "text-amber-400 font-bold" : "text-gray-300"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <i className="fa-solid fa-chevron-right text-xs text-amber-400"></i>}
                </Link>
              );
            })}
            <button
              onClick={handleBookClick}
              className="mt-4 w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-calendar-check"></i>
              Book Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
