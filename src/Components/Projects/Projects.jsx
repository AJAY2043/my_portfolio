import React from 'react';
import ScrollReveal from '../Support_Tools/ScrollReveal/ScrollReveal';
import ProjectCard from '../Support_Tools/ProjectCard/ProjectCard';
import { PROJECTS } from '../../AddOns/data/projects';
import './Projects.css';

const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <ScrollReveal>
          <div className="projects-header">
            <span className="eyebrow">My Work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A mix of real client delivery and self-built projects — each one
              taught me something I couldn't have learned from coursework alone.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1} className="featured-wrap">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}

          {rest.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;