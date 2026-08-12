import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ResearchTrainingPage } from './pages/ResearchTrainingPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

const AppContent = () => {
  const { currentRoute } = useLanguage();

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'capabilities':
        return <CapabilitiesPage />;
      case 'research':
        return <ResearchTrainingPage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-root">
      <Header />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
