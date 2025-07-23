import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SPBMemorial from './pages/SPBMemorial/SPBMemorial';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Donate from './pages/Donate/Donate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/memorial" element={<SPBMemorial />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
