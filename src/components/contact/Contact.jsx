import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   
    
    emailjs.sendForm('service_hnj9aro', 'template_jq5auno', form.current, '_-nz9XSKDZitVPB-q')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>bourichaamine0@gmail.com</h6>
            <a href="mailto:bourichaamine0@gmail.com" target={"_blank"}> Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h6>Amine Ahmed Bouricha</h6>
            <a href="https://m.me/amine.bouricha.73" target={"_blank"}> Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>

            <a href="https://wa.me/+212677992837" target={"_blank"}> Send a message</a>
          </article>

        </div>
        {/*END of OPTION CONTACT*/}
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your EMAIL' required />
          <textarea type="message" name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact