import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, subtitle, description, image, tags, liveUrl, githubUrl, featured } = project;

  return (
    <div className={`project-card glass-card ${featured ? 'featured' : ''}`}>
      <div className="project-card-image-wrap">
        {featured && (
          <span className="project-card-featured-badge">
            <FontAwesomeIcon icon={faStar} />
            Live Client Project
          </span>
        )}
        <img src={image} alt={title} />
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-subtitle">{subtitle}</p>
        <p className="project-card-desc">{description}</p>

        <div className="project-card-tags">
          {tags.map((tag) => (
            <span className="project-card-tag" key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-card-links">
          {liveUrl && (
            
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link primary"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Live Site
            </a>
          )}
          {githubUrl && (
            
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;