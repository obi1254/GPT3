import React from 'react';
import './whatGPT3.css';
import Features from '../../componenets/feature/Feature';

const WhatGPT3 = ({ title, text }) => {
  return (
    <div className='whatisContainer'>
      <div className='whatisGpt3'>
        <div className='first'>
          <div className='firstCOntaoner'>
            <span className='coloredSpan'></span>
            <p>What is GPT-3</p>
          </div>
        </div>
        <div className='second'>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>

      <div className='poss-isbeyond'>
        <div className='poss-isbeyond__p'>
          <p className='theposTxt'>
            The possibilities are beyond your imagination
          </p>
        </div>
        <a href='#ss'>Explore The Library</a>
      </div>

      <div className='flexshit'>
        <Features
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
        />
        <Features
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Features
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
