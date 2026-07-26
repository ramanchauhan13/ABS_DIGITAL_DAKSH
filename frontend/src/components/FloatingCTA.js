'use client';

import React, { useState, useEffect } from "react";


const FloatingCTA = ({ setShowForm }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#161622]/90 border border-white/10 text-white flex items-center justify-center shadow-lg hover:border-amber-400 hover:text-amber-400 transition-all hover:scale-110 active:scale-95"
          title="Scroll to Top"
        >
          <i className="fa-solid fa-arrow-up text-sm"></i>
        </button>
      )}

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/919876543210?text=Hello%20ABS%20Digital%20Daksh,%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 border border-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-900/30 hover:scale-110 active:scale-95 transition-all group"
        title="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
      </a>

      {/* Book Inquiry Trigger */}
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
      >
        <i className="fa-solid fa-camera text-sm"></i>
        <span>Book Shoot</span>
      </button>
    </div>
  );
};

export default FloatingCTA;
