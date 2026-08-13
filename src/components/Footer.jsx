import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const { lang, t, navigate } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Col 1: Brand & Sovereign Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img 
                src="/images/EAEA_Logo.png" 
                alt="EAEA Logo" 
                className="footer-logo"
              />
              <div>
                <h3 className="footer-title">{t.siteName}</h3>
                <p className="footer-sub">{t.siteSubName}</p>
              </div>
            </div>
            <p className="footer-desc">
              {t.siteTagline}
            </p>
            <div className="footer-badge-item">
              <ShieldCheck size={16} className="text-amber" />
              <span>{lang === 'ar' ? 'تحت الإشراف الدولي الكامل للوكالة الدولية للطاقة الذرية (IAEA)' : 'Under Full IAEA International Safeguards'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{lang === 'ar' ? 'أقسام الموقع' : 'Navigation'}</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigate('home')}>{t.nav.home}</button></li>
              <li><button onClick={() => navigate('about')}>{t.nav.about}</button></li>
              <li><button onClick={() => navigate('services')}>{t.nav.services}</button></li>
              <li><button onClick={() => navigate('capabilities')}>{t.nav.capabilities}</button></li>
              <li><button onClick={() => navigate('research')}>{t.nav.research}</button></li>
              <li><button onClick={() => navigate('news')}>{t.nav.news}</button></li>
              <li><button onClick={() => navigate('contact')}>{t.nav.contact}</button></li>
            </ul>
          </div>

          {/* Col 3: Services & Footprint */}
          <div className="footer-col">
            <h4 className="footer-heading">{lang === 'ar' ? 'الخدمات والمراكز' : 'Services & Centers'}</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigate('services', 'medical-isotopes')}>{t.services.items[0].title}</button></li>
              <li><button onClick={() => navigate('services', 'industrial-irradiation')}>{t.services.items[1].title}</button></li>
              <li><button onClick={() => navigate('services', 'customs-screening')}>{t.services.items[2].title}</button></li>
              <li><button onClick={() => navigate('services', 'waste-management')}>{t.services.items[3].title}</button></li>
              <li className="link-divider"></li>
              <li className="footer-center-tag">NRC (أنشاص) · NCRRT (مدينة نصر)</li>
              <li className="footer-center-tag">HLWMC (أنشاص) · NCNSRC (مدينة نصر)</li>
            </ul>
          </div>

          {/* Col 4: Official Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">{lang === 'ar' ? 'التواصل الرسمي' : 'Official Contact'}</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>{t.contactPage.hqAddress}</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>{t.contactPage.phoneVal}</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>{t.contactPage.emailVal}</span>
              </li>
              <li>
                <a 
                  href="https://ajnsa.journals.ekb.eg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ekb-link"
                >
                  <ExternalLink size={14} />
                  <span>{lang === 'ar' ? 'المجلة العربية (AJNSA على EKB)' : 'AJNSA Journal on EKB'}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>{t.footer.rights}</p>
          <p className="footer-disclaimer">{t.footer.disclaimer}</p>
        </div>
      </div>

      
    </footer>
  );
};
