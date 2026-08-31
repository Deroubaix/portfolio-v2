import React from "react";
import { site } from "../../content/site";

const SHOUTS = Array.from({ length: 6 });

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__shout" href={`mailto:${site.email}`}>
        <span className="footer__track">
          {SHOUTS.map((_, i) => (
            <span className="footer__word" key={i} aria-hidden={i > 0}>
              Say hello
              <span className="footer__star" aria-hidden="true">
                ✱
              </span>
            </span>
          ))}
        </span>
      </a>

      <div className="footer__meta">
        <span>{site.email}</span>
        <span className="footer__links">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.cv} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </span>
        <span>Designed &amp; built by me — 2026</span>
      </div>
    </footer>
  );
}
