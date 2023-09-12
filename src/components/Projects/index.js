import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Portfolio</Title>
        <Desc>
          Explore a variety of projects I've been a part of, ranging from web apps to research endeavors.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All Projects
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All Projects
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>
              Web Apps
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>
              Web Apps
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'research' ? (
            <ToggleButton active value="research" onClick={() => setToggle('research')}>
              Research
            </ToggleButton>
          ) : (
            <ToggleButton value="research" onClick={() => setToggle('research')}>
              Research
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'microprocessors' ? (
            <ToggleButton active value="microprocessors" onClick={() => setToggle('microprocessors')}>
              Microprocessors
            </ToggleButton>
          ) : (
            <ToggleButton value="microprocessors" onClick={() => setToggle('microprocessors')}>
              Microprocessors
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
