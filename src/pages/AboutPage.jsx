import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrustStrip } from '../components/TrustStrip';
import { 
  ShieldCheck, 
  CheckCircle2, 
  UserCheck, 
  MapPin 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const AboutPage = () => {
  const { lang, t, navigate } = useLanguage();

  return (
    <div className="about-page">
      <SEO 
        title={t.nav.about} 
        description={t.siteTagline} 
        path="/about" 
      />
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-amber mb-2">{lang === 'ar' ? 'الهوية والرسالة' : 'Identity & Mission'}</span>
          <h1>{t.about.title}</h1>
          <p className="lead-subtitle">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Mandatory Nuclear Ecosystem Disambiguation Paragraph */}
      <section className="section-padding ecosystem-section">
        <div className="container">
          <div className="ecosystem-card">
            <div className="ecosystem-header">
              <ShieldCheck size={24} className="text-amber" />
              <div>
                <h2>{t.about.ecosystemTitle}</h2>
                <p className="text-muted">{t.about.ecosystemBody}</p>
              </div>
            </div>

            <div className="ecosystem-grid">
              <div className="eco-item eco-active">
                <span className="eco-code">EAEA</span>
                <h4>{lang === 'ar' ? 'هيئة الطاقة الذرية (المشغل والباحث)' : 'EAEA (Operator & Scientific R&D)'}</h4>
                <p>{t.about.ecosystemEAEA}</p>
              </div>
              <div className="eco-item">
                <span className="eco-code">ENRRA</span>
                <h4>{lang === 'ar' ? 'هيئة الرقابة النووية (الجهة الرقابية المستقلة)' : 'ENRRA (Independent Regulator)'}</h4>
                <p>{t.about.ecosystemENRRA}</p>
              </div>
              <div className="eco-item">
                <span className="eco-code">NPPA</span>
                <h4>{lang === 'ar' ? 'هيئة المحطات النووية (مشغل الضبعة)' : 'NPPA (Power Plant Operator)'}</h4>
                <p>{t.about.ecosystemNPPA}</p>
              </div>
              <div className="eco-item">
                <span className="eco-code">NMA</span>
                <h4>{lang === 'ar' ? 'هيئة المواد النووية (الخامات والمناجم)' : 'NMA (Nuclear Ore Exploration)'}</h4>
                <p>{t.about.ecosystemNMA}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Narrative */}
      <section className="section-padding mandate-section">
        <div className="container">
          <div className="mandate-grid">
            <div className="mandate-text">
              <h2>{t.about.mandateTitle}</h2>
              <p className="mandate-body">{t.about.mandateBody}</p>
              
              <div className="key-pillars">
                <div className="pillar">
                  <CheckCircle2 size={20} className="text-teal" />
                  <div>
                    <h4>{lang === 'ar' ? 'الإنتاج القومي السيادي' : 'Sovereignty & Production'}</h4>
                    <p>{lang === 'ar' ? 'تأمين النظائر المشعة الطبية والمسح الإشعاعي للواردات الجمركية.' : 'Producing medical isotopes and conducting port radiation assays.'}</p>
                  </div>
                </div>
                <div className="pillar">
                  <CheckCircle2 size={20} className="text-teal" />
                  <div>
                    <h4>{lang === 'ar' ? 'البنية التحتية والضمانات' : 'Infrastructure & Safeguards'}</h4>
                    <p>{lang === 'ar' ? 'تشغيل مفاعلات الأبحاث والمعجلات تحت التفتيش الكامل للوكالة الدولية IAEA.' : 'Operating reactors & accelerators under IAEA safeguards.'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mandate-media">
              <img 
                src="/images/orgainization/nutural_lab.jpg" 
                alt="Nuclear Nature Laboratory 1959 Milestone" 
                className="historical-img"
              />
              <div className="media-tag">
                {lang === 'ar' ? 'معمل الطبيعة النووية — أول المباني التاريخية بموقع أنشاص 1959' : 'Nuclear Nature Laboratory — Historic Building at Anshas 1959'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline (Five Eras) */}
      <section className="section-padding timeline-section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-amber mb-2">{lang === 'ar' ? '70 عاماً من العطاء' : '70-Year Milestone History'}</span>
            <h2>{t.about.historyTitle}</h2>
          </div>

          <div className="timeline-wrapper">
            {t.about.historyEras.map((era, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{era.year}</div>
                <div className="timeline-content">
                  <span className="era-tag">{era.era}</span>
                  <p>{era.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Leadership */}
      <section className="section-padding leadership-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.about.leadershipTitle}</h2>
            <p className="text-muted">{lang === 'ar' ? 'الإدارة التنفيذية والعلماء القائمون على قيادة الهيئة' : 'Executive Leadership of the Egyptian Atomic Energy Authority'}</p>
          </div>

          <div className="leadership-grid">
            {t.about.leadershipItems.map((leader, idx) => (
              <div key={idx} className="leader-card">
                <div className="leader-avatar">
                  <UserCheck size={32} className="avatar-icon" />
                </div>
                <h3>{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <p className="leader-note">{leader.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Centers Footprint */}
      <section className="section-padding centers-section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.about.centersTitle}</h2>
            <p className="text-muted section-desc">{t.about.centersDesc}</p>
          </div>

          <div className="centers-grid">
            {t.about.centersList.map((center, idx) => (
              <div key={idx} className="center-card">
                <div className="center-header">
                  <span className="center-code">{center.code}</span>
                  <MapPin size={18} className="text-amber" />
                </div>
                <h3>{center.name}</h3>
                <p>{center.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Component */}
      <TrustStrip />

      
    </div>
  );
};
