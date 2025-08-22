import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SalesforceDevelopmentExpertise from './pages/salesforce-development-expertise';
import PortfolioClientSuccessStories from './pages/portfolio-client-success-stories';
import ContactConsultationBooking from './pages/contact-consultation-booking';
import AboutProfessionalStory from './pages/about-professional-story';
import MarketingCloudSpecialization from './pages/marketing-cloud-specialization';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutProfessionalStory />} />
        <Route path="/salesforce-development-expertise" element={<SalesforceDevelopmentExpertise />} />
        <Route path="/portfolio-client-success-stories" element={<PortfolioClientSuccessStories />} />
        <Route path="/contact-consultation-booking" element={<ContactConsultationBooking />} />
        <Route path="/about-professional-story" element={<AboutProfessionalStory />} />
        <Route path="/marketing-cloud-specialization" element={<MarketingCloudSpecialization />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
