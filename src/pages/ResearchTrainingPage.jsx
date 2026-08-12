import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  BookOpen, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle2, 
  FlaskConical,
  Award,
  Users
} from 'lucide-react';

export const ResearchTrainingPage = () => {
  const { lang, t, navigate } = useLanguage();

  return (
    <div className="research-training-page">
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-amber mb-2">{lang === 'ar' ? 'البحث العلمي والتعليم' : 'R&D & Education'}</span>
          <h1>{t.researchPage.title}</h1>
          <p className="lead-subtitle">{t.researchPage.subtitle}</p>
        </div>
      </section>

      {/* 6 Research Domains */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.researchPage.domainsTitle}</h2>
            <p className="text-muted">{lang === 'ar' ? 'المحاور البحثية الرئيسية المعتمدة بالمراكز الأربعة للهيئة' : 'Core R&D thrusts across EAEA research centers'}</p>
          </div>

          <div className="domains-grid">
            {t.researchPage.domains.map((dom, idx) => (
              <div key={idx} className="domain-card">
                <div className="domain-num">0{idx + 1}</div>
                <h3>{dom.title}</h3>
                <p>{dom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal AJNSA Section */}
      <section className="section-padding bg-alt journal-section">
        <div className="container">
          <div className="journal-grid">
            <div className="journal-info">
              <div className="journal-badge">
                <BookOpen size={18} className="text-amber" />
                <span>ISSN: 1110-0451</span>
              </div>
              <h2>{t.researchPage.journalTitle}</h2>
              <p className="journal-desc">{t.researchPage.journalText}</p>
              
              <div className="journal-meta-facts">
                <div className="meta-fact">
                  <strong>{lang === 'ar' ? 'جهة النشر:' : 'Publisher:'}</strong>
                  <span>{lang === 'ar' ? 'جمعية تطوير العلوم النووية (SIDPO) وهيئة الطاقة الذرية' : 'EAEA & SIDPO Association'}</span>
                </div>
                <div className="meta-fact">
                  <strong>{lang === 'ar' ? 'منصة الاستضافة:' : 'Hosting Platform:'}</strong>
                  <span>{lang === 'ar' ? 'بنك المعرفة المصري (EKB)' : 'Egyptian Knowledge Bank (EKB)'}</span>
                </div>
              </div>

              <a 
                href="https://ajnsa.journals.ekb.eg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg mt-3"
              >
                <span>{t.researchPage.journalLinkText}</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="journal-visual">
              <div className="journal-cover-box">
                <Award size={48} className="text-amber mb-3" />
                <h3>AJNSA</h3>
                <p>{lang === 'ar' ? 'المجلة الدورية العلمية المحكمة الأولى في العلوم النووية بالمنطقة العربية' : 'The Premier Peer-Reviewed Nuclear Journal in the Arab Region'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding training-section">
        <div className="container">
          <div className="training-grid">
            <div className="training-media">
              <img 
                src="/images/orgainization/Training.jpg" 
                alt="Student Training Session" 
                className="training-img"
              />
              <div className="training-caption">
                {lang === 'ar' ? 'الطلاب المشاركون في التدريب الصيفي بفرع الهيئة بالإسكندرية' : 'Summer Training Participants at EAEA Alexandria Branch'}
              </div>
            </div>

            <div className="training-text">
              <div className="badge badge-teal mb-2">
                <GraduationCap size={15} />
                <span>{lang === 'ar' ? 'إعداد الكوادر الوطنية' : 'Capacity Building'}</span>
              </div>
              <h2>{t.researchPage.trainingTitle}</h2>
              <p className="training-desc">{t.researchPage.trainingText}</p>

              <div className="training-highlights">
                <div className="th-item">
                  <Users size={20} className="text-amber" />
                  <div>
                    <h4>{lang === 'ar' ? 'بروتوكولات الجامعات 2023' : '2023 University Protocols'}</h4>
                    <p>{lang === 'ar' ? 'جامعة الإسكندرية، جامعة عين شمس، وجامعة MTI.' : 'Alexandria University, Ain Shams, and MTI.'}</p>
                  </div>
                </div>
                <div className="th-item">
                  <CheckCircle2 size={20} className="text-teal" />
                  <div>
                    <h4>{lang === 'ar' ? 'التدريب الإقليمي (AAEA / IAEA)' : 'Regional Workshops (AAEA / IAEA)'}</h4>
                    <p>{lang === 'ar' ? 'ورش عمل متخصصي الفيزياء النووية والدواعي الإشعاعية.' : 'Regional workshops for Arab & African nuclear specialists.'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button onClick={() => navigate('contact')} className="btn btn-outline">
                  <span>{lang === 'ar' ? 'الاستفسار عن مواعيد التدريب الصيفي' : 'Inquire About Summer Training'}</span>
                </button>
              </div>
            </div>
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

        .domains-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .domain-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          position: relative;
        }

        .domain-num {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-teal);
          margin-bottom: 0.75rem;
        }

        .domain-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--color-navy-dark);
        }

        .domain-card p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Journal Section */
        .journal-section {
          background-color: var(--color-surface-alt);
        }

        .journal-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .journal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.75rem;
          background-color: transparent;
          border: 1px solid var(--color-border);
          border-radius: 2px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          margin-bottom: 1rem;
        }

        .journal-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .journal-meta-facts {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.92rem;
        }

        .journal-visual {
          background-color: var(--color-navy-dark);
          color: #ffffff;
          border-radius: var(--radius-sm);
          padding: 2.5rem 2rem;
          text-align: center;
          border-top: 3px solid var(--color-amber);
        }

        .journal-cover-box h3 {
          color: #ffffff;
          font-size: 1.8rem;
          font-family: var(--font-mono);
          margin-bottom: 0.75rem;
        }

        .journal-cover-box p {
          font-size: 0.9rem;
          color: var(--color-text-on-dark-muted);
          line-height: 1.5;
        }

        /* Training Section */
        .training-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: center;
        }

        .training-media {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
        }

        .training-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }

        .training-caption {
          background-color: var(--color-navy);
          color: var(--color-text-on-dark-muted);
          padding: 0.5rem 1rem;
          font-size: 0.82rem;
          text-align: center;
        }

        .training-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .training-highlights {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .th-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .th-item h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .th-item p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 900px) {
          .domains-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .journal-grid, .training-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .domains-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
