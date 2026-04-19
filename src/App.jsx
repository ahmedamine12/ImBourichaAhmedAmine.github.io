import React, { useEffect, useState, useRef } from 'react'
import Header from './components/header/Header'
import './i18n'
import { useTranslation } from 'react-i18next'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import { FaSun, FaMoon, FaGlobe } from 'react-icons/fa'
import ThankYouModal from './components/ThankYouModal'
import Chatbot from './components/chatbot/Chatbot'
import useTilt from './hooks/useTilt'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="lang-switcher">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={i18n.language === lang.code ? 'active' : ''}
          aria-label={`Switch language to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

const WindowThemeToggle = ({ theme, toggleTheme, onEasterEgg }) => {
  const [flipping, setFlipping] = useState(false);
  const clicksRef = useRef([]);
  const handleClick = () => {
    setFlipping(true);
    const now = Date.now();
    const filtered = clicksRef.current.filter(ts => now - ts < 2000);
    const updated = [...filtered, now];
    if (updated.length >= 5) {
      onEasterEgg && onEasterEgg();
      clicksRef.current = [];
    } else {
      clicksRef.current = updated;
    }
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
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Reveal sections on scroll
          document.querySelectorAll('.section-fade-in').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
              section.classList.add('visible');
            }
          });
          // Parallax blobs
          document.querySelectorAll('.hero-blob').forEach((blob, i) => {
            const speed = 0.12 + i * 0.07;
            blob.style.transform = `translateY(${window.scrollY * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
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

  // Slight tilt for skills cards, ultra-minimal for experience/portfolio cards
  useTilt('.skills__card', 4);
  useTilt('.project-card', 2);

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
      <Chatbot />
    </>
  );
};

export default App