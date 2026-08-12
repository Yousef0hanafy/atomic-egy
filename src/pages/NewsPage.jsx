import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Tag, FileText, CheckCircle2 } from 'lucide-react';

export const NewsPage = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  return (
    <div className="news-page">
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
              <article key={idx} className="news-entry-card">
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

      <style>{`
        .page-header-banner {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          padding: 3.5rem 0;
          border-bottom: 3px solid var(--color-amber);
        }

        .page-header-banner h1 {
          color: #ffffff;
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }

        .category-filter-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .filter-pill {
          background-color: var(--color-surface-alt);
          border: 1px solid var(--color-border);
          color: var(--color-navy);
          padding: 0.5rem 1.1rem;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-family: inherit;
        }

        .filter-pill:hover {
          border-color: var(--color-teal);
          color: var(--color-teal);
        }

        .filter-pill.active {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          border-color: var(--color-navy-dark);
        }

        .news-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .news-entry-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 1.5rem;
          align-items: flex-start;
          transition: border-color var(--transition-fast);
        }

        .news-entry-card:hover {
          border-color: var(--color-teal);
        }

        .news-entry-sidebar {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .entry-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .news-entry-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-navy-dark);
          line-height: 1.4;
        }

        .news-entry-content p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .entry-source-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--color-teal-dark);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .news-entry-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
