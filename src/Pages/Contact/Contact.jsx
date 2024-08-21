import React from 'react';
import './contact.scss';
import Linkedin from '../../assets/Logo/linkedin.svg';
import Gmail from '../../assets/Logo/gmail.svg';
import Resume from '../../assets/Pdf/Ragulraj_Resume.pdf';
import Button from '../../components/Button/Button';

const Contact = () => {

  return (
    <div className='page contact' name='Contact'>

      <div className="bg-image"></div>

      <div className="container">

        <h2>Contact</h2>

        <p>I’m eager to connect with potential employers and discuss exciting opportunities. Feel free to reach out through the following methods:</p>
        
        <div className="contact-links">

          <a href='mailto:rraj9350@gmail.com' target='_blank' rel='noreferrer'><img src={Gmail} alt="" /></a>

          <a href='https://www.linkedin.com/in/ragulraj-nagendran-87135a224/' target='_blank' rel='noreferrer'><img src={Linkedin} alt="" /></a>

        </div>

        <Button buttonText='Resume' buttonLInk={Resume} buttonSolid={false} />

      </div>

    </div>

  )
}

export default Contact