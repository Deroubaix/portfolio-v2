import React from "react";
import type { Metadata } from "next";
import { site, work, jobs } from "../../content/site";
import { cv } from "../../content/cv";

export const metadata: Metadata = {
  title: "Marisha Deroubaix — CV",
  description: "Full stack developer in Lisbon.",
  robots: { index: false },
};

/** Paid roles only. Ironhack is education and is listed as such below. */
const roles = jobs.filter((j) => j.name !== "Ironhack");

export default function CvPage() {
  return (
    <article className="cv">
      <header className="cv__head">
        <h1 className="cv__name">
          {site.name.first} {site.name.last}
        </h1>
        <p className="cv__role">{site.role}</p>
      </header>

      <dl className="cv__contact">
        <div>
          <dt>Email</dt>
          <dd>{site.email}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{cv.address}</dd>
        </div>
        <div>
          <dt>Portfolio</dt>
          <dd>{cv.portfolio}</dd>
        </div>
      </dl>

      <section className="cv__section">
        <h2 className="cv__h2">Experience</h2>
        {roles.map((job) => (
          <div key={job.name} className="cv__entry">
            <div className="cv__entry-head">
              <h3 className="cv__entry-title">{job.name}</h3>
              <p className="cv__entry-meta">
                {job.role} · {job.period}
              </p>
            </div>
            <ul className="cv__bullets">
              {(cv.achievements[job.name] ?? job.duties).map((d) => (
                <li key={d.slice(0, 28)}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cv__section">
        <h2 className="cv__h2">Selected work</h2>
        <dl className="cv__rows">
          {work.map((w) => (
            <div key={w.slug} className="cv__row">
              <dt>
                {w.title}
                <span className="cv__link">
                  {w.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
              </dt>
              <dd>{w.stack}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cv__section">
        <h2 className="cv__h2">Education</h2>
        <dl className="cv__rows">
          {cv.education.map((e) => (
            <div key={e.what} className="cv__row">
              <dt>
                {e.what}
                <span className="cv__link">{e.where}</span>
              </dt>
              <dd>{e.when}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cv__section">
        <h2 className="cv__h2">Skills</h2>
        <dl className="cv__rows">
          {cv.skills.map((s) => (
            <div key={s.k} className="cv__row">
              <dt>{s.k}</dt>
              <dd>{s.v}</dd>
            </div>
          ))}
          <div className="cv__row">
            <dt>Languages</dt>
            <dd>{cv.languages}</dd>
          </div>
          <div className="cv__row">
            <dt>Interests</dt>
            <dd>{cv.interests}</dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
