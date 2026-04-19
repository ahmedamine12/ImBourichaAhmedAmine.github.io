import React from 'react'
import { useTranslation } from 'react-i18next'
import CV_EN from '../../assets/ENG_BOURICHA AHMED AMINE.pdf'
import CV_FR from '../../assets/FR_BOURICHA AHMED AMINE.pdf'

const cvByLang = { en: CV_EN, fr: CV_FR };

const CTA = () => {
  const { t, i18n } = useTranslation();
  const cv = cvByLang[i18n.language] || CV_EN;

  return (
    <div className='cta'> 
      <a href={cv} download className='btn'>{t('download_cv')}</a>
      <a href="#contact" className='btn btn-primary'>{t('lets_talk')}</a>
    </div>
  )
}

export default CTA