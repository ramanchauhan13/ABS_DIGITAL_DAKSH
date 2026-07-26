'use client';

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import serviceImg from "../assets/serviceImg.jpg";
import image from "../assets/image.jpg";
import downloadImg from "../assets/download.jpeg";
import servicesJpg from "../assets/services.jpg";

const getImgSrc = (img) => (typeof img === "string" ? img : img?.src || img);

const servicesData = [
  {
    id: "wedding",
    title: "Wedding Photoshoots",
    subtitle: "Complete Bridal & Event Storytelling",
    image: getImgSrc(image),
    startingPrice: "₹45,000",
    features: [
      "Traditional & Candid Photography",
      "Cinematography & 4K Teaser Reel",
      "Drone Venue Coverage Included",
      "Flush-Mount Leather Album (50 Pages)",
      "High-Res Digital Gallery Access",
    ],
    description: "End-to-end wedding coverage from Haldi & Mehendi to Sangeet and Grand Reception. Capturing candid emotions and sacred moments.",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Shoots",
    subtitle: "Cinematic Outdoor & Concept Film",
    image: getImgSrc(serviceImg),
    startingPrice: "₹25,000",
    features: [
      "Up to 2 Scenic Outdoor Locations",
      "3 Custom Outfit Changes",
      "1-2 Min Cinematic Teaser Film",
      "Raw & Edited High-Res Photos",
      "Framed Canvas Print Included",
    ],
    description: "A romantic storytelling shoot tailored to your love story, capturing genuine chemistry at handpicked locations.",
  },
  {
    id: "events",
    title: "Events Photography",
    subtitle: "Anniversaries, Parties & Galas",
    image: getImgSrc(servicesJpg),
    startingPrice: "₹15,000",
    features: [
      "Full Stage & Guest Coverage",
      "Party Highlights & Portraits",
      "Fast 48-Hour Digital Delivery",
      "Color Retouched Image Pack",
      "Optional On-Site Photo Booth",
    ],
    description: "Vibrant and high-energy coverage for corporate events, birth anniversaries, sangeet nights, and family reunions.",
  },
  {
    id: "maternity",
    title: "Maternity & Baby Shoots",
    subtitle: "Tender Moments & Newborn Magic",
    image: getImgSrc(downloadImg),
    startingPrice: "₹18,000",
    features: [
      "Cozy Studio or Outdoor Setup",
      "Sanitized Props & Backdrops",
      "Gentle Lighting & Posing Support",
      "Family & Couple Poses",
      "Deluxe Soft-Cover Album",
    ],
    description: "Celebrating the journey of motherhood and newborn innocence with warm, gentle, and heartwarming portrait photography.",
  },
  {
    id: "product",
    title: "Product Photography",
    subtitle: "E-Commerce & Brand Advertising",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    startingPrice: "₹12,000",
    features: [
      "High-Resolution Macro Detail",
      "Clean White & Creative Backgrounds",
      "Color-Matched Retouching",
      "Commercial Usage Rights",
      "Social Media Sized Assets",
    ],
    description: "Professional product photography designed to make your merchandise pop on Amazon, Shopify, social ads, and catalogs.",
  },
  {
    id: "albums",
    title: "Photo Albums & Prints",
    subtitle: "Luxury Handcrafted Keepsakes",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
    startingPrice: "₹8,000",
    features: [
      "Non-Tear HD Velvet Paper",
      "Glass, Acrylic or Leather Cover",
      "Custom Graphic Page Layout",
      "Lifetime Color Preservation",
      "Matching Presentation Box",
    ],
    description: "Transform your digital images into tangible heirlooms with our mastercrafted flush-mount photo albums and gallery frames.",
  },
];

