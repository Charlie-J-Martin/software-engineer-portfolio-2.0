import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className='footer-container'>
        <div className='arrow' onClick={toggleHome}>
          <BsFillArrowUpCircleFill
            color='black'
            size={45}
            style={{ paddingLeft: '10px' }}
            alt='An up arrow'
          />
        </div>
        <h4>Charlie Martin Production &copy; {currentYear}</h4>
        <div className='socials-container'>
          <a
            href={
              'https://github.com/Charlie-J-Martin/software-engineer-portfolio-2.0'
            }
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='social-logo'
              src='img/github.svg'
              alt='The Github logo'
            />
          </a>
          <a
            href={'https://www.linkedin.com/in/charlie-martin-617155153/'}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='social-logo'
              src='img/linkedin.svg'
              alt='The LinkedIn logo'
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
