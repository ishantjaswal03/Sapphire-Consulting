import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const HealthcareTechnology = lazy(() => import('./pages/HealthcareTechnology'));
const EducationalPlatforms = lazy(() => import('./pages/EducationalPlatforms'));
const MarketingTechnology = lazy(() => import('./pages/MarketingTechnology'));
const CloudArchitecture = lazy(() => import('./pages/CloudArchitecture'));
const DataAnalytics = lazy(() => import('./pages/DataAnalytics'));

import LiquidGlassDefinition from './components/LiquidGlassDefinition';
import BackToTop from './components/BackToTop';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <LiquidGlassDefinition />
      <BackToTop />
      <Suspense fallback={
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-[#61FFB1] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
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
      </Suspense>
    </>
  );
}

export default App;
