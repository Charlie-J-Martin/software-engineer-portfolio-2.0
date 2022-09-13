import React from 'react';

export const Project = (props) => {
  return (
    <>
      <div className='project-container'>
        <img className='project-image' src={props.projectImage} alt='' />
        <div className='project-text'>
          <h1 className='project-name'>{props.name}</h1>
          <p className='project-description'>{props.description}</p>
          <div className='project-links'>
            <a href={props.github} target='_blank' rel='noreferrer'>
              <img
                className='project-link-icons github'
                src='/img/github.svg'
                alt=''
              />
            </a>
            <a href={props.liveWebsite} target='_blank' rel='noreferrer'>
              <img
                className='project-link-icons link'
                src='/img/link.svg'
                alt=''
              ></img>
            </a>
          </div>
          <h6 className='technology-subtitle'>
            Technologies you'll find here:
          </h6>
          <div className='technology-used'>
            {props.technologiesUsed.map((technology) => (
              <h6>{technology}</h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
