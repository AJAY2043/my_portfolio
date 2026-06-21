import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

function ProjectCard(props) {
  const project = props.project;
  const title = project.title;
  const subtitle = project.subtitle;
  const description = project.description;
  const image = project.image;
  const tags = project.tags;
  const liveUrl = project.liveUrl;
  const githubUrl = project.githubUrl;
  const featured = project.featured;

  let cardClassName = 'project-card glass-card';
  if (featured === true) {
    cardClassName = 'project-card glass-card featured';
  }

  let badge = null;
  if (featured === true) {
    badge = (
      <span className="project-card-featured-badge">
        <FontAwesomeIcon icon={faStar} />
        Live Client Project
      </span>
    );
  }

  let liveButton = null;
  if (liveUrl) {
    liveButton = (
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-card-link primary">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        Live Site
      </a>
    );
  }

  let codeButton = null;
  if (githubUrl) {
    codeButton = (
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <FontAwesomeIcon icon={faGithub} />
        Code
      </a>
    );
  }

  const tagElements = tags.map(function (tag) {
    return (
      <span className="project-card-tag" key={tag}>
        {tag}
      </span>
    );
  });

  return (
    <div className={cardClassName}>
      <div className="project-card-image-wrap">
        {badge}
        <img src={image} alt={title} />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-subtitle">{subtitle}</p>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">{tagElements}</div>
        <div className="project-card-links">
          {liveButton}
          {codeButton}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;