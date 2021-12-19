import React from 'react';
import './brand.css';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.svg';
import google from '../../assets/google.svg';
import shopify from '../../assets/shopify.svg';
import slack from '../../assets/slack.svg';

const Brand = () => {
  return (
    <div>
      <div className='brand-container'>
        <img src={google} alt='' />
        <img src={slack} alt='' />
        <img src={atlassian} alt='' />
        <img src={dropbox} alt='' />
        <img src={shopify} alt='' />
      </div>
    </div>
  );
};

export default Brand;
