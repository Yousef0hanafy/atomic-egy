import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
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
      <SEO 
        title={t.nav.contact} 
        description="تواصل مع هيئة الطاقة الذرية المصرية" 
        path="/contact" 
      />
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

      
    </div>
  );
};
