import React from 'react'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation();
  
  return (
    <div className='cta'> 
      <a href="#contact" className='btn btn-primary'>{t('lets_talk')}</a>
    </div>
  )
}

export default CTA