import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


import HealthcareTechnology from './pages/HealthcareTechnology';
import EducationalPlatforms from './pages/EducationalPlatforms';
import MarketingTechnology from './pages/MarketingTechnology';
import CloudArchitecture from './pages/CloudArchitecture';
import DataAnalytics from './pages/DataAnalytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/healthcare-technology" element={<HealthcareTechnology />} />
        <Route path="/educational-platforms" element={<EducationalPlatforms />} />
        <Route path="/marketing-technology" element={<MarketingTechnology />} />
        <Route path="/cloud-architecture" element={<CloudArchitecture />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
      </Routes>
    </>
  );
}

export default App;
