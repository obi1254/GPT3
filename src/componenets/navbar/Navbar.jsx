import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/GPT-3.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/all';
const MenuForMobile = () => (
  <div className='mob'>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#whatisgpt3'>What is GPT3</a>
    </p>
    <p>
      <a href='#openai'>Open Ai</a>
    </p>
    <p>
      <a href='#case'>Case Studies</a>
    </p>
    <p>
      <a href='#library'>Library</a>
    </p>
    <div className='navbar-links_signMobile'>
      <p>
        <a href='#sign'>Sign In</a>
      </p>
      <button type='button'>Sign up</button>
    </div>
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='Fixe'>
      <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='navbar-links_items'>
            <p>
              <a href='#home'>Home</a>
            </p>
            <p>
              <a href='#whatisgpt3'>What is GPT3</a>
            </p>
            <p>
              <a href='#openai'>Open Ai</a>
            </p>
            <p>
              <a href='#case'>Case Studies</a>
            </p>
            <p>
              <a href='#library'>Library</a>
            </p>
          </div>
        </div>
        <div className='navbar-links_sign'>
          <p>
            <a href='#sign'>Sign In</a>
          </p>
          <button type='button'>Sign up</button>
        </div>
        {toggleMenu ? (
          <RiCloseLine
            className='toggleButton1'
            color='white'
            size='30'
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            className='toggleButton2'
            color='white'
            size='30'
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
      </div>
      {toggleMenu && <MenuForMobile />}
    </div>
  );
};

export default Navbar;
