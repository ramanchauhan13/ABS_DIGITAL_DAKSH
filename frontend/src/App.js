import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content from './components/content';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Navbar setShowForm={setShowForm} />
      <Routes>  
      <Route path="" element={<Content showForm={showForm} setShowForm={setShowForm} />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
