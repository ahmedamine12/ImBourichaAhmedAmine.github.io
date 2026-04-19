import React, { useState } from 'react'
import CTA from './CTA'
import ME from '../../assets/proPic.webp'
import HeaderSocials from './HeaderSocials'
import './header.css'
import { useTranslation } from 'react-i18next'

const FloatingBlobs = () => (
  <>
    <div className="floating-blob blob1"></div>
    <div className="floating-blob blob2"></div>
    <div className="floating-blob blob3"></div>
    <div className="floating-blob blob4"></div>
  </>
);

const TypingIntro = ({ onDone }) => {
  const { t, i18n } = useTranslation();
  const lines = t('typing_intro', { returnObjects: true });
  const [displayed, setDisplayed] = useState(Array(lines.length).fill(''));
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [lang, setLang] = useState(i18n.language);

  React.useEffect(() => {
    // Reset typing if language changes
    if (i18n.language !== lang) {
      setDisplayed(Array(lines.length).fill(''));
      setLine(0);
      setChar(0);
      setLang(i18n.language);
      return;
    }
    if (line < lines.length) {
      if (char < lines[line].length) {
        const timeout = setTimeout(() => {
          setDisplayed(d => {
            const newD = [...d];
            newD[line] += lines[line][char];
            return newD;
          });
          setChar(c => c + 1);
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        setLine(l => l + 1);
        setChar(0);
      }
    } else {
      setTimeout(onDone, 900);
    }
  }, [char, line, lines, onDone, i18n.language, lang]);

  return (
    <div className="typing-intro">
      {lines.map((l, idx) => (
        <div key={idx}>
          {displayed[idx]}{line === idx && <span className="typing-cursor">|</span>}
        </div>
      ))}
    </div>
  );
};

const getGreetingKey = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'header.greeting_morning';
  if (hour >= 12 && hour < 18) return 'header.greeting_afternoon';
  return 'header.greeting_evening';
};

const Header = () => {
    const { t } = useTranslation();
    const [showMainHeader, setShowMainHeader] = useState(false);
    const [flip, setFlip] = useState(false);

    const handleTypingDone = () => {
      setFlip(true);
      setTimeout(() => setShowMainHeader(true), 700); // match flip animation duration
    };

    return (
      <header>
        <div className="hero-blob hero-blob1"></div>
        <div className="hero-blob hero-blob2"></div>
        <div className="hero-blob hero-blob3"></div>
        <div className="container header__container">
          <FloatingBlobs />
          <div className='me-glass-wrapper floating-profile' style={{ marginBottom: '1rem' }}>
            <div className='me-glass-border'>
              <img src={ME} alt="Bouricha Ahmed Amine - Software Engineer" className='me-img' />
            </div>
          </div>
          {!showMainHeader ? (
            <div className={`flip-card-container${flip ? ' flip-out' : ''}`}>
              <TypingIntro onDone={handleTypingDone} />
            </div>
          ) : (
            <div className="header-glass-card magic-fade-in">
              <div className="dynamic-greeting">{t(getGreetingKey())}</div>
              <h1 className="big-gradient-name animated-gradient">Bouricha Ahmed Amine</h1>
              <h5 className="text-light" style={{fontSize: '1.3rem', marginBottom: '1.5rem'}}>{t('header.role')}</h5>
              <div className="availability-badge">
                <span className="availability-dot"></span>
                {t('header.availability')}
              </div>
              <div className="welcome-fade-in">{t('welcome_portfolio')}</div>
              <CTA />
              <HeaderSocials/>
            </div>
          )}
          <div className='scroll__down-wrapper hide-on-mobile'>
            <a href="#contact" className='scroll__down'>
              <span className='scroll-arrow-circle floatScrollArrow'>
                <span className='scroll-arrow-simple'>▼</span>
              </span>
              <span className='scroll-text'>{t('header.scroll')}</span>
            </a>
          </div>
        </div>
      </header>
    )
}

export default Header