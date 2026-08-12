import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Building2, 
  Clock, 
  AlertCircle,
  FileCheck2,
  Activity,
  Radio
} from 'lucide-react';

export const ContactPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="contact-page">
      <section className="page-header-banner">
        <div className="container">
          <span className="badge badge-amber mb-2">{lang === 'ar' ? 'مسارات التواصل والخدمات' : 'Direct Service Channels'}</span>
          <h1>{t.contactPage.title}</h1>
          <p className="lead-subtitle">{t.contactPage.subtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Main Locations Grid */}
          <div className="locations-grid">
            {/* Location 1: Central HQ */}
            <div className="location-card hq-card">
              <div className="card-top-header">
                <Building2 size={24} className="text-amber" />
                <span className="badge badge-amber">{lang === 'ar' ? 'المقر الرئيسي' : 'Central HQ'}</span>
              </div>
              <h3>{t.contactPage.hqTitle}</h3>
              <p className="location-address">
                <MapPin size={16} className="text-teal" />
                <span>{t.contactPage.hqAddress}</span>
              </p>
              
              <div className="contact-details">
                <div className="detail-line">
                  <Phone size={15} />
                  <span>{t.contactPage.phoneVal}</span>
                </div>
                <div className="detail-line">
                  <Mail size={15} />
                  <span>{t.contactPage.emailVal}</span>
                </div>
              </div>
            </div>

            {/* Location 2: Anshas Nuclear Complex */}
            <div className="location-card">
              <div className="card-top-header">
                <Building2 size={24} className="text-teal" />
                <span className="badge badge-teal">{lang === 'ar' ? 'المجمع التخصصي' : 'Nuclear Complex'}</span>
              </div>
              <h3>{t.contactPage.anshasTitle}</h3>
              <p className="location-address">
                <MapPin size={16} className="text-teal" />
                <span>{t.contactPage.anshasAddress}</span>
              </p>
              <div className="contact-details">
                <div className="detail-line">
                  <Clock size={15} />
                  <span>{lang === 'ar' ? 'مواعيد العمل الرسمية: 8:00 ص — 3:00 م' : 'Official Working Hours: 8:00 AM — 3:00 PM'}</span>
                </div>
              </div>
            </div>

            {/* Location 3: Alexandria Branch */}
            <div className="location-card">
              <div className="card-top-header">
                <Building2 size={24} className="text-teal" />
                <span className="badge badge-teal">{lang === 'ar' ? 'وحدة الموانئ البحرية' : 'Maritime Unit'}</span>
              </div>
              <h3>{t.contactPage.alexTitle}</h3>
              <p className="location-address">
                <MapPin size={16} className="text-teal" />
                <span>{t.contactPage.alexAddress}</span>
              </p>
              <div className="contact-details">
                <div className="detail-line">
                  <Clock size={15} />
                  <span>{lang === 'ar' ? 'خدمة التعقيم الجامي للمنافذ البحرية' : 'Maritime Gamma Sterilization Unit'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area Pathways Box */}
          <div className="pathways-box mt-4">
            <h3 className="pathways-title">
              <ShieldCheck size={22} className="text-amber" />
              <span>{lang === 'ar' ? 'مسارات التواصل حسب نوع الخدمة المطلوبـة' : 'Service-Specific Inquiry Pathways'}</span>
            </h3>

            <div className="pathways-grid">
              <div className="pathway-item">
                <Activity size={24} className="text-teal mb-2" />
                <h4>{lang === 'ar' ? 'طلب النظائر المشعة الطبية' : 'Medical Isotope Procurement'}</h4>
                <p>{lang === 'ar' ? 'التواصل المباشر مع إدارة التسويق بمصنع إنتاج النظائر بأنشاص لتسليم المولدات والمستحضرات للمستشفيات.' : 'Contact RPF Marketing Unit at Anshas for Iodine-131 and Tc-99m hospital orders.'}</p>
                <div className="pathway-contact">rpf-marketing@eaea.sci.eg</div>
              </div>

              <div className="pathway-item">
                <FileCheck2 size={24} className="text-teal mb-2" />
                <h4>{lang === 'ar' ? 'شهادات الكشف الإشعاعي الجمركي' : 'Customs Screening & Nafeza'}</h4>
                <p>{lang === 'ar' ? 'المختبر المركزي للمقايسات الإشعاعية بمدينة نصر ومراكز الموانئ الجمركية السبت إلى الخميس.' : 'Central Radiation Measurements Lab in Nasr City and port screening units.'}</p>
                <div className="pathway-contact">customs-lab@eaea.org.eg</div>
              </div>

              <div className="pathway-item">
                <Radio size={24} className="text-teal mb-2" />
                <h4>{lang === 'ar' ? 'التشعيع الصناعي وإدارة النفايات' : 'Industrial Irradiation & Waste'}</h4>
                <p>{lang === 'ar' ? 'وحدات مجاما-1 بمدينة نصر والإسكندرية ومركز المعامل الساخنة للنفايات المشعة.' : 'NCRRT Mega Gamma units and HLWMC radioactive waste management.'}</p>
                <div className="pathway-contact">services@eaea.org.eg</div>
              </div>
            </div>
          </div>

          {/* Official Domain Disclaimer Notice */}
          <div className="domain-disclaimer-box mt-4">
            <AlertCircle size={20} className="text-amber" />
            <div>
              <strong>{lang === 'ar' ? 'تنويه رسمي هـام حول النطاقات الإلكترونية:' : 'Official EAEA Domain Disclaimer:'}</strong>
              <p>{t.contactPage.domainNote}</p>
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

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .location-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .hq-card {
          border-color: var(--color-teal);
          box-shadow: var(--shadow-sm);
        }

        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .location-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--color-navy-dark);
        }

        .location-address {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.88rem;
        }

        .detail-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-navy);
          font-weight: 500;
        }

        /* Pathways Box */
        .pathways-box {
          background-color: var(--color-surface-alt);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
        }

        .pathways-title {
          font-size: 1.3rem;
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .pathways-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .pathway-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }

        .pathway-item h4 {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
          color: var(--color-navy-dark);
        }

        .pathway-item p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .pathway-contact {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-teal-dark);
          background-color: var(--color-teal-light);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          display: inline-block;
        }

        /* Disclaimer */
        .domain-disclaimer-box {
          background-color: var(--color-amber-light);
          border: 1px solid rgba(217, 146, 46, 0.3);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.92rem;
          color: var(--color-navy-dark);
        }

        .mt-4 { margin-top: 2rem; }

        @media (max-width: 900px) {
          .locations-grid, .pathways-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
