'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

export default function Providers({ children }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Persistent Navigation Header */}
      <Navbar setShowForm={setShowForm} setSelectedService={setSelectedService} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {React.cloneElement(children, { setShowForm, setSelectedService })}
      </main>

      {/* Booking & Contact Modal */}
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
