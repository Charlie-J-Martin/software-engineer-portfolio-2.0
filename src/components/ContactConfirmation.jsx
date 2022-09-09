import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const ContactConfirmation = () => {
  return (
    <>
      <div className='contact-confirmation-container'>
        <div className='contact-confirmation-content'>
          <h2>Message sent sucessfully.</h2>
          <BsCheckCircleFill color='#01bf71' size={50} />
        </div>
      </div>
    </>
  );
};

export default ContactConfirmation;
