import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-bg'>
          <video
            className='video-bg'
            autoPlay
            loop
            muted
            src='/vid/video.mp4'
            type='video/mp4'
            alt='Star video loop'
          ></video>
        </div>
        <div className='hero-content'>
          <div className='hero-words'>
            <div className='container drawer'>
              <h1>Hi, my name is Charlie.</h1>
              <h2>Nice to meet you.</h2>
              <p>
                I’m a backend Software Engineer who loves to solve problems and
                making the impossible possible. I’m currently focused on
                building a cutting edge backend system for supplying data to
                various E-commerce stores at Elsevier.
              </p>
            </div>
          </div>
          <div className='hero-image-container'>
            <img
              className='hero-image'
              src='/img/profile.jpeg'
              alt='A man standing with dark hair'
            />
            <div className='hero-image-background'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
