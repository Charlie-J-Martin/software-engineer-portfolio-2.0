import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className='nav'>
        <div className='nav-container'>
          <div className='nav-logo' onClick={toggleHome}>
            <img className='logo' src='/img/logo.png' alt='' />
          </div>
          <div className='mobile-icon' onClick={toggle}>
            <FaBars />
          </div>
          <nav>
            <div className='nav-menu'>
              <div className='nav-item'>
                <ul className='nav-links'>
                  <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    <p className='nav-heading'>Projects</p>
                  </Link>
                </ul>
              </div>
              <div className='nav-item'>
                <ul className='nav-links'>
                  <Link
                    activeClass='active'
                    to='values'
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    <p className='nav-heading'>Values</p>
                  </Link>
                </ul>
              </div>
              <div className='nav-item'>
                <ul className='nav-links'>
                  <Link
                    activeClass='active'
                    to='contact'
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    <p className='nav-heading'>Contact Me</p>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
