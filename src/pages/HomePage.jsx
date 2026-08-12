import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrustStrip } from '../components/TrustStrip';
import { 
  Atom, 
  ShieldAlert, 
  FileCheck2, 
  Radio, 
  Activity, 
  FlaskConical, 
  ArrowLeft, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Building2
} from 'lucide-react';

export const HomePage = () => {
  const { lang, t, navigate } = useLanguage();
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const serviceIcons = {
    'medical-isotopes': Activity,
    'industrial-irradiation': Radio,
    'customs-screening': FileCheck2,
    'waste-management': ShieldAlert,
    'dosimetry-calibration': Atom,
    'analytical-services': FlaskConical
  };

  return (
    <div className="home-page">
      {/* Moment 1: Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <img 
          src="/images/orgainization/Nuclear_Core.png" 
          alt="ETRR-2 Reactor Pool Core Blue Glow" 
          className="hero-bg-image"
        />
        
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Building2 size={15} />
              <span>{t.siteTagline}</span>
            </div>
            
            <h1 className="hero-title">{t.home.heroTitle}</h1>
            <p className="hero-subtitle">{t.home.heroSubtitle}</p>
            
            <div className="hero-actions">
              <button 
                onClick={() => navigate('services')} 
                className="btn btn-amber btn-lg"
              >
                <span>{t.cta.viewServices}</span>
                <ArrowIcon size={18} />
              </button>
              <button 
                onClick={() => navigate('capabilities')} 
                className="btn btn-outline-light btn-lg"
              >
                <span>{t.cta.viewCapabilities}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Moment 2: Services Grid */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal mb-2">{lang === 'ar' ? 'الخدمات الوطنية' : 'National Value'}</span>
            <h2>{t.home.servicesTitle}</h2>
            <p className="text-muted section-desc">{t.home.servicesSubtitle}</p>
          </div>

          <div className="services-grid">
            {t.services.items.map((svc) => {
              const IconComp = serviceIcons[svc.id] || Atom;
              return (
                <div key={svc.id} className="service-card" onClick={() => navigate('services', svc.id)}>
                  <div className="service-card-header">
                    <div className="service-icon-box">
                      <IconComp size={24} className="service-icon" />
                    </div>
                    <span className="badge badge-amber">{svc.accreditation.split(' ')[0]}</span>
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.shortDesc}</p>
                  <div className="service-card-footer">
                    <span className="read-more">{t.cta.learnMore}</span>
                    <ChevronIcon size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moment 3: Capability Signal (Dark Navy Section) */}
      <section className="capability-signal-section">
        <div className="container">
          <div className="capability-signal-grid">
            <div className="capability-signal-text">
              <span className="badge badge-amber mb-3">{t.home.capabilityBadge}</span>
              <h2>{t.home.capabilityTitle}</h2>
              <p className="lead-text">{t.home.capabilityDesc}</p>

              <div className="signal-facts-list">
                <div className="signal-fact-item">
                  <span className="fact-bullet"></span>
                  <span>{t.home.capabilityFact1}</span>
                </div>
                <div className="signal-fact-item">
                  <span className="fact-bullet"></span>
                  <span>{t.home.capabilityFact2}</span>
                </div>
                <div className="signal-fact-item">
                  <span className="fact-bullet"></span>
                  <span>{t.home.capabilityFact3}</span>
                </div>
              </div>

              <div className="mt-4">
                <button 
                  onClick={() => navigate('capabilities', 'reactors')} 
                  className="btn btn-primary"
                >
                  <span>{t.cta.downloadSpecs}</span>
                  <ArrowIcon size={16} />
                </button>
              </div>
            </div>

            <div className="capability-signal-media">
              <img 
                src="/images/orgainization/Nuclear_Surface.jpg" 
                alt="ETRR-2 Reactor Hall Floor" 
                className="signal-img"
              />
              <div className="img-caption">
                {lang === 'ar' ? 'صالة مفاعل ETRR-2 بأنشاص — إطلاق أول شعاع نيتروني 1997' : 'ETRR-2 Reactor Hall at Anshas — Criticality 1997'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moment 4: Trust Grounding */}
      <TrustStrip />

      {/* Moment 5: Research & Training Snapshot */}
      <section className="section-padding research-snapshot-section">
        <div className="container">
          <div className="research-box">
            <div className="research-text-col">
              <span className="badge badge-teal mb-2">{lang === 'ar' ? 'الإنتاج العلمي' : 'Scientific R&D'}</span>
              <h2>{t.home.researchTitle}</h2>
              <p className="text-muted mb-4">{t.home.researchDesc}</p>

              <div className="journal-card">
                <h4>{t.home.journalName}</h4>
                <p className="text-muted">{t.home.journalDesc}</p>
                <a 
                  href="https://ajnsa.journals.ekb.eg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ekb-btn"
                >
                  <span>{lang === 'ar' ? 'زيارة المجلة على بنك المعرفة المصري' : 'Access AJNSA on EKB'}</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            <div className="research-media-col">
              <img 
                src="/images/orgainization/retical.jpg" 
                alt="Radiochemistry Manipulators at RPF" 
                className="research-img"
              />
              <div className="research-media-caption">
                {lang === 'ar' ? 'أخصائيو الهيئة أثناء العمل بالخلايا الساخنة بمصنع النظائر' : 'EAEA Specialists Working at Radiochemistry Hot Cells'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moment 6: Recent News */}
      <section className="section-padding news-section bg-alt">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <h2>{t.home.newsTitle}</h2>
              <p className="text-muted">{lang === 'ar' ? 'التوثيق المستمر لأهم الأحداث والفعاليات والاعتمادات' : 'Latest factual events, protocols, and international updates'}</p>
            </div>
            <button onClick={() => navigate('news')} className="btn btn-outline">
              <span>{t.cta.viewAllNews}</span>
              <ChevronIcon size={16} />
            </button>
          </div>

          <div className="news-cards-grid">
            {t.newsPage.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="news-card">
                <div className="news-meta">
                  <span className="news-date">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </span>
                  <span className="badge badge-amber">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moment 7: Contact CTA */}
      <section className="home-contact-cta">
        <div className="container text-center">
          <h2>{t.home.contactTitle}</h2>
          <p className="contact-cta-desc">{t.home.contactDesc}</p>
          <button onClick={() => navigate('contact')} className="btn btn-amber btn-lg">
            <span>{t.cta.contactUs}</span>
            <ArrowIcon size={18} />
          </button>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 540px;
          display: flex;
          align-items: center;
          background-color: var(--color-navy-dark);
          color: #ffffff;
          overflow: hidden;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.1) 100%);
          z-index: 2;
        }

        [dir="rtl"] .hero-bg-overlay {
          background: linear-gradient(270deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.1) 100%);
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
        }

        .hero-content {
          max-width: 700px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.75rem;
          background-color: rgba(217, 146, 46, 0.1);
          border: 1px solid var(--color-amber);
          border-radius: 2px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-amber);
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.25;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-on-dark-muted);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .btn-lg {
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
        }

        /* Services Grid */
        .services-section {
          background-color: var(--color-surface);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .service-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .service-card:hover {
          border-color: var(--color-teal);
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 2px;
          background-color: var(--color-teal-light);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--color-navy-dark);
        }

        .service-card p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .service-card-footer {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-teal);
          font-weight: 600;
          font-size: 0.85rem;
        }

        /* Capability Signal Dark Section */
        .capability-signal-section {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          padding: 4rem 0;
          border-top: 3px solid var(--color-amber);
        }

        .capability-signal-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .capability-signal-text h2 {
          color: #ffffff;
          font-size: 1.85rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .lead-text {
          font-size: 1.05rem;
          color: var(--color-text-on-dark-muted);
          margin-bottom: 1.5rem;
          line-height: 1.65;
        }

        .signal-facts-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .signal-fact-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--color-text-on-dark);
        }

        .fact-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-amber);
        }

        .capability-signal-media {
          position: relative;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .signal-img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          display: block;
        }

        .img-caption {
          position: absolute;
          bottom: 0;
          inset-x: 0;
          background: rgba(15, 23, 42, 0.9);
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
          color: var(--color-text-on-dark-muted);
          text-align: center;
        }

        /* Research Snapshot */
        .research-snapshot-section {
          background-color: #ffffff;
        }

        .research-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .journal-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          margin-top: 1.5rem;
        }

        .journal-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .ekb-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          color: var(--color-teal);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .research-media-col {
          position: relative;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .research-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }

        .research-media-caption {
          background-color: var(--color-navy);
          color: var(--color-text-on-dark-muted);
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
          text-align: center;
        }

        /* News Section */
        .bg-alt {
          background-color: var(--color-surface-alt);
        }

        .section-header-flex {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .news-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .news-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }

        .news-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .news-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-muted);
        }

        .news-card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.45;
          margin-bottom: 0.6rem;
          color: var(--color-navy-dark);
        }

        .news-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Home Contact CTA */
        .home-contact-cta {
          background-color: var(--color-navy);
          color: #ffffff;
          padding: 4rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .home-contact-cta h2 {
          color: #ffffff;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
        }

        .contact-cta-desc {
          max-width: 600px;
          margin: 0 auto 1.5rem auto;
          color: var(--color-text-on-dark-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        @media (max-width: 990px) {
          .services-grid, .news-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .capability-signal-grid, .research-box {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            align-items: stretch;
            min-height: auto;
          }
          .hero-bg-overlay {
            display: none;
          }
          .hero-bg-image {
            position: relative;
            height: auto;
            aspect-ratio: 16 / 9;
            inset: auto;
          }
          .hero-container {
            padding-top: 2rem;
            padding-bottom: 2.5rem;
          }
        }

        @media (max-width: 650px) {
          .services-grid, .news-cards-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 1.65rem;
          }
          .section-header-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
