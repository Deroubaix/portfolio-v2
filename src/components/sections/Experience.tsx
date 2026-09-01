import React from "react";
import { jobs } from "../../content/site";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2 className="experience__label">Experience</h2>

      {jobs.map((job) => (
        <article key={job.name} className="experience__job">
          <div>
            <p className="experience__period">{job.period}</p>
            <h3 className="experience__name">{job.name}</h3>
            <p className="experience__role">{job.role}</p>
          </div>

          <div className="experience__duties">
            {job.duties.map((d) => (
              <p key={d.slice(0, 24)} className="experience__duty">
                <span>{d}</span>
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
