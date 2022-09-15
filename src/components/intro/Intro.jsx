import React from 'react';
import 'animate.css';
import Subheading from '../subheading/Subheading';
import { techData } from '../../data/techData';
import './intro.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const intro = () => {
  return (
    <>
      <div className='intro-container'>
        <Subheading number='01.' name='Introduction' />
        <div className='intro-text'>
          <div className='container drawer'>
            <AnimationOnScroll
              animateIn='animate__slideInLeft'
              animateOnce='true'
            >
              <p>
                Welcome to my Software Engineer showcase!
                <br />
                <br />
                Below you can explore some of{' '}
                <span className='key-word'>my projects</span> and a few{' '}
                <span className='key-word'>core values</span> that resonate with
                me as a Software Engineer.
                <br />
                <br />
                Here are some of the{' '}
                <span className='key-word'>technologies</span> that you will see
                while you're here.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className='tech-container'>
          <div className='technology-container-child1 typescript'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='typescript-text'>
                {techData[0].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[0].imageURL}
                  alt='TypeScript Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child2 animate__animated animate__pulse animate__slow animate__infinite javascript'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='javascript-text'>
                {techData[1].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[1].imageURL}
                  alt='JavaScript Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child3 animate__animated animate__swing animate__slower animate__infinite nodejs'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='nodejs-text'>
                {techData[2].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[2].imageURL}
                  alt='NodeJS Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child4 graphql'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='graphql-text'>
                {techData[3].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[3].imageURL}
                  alt='GraphQL Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child5 animate__animated animate__pulse animate__slow animate__infinite react'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='react-text'>
                {techData[4].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[4].imageURL}
                  alt='React Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child6 animate__animated animate__headShake animate__slower animate__infinite mongo'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='mongo-text'>
                {techData[5].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[5].imageURL}
                  alt='MongoDB Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child7 css'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='css-text'>
                {techData[6].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[6].imageURL}
                  alt='CSS Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
          <div className='technology-container-child8 animate__animated animate__pulse animate__slow animate__infinite html'>
            <AnimationOnScroll
              animateIn='animate__zoomIn'
              animateOnce='true'
            >
              <h3 className='html-text'>
                {techData[7].name}{' '}
                <img
                  className='technology-logo'
                  src={techData[7].imageURL}
                  alt='HTML Logo'
                />
              </h3>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export default intro;
