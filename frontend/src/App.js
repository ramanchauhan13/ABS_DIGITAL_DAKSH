import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/content';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import FloatingCTA from './components/FloatingCTA';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Persistent Navigation Header */}
      <Navbar setShowForm={setShowForm} setSelectedService={setSelectedService} />

      {/* Main Page Router */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Content setShowForm={setShowForm} setSelectedService={setSelectedService} />}
          />
          <Route
            path="/services"
            element={<Services setShowForm={setShowForm} setSelectedService={setSelectedService} />}
          />
          <Route
            path="/gallery"
            element={<Gallery setShowForm={setShowForm} setSelectedService={setSelectedService} />}
          />
          <Route
            path="/about"
            element={<About setShowForm={setShowForm} />}
          />
        </Routes>
      </main>

      {/* Interactive Contact & Booking Modal */}
      <ContactModal
        showForm={showForm}
        setShowForm={setShowForm}
        selectedService={selectedService}
      />

      {/* Floating Action Buttons */}
      <FloatingCTA setShowForm={setShowForm} />

      {/* Persistent Footer */}
      <Footer setShowForm={setShowForm} />
    </div>
  );
}

export default App;
