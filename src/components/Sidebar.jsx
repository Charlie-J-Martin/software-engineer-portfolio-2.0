/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  let customStyle = {};

  if (isOpen) {
    customStyle = {
      opacity: '100%',
      top: '0%',
    };
  }

  return (
    <>
      <nav>
        <div
          className='sidebar-container'
          isOpen={isOpen}
          onClick={toggle}
          style={customStyle}
        >
          <div className='icon' onClick={toggle}>
            <FaTimes className={'close-icon'} />
          </div>
          <div className='sidebar-wrapper'>
            <ul className='sidebar-menu'>
              <a className='sidebar-link' href='#' onClick={toggle}>
                Projects
              </a>
              <a className='sidebar-link' href='#' onClick={toggle}>
                Values
              </a>
              <a className='sidebar-link' href='#' onClick={toggle}>
                Contact Me
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
