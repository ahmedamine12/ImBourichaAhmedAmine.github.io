import React, { useState } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  let [MessSuc,setMessSuc]= useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_hnj9aro', 'template_jq5auno', form.current, '_-nz9XSKDZitVPB-q')
      .then((result) => {
        console.log('----------------');
        console.log(result.text);
        setMessSuc("Message sent, thank you");
        console.log(MessSuc);
        setTimeout(() => {
          e.target.reset();
          setMessSuc("");
          
        }, 1000);
        console.log(MessSuc);
      }, (error) => {
        console.log(error);
        setMessSuc("Message not send, connection problem");
        setTimeout(() => {
          setMessSuc("");
         // e.target.reset();
        }, 4000);
        
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
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea type="message" name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <h5 className='Messuc'>{MessSuc}</h5>
          
        </form>
      </div>
    </section>
  )
}

export default Contact