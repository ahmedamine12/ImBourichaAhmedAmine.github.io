import React from 'react'
import './footer.css'
import { GrInstagram } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer-glass-card'>
      <div className='footer-content'>
        <div className='footer-socials'>
          <a href="https://www.facebook.com/amine.bouricha.73/" target="__blank"> <FaFacebookF /></a>
          <a href="https://instagram.com" target="__blank"><GrInstagram /></a>
          <a href="https://twitter.com/BourichaA1" target="__blank"><BsTwitter /></a>
        </div>
        <div className='footer-copy'>
          <small>&copy; Bouricha Ahmed Amine. {t('footer.copyright')}</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer