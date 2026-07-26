'use client';

import React, { useState } from "react";
import serviceImg from "../assets/serviceImg.jpg";
import image from "../assets/image.jpg";
import downloadImg from "../assets/download.jpeg";
import servicesJpg from "../assets/services.jpg";

const getImgSrc = (img) => (typeof img === "string" ? img : img?.src || img);

const galleryData = [
  {
    id: 1,
    title: "Royal Destination Wedding",
    category: "Wedding",
    image: getImgSrc(image),
    location: "Udaipur Palace",
    year: "2024",
  },
  {
    id: 2,
    title: "Golden Hour Pre-Wedding",
    category: "Pre-Wedding",
    image: getImgSrc(serviceImg),
    location: "Beachfront Resort",
    year: "2024",
  },
  {
    id: 3,
    title: "Maternity Pure Grace",
    category: "Maternity",
    image: getImgSrc(downloadImg),
    location: "ABS Studio",
    year: "2024",
  },
  {
    id: 4,
    title: "Grand Gala Celebration",
    category: "Events",
    image: getImgSrc(servicesJpg),
    location: "Grand Ballroom",
    year: "2023",
  },
  {
    id: 5,
    title: "Luxury Commercial Product",
    category: "Product",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    location: "Commercial Studio",
    year: "2024",
  },
  {
    id: 6,
    title: "Heritage Fort Couple Story",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    location: "Jaipur Fort",
    year: "2024",
  },
  {
    id: 7,
    title: "Newborn Baby Magic",
    category: "Maternity",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    location: "ABS Studio",
    year: "2024",
  },
  {
    id: 8,
    title: "Sangeet Night Energy",
    category: "Events",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
    location: "Leela Lawns",
    year: "2023",
  },
  {
    id: 9,
    title: "Cinematic Couple Portrait",
    category: "Pre-Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    location: "Shimla Hills",
    year: "2024",
  },
];

const categories = ["All", "Wedding", "Pre-Wedding", "Maternity", "Events", "Product"];

const Gallery = ({ setShowForm, setSelectedService }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const handleInquireShoot = (itemTitle) => {
    if (setSelectedService) setSelectedService(itemTitle);
    if (setShowForm) setShowForm(true);
  };

  return (
    <div className="relative bg-[#08080a] text-slate-100 min-h-screen pt-28 pb-20 px-6 md:px-12">
      {/* Background Subtle Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${getImgSrc(serviceImg)})` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <i className="fa-solid fa-camera"></i>
              <span>Artistic Archive</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
              Portfolio Gallery
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Browse through our curated collection of wedding sagas, pre-wedding films, portraits, and celebrations.
            </p>
          </div>

          {/* Categories Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-gold-gradient text-black font-bold shadow-lg shadow-amber-500/20"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#121218] transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold">{item.year}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1">
                  <i className="fa-solid fa-location-dot text-amber-400"></i>
                  {item.location}
                </p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-expand text-amber-400 text-sm"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#101018] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:text-amber-400 border border-white/20"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0e0e14]">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    {lightboxImage.category} • {lightboxImage.year}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs text-gray-400">Location: {lightboxImage.location}</p>
                </div>
                <button
                  onClick={() => {
                    const title = lightboxImage.title;
                    setLightboxImage(null);
                    handleInquireShoot(title);
                  }}
                  className="px-6 py-2.5 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider rounded-full hover:scale-105 transition-transform"
                >
                  Inquire Similar Shoot
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
