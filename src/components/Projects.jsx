import React from 'react';
import Subheading from './Subheading';
import { Project } from './Project';
import { projectsData } from '../data/projectsData';

function createProject(project) {
  return (
    <Project
      key={project.id}
      listId={project.id}
      projectImage={project.projectImage}
      name={project.name}
      description={project.description}
      github={project.github}
      liveWebsite={project.liveWebsite}
      technologiesUsed={project.technologiesUsed}
    />
  );
}

const Projects = () => {
  return (
    <>
      <div className='projects-container' id='projects'>
        <Subheading number='02.' name='Projects' />
        {projectsData.map(createProject)}
      </div>
    </>
  );
};

export default Projects;
