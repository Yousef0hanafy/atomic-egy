import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Activity, 
  Radio, 
  FileCheck2, 
  ShieldAlert, 
  Atom, 
  FlaskConical, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  PhoneCall,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const ServicesPage = () => {
  const { lang, t, navigate, activeItem } = useLanguage();
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

  const serviceImages = {
    'medical-isotopes': '/images/orgainization/retical.jpg',
    'industrial-irradiation': '/images/orgainization/Visit_to_the_Medical_Isotope_Facility.jpg',
    'customs-screening': '/images/orgainization/NCNSRC.png',
    'waste-management': '/images/orgainization/HLWMC.png',
    'dosimetry-calibration': '/images/orgainization/Visit_to_the_Research_Reactor.jpg',
    'analytical-services': '/images/orgainization/nutural_lab.jpg'
  };

  // If a specific service item is selected, render the 6-Question Detail View
  if (activeItem) {
    const service = t.services.items.find(s => s.id === activeItem) || t.services.items[0];
    const IconComp = serviceIcons[service.id] || Atom;
    const heroImg = serviceImages[service.id] || '/images/orgainization/retical.jpg';

    return (
      <div className="service-detail-page">
        {/* Detail Hero Header */}
        <section className="detail-header-banner">
          <div className="container">
            <button onClick={() => navigate('services')} className="back-btn mb-3">
              <ChevronIcon size={16} />
              <span>{lang === 'ar' ? 'العودة لقائمة كافة الخدمات' : 'Back to All Services'}</span>
            </button>

            <div className="detail-title-flex">
              <div className="service-icon-lg">
                <IconComp size={32} />
              </div>
              <div>
                <span className="badge badge-amber mb-1">{service.accreditation.split(' ')[0]}</span>
                <h1>{service.title}</h1>
                <p className="lead-subtitle">{service.shortDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6-Question Structured Sequence */}
        <section className="section-padding">
          <div className="container">
            <div className="detail-layout-grid">
              <div className="detail-main-content">
                {/* Q1: Target Audience */}
                <div className="q-block">
                  <h3 className="q-title">
                    <CheckCircle2 size={20} className="text-teal" />
                    <span>{lang === 'ar' ? '1. لمن تقدم هذه الخدمة؟ (الفئات المستهدفة)' : '1. Who is this service for?'}</span>
                  </h3>
                  <div className="q-card highlight-card">
                    <p>{service.forWho}</p>
                  </div>
                </div>

                {/* Q2: What EAEA Provides */}
                <div className="q-block">
                  <h3 className="q-title">
                    <CheckCircle2 size={20} className="text-teal" />
                    <span>{lang === 'ar' ? '2. ما الذي تقدمه هيئة الطاقة الذرية؟' : '2. What does EAEA provide?'}</span>
                  </h3>
                  <div className="q-card">
                    <p>{service.provides}</p>
                  </div>
                </div>

                {/* Q3: Credibility & Accreditations */}
                <div className="q-block">
                  <h3 className="q-title">
                    <ShieldCheck size={20} className="text-amber" />
                    <span>{lang === 'ar' ? '3. لماذا تثق في هذه الخدمة؟ (الاعتماد والجودة)' : '3. Why trust this capability?'}</span>
                  </h3>
                  <div className="q-card">
                    <div className="accreditation-item mb-2">
                      <strong>{lang === 'ar' ? 'شهادات الاعتماد والجودة:' : 'Certifications & Accreditations:'}</strong> {service.accreditation}
                    </div>
                    <div className="facility-cross-link">
                      <Building size={16} className="text-teal" />
                      <span>{lang === 'ar' ? 'المنشأة المجهزة:' : 'Operating Facility:'}</span>
                      <button 
                        onClick={() => navigate('capabilities', service.facilityId)} 
                        className="btn-link"
                      >
                        {service.facilityRef}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Q4: Context & Mandate */}
                <div className="q-block">
                  <h3 className="q-title">
                    <CheckCircle2 size={20} className="text-teal" />
                    <span>{lang === 'ar' ? '4. السند القانوني والسيادي للخدمة' : '4. Legal mandate & operational context'}</span>
                  </h3>
                  <div className="q-card">
                    <p>{service.mandate}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Image & Contact CTA */}
              <div className="detail-sidebar">
                <div className="sidebar-img-card">
                  <img src={heroImg} alt={service.title} className="sidebar-img" />
                  <div className="sidebar-caption">{service.facilityRef}</div>
                </div>

                <div className="sidebar-contact-card">
                  <h4>{lang === 'ar' ? 'الخطوة التالية (طلب الخدمة)' : 'Next Step (Service Inquiry)'}</h4>
                  <p className="text-muted mb-3">{lang === 'ar' ? 'التواصل المباشر مع القسم المختص للتعاقد أو طلب الفحص الإشعاعي.' : 'Direct contact with the department for procurement or assays.'}</p>
                  <button onClick={() => navigate('contact')} className="btn btn-amber w-100">
                    <PhoneCall size={16} />
                    <span>{t.cta.contactUs}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .detail-header-banner {
            background-color: var(--color-navy-dark);
            color: #ffffff;
            padding: 3rem 0;
            border-bottom: 3px solid var(--color-amber);
          }

          .back-btn {
            background: transparent;
            border: none;
            color: var(--color-text-on-dark-muted);
            font-size: 0.88rem;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-family: inherit;
          }

          .back-btn:hover {
            color: var(--color-amber);
          }

          .detail-title-flex {
            display: flex;
            align-items: flex-start;
            gap: 1.25rem;
          }

          .service-icon-lg {
            width: 60px;
            height: 60px;
            border-radius: var(--radius-md);
            background-color: var(--color-teal-light);
            color: var(--color-teal-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .detail-title-flex h1 {
            color: #ffffff;
            font-size: 2rem;
            margin-bottom: 0.4rem;
          }

          .detail-layout-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
          }

          .q-block {
            margin-bottom: 2rem;
          }

          .q-title {
            font-size: 1.2rem;
            color: var(--color-navy-dark);
            display: flex;
            align-items: center;
            gap: 0.6rem;
            margin-bottom: 0.75rem;
          }

          .q-card {
            background: #ffffff;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            font-size: 1rem;
            line-height: 1.7;
          }

          .highlight-card {
            background-color: var(--color-surface-alt);
            border-right: 4px solid var(--color-teal);
          }

          [dir="ltr"] .highlight-card {
            border-right: none;
            border-left: 4px solid var(--color-teal);
          }

          .facility-cross-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.75rem;
            padding-top: 0.75rem;
            border-top: 1px solid var(--color-border-subtle);
            font-size: 0.9rem;
          }

          .btn-link {
            background: transparent;
            border: none;
            color: var(--color-teal);
            font-weight: 600;
            cursor: pointer;
            text-decoration: underline;
            font-family: inherit;
          }

          .sidebar-img-card {
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid var(--color-border);
            margin-bottom: 1.5rem;
          }

          .sidebar-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
          }

          .sidebar-caption {
            background-color: var(--color-navy);
            color: var(--color-text-on-dark-muted);
            padding: 0.5rem;
            font-size: 0.8rem;
            text-align: center;
          }

          .sidebar-contact-card {
            background-color: var(--color-surface-alt);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 1.5rem;
          }

          .sidebar-contact-card h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          .w-100 { width: 100%; }

          @media (max-width: 900px) {
            .detail-layout-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  // All Services List View
  return (
    <div className="services-page">
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-amber mb-2">{lang === 'ar' ? 'الخدمات السيادية والتجارية' : 'Sovereign & Commercial Services'}</span>
          <h1>{t.services.title}</h1>
          <p className="lead-subtitle">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="services-list-grid">
            {t.services.items.map((svc) => {
              const IconComp = serviceIcons[svc.id] || Atom;
              const cardImg = serviceImages[svc.id];
              return (
                <div key={svc.id} className="service-item-card" onClick={() => navigate('services', svc.id)}>
                  <div className="card-media">
                    <img src={cardImg} alt={svc.title} className="card-img" />
                    <div className="card-badge">
                      <span className="badge badge-amber">{svc.accreditation.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="icon-row">
                      <IconComp size={24} className="text-teal" />
                      <span className="for-who-tag">{svc.forWho.split('،')[0]}</span>
                    </div>
                    <h3>{svc.title}</h3>
                    <p>{svc.shortDesc}</p>

                    <div className="card-action-bar">
                      <span className="action-text">{lang === 'ar' ? 'عرض تفاصيل الخدمة وقنوات التواصل' : 'View Details & Contact'}</span>
                      <ChevronIcon size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
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

        .lead-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-on-dark-muted);
        }

        .services-list-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-item-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
        }

        .service-item-card:hover {
          border-color: var(--color-teal);
        }

        .card-media {
          position: relative;
          height: 180px;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        [dir="ltr"] .card-badge {
          right: auto;
          left: 1rem;
        }

        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .icon-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .for-who-tag {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .service-item-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-navy-dark);
        }

        .service-item-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--color-teal);
          font-weight: 600;
          font-size: 0.88rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        @media (max-width: 990px) {
          .services-list-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .services-list-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
