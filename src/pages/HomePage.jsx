import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
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
      <SEO 
        title="" 
        description={t.home.heroSubtitle} 
        path="/" 
      />
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

      
    </div>
  );
};
