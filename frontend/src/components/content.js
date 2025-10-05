import React from "react";
import image from "../assets/image.jpg";
// import { Link } from "react-router-dom";

function Content({ showForm, setShowForm }) {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Hero Content */}
      <div className={`absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white transition ${showForm ? "blur-sm" : ""}`}>
        <p className="uppercase text-sm md:text-xl font-bold tracking-widest">
          Welcome to Daksh Photography
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">
          We are a digital photography house
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300 font-semibold">
        Capturing your moments with creativity, clarity, and heart — one frame at a time.
        </p>
        <div className="mt-6 space-x-4">
        <button onClick={()=>{setShowForm(true)}} className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get in touch
          </button>
          
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
            Read More
          </button>

          <a href="https://github.com/ramanchauhan13/test/releases/download/test/videoplayback.mp4" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
            Download Video
          </a>
           
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white text-center">Contact Us</h2>
            <form>
              <label className="block text-gray-400 mb-2">Full Name</label>
              <input type="text" className="w-full border border-gray-700 p-2 mb-4 bg-gray-800 text-white rounded" placeholder="Full name"/>

              <label className="block text-gray-400 mb-2">Email Address</label>
              <input type="email" className="w-full border border-gray-700 p-2 mb-4 bg-gray-800 text-white rounded" placeholder="Email address"/>

              <label className="block text-gray-400 mb-2">Subject</label>
              <input type="text" className="w-full border border-gray-700 p-2 mb-4 bg-gray-800 text-white rounded" placeholder="Subject"/>

              <label className="block text-gray-400 mb-2">Message</label>
              <textarea className="w-full border border-gray-700 p-2 mb-4 bg-gray-800 text-white rounded" placeholder="Write your message"></textarea>

              <button type="submit" className="w-full bg-white text-black py-2 rounded-md font-bold hover:bg-gray-200">
                Submit message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
