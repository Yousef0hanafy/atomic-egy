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

      
    </section>
  );
};
