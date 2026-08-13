import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, Tag, FileText, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export const NewsPage = () => {
  const { lang, t, navigate } = useLanguage();
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isRtl = lang === 'ar';
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'جميع الأخبار والفعاليات' : 'All Updates' },
    { id: 'Accreditation', label: lang === 'ar' ? 'اعتماد دولي' : 'Accreditations' },
    { id: 'Partnership', label: lang === 'ar' ? 'بروتوكولات تعاون' : 'Partnerships' },
    { id: 'Healthcare Output', label: lang === 'ar' ? 'الإنتاج الطبي' : 'Production' },
    { id: 'IAEA Partnership', label: lang === 'ar' ? 'تعاون دولي' : 'IAEA Projects' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? t.newsPage.items
    : t.newsPage.items.filter(item => 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'Accreditation' && item.category === 'اعتماد دولي') ||
        (selectedCategory === 'Partnership' && item.category === 'بروتوكولات تعاون') ||
        (selectedCategory === 'Healthcare Output' && item.category === 'الإنتاج الطبي') ||
        (selectedCategory === 'IAEA Partnership' && item.category === 'تعاون دولي')
      );

  // Detail View
  if (id) {
    const item = t.newsPage.items.find(n => n.id === id) || t.newsPage.items[0];
    return (
      <div className="news-detail-page" style={{ padding: '4rem 0', minHeight: '60vh' }}>
        <SEO title={item.title} description={item.desc} path={`/news/${id}`} />
        <div className="container">
          <button onClick={() => navigate('news')} className="btn btn-outline mb-4">
            <ChevronIcon size={16} />
            <span>{lang === 'ar' ? 'العودة للأخبار' : 'Back to News'}</span>
          </button>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <span className="badge badge-amber">{item.category}</span>
              <span style={{ color: 'var(--color-text-muted)' }}>{item.date}</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-navy-dark)' }}>{item.title}</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>{item.desc}</p>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="news-page">
      <SEO title={t.nav.news} description={t.newsPage.subtitle} path="/news" />
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-amber mb-2">{lang === 'ar' ? 'التوثيق والسجل المؤرخ' : 'Official Archive'}</span>
          <h1>{t.newsPage.title}</h1>
          <p className="lead-subtitle">{t.newsPage.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* News Items List */}
          <div className="news-list">
            {filteredItems.map((item, idx) => (
              <article key={idx} className="news-entry-card" onClick={() => navigate('news', item.id)} style={{ cursor: 'pointer' }}>
                <div className="news-entry-sidebar">
                  <span className="entry-date">
                    <Calendar size={15} />
                    <span>{item.date}</span>
                  </span>
                  <span className="badge badge-amber">{item.category}</span>
                </div>

                <div className="news-entry-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  
                  <div className="entry-source-tag">
                    <CheckCircle2 size={14} className="text-teal" />
                    <span>{lang === 'ar' ? 'خبر رسمي مؤثق بالسجل الاعلامي للهيئة' : 'Factual record verified in official EAEA archives'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};
