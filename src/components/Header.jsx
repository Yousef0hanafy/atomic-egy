import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export const Header = () => {
  const { lang, toggleLanguage, t, navigate, location } = useLanguage();
  const currentRoute = location.pathname.split('/')[1] || 'home';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'capabilities', label: t.nav.capabilities },
    { id: 'research', label: t.nav.research },
    { id: 'news', label: t.nav.news }
  ];

  const handleNavClick = (id) => {
    navigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Main Header Bar */}
      <div className="main-header">
        <div className="container main-header-inner">
          {/* Logo & Identity */}
          <div className="brand-lockup" onClick={() => handleNavClick('home')}>
            <img 
              src="/images/EAEA_Logo.png" 
              alt={lang === 'ar' ? 'شعار هيئة الطاقة الذرية المصرية' : 'EAEA Official Logo'} 
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-title">{t.siteName}</span>
              <span className="brand-subtitle desktop-only">EAEA</span>
            </div>
          </div>

          {/* Desktop Navigation Tree */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${currentRoute === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="header-cta">
            <button 
              onClick={toggleLanguage} 
              className="lang-switcher"
              aria-label="Switch Language"
            >
              <Globe size={15} />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn btn-outline btn-cta"
            >
              <span>{t.cta.contactUs}</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="mobile-actions">
            <button 
              className="mobile-trigger" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${currentRoute === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
              className="btn btn-outline w-100 mb-2"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Globe size={18} />
              <span>{lang === 'ar' ? 'English (EN)' : 'عربي (AR)'}</span>
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="btn btn-amber mobile-cta-btn w-100"
            >
              <PhoneCall size={18} />
              <span>{t.cta.contactUs}</span>
            </button>
          </nav>
        </div>
      )}

      
    </header>
  );
};
