import React from 'react';
import './project.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Project = (props) => {
  return (
    <>
      <div className='project-container'>
        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
          <img
            className='project-image'
            src={props.projectImage}
            alt={props.projectImageAltTag}
          />
          <div className='project-text'>
            <h1 className='project-name'>{props.name}</h1>
            <div className='project-description'>
              <p>{props.descriptionIntro}</p>
              <br />
              <p>{props.descriptionAdditional}</p>
            </div>

            <h6 className='technology-subtitle'>
              Technologies you'll find here:
            </h6>
            <div className='tech-links'>
              <div className='technology-used'>
                {props.technologiesUsed.map((technology) => (
                  <h6>{technology}</h6>
                ))}
              </div>
              <div className='project-links'>
                <a href={props.github} target='_blank' rel='noreferrer'>
                  <img
                    className='project-link-icons github'
                    src='img/github.svg'
                    alt='The Github logo'
                  />
                </a>
                <a href={props.liveWebsite} target='_blank' rel='noreferrer'>
                  <img
                    className='project-link-icons link'
                    src='img/link.svg'
                    alt='A chain link logo representing a external link'
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </>
  );
};
