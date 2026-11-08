import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import HvacWorksPage from './pages/HvacWorksPage';
import MepWorksPage from './pages/MepWorksPage';
import InteriorFitOutPage from './pages/InteriorFitOutPage';
import AmcWorksPage from './pages/AmcWorksPage';
import IndustriesPage from './pages/IndustriesPage';
import RetailIndustryPage from './pages/RetailIndustryPage';
import BanksIndustryPage from './pages/BanksIndustryPage';
import OfficesIndustryPage from './pages/OfficesIndustryPage';
import ShowroomsIndustryPage from './pages/ShowroomsIndustryPage';
import BanquetHallsIndustryPage from './pages/BanquetHallsIndustryPage';
import CommercialBuildingsPage from './pages/CommercialBuildingsPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const { currentPath } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderActiveRoute = () => {
    switch (currentPath) {
      case '/about-us':
      case '/about':
        return <AboutUsPage onOpenModal={openModal} />;

      case '/services':
        return <ServicesPage onOpenModal={openModal} />;

      // 4 Dedicated Services Pages
      case '/services/hvac-works':
        return <HvacWorksPage onOpenModal={openModal} />;

      case '/services/mep-works':
        return <MepWorksPage onOpenModal={openModal} />;

      case '/services/interior-fit-out-works':
        return <InteriorFitOutPage onOpenModal={openModal} />;

      case '/services/amc-works':
        return <AmcWorksPage onOpenModal={openModal} />;

      // Industries Landing Page
      case '/industries':
        return <IndustriesPage onOpenModal={openModal} />;

      // 6 Dedicated Industries Pages
      case '/industries/retail':
        return <RetailIndustryPage onOpenModal={openModal} />;

      case '/industries/banks':
        return <BanksIndustryPage onOpenModal={openModal} />;

      case '/industries/corporate-offices':
      case '/industries/cooperative-offices':
        return <OfficesIndustryPage onOpenModal={openModal} />;

      case '/industries/showrooms':
        return <ShowroomsIndustryPage onOpenModal={openModal} />;

      case '/industries/banquet-halls':
        return <BanquetHallsIndustryPage onOpenModal={openModal} />;

      case '/industries/commercial-buildings':
        return <CommercialBuildingsPage onOpenModal={openModal} />;

      case '/why-us':
      case '/why-choose-us':
        return <WhyUsPage onOpenModal={openModal} />;

      case '/contact-us':
      case '/contact':
        return <ContactPage onOpenModal={openModal} />;

      case '/':
      default:
        return <HomePage onOpenModal={openModal} />;
    }
  };

  return (
    <div className="app-container">
      {/* Precision CAD Site Header & Dropdown Navigation */}
      <Navbar onOpenModal={openModal} />

      {/* Dynamic Active Page Route */}
      {renderActiveRoute()}

      {/* Global Architectural Footer */}
      <Footer onOpenModal={openModal} />

      {/* Consultation Modal Dialog */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
