import React from 'react';
import image from "../assets/serviceImg.jpg";

const About = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          About Me
        </h1>
        <p className="text-gray-200 text-md md:text-lg max-w-2xl drop-shadow-md">
          I’m a passionate photographer with a deep love for capturing moments that tell stories.
          Through my lens, I freeze emotions, light, and beauty in time. Whether it’s a candid street
          shot or a planned portrait, I strive to bring out the soul in every frame.
        </p>
      </div>
    </div>
  );
};

export default About;
