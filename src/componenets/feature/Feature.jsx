import React from 'react';
import './feature.css';

const Features = ({ title, text }) => {
  return (
    <div className='featues'>
      <div className='spanandtext'>
        <span></span>
        <p>{title}</p>
      </div>
      <div className='secondtxt'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
