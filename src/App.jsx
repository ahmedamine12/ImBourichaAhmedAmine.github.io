import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import './i18n'
import { useTranslation } from 'react-i18next'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portofolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import { FaSun, FaMoon, FaGlobe } from 'react-icons/fa'
import ThankYouModal from './components/ThankYouModal'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div style={{
      position: 'fixed',
      top: '2rem',
      left: '2rem',
      zIndex: 1100,
      display: 'flex',
      gap: '0.5rem',
      background: 'var(--color-glass)',
      borderRadius: '2rem',
      boxShadow: '0 4px 16px rgba(63, 167, 214, 0.10)',
      padding: '0.3rem 0.7rem',
      alignItems: 'center',
      border: '2px solid var(--color-border)'
    }}>
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          style={{
            background: i18n.language === lang.code ? 'var(--color-primary)' : 'transparent',
            color: i18n.language === lang.code ? 'var(--color-white)' : 'var(--color-primary)',
            border: 'none',
            borderRadius: '1.2rem',
            padding: '0.3rem 1.1rem',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.3s, color 0.3s',
            outline: 'none'
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

const WindowThemeToggle = ({ theme, toggleTheme, onEasterEgg }) => {
  const [flipping, setFlipping] = useState(false);
  const [clicks, setClicks] = useState([]);
  const handleClick = () => {
    setFlipping(true);
    const now = Date.now();
    setClicks(prev => {
      const filtered = prev.filter(ts => now - ts < 2000);
      const updated = [...filtered, now];
      if (updated.length >= 5) {
        onEasterEgg && onEasterEgg();
        return [];
      }
      return updated;
    });
    setTimeout(() => {
      toggleTheme();
      setFlipping(false);
    }, 400);
  };
  return (
    <button
      className={`window-theme-toggle${flipping ? ' flipping' : ''}`}
      aria-label="Toggle dark/light mode"
      onClick={handleClick}
    >
      <div className={`window-frame${theme === 'light' ? ' day' : ' night'}`}> 
        <div className="window-pane">
          {theme === 'light' ? (
            <span className="window-sun"><FaSun /></span>
          ) : (
            <span className="window-moon"><FaMoon /></span>
          )}
        </div>
      </div>
    </button>
  );
};

const MobileLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        className="mobile-lang-fab"
        aria-label="Switch language"
        onClick={() => setOpen(o => !o)}
      >
        <FaGlobe />
      </button>
      {open && (
        <div className="mobile-lang-popup">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={i18n.language === lang.code ? 'active' : ''}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealSections = () => {
      document.querySelectorAll('.section-fade-in').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealSections);
    revealSections();
    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  useEffect(() => {
    const handleParallax = () => {
      document.querySelectorAll('.hero-blob').forEach((blob, i) => {
      const scrollY = window.scrollY;
        const speed = 0.12 + i * 0.07;
        blob.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 &&
        !showThankYou &&
        !sessionStorage.getItem('thankYouShown')
      ) {
        setShowThankYou(true);
        sessionStorage.setItem('thankYouShown', '1');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [showThankYou]);

  const { t } = useTranslation();
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 2000);
  };

  return (  
    <>
      <div className="desktop-lang-switcher"><LanguageSwitcher /></div>
      <div className="mobile-lang-switcher"><MobileLanguageSwitcher /></div>
      <WindowThemeToggle theme={theme} toggleTheme={toggleTheme} onEasterEgg={handleEasterEgg} />
      {showEasterEgg && (
        <div className="theme-easter-egg-popup">{t('toggle_easter_egg')}</div>
      )}
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />  
      <Contact />
      <Footer />
      <ThankYouModal open={showThankYou} onClose={() => setShowThankYou(false)} />
    </>
  );
};

export default App