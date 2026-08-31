import React from "react";
import { site } from "../../content/site";

export default function Footer() {
  return (
    <footer className="footer shell">
      <h2 className="footer__cta">Let&rsquo;s build something good.</h2>

      <div className="footer__actions">
        <a className="button button--solid" href={`mailto:${site.email}`}>
          Email me
        </a>
        <a
          className="button"
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="button"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>

      <div className="footer__meta">
        <p>
          Designed &amp; built by {site.name.first} {site.name.last} — 2026
        </p>
        <p className="footer__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </footer>
  );
}
