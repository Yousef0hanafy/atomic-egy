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

      <style>{`
        .site-footer {
          background-color: var(--color-navy-dark);
          color: var(--color-text-on-dark-muted);
          padding-top: 4rem;
          padding-bottom: 2rem;
          border-top: 4px solid var(--color-amber);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.8fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .footer-logo {
          height: 48px;
          width: auto;
          background: #ffffff;
          padding: 3px;
          border-radius: var(--radius-sm);
        }

        .footer-title {
          font-size: 1.1rem;
          color: var(--color-text-on-dark);
          margin-bottom: 0.1rem;
        }

        .footer-sub {
          font-size: 0.78rem;
          color: var(--color-text-on-dark-muted);
        }

        .footer-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .footer-badge-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--color-text-on-dark);
          background-color: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .text-amber {
          color: var(--color-amber);
        }

        .footer-heading {
          font-size: 1rem;
          color: var(--color-text-on-dark);
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-teal);
          display: inline-block;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links button {
          background: transparent;
          border: none;
          color: var(--color-text-on-dark-muted);
          font-size: 0.9rem;
          cursor: pointer;
          transition: color var(--transition-fast);
          padding: 0;
          font-family: inherit;
          text-align: start;
        }

        .footer-links button:hover {
          color: var(--color-amber);
        }

        .footer-center-tag {
          font-size: 0.82rem;
          color: var(--color-text-on-dark);
          font-weight: 500;
        }

        .link-divider {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin: 0.4rem 0;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          font-size: 0.88rem;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .contact-icon {
          color: var(--color-amber);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .ekb-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--color-amber);
          font-weight: 500;
          font-size: 0.85rem;
        }

        .ekb-link:hover {
          text-decoration: underline;
          color: #ffffff;
        }

        .footer-bottom {
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--color-text-on-dark-muted);
        }

        .footer-disclaimer {
          font-style: normal;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .brand-col {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .brand-col {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