function Services({ setShowForm, setSelectedService }) {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [viewMode, setViewMode] = useState("swiper"); // "swiper" | "grid"
  const [calcService, setCalcService] = useState(servicesData[0]);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeAlbum, setIncludeAlbum] = useState(true);

  const handleCardClick = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  const handleBook = (title) => {
    if (setSelectedService) setSelectedService(title);
    if (setShowForm) setShowForm(true);
  };

  const basePriceNum = parseInt(calcService.startingPrice.replace(/[^0-9]/g, "")) || 20000;
  const estimatedTotal = basePriceNum + (includeDrone ? 8000 : 0) + (includeAlbum ? 7000 : 0);

  return (
    <div className="relative bg-[#08080a] text-slate-100 min-h-screen pt-28 pb-20 px-6 md:px-12">
      {/* Background Accent */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${getImgSrc(serviceImg)})` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <i className="fa-solid fa-sparkles"></i>
              <span>Professional Offerings</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
              Services & Packages
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore our photography and film specializations. Click any card to view detailed inclusions or switch layout.
            </p>
          </div>

          {/* Toggle View Mode */}
          <div className="flex items-center space-x-2 bg-[#12121c] p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setViewMode("swiper")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${
                viewMode === "swiper"
                  ? "bg-gold-gradient text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-sliders"></i>
              Carousel View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${
                viewMode === "grid"
                  ? "bg-gold-gradient text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-border-all"></i>
              Full Grid
            </button>
          </div>
        </div>

        {/* SWIPER CAROUSEL VIEW */}
        {viewMode === "swiper" ? (
          <div className="relative mb-16">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-6 px-2"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative w-full h-[440px] cursor-pointer perspective group"
                    onClick={() => handleCardClick(index)}
                  >
                    <div
                      className={`transition-transform duration-700 transform-style-preserve-3d h-full w-full rounded-2xl ${
                        flippedIndex === index ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* FRONT CARD */}
                      <div className="absolute inset-0 bg-[#12121a] rounded-2xl shadow-xl border border-white/10 overflow-hidden backface-hidden flex flex-col justify-between group-hover:border-amber-500/50 transition-colors">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-black/30"></div>
                          <span className="absolute top-4 right-4 bg-black/70 border border-amber-400/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                            From {service.startingPrice}
                          </span>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest block mb-1">
                              {service.subtitle}
                            </span>
                            <h3 className="font-serif text-2xl font-bold text-white mb-2">
                              {service.title}
                            </h3>
                            <p className="text-xs text-gray-400 line-clamp-2">
                              {service.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold">
                            <span>Click to flip for details</span>
                            <i className="fa-solid fa-rotate text-sm"></i>
                          </div>
                        </div>
                      </div>

                      {/* BACK CARD */}
                      <div className="absolute inset-0 bg-[#141420] p-6 rounded-2xl shadow-2xl border border-amber-500/40 backface-hidden transform rotate-y-180 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                              Package Inclusions
                            </span>
                            <i className="fa-solid fa-rotate text-gray-400 text-xs"></i>
                          </div>
                          <h3 className="font-serif text-xl font-bold text-white mb-3">
                            {service.title}
                          </h3>

                          <ul className="space-y-2 mb-4">
                            {service.features.map((feat, idx) => (
                              <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                                <i className="fa-solid fa-check text-amber-400 mt-0.5"></i>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3 pt-3 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">Starting Price:</span>
                            <span className="font-serif font-bold text-amber-300 text-lg">
                              {service.startingPrice}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBook(service.title);
                            }}
                            className="w-full py-2.5 bg-gold-gradient text-black font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform"
                          >
                            Book Package
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-[#12121a] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-black/30"></div>
                  <span className="absolute top-4 right-4 bg-black/70 border border-amber-400/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                    From {service.startingPrice}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-4 bg-black/40 p-4 rounded-xl border border-white/5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                          <i className="fa-solid fa-check text-amber-400 mt-0.5"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleBook(service.title)}
                    className="w-full py-3 bg-gold-gradient text-black font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* INTERACTIVE PACKAGE ESTIMATOR */}
        <section className="glass-panel-gold rounded-3xl p-8 md:p-10 border border-amber-500/30">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Instant Pricing Helper
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mb-2">
              Estimate Your Shoot Package
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-8">
              Select your primary service and add-on preferences for an instant cost estimate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Select Shoot Type
                </label>
                <select
                  value={calcService.id}
                  onChange={(e) => {
                    const match = servicesData.find((s) => s.id === e.target.value);
                    if (match) setCalcService(match);
                  }}
                  className="w-full bg-[#181824] border border-amber-500/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="droneCheck"
                  checked={includeDrone}
                  onChange={(e) => setIncludeDrone(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                />
                <label htmlFor="droneCheck" className="text-xs text-gray-300 cursor-pointer">
                  Include 4K Drone Coverage (+₹8,000)
                </label>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="albumCheck"
                  checked={includeAlbum}
                  onChange={(e) => setIncludeAlbum(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
                />
                <label htmlFor="albumCheck" className="text-xs text-gray-300 cursor-pointer">
                  Flush-Mount Photo Album (+₹7,000)
                </label>
              </div>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs text-gray-400 block">Estimated Starting Investment:</span>
                <span className="font-serif text-3xl font-extrabold text-gold-gradient">
                  ₹{estimatedTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <button
                onClick={() => handleBook(`${calcService.title} (Estimated ₹${estimatedTotal.toLocaleString("en-IN")})`)}
                className="px-8 py-3 bg-gold-gradient text-black font-bold rounded-full text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
              >
                Inquire This Estimate
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
