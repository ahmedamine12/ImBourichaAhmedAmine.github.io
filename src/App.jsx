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
import { FaSun, FaMoon } from 'react-icons/fa'
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

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    className="theme-toggle-btn"
    aria-label="Toggle dark/light mode"
    onClick={toggleTheme}
    style={{
      position: 'fixed',
      top: '2rem',
      right: '2rem',
      zIndex: 1000,
      background: 'var(--color-glass)',
      border: '2px solid var(--color-border)',
      borderRadius: '50%',
      width: '3.2rem',
      height: '3.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(63, 167, 214, 0.12)',
      cursor: 'pointer',
      transition: 'background 0.4s, border 0.4s',
      fontSize: '1.6rem',
      outline: 'none',
      color: 'var(--color-primary)'
    }}
  >
    {theme === 'light' ? <FaMoon /> : <FaSun />}
  </button>
)

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

  return (  
    <>
      <LanguageSwitcher />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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