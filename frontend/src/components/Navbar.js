import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setShowForm }) => {
  const location = useLocation();

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex font-semibold uppercase justify-between items-center p-6 z-20">
        <Link to="/"><h1 className="text-white text-2xl font-bold">ABS DIGITAL</h1></Link>
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        </ul>
        {location.pathname === "/" && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
          >
            Contact Us
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
