import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vhc7woj', 'template_f2vqhy2', form.current, 'pRwEq_J6Wh-p6yypa')
     
    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>lokesh</h5>
          <a href="mailto:lokeshloki5460@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
          <h4>Messegner</h4>
          <h5>lokesh</h5>
          <a href="https://m.me/usename" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>lokesh</h5>
          <a href="https://api.whatsapp.com/send" target="_blank">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your full name' required/>
        <input type='email' name='email' placeholder='your email' required/>
        <textarea name='message' rows='7' placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact