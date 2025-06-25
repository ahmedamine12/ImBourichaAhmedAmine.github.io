import React from 'react';
import './thankyoumodal.css';
import { useTranslation } from 'react-i18next';

const ThankYouModal = ({ open, onClose }) => {
  const { t } = useTranslation();
  if (!open) return null;
  return (
    <div className="thankyou-modal-backdrop">
      <div className="thankyou-modal">
        <div className="confetti-container">
          {/* Simple confetti using CSS */}
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`confetti confetti-${i % 6}`}></div>
          ))}
        </div>
        <h2>{t('thankyou_modal.title')}</h2>
        <p>
          {t('thankyou_modal.message')}
        </p>
        <button className="thankyou-close-btn" onClick={onClose}>{t('thankyou_modal.close')}</button>
      </div>
    </div>
  );
};

export default ThankYouModal; 