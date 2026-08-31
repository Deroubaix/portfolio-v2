import React from "react";
import { site } from "../../content/site";

export default function Hero() {
  return (
    <section id="top" className="hero shell">
      <div className="meta-row hero__meta">
        <p>{site.role}</p>
        <p className="meta-row__center">{site.location}</p>
        <p className="meta-row__end">{site.edition}</p>
      </div>

      <h1 className="hero__name">
        <span className="hero__line">
          <span className="hero__rise">{site.name.first}</span>
        </span>
        <span className="hero__line">
          <span className="hero__rise hero__rise--last">{site.name.last}</span>
        </span>
      </h1>

      <div className="hero__summary">
        <div>
          <p className="hero__lead">{site.lead}</p>
        </div>

        <div>
          <dl className="hero__stack">
            {site.stack.map((row) => (
              <div key={row.label}>
                <dt>{row.label} —</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="hero__now">{site.now}</p>
          <div className="hero__actions">
            <a className="button button--solid" href={`mailto:${site.email}`}>
              Email me
            </a>
            <a className="button" href={site.cv} download>
              CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
