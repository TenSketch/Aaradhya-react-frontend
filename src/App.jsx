import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SPBMemorial from './pages/SPBMemorial/SPBMemorial';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/memorial" element={<SPBMemorial />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
