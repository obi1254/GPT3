import React from 'react';
import './header.css';
import img from '../../assets/Header Illustration.svg';
import people from '../../assets/groupeOfPeople.png';
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header1'>
        <div className='txt'>
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className='header-form'>
          <input type='email' placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className='people-containerrrr'>
          <img className='people' src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='illustration'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};

export default Header;
