import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image from "../assets/download.jpeg";
import serviceImg from "../assets/serviceImg.jpg";

const services = [
  {
    title: "Wedding Photoshoots ",
    image: image,
    description:
      "Detailed Photography services include events, portraits, and more.",
  },
  {
    title: "Pre-Wedding Shoots",
    image: image,
    description:
      "High-quality videography for weddings, promos, and storytelling.",
  },
  {
    title: "Events Photography",
    image: image,
    description: "Professional editing to enhance and restore images.",
  },
  {
    title: "Maternity & Baby shoots",
    image: image,
    description: "Custom graphics, logos, banners, and brand materials.",
  },
  {
    title: "Product Photography",
    image: image,
    description:
      "Seamless video/photo editing for social media and production.",
  },
  {
    title: "Photo Albums & Prints",
    image: image,
    description:
      "Seamless video/photo editing for social media and production.",
  },
];

function Services() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="bg-black relative text-white min-h-screen bg-center flex items-center py-10 px-6"
      style={{ backgroundImage: `url(${serviceImg})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <h2 className="text-3xl backdrop-blur-sm bg-black/60 font-semibold mb-2 -ml-2 px-2 rounded-xl inline">
          Our services{" "}
          <span className="border-b-2 border-white w-12 inline-block ml-2"></span>
        </h2>
        <p className="text-gray-400 mb-6">
          Explore our wide range of professional services designed to meet your
          creative needs.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, 
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative w-full h-64 cursor-pointer perspective`}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`transition-transform duration-700 transform-style-preserve-3d h-full w-full ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-white p-3 rounded-lg shadow-lg backface-hidden overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-20 gap-4 uppercase flex flex-col items-center justify-center">
                    <i className="fa-solid fa-camera text-2xl text-white"></i>
                    <h4 className="text-white text-lg font-bold text-center px-2">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-zinc-900 flex flex-col justify-center items-center p-10 rounded-lg shadow-lg backface-hidden transform rotate-y-180">
                    <h4 className="text-lg uppercase font-semibold mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Services;
