import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaRobot, FaTimes } from 'react-icons/fa'
import './chatbot.css'

const TypingMessage = ({ text, onDone }) => {
  const [displayed, setDisplayed] = useState('');
  const idx = useRef(0);
  useEffect(() => {
    if (idx.current < text.length) {
      const t = setTimeout(() => {
        setDisplayed(d => d + text[idx.current]);
        idx.current++;
      }, 18);
      return () => clearTimeout(t);
    } else {
      onDone && onDone();
    }
  }, [displayed, text, onDone]);
  return <span>{displayed}<span className="chatbot-cursor">|</span></span>;
};

const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const chatBodyRef = useRef();

  const questions = t('chatbot.questions', { returnObjects: true }) || [];
  const answers = t('chatbot.answers', { returnObjects: true }) || {};

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: 'bot', text: t('chatbot.greeting'), typed: true }]);
    }
  }, [open, messages.length, t]);

  // Reset on language change
  useEffect(() => {
    setMessages([]);
  }, [i18n.language]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleQuestion = (q) => {
    if (typing) return;
    const answer = answers[q.key] || t('chatbot.fallback');
    setMessages(prev => [...prev, { from: 'user', text: q.label, typed: true }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: answer, typed: false }]);
    }, 400);
  };

  const handleTypingDone = (idx) => {
    setMessages(prev => prev.map((m, i) => i === idx ? { ...m, typed: true } : m));
    setTyping(false);
  };

  return (
    <>
      <button
        className={`chatbot-fab${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Chat assistant"
      >
        {open ? <FaTimes /> : <FaRobot />}
        {!open && <span className="chatbot-fab-pulse" />}
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <FaRobot />
            <span>{t('chatbot.title')}</span>
          </div>
          <div className="chatbot-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                {msg.typed ? (
                  <span>{msg.text}</span>
                ) : (
                  <TypingMessage text={msg.text} onDone={() => handleTypingDone(i)} />
                )}
              </div>
            ))}
          </div>
          <div className="chatbot-questions">
            {questions.map((q, i) => (
              <button
                key={i}
                className="chatbot-q-btn"
                onClick={() => handleQuestion(q)}
                disabled={typing}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
