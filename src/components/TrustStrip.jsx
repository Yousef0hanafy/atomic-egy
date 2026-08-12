import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustStrip = () => {
  const { lang, t } = useLanguage();

  const trustFacts = [
    {
      title: lang === 'ar' ? 'الاعتماد الدولي ISO/IEC 17025:2017' : 'ISO/IEC 17025:2017 Accredited',
      desc: t.home.trustFact1,
      badge: 'EGAC 2024'
    },
    {
      title: lang === 'ar' ? 'شهادة الجودة القومية ISO 9001:2015' : 'ISO 9001:2015 Quality Certified',
      desc: t.home.trustFact2,
      badge: 'RPF / MOH'
    },
    {
      title: lang === 'ar' ? 'عضوية شبكة SSDL العالمية' : 'IAEA/WHO SSDL Network Member',
      desc: t.home.trustFact3,
      badge: 'IAEA / WHO'
    }
  ];

  const partners = [
    { name: 'IAEA', label: 'الوكالة الدولية للطاقة الذرية', file: '/images/partners/IAEA.png' },
    { name: 'INVAP', label: 'إنفاب الأرجنتينية', file: '/images/partners/INVAP.webp' },
    { name: 'ROSATOM', label: 'مؤسسة روساتوم الروسية', file: '/images/partners/ROSTOM.png' },
    { name: 'AAEA', label: 'الهيئة العربية للطاقة الذرية', file: '/images/partners/AAEA.png' },
    { name: 'AFRA', label: 'اتفاقية أفرا الإقليمية', file: '/images/partners/AFRA.png' },
    { name: 'KAERA', label: 'معهد أبحاث الطاقة الذرية الكوري', file: '/images/partners/KAERA.png' }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="inline-badge">
            <ShieldCheck size={16} className="text-amber" />
            <span>{lang === 'ar' ? 'مصداقية واعتماد علمي' : 'Sovereignty & International Compliance'}</span>
          </div>
          <h2>{t.home.trustTitle}</h2>
          <p className="text-muted section-desc">{t.home.trustSubtitle}</p>
        </div>

        {/* Accreditations Grid */}
        <div className="accreditations-grid">
          {trustFacts.map((fact, index) => (
            <div key={index} className="accreditation-card">
              <div className="card-top">
                <Award size={28} className="card-icon" />
                <span className="badge badge-amber">{fact.badge}</span>
              </div>
              <h3>{fact.title}</h3>
              <p>{fact.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners Strip */}
        <div className="partners-box">
          <h4 className="partners-title">
            <CheckCircle2 size={18} className="text-teal" />
            <span>{lang === 'ar' ? 'شركاء التعاون الفني والمشروعات الهندسيـة (IAEA / INVAP / ROSATOM)' : 'Technical Cooperation & Engineering Partners'}</span>
          </h4>
          <div className="partners-grid">
            {partners.map((p, idx) => (
              <div key={idx} className="partner-item">
                {p.isTextOnly ? (
                  <div className="partner-text-badge">{p.name}</div>
                ) : (
                  <img src={p.file} alt={p.name} className="partner-logo" />
                )}
                {!p.isTextOnly && <span className="partner-name">{p.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trust-section {
          background-color: #ffffff;
          padding: 4.5rem 0;
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .inline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.85rem;
          background-color: var(--color-amber-light);
          color: var(--color-amber-dark);
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 50px;
          margin-bottom: 0.85rem;
        }

        .section-desc {
          max-width: 680px;
          margin: 0 auto 3rem auto;
        }

        .accreditations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .accreditation-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          transition: border-color var(--transition-fast);
        }

        .accreditation-card:hover {
          border-color: var(--color-teal);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-icon {
          color: var(--color-teal);
        }

        .accreditation-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          color: var(--color-navy-dark);
        }

        .accreditation-card p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .partners-box {
          background-color: var(--color-surface-alt);
          border-radius: var(--radius-lg);
          padding: 2rem;
          border: 1px solid var(--color-border);
        }

        .partners-title {
          font-size: 1rem;
          color: var(--color-navy-dark);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .text-teal {
          color: var(--color-teal);
        }

        .partners-grid {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .partner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          min-width: 130px;
          transition: transform var(--transition-fast);
        }

        .partner-item:hover {
          transform: scale(1.04);
        }

        .partner-logo {
          height: 44px;
          width: auto;
          object-fit: contain;
        }

        .partner-text-badge {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--color-navy-dark);
          letter-spacing: 0.5px;
        }

        .partner-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-navy);
          font-family: var(--font-mono);
        }

        @media (max-width: 900px) {
          .accreditations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
