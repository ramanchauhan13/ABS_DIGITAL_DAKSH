'use client';

import React from "react";
import Link from "next/link";

const Footer = ({ setShowForm }) => {
  return (
    <footer className="bg-[#060608] text-gray-400 border-t border-amber-500/15 pt-16 pb-8 relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 text-left">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1.5px]">
                <div className="w-full h-full bg-[#0d0d12] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-camera text-amber-400 text-lg"></i>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  ABS DIGITAL
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-400 uppercase font-semibold -mt-1">
                  Daksh Photography
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Capturing life's purest emotions, timeless smiles, and magical celebrations. Premier photography house specializing in wedding, event, and portrait storytelling.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-colors"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-colors"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-colors"
                aria-label="Pinterest"
              >
                <i className="fa-brands fa-pinterest-p text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="font-serif text-white font-semibold text-lg mb-4 tracking-wide border-b border-amber-500/30 pb-2 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-amber-500"></i> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-amber-500"></i> Services & Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-amber-500"></i> Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-amber-500"></i> About Studio
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowForm && setShowForm(true)}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-left"
                >
                  <i className="fa-solid fa-chevron-right text-[10px] text-amber-500"></i> Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="text-left">
            <h3 className="font-serif text-white font-semibold text-lg mb-4 tracking-wide border-b border-amber-500/30 pb-2 inline-block">
              Our Expertise
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-ring text-amber-400 text-xs"></i> Destination Weddings
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-heart text-amber-400 text-xs"></i> Pre-Wedding Stories
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-baby text-amber-400 text-xs"></i> Maternity & New Born
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-champagne-glasses text-amber-400 text-xs"></i> Gala & Event Coverage
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-box text-amber-400 text-xs"></i> Commercial Product Shoots
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-plane-wings text-amber-400 text-xs"></i> 4K Drone Cinematography
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left space-y-3">
            <h3 className="font-serif text-white font-semibold text-lg mb-4 tracking-wide border-b border-amber-500/30 pb-2 inline-block">
              Studio Contact
            </h3>
            <div className="flex items-start space-x-3 text-sm">
              <i className="fa-solid fa-location-dot text-amber-400 mt-1"></i>
              <span>ABS Digital Studio, Sector 18, Commercial Hub, Main City</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <i className="fa-solid fa-phone text-amber-400"></i>
              <a href="tel:+919876543210" className="hover:text-amber-400 transition-colors">
                +91 98765 43210 / +91 91234 56789
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <i className="fa-solid fa-envelope text-amber-400"></i>
              <a href="mailto:contact@absdigitaldaksh.com" className="hover:text-amber-400 transition-colors">
                contact@absdigitaldaksh.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-amber-300/80 pt-1">
              <i className="fa-solid fa-clock text-amber-400"></i>
              <span>Mon - Sun: 09:00 AM - 09:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} ABS DIGITAL DAKSH. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <i className="fa-solid fa-heart text-amber-500 text-xs"></i> for Visual Storytellers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
