import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrustStrip } from '../components/TrustStrip';
import { 
  History, 
  Building, 
  UserCheck, 
  Layers, 
  CheckCircle2, 
  MapPin, 
  FileText,
  ShieldCheck
} from 'lucide-react';

export const AboutPage = () => {
  const { lang, t, navigate } = useLanguage();

  return (
    <div className="about-page">
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

        /* Ecosystem Disambiguation */
        .ecosystem-section {
          background-color: #ffffff;
        }

        .ecosystem-card {
          background-color: var(--color-surface);
          border-top: 3px solid var(--color-amber);
          border-right: 1px solid var(--color-border);
          border-left: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
        }

        .ecosystem-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .ecosystem-header h2 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
        }

        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .eco-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          position: relative;
        }

        .eco-item.eco-active {
          border-color: var(--color-teal);
          border-right: 3px solid var(--color-teal);
        }

        [dir="ltr"] .eco-item.eco-active {
          border-right: 1px solid var(--color-teal);
          border-left: 3px solid var(--color-teal);
        }

        .eco-code {
          display: inline-block;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-navy-dark);
          background-color: var(--color-surface-alt);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.6rem;
        }

        .eco-item.eco-active .eco-code {
          background-color: var(--color-teal);
          color: #ffffff;
        }

        .eco-item h4 {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
          color: var(--color-navy-dark);
        }

        .eco-item p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Mandate Grid */
        .mandate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .mandate-body {
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 2rem;
          color: var(--color-text-main);
        }

        .key-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pillar {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .pillar h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .pillar p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
        }

        .mandate-media {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
        }

        .historical-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }

        .media-tag {
          background-color: var(--color-navy);
          color: var(--color-text-on-dark-muted);
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          text-align: center;
        }

        /* Timeline */
        .timeline-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 2.5rem auto 0 auto;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          background: #ffffff;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }

        .timeline-year {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-amber-dark);
          min-width: 80px;
        }

        .era-tag {
          display: inline-block;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.35rem;
        }

        .timeline-content p {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Leadership */
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .leader-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 2rem;
          text-align: center;
        }

        .leader-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--color-surface-alt);
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
          border: 2px solid var(--color-amber);
        }

        .leader-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
          color: var(--color-navy-dark);
        }

        .leader-role {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }

        .leader-note {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Centers */
        .centers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .center-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }

        .center-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .center-code {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-teal-dark);
          background-color: var(--color-teal-light);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }

        .center-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }

        .center-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .ecosystem-grid, .mandate-grid, .leadership-grid, .centers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
