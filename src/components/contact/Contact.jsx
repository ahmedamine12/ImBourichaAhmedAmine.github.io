import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className='section-fade-in'>
      <h2>{t('contact.title')}</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option tilt-card'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>bourichaamine0@gmail.com</h6>
            <a href="mailto:bourichaamine0@gmail.com"> {t('contact.send')}</a>
          </article>

          <article className='contact__option tilt-card'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h6>Amine Ahmed Bouricha</h6>
            <a href="https://m.me/amine.bouricha.73" target="_blank" rel="noreferrer"> {t('contact.send')}</a>
          </article>

          <article className='contact__option tilt-card'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/+212677992837" target="_blank" rel="noreferrer"> {t('contact.send')}</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact