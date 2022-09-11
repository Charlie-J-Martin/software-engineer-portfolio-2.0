import React, { useRef, useState } from 'react';
import Subheading from './Subheading';
import emailjs from '@emailjs/browser';
import ContactConfirmation from './ContactConfirmation';

const Contact = () => {
  // EmailJS
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className='contact-container'>
        <Subheading number='04.' name='Contact' />
        <div className='contact-intro-form-container'>
          <div className='contact-intro-container'>
          <div className='container drawer'>
            <p>
              <span className='key-word'>Get in touch!</span> <br />
              I’m always lookings for new opportunities and adventures, even if
              you want to just say hi or ask some questions! I will try to get
              back to you as soon as I can.
            </p>
            </div>
            <div className='contact-image-container'>
              <img
                className='contact-image'
                src='/img/lettheadventurebegin.jpg'
                alt=''
              />
              <div className='contact-image-background'></div>
            </div>
          </div>
          {!emailSent ? (
            <div className='form-container'>
              <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='from_name' placeholder='Name' />
                <input
                  type='email'
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  name='from_email'
                  placeholder='Email'
                />
                <textarea name='message' placeholder='Message' />
                <input className='send-button' type='submit' value='Send' />
              </form>
            </div>
          ) : (
            <ContactConfirmation />
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
