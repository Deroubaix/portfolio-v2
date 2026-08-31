import React from "react";
import { jobs } from "../../content/site";

export default function Experience() {
  return (
    <section id="experience" className="section shell experience">
      <div className="section-head">
        <h2 className="section-head__label">Experience</h2>
        <span className="section-head__rule" aria-hidden="true" />
      </div>

      {jobs.map((job) => (
        <article key={job.name} className="experience__job">
          <p className="experience__period">{job.period}</p>
          <div>
            <h3 className="experience__name">{job.name}</h3>
            <p className="experience__role">{job.role}</p>
            <ul className="experience__duties">
              {job.duties.map((d) => (
                <li key={d.slice(0, 24)}>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
