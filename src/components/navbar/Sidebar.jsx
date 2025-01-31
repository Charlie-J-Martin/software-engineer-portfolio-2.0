/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './sidebar.css';

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
              <a className='sidebar-link'>
                <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={toggle}
                >
                  Projects
                </Link>
              </a>
              <a className='sidebar-link'>
                <Link
                  activeClass='active'
                  to='values'
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={toggle}
                >
                  Values
                </Link>
              </a>
              <a className='sidebar-link'>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={toggle}
                >
                  Contact Me
                </Link>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
