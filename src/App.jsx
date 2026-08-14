import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ResearchTrainingPage } from './pages/ResearchTrainingPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

// Simple 404 Component
const NotFoundPage = () => (
  <div style={{ padding: '5rem 0', textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1 style={{ fontSize: '4rem', color: 'var(--color-navy-dark)', marginBottom: '1rem' }}>404</h1>
    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Page not found / الصفحة غير موجودة</p>
    <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
      Return Home / العودة للرئيسية
    </Link>
  </div>
);

const AppContent = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="main-content">
        <ErrorBoundary>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServicesPage />} />
          
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/capabilities/:id" element={<CapabilitiesPage />} />
          
          <Route path="/research" element={<ResearchTrainingPage />} />
          
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
