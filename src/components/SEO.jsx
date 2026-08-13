import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export const SEO = ({ title, description, path = '' }) => {
  const { lang, t } = useLanguage();
  const siteUrl = 'https://eaea.gov.eg'; // Fallback base URL for canonicals
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = title ? `${title} | ${t.siteName}` : t.siteName;

  return (
    <Helmet>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description || t.home.heroSubtitle} />
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || t.home.heroSubtitle} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || t.home.heroSubtitle} />
    </Helmet>
  );
};
