import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export const Header = () => {
  const { lang, toggleLanguage, t, currentRoute, navigate } = useLanguage();
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
              <span className="brand-subtitle">EAEA</span>
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
              onClick={toggleLanguage} 
              className="lang-switcher-mobile"
              aria-label="Switch Language"
            >
              <Globe size={16} />
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
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
              onClick={() => handleNavClick('contact')}
              className="btn btn-amber mobile-cta-btn"
            >
              <PhoneCall size={18} />
              <span>{t.cta.contactUs}</span>
            </button>
          </nav>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #ffffff;
          box-shadow: 0 1px 0 rgba(15, 23, 42, 0.05);
        }

        .lang-switcher {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          padding: 0.4rem 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: color var(--transition-fast);
          font-family: inherit;
        }

        .lang-switcher:hover {
          color: var(--color-navy-dark);
        }

        .main-header {
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .main-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          cursor: pointer;
          user-select: none;
        }

        .brand-logo {
          height: 56px;
          width: auto;
          object-fit: contain;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .brand-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.2;
        }

        .brand-subtitle {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-muted);
          line-height: 1.2;
          margin-top: 0.2rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          background: transparent;
          border: none;
          padding: 0.5rem 0.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: color var(--transition-fast);
          font-family: inherit;
        }

        .nav-link:hover {
          color: var(--color-navy-dark);
        }

        .nav-link.active {
          color: var(--color-teal-dark);
          font-weight: 700;
        }

        .header-cta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .btn-cta {
          padding: 0.45rem 1.15rem;
          font-size: 0.88rem;
          border-color: var(--color-border);
          color: var(--color-navy-dark);
        }
        
        .btn-cta:hover {
          border-color: var(--color-navy-dark);
          background-color: var(--color-navy-dark);
          color: #ffffff;
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 0.5rem;
        }

        .lang-switcher-mobile {
          background: transparent;
          border: none;
          color: var(--color-navy-dark);
          padding: 0.4rem;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: inherit;
        }

        .mobile-trigger {
          display: none;
          background: transparent;
          border: none;
          color: var(--color-navy-dark);
          cursor: pointer;
          padding: 0.4rem;
        }

        .mobile-drawer {
          background-color: #ffffff;
          border-bottom: 2px solid var(--color-navy);
          padding: 1.25rem 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-link {
          background: transparent;
          border: none;
          text-align: start;
          padding: 0.75rem 1rem;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--color-navy-dark);
          border-radius: var(--radius-sm);
          font-family: inherit;
          cursor: pointer;
        }

        .mobile-nav-link.active {
          background-color: var(--color-teal-light);
          color: var(--color-teal-dark);
          font-weight: 700;
        }

        .mobile-cta-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .header-cta {
            display: none;
          }
          .mobile-trigger, .mobile-actions {
            display: flex;
          }
          .brand-title {
            font-size: 1rem;
          }
          .brand-logo {
            height: 44px;
          }
        }
      `}</style>
    </header>
  );
};
