import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
  const { lang, t, navigate } = useLanguage();
  const { id: activeItem } = useParams();
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
        <SEO 
          title={service.title} 
          description={service.shortDesc} 
          path={`/services/${service.id}`} 
        />
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

        
      </div>
    );
  }

  // All Services List View
  return (
    <div className="services-page">
      <SEO 
        title={t.services.title} 
        description={t.services.subtitle} 
        path="/services" 
      />
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

      
    </div>
  );
};
