import React from "react";
import Image from "next/image";
import { about } from "../../content/site";

export default function About() {
  return (
    <section id="about" className="section shell about">
      <div className="section-head">
        <h2 className="section-head__label">About</h2>
        <span className="section-head__rule" aria-hidden="true" />
      </div>

      <div className="about__grid">
        <div>
          <p className="about__intro">{about.intro}</p>
          <div className="about__body">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <figure className="about__figure">
          <Image
            className="about__portrait"
            src={about.portrait}
            alt="Marisha Deroubaix"
            width={640}
            height={800}
          />
          <figcaption className="about__caption">{about.figure}</figcaption>
        </figure>
      </div>
    </section>
  );
}
