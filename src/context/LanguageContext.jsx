import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('eaea_lang') || 'ar';
  });

  const [currentRoute, setCurrentRoute] = useState('home');
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (lang === 'ar') {
      root.setAttribute('dir', 'rtl');
      root.setAttribute('lang', 'ar');
    } else {
      root.setAttribute('dir', 'ltr');
      root.setAttribute('lang', 'en');
    }
    localStorage.setItem('eaea_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const navigate = (route, itemId = null) => {
    setCurrentRoute(route);
    setActiveItem(itemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, currentRoute, navigate, activeItem }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
