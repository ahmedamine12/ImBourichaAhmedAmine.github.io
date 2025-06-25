import React, { useState, useRef } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  let [MessSuc, setMessSuc] = useState("");
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1v2w1qg', 'template_6kq8w7d', form.current, 'user_4n1k8k9k9k9k9k9k9')
      .then((result) => {
        setMessSuc('Message sent successfully!');
      }, (error) => {
        setMessSuc('Failed to send message.');
      });
  }

  return (
    <section id='contact' className='section-fade-in'>
      <h2>{t('contact.title')}</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>bourichaamine0@gmail.com</h6>
            <a href="mailto:bourichaamine0@gmail.com" target={"_blank"}> {t('contact.send')}</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h6>Amine Ahmed Bouricha</h6>
            <a href="https://m.me/amine.bouricha.73" target={"_blank"}> {t('contact.send')}</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/+212677992837" target={"_blank"}> {t('contact.send')}</a>
          </article>

        </div>
        {/*END of OPTION CONTACT*/}
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('contact.name')} required />
          <input type="email" name='email' placeholder={t('contact.email')} required />
          <textarea type="message" name="message" rows="7" placeholder={t('contact.message')} required ></textarea>
          <button type='submit' className='btn btn-primary'>{t('contact.send')}</button>
          <h5 className='Messuc'>{MessSuc}</h5>
        </form>
      </div>
    </section>
  )
}

export default Contact