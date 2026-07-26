'use client';

import React, { useState } from "react";
import Link from "next/link";
import image from "../assets/image.jpg";
import serviceImg from "../assets/serviceImg.jpg";
import downloadImg from "../assets/download.jpeg";
import servicesJpg from "../assets/services.jpg";

function Content({ setShowForm, setSelectedService }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const heroBg = typeof image === "string" ? image : image?.src || image;
  const serviceBg = typeof serviceImg === "string" ? serviceImg : serviceImg?.src || serviceImg;
  const downloadBg = typeof downloadImg === "string" ? downloadImg : downloadImg?.src || downloadImg;
  const servicesBg = typeof servicesJpg === "string" ? servicesJpg : servicesJpg?.src || servicesJpg;

  // Gallery items for featured homepage showcase
  const galleryItems = [
    {
      id: 1,
      title: "Royal Destination Wedding",
      category: "Wedding",
      image: heroBg,
      location: "Udaipur Palace",
    },
    {
      id: 2,
      title: "Sunset Pre-Wedding Romance",
      category: "Pre-Wedding",
      image: serviceBg,
      location: "Golden Beach",
    },
    {
      id: 3,
      title: "Maternity Pure Grace",
      category: "Maternity",
      image: downloadBg,
      location: "Studio Lights",
    },
    {
      id: 4,
      title: "Luxury Gala Event",
      category: "Events",
      image: servicesBg,
      location: "Grand Ballroom",
    },
    {
      id: 5,
      title: "Jewelry Commercial Shoot",
      category: "Product",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
      location: "Studio 1",
    },
    {
      id: 6,
      title: "Classic Cinematic Portrait",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      location: "Heritage Fort",
    },
  ];

  const categories = ["All", "Wedding", "Pre-Wedding", "Maternity", "Events", "Product"];

  const filteredGallery =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const stats = [
    { number: "750+", label: "Weddings & Events Captured", icon: "fa-solid fa-camera-retro" },
    { number: "15+", label: "Photography Excellence Awards", icon: "fa-solid fa-trophy" },
    { number: "8+ Yrs", label: "Professional Studio Legacy", icon: "fa-solid fa-award" },
    { number: "100%", label: "Client Satisfaction & Love", icon: "fa-solid fa-heart" },
  ];

  const whyChooseUs = [
    {
      icon: "fa-solid fa-film",
      title: "Cinematic 4K Resolution",
      description: "We use state-of-the-art full-frame mirrorless cameras & prime lenses for ultra-sharp clarity.",
    },
    {
      icon: "fa-solid fa-plane-wings",
      title: "Drone Aerial Coverage",
      description: "Breathtaking bird's-eye perspective video & photo angles for grand venue celebrations.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Fast Sneak Peeks",
      description: "Receive professionally color-graded sneak-peek highlights within 48 hours of your event.",
    },
    {
      icon: "fa-solid fa-book-open",
      title: "Handcrafted Custom Albums",
      description: "Italian flush-mount leather-bound photo albums crafted to preserve memories for generations.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Vision",
      description: "We meet to discuss your story, event flow, aesthetic mood boards, and special requests.",
    },
    {
      step: "02",
      title: "Location & Concept Plan",
      description: "Our creative team scouts venue lighting, designs shot lists, and prepares equipment.",
    },
    {
      step: "03",
      title: "The Live Shoot Experience",
      description: "Relax and enjoy your special day while we unobtrusively capture candid and portrait moments.",
    },
    {
      step: "04",
      title: "Master Editing & Delivery",
      description: "High-end retouching, color grading, online gallery portal, and printed album delivery.",
    },
  ];

  const testimonials = [
    {
      quote: "ABS Digital Daksh captured our wedding so beautifully! Looking back at our album feels like re-living the magic all over again.",
      author: "Vikram & Ananya",
      event: "Royal Wedding in Jaipur",
      stars: 5,
    },
    {
      quote: "The pre-wedding shoot was super comfortable and fun. The drone shots and video teaser left everyone spellbound!",
      author: "Rohan & Priyal",
      event: "Destination Pre-Wedding Shoot",
      stars: 5,
    },
    {
      quote: "Top-notch professionalism and creativity. They paid attention to every micro-detail during our corporate anniversary gala.",
      author: "Mehta Group",
      event: "Corporate Anniversary Gala",
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: "How far in advance should we book ABS Digital Daksh for a wedding?",
      a: "We recommend booking 3 to 6 months in advance for wedding dates to ensure availability, especially during peak wedding seasons.",
    },
    {
      q: "Do you travel for destination weddings and shoots?",
      a: "Yes! We regularly travel across India and internationally for destination weddings, pre-wedding films, and special events.",
    },
    {
      q: "When will we receive our photos and video highlights?",
      a: "You will get a curated sneak peek gallery within 48 hours. The complete high-resolution retouched album is delivered within 3-4 weeks.",
    },
    {
      q: "Can we customize a package according to our budget?",
      a: "Absolutely! We offer tailored packages matching your venue size, shoot days, number of photographers, and album requirements.",
    },
  ];

  const handleBookCategory = (serviceName) => {
    if (setSelectedService) setSelectedService(serviceName);
    if (setShowForm) setShowForm(true);
  };

  return (
    <div className="relative bg-[#08080a] text-slate-100 min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/75 to-black/60"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-amber-500/40 backdrop-blur-md mb-6 shadow-xl animate-float">
            <i className="fa-solid fa-sparkles text-amber-400 text-xs"></i>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              EST. 2018 • PREMIUM DIGITAL PHOTOGRAPHY HOUSE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Capturing Life's Most <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Extraordinary</span> Moments
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-xl text-gray-300 font-medium leading-relaxed mb-8">
            Crafting timeless visual stories through artistic wedding photography, cinematic films, and emotion-rich portraits — one frame at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleBookCategory("Wedding Photoshoots")}
              className="px-8 py-4 bg-gold-gradient text-black font-bold rounded-full text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-amber-500/25 hover:shadow-amber-500/45 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              <i className="fa-solid fa-calendar-check text-base"></i>
              <span>Book Your Shoot</span>
            </button>

            <Link
              href="/gallery"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-widest hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Explore Portfolio</span>
              <i className="fa-solid fa-arrow-right text-xs text-amber-400"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-6">
        <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl shadow-black/80">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <i className={`${stat.icon} text-amber-400 text-2xl mb-2`}></i>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
                {stat.number}
              </span>
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED GALLERY SHOWCASE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
              <i className="fa-solid fa-camera"></i>
              <span>Visual Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Featured Works & Stories
            </h2>
          </div>

          {/* Category Filter Tabs */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#121218] transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Card Metadata */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                <span className="inline-block self-start px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1">
                  <i className="fa-solid fa-location-dot text-amber-400"></i>
                  {item.location}
                </p>
              </div>

              {/* Zoom Icon overlay */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-expand text-amber-400 text-sm"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 border border-amber-500/30 text-amber-400 font-bold rounded-full text-xs uppercase tracking-widest hover:bg-amber-500/10 hover:border-amber-500/60 transition-all"
          >
            <span>View Full Portfolio Gallery</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 px-6 md:px-12 bg-[#0c0c12] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              The ABS Digital Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Why Couples & Clients Trust Us
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              We fuse technical perfection with artistic passion to ensure your memories are captured with warmth, elegance, and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {whyChooseUs.map((feature, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:bg-gold-gradient group-hover:text-black transition-colors">
                  <i className={`${feature.icon} text-amber-400 text-2xl group-hover:text-black transition-colors`}></i>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STEP PROCESS TIMELINE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-left">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Seamless & Stress-Free
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Our 4-Step Shoot Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-[#12121a] p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-4xl font-extrabold text-amber-400/30">
                  {step.step}
                </span>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 bg-[#0b0b10] border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Client Words
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-12">
            Stories of Satisfaction
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center space-x-1 text-amber-400 text-sm">
                  {[...Array(t.stars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <span className="text-xs text-amber-400">{t.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-left">
        <div className="text-center mb-14">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-semibold text-white flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
              >
                <span>{faq.q}</span>
                <i
                  className={`fa-solid fa-chevron-down text-xs text-amber-400 transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
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
                  {lightboxImage.category}
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
                  handleBookCategory(title);
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
  );
}

export default Content;
