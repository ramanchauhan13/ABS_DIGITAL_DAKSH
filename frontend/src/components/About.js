'use client';

import React from "react";
import serviceImg from "../assets/serviceImg.jpg";
import image from "../assets/image.jpg";

const getImgSrc = (img) => (typeof img === "string" ? img : img?.src || img);

const About = ({ setShowForm }) => {
  const heroImg = getImgSrc(image);
  const bgImg = getImgSrc(serviceImg);

  const gearItems = [
    { name: "Canon EOS R5 & Sony A7IV", detail: "Full-Frame 4K/8K Sensor Cameras", icon: "fa-camera font-solid" },
    { name: "Prime & Telephoto Lenses", detail: "85mm f/1.2, 35mm f/1.4, 70-200mm f/2.8", icon: "fa-circle-dot" },
    { name: "DJI Mavic 3 Pro Drone", detail: "Hasselblad Camera Aerial Cinematography", icon: "fa-plane-wings" },
    { name: "Godox & Aperture Lighting", detail: "Studio Strobes & Softbox Modifiers", icon: "fa-lightbulb" },
  ];

  const values = [
    {
      title: "Authentic Emotion",
      description: "We focus on unscripted, natural smiles and tearful joy over stiff, unnatural poses.",
      icon: "fa-heart",
    },
    {
      title: "Timeless Color Science",
      description: "Our color grading avoids passing gimmicks, ensuring your photos look classic 30 years later.",
      icon: "fa-palette",
    },
    {
      title: "Uncompromising Punctuality",
      description: "We respect your schedule, arrive early at venues, and deliver final albums on time.",
      icon: "fa-clock",
    },
  ];

  return (
    <div className="relative bg-[#08080a] text-slate-100 min-h-screen pt-28 pb-20 px-6 md:px-12">
      {/* Background Subtle Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            <i className="fa-solid fa-camera"></i>
            <span>Our Story & Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-6">
            About ABS Digital Daksh
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Founded with a passion for visual storytelling, ABS Digital Daksh is a boutique photography house dedicated to transforming fleeting real-life emotions into immortal art pieces.
          </p>
        </div>

        {/* PROFILE STORY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
            <img
              src={heroImg}
              alt="Daksh Photography House"
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-2xl border border-white/10">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                Master Photographer & Creative Director
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">Daksh & Team</h3>
              <p className="text-xs text-gray-300 mt-1">
                Over 8 years of capturing weddings, portraits, and grand celebrations across India.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-white leading-snug">
              "We don't just take photographs, we preserve feelings you can re-live."
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Every smile, every glance, and every tear during a celebration holds a story. At ABS Digital Daksh, we blend artistic composition, warm lighting, and cutting-edge technology to curate memories that families cherish across generations.
            </p>

            {/* Core Values List */}
            <div className="space-y-4 pt-2">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#12121a] border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <i className={`fa-solid ${val.icon} text-base`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{val.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GEAR & EQUIPMENT SHOWCASE */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              State Of The Art Arsenal
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Professional Gear & Technology
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              We invest in top-tier industry equipment to ensure low-light perfection, razor-sharp focus, and cinematic 4K resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gearItems.map((gear, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl mb-4 group-hover:bg-gold-gradient group-hover:text-black transition-colors">
                  <i className={`fa-solid ${gear.icon}`}></i>
                </div>
                <h4 className="font-bold text-white text-base mb-1">{gear.name}</h4>
                <p className="text-xs text-gray-400">{gear.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <div className="glass-panel-gold rounded-3xl p-8 md:p-12 text-center border border-amber-500/40">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Create Something Unforgettable
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-8">
            Whether you are planning a royal wedding, an intimate outdoor pre-wedding shoot, or a family celebration, we are excited to tell your story.
          </p>
          <button
            onClick={() => setShowForm && setShowForm(true)}
            className="px-8 py-4 bg-gold-gradient text-black font-bold rounded-full text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            Schedule A Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
