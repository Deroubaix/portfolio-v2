import React from "react";
import Image from "next/image";
import { about } from "../../content/site";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__prose">
        <h2 className="about__label">About</h2>
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
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
        <figcaption className="about__caption">{about.figure}</figcaption>
      </figure>
    </section>
  );
}
