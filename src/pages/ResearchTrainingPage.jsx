import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
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
      <SEO 
        title={t.researchPage.title} 
        description={t.researchPage.subtitle} 
        path="/research" 
      />
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

      
    </div>
  );
};
