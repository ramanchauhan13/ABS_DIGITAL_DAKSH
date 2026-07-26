'use client';

import React, { useState, useEffect } from "react";


const ContactModal = ({ showForm, setShowForm, selectedService = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: selectedService || "Wedding Photoshoots",
    eventDate: "",
    budget: "Standard",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  if (!showForm) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate direct network send delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleClose = () => {
    setShowForm(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0f0f17] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 my-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-colors"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center text-3xl mb-4 animate-bounce">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Inquiry Received!
            </h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="text-amber-400 font-semibold">{formData.fullName}</span>! We have received your booking request for{" "}
              <span className="text-amber-400 font-semibold">{formData.service}</span>. Our team at ABS Digital Daksh will reach out to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-gold-gradient text-black font-bold rounded-full text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-left">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                <i className="fa-solid fa-camera"></i>
                <span>Get In Touch</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book Your Shoot
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Fill out the details below to check date availability and receive a custom portfolio quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors"
                  >
                    <option value="Wedding Photoshoots">Wedding Photoshoots</option>
                    <option value="Pre-Wedding Shoots">Pre-Wedding Shoots</option>
                    <option value="Events Photography">Events & Celebrations</option>
                    <option value="Maternity & Baby shoots">Maternity & Baby Shoots</option>
                    <option value="Product Photography">Product Photography</option>
                    <option value="Photo Albums & Prints">Photo Albums & Prints</option>
                    <option value="Drone Cinematography">Drone Cinematography</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Event Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Target Date / Month
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>

                {/* Package Tier */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Package Level
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors"
                  >
                    <option value="Essential">Essential Package</option>
                    <option value="Standard">Standard Package (Recommended)</option>
                    <option value="Premium Luxury">Premium Luxury VIP Package</option>
                    <option value="Custom Quote">Custom Requirements</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Tell Us About Your Event / Vision
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details such as location, number of guests, style preference, etc."
                  className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/80 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 bg-gold-gradient text-black font-bold rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                    Processing Inquiry...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane text-sm"></i>
                    Send Booking Inquiry
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
