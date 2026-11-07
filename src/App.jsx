import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderPage = () => {
    switch (activePage) {
      case 'services':
        return <ServicesPage onOpenModal={openModal} />;
      case 'projects':
        return <ProjectsPage onOpenModal={openModal} />;
      case 'about':
        return <AboutPage onOpenModal={openModal} />;
      case 'contact':
        return <ContactPage onOpenModal={openModal} />;
      case 'home':
      default:
        return <HomePage onOpenModal={openModal} />;
    }
  };

  return (
    <div className="app-container">
      {/* Dynamic Header & Floating Navigation Pill */}
      <Navbar
        onOpenModal={openModal}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Dynamic Active Page */}
      {renderPage()}

      {/* Global 4-Column Footer */}
      <Footer onOpenModal={openModal} setActivePage={setActivePage} />

      {/* Global Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

