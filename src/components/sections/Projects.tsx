import React from "react";
import { projects } from "../../content/site";

export default function Projects() {
  return (
    <section id="projects" className="section shell projects">
      <div className="section-head">
        <h2 className="section-head__label">Projects — built for the fun of it</h2>
        <span className="section-head__rule" aria-hidden="true" />
      </div>

      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="projects__item">
            <p className="projects__kind">{p.kind}</p>
            <h3 className="projects__title">{p.title}</h3>
            <p className="projects__stack">{p.stack}</p>
            <p className="projects__blurb">{p.blurb}</p>
            <p className="projects__links">
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                Live ↗
              </a>
              <a href={p.code} target="_blank" rel="noopener noreferrer">
                Code ↗
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
