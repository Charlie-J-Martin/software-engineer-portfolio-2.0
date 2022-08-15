import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className='nav'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <img className='logo' src='/img/logo.png' alt='' />
          </div>
          <div className='mobile-icon' onClick={toggle}>
            <FaBars />
          </div>
          <div className='nav-menu'>
            <div className='nav-item'>
              <ul className='nav-links' href='#'>
                Projects
              </ul>
            </div>
            <div className='nav-item'>
              <ul className='nav-links' href='#'>
                Values
              </ul>
            </div>
            <div className='nav-item'>
              <ul className='nav-links' href='#'>
                Contact Me
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
