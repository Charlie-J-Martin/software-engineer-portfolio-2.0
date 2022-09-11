import React from 'react';
import 'animate.css';
import Subheading from './Subheading';
import { techData } from '../data/techData';

const intro = () => {
  return (
    <>
      <div className='intro-container'>
        <Subheading number='01.' name='Introduction' />
        <div className='intro-text'>
          <div className='container drawer'>
            <p>
              Welcome to my software engineer showcase!
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
          </div>
        </div>
        <div className='tech-container'>
          <div className='technology-container-child1 typescript'>
            <h3 className='typescript-text'>
              {techData[0].name}{' '}
              <img
                className='technology-logo'
                src={techData[0].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child2 animate__animated animate__pulse animate__slow animate__infinite javascript'>
            <h3 className='javascript-text'>
              {techData[1].name}{' '}
              <img
                className='technology-logo'
                src={techData[1].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child3 animate__animated animate__swing animate__slower animate__infinite nodejs'>
            <h3 className='nodejs-text'>
              {techData[2].name}{' '}
              <img
                className='technology-logo'
                src={techData[2].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child4 graphql'>
            <h3 className='graphql-text'>
              {techData[3].name}{' '}
              <img
                className='technology-logo'
                src={techData[3].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child5 animate__animated animate__pulse animate__slow animate__infinite react'>
            <h3 className='react-text'>
              {techData[4].name}{' '}
              <img
                className='technology-logo'
                src={techData[4].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child6 animate__animated animate__headShake animate__slower animate__infinite mongo'>
            <h3 className='mongo-text'>
              {techData[5].name}{' '}
              <img
                className='technology-logo'
                src={techData[5].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child7 css'>
            <h3 className='css-text'>
              {techData[6].name}{' '}
              <img
                className='technology-logo'
                src={techData[6].imageURL}
                alt=''
              />
            </h3>
          </div>
          <div className='technology-container-child8 animate__animated animate__pulse animate__slow animate__infinite html'>
            <h3 className='html-text'>
              {techData[7].name}{' '}
              <img
                className='technology-logo'
                src={techData[7].imageURL}
                alt=''
              />
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default intro;
