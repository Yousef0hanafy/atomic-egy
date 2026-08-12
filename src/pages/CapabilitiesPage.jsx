import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Info,
  SlidersHorizontal
} from 'lucide-react';

export const CapabilitiesPage = () => {
  const { lang, t, navigate, activeItem } = useLanguage();
  const [level3Open, setLevel3Open] = useState(false);
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const capabilityImages = {
    'reactors': {
      hero: '/images/orgainization/Nuclear_Surface.jpg',
      supporting: '/images/orgainization/Nuclear_Core.png',
      caption: 'صالة مفاعل ETRR-2 بأنشاص — 22 ميجاوات تحت ضمانات الوكالة الدولية'
    },
    'rpf': {
      hero: '/images/orgainization/retical.jpg',
      supporting: '/images/orgainization/Visit_to_the_Medical_Isotope_Facility.jpg',
      caption: 'الخلايا الساخنة المصفحة بمصنع إنتاج النظائر المشعة (RPF)'
    },
    'cyclotron': {
      hero: '/images/orgainization/Cyclotron.jpg',
      supporting: '/images/orgainization/Nuclear_Core.png',
      caption: 'معجل السيكلوترون MGC-20 بأنشاص'
    },
    'gamma-facilities': {
      hero: '/images/orgainization/Visit_to_the_Medical_Isotope_Facility.jpg',
      supporting: '/images/orgainization/EAEA_building.jpg',
      caption: 'وحدات التشعيع الجامي القومية (القاهرة والإسكندرية)'
    },
    'hlwmc': {
      hero: '/images/orgainization/HLWMC.png',
      supporting: '/images/orgainization/Anshas_building.png',
      caption: 'ممر الخلايا الساخنة بمركز إدارة النفايات المشعة (HLWMC)'
    },
    'specialized-labs': {
      hero: '/images/orgainization/NCNSRC.png',
      supporting: '/images/orgainization/nutural_lab.jpg',
      caption: 'المختبرات المرجعية المعتمدة دولياً ISO/IEC 17025:2017'
    }
  };

  // If a specific capability is selected, render Progressive Disclosure Detail View
  if (activeItem) {
    const item = t.capabilities.items.find(c => c.id === activeItem) || t.capabilities.items[0];
    const media = capabilityImages[item.id] || capabilityImages['reactors'];

    return (
      <div className="capability-detail-page">
        {/* Full-width Hero Banner Bleed (480px desktop / 280px mobile) */}
        <div className="bleed-hero">
          <img src={media.hero} alt={item.name} className="bleed-hero-img" />
          <div className="bleed-hero-overlay"></div>
          <div className="container bleed-hero-content">
            <button onClick={() => navigate('capabilities')} className="back-btn mb-2">
              <ChevronIcon size={16} />
              <span>{lang === 'ar' ? 'العودة لجميع المنشآت والإمكانيات' : 'Back to All Facilities'}</span>
            </button>
            <span className="badge badge-amber mb-2">{item.status}</span>
            <h1>{item.name}</h1>
            <p className="bleed-subtitle">
              <MapPin size={16} className="text-amber" />
              <span>{item.location} · {item.operatorCenter}</span>
            </p>
          </div>
        </div>

        {/* Level 1 & Level 2 Main Specs Container */}
        <section className="section-padding">
          <div className="container">
            <div className="cap-detail-grid">
              <div className="cap-main">
                {/* Level 1: General Understanding */}
                <div className="level-block level-1">
                  <span className="level-tag">{lang === 'ar' ? 'المستوى 1: ملخص المنشأة' : 'Level 1: General Overview'}</span>
                  <h3>{lang === 'ar' ? 'عن المنشأة وأهميتها القومية' : 'About the Facility'}</h3>
                  <p className="lead-desc">{item.shortDesc}</p>
                  <p>{item.details}</p>
                </div>

                {/* ETRR-1 Historic Dignity Subsection (Only for reactors) */}
                {item.id === 'reactors' && (
                  <div className="etrr1-dignity-box">
                    <div className="dignity-header">
                      <Info size={20} className="text-amber" />
                      <h4>{lang === 'ar' ? 'مفاعل الأبحاث الأول (ETRR-1) — محطة تاريخية' : 'First Research Reactor (ETRR-1) — Historical Milestone'}</h4>
                    </div>
                    <p>
                      {lang === 'ar' 
                        ? 'حقق مفاعل ETRR-1 أول بداية تشغيل (Criticality) في 8 فبراير 1961 بقدرة 2 ميجاوات، لتكون مصر أول دولة بالوطن العربي تشغل مفاعل أبحاث نووي. يمر المفاعل حالياً بمرحلة الإيقاف الممتد (Extended Shutdown) ببرنامج منظم بالتعاون مع الوكالة الدولية للطاقة الذرية تحت مشروع IAEA EGY1029.' 
                        : 'Achieved first criticality on 8 February 1961 (2 MW), making Egypt the first Arab nation to operate a nuclear research reactor. The reactor is currently in Extended Shutdown under IAEA Project EGY1029.'}
                    </p>
                  </div>
                )}

                {/* Level 2: Key Specification Summary Table */}
                <div className="level-block level-2 mt-4">
                  <span className="level-tag">{lang === 'ar' ? 'المستوى 2: المواصفات الفنية الرئيسية' : 'Level 2: Key Technical Specifications'}</span>
                  <h3>{lang === 'ar' ? 'جدول المواصفات الفنية المعتمدة' : 'Technical Specifications Table'}</h3>
                  
                  <div className="spec-table-wrapper">
                    <table className="spec-table">
                      <thead>
                        <tr>
                          <th>{lang === 'ar' ? 'عنصر المواصفة' : 'Specification Item'}</th>
                          <th>{lang === 'ar' ? 'القيمة / البيان الفعلي' : 'Verified Value'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.specs.map((sp, idx) => (
                          <tr key={idx}>
                            <td>{sp.label}</td>
                            <td className="data-val">{sp.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Level 3: Collapsible Deep Technical & Safeguards Info */}
                <div className="level-3-toggle-box mt-4">
                  <button 
                    onClick={() => setLevel3Open(!level3Open)} 
                    className="btn btn-outline w-100 flex-between"
                  >
                    <span>{lang === 'ar' ? 'المستوى 3: عرض تفاصيل الضمانات والتعاون الدولي (Level 3)' : 'Level 3: Expand Full Safeguards & Technical Details'}</span>
                    <SlidersHorizontal size={16} />
                  </button>

                  {level3Open && (
                    <div className="level-3-content">
                      <h4>{lang === 'ar' ? 'الضمانات والتفتيش الدولي والتراخيص' : 'Safeguards, International Inspection & Licensing'}</h4>
                      <p>
                        {lang === 'ar' 
                          ? 'تخضع المنشأة لاتفاقية الضمانات الشاملة (INFCIRC/625) الموقعة مع الوكالة الدولية للطاقة الذرية (IAEA). يتم إجراء تفتيش دوري وسجلات محاسبة المواد النووية بانتظام، مع الالتزام الكامل بمعايير الأمان والسلامة الإشعاعية التابعة لهيئة الرقابة النووية والإشعاعية (ENRRA).' 
                          : 'Operates under full scope IAEA safeguards (INFCIRC/625). Regular physical inventory verification and nuclear material accounting are conducted alongside national licensing by ENRRA.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Supporting Media */}
              <div className="cap-sidebar">
                <div className="sidebar-media-box">
                  <img src={media.supporting} alt={item.name} className="sidebar-supporting-img" />
                  <div className="sidebar-caption">{media.caption}</div>
                </div>

                <div className="sidebar-info-card">
                  <h4>{lang === 'ar' ? 'بيانات التشغيل والجهة التابعة' : 'Operator & Location'}</h4>
                  <ul className="sidebar-info-list">
                    <li>
                      <strong>{lang === 'ar' ? 'المركز المشغل:' : 'Operator Center:'}</strong>
                      <span>{item.operatorCenter}</span>
                    </li>
                    <li>
                      <strong>{lang === 'ar' ? 'الموقع الجغرافي:' : 'Location:'}</strong>
                      <span>{item.location}</span>
                    </li>
                    <li>
                      <strong>{lang === 'ar' ? 'حالة المنشأة:' : 'Current Status:'}</strong>
                      <span className="text-teal font-weight-bold">{item.status}</span>
                    </li>
                  </ul>

                  <button onClick={() => navigate('contact')} className="btn btn-primary w-100 mt-3">
                    <span>{t.cta.contactDepartment}</span>
                    <ArrowIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .bleed-hero {
            position: relative;
            height: 480px;
            display: flex;
            align-items: flex-end;
            background-color: var(--color-navy-dark);
            color: #ffffff;
            overflow: hidden;
          }

          .bleed-hero-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .bleed-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.9) 100%);
          }

          .bleed-hero-content {
            position: relative;
            z-index: 2;
            padding-bottom: 2.5rem;
          }

          .bleed-hero-content h1 {
            color: #ffffff;
            font-size: 2.3rem;
            margin-bottom: 0.5rem;
          }

          .bleed-subtitle {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.05rem;
            color: var(--color-text-on-dark-muted);
          }

          .cap-detail-grid {
            display: grid;
            grid-template-columns: 2.2fr 1fr;
            gap: 3rem;
          }

          .level-block {
            background-color: #ffffff;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 2rem;
            position: relative;
          }

          .level-tag {
            display: inline-block;
            font-size: 0.78rem;
            font-weight: 700;
            color: var(--color-teal-dark);
            background-color: var(--color-teal-light);
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            margin-bottom: 1rem;
            font-family: var(--font-mono);
          }

          .lead-desc {
            font-size: 1.1rem;
            line-height: 1.7;
            color: var(--color-navy-dark);
            font-weight: 500;
            margin-bottom: 1rem;
          }

          .etrr1-dignity-box {
            background-color: var(--color-amber-light);
            border: 1px solid rgba(217, 146, 46, 0.3);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            margin-top: 1.5rem;
          }

          .dignity-header {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            margin-bottom: 0.6rem;
          }

          .dignity-header h4 {
            font-size: 1.05rem;
            margin-bottom: 0;
            color: var(--color-navy-dark);
          }

          .level-3-content {
            background-color: var(--color-surface-alt);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 1.5rem;
            margin-top: 1rem;
          }

          .flex-between {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .sidebar-media-box {
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid var(--color-border);
            margin-bottom: 1.5rem;
          }

          .sidebar-supporting-img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            display: block;
          }

          .sidebar-caption {
            background-color: var(--color-navy);
            color: var(--color-text-on-dark-muted);
            padding: 0.5rem 0.85rem;
            font-size: 0.8rem;
            text-align: center;
          }

          .sidebar-info-card {
            background-color: var(--color-surface-alt);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 1.5rem;
          }

          .sidebar-info-card h4 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .sidebar-info-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
            font-size: 0.9rem;
          }

          .sidebar-info-list li {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }

          @media (max-width: 900px) {
            .bleed-hero {
              height: 280px;
            }
            .cap-detail-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }

  // All Capabilities List View
  return (
    <div className="capabilities-page">
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-amber mb-2">{lang === 'ar' ? 'البنية التحتية والمنشآت' : 'Infrastructure & Facilities'}</span>
          <h1>{t.capabilities.title}</h1>
          <p className="lead-subtitle">{t.capabilities.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="capabilities-list-grid">
            {t.capabilities.items.map((item) => {
              const media = capabilityImages[item.id] || capabilityImages['reactors'];
              return (
                <div key={item.id} className="capability-card" onClick={() => navigate('capabilities', item.id)}>
                  <div className="card-media">
                    <img src={media.hero} alt={item.name} className="card-img" />
                    <div className="status-badge">
                      <span className="badge badge-amber">{item.status.split('/')[0]}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="location-row">
                      <MapPin size={14} className="text-teal" />
                      <span>{item.location}</span>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.shortDesc}</p>

                    <div className="card-footer-action">
                      <span className="action-link">{t.cta.downloadSpecs}</span>
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

        .capabilities-list-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .capability-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
        }

        .capability-card:hover {
          border-color: var(--color-teal);
        }

        .card-media {
          position: relative;
          height: 200px;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        [dir="ltr"] .status-badge {
          right: auto;
          left: 1rem;
        }

        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .location-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--color-text-muted);
          margin-bottom: 0.6rem;
        }

        .capability-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--color-navy-dark);
        }

        .capability-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-footer-action {
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
          .capabilities-list-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .capabilities-list-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
