import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer-container">
      <footer className="dark-bg footer">
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Deroubaix"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub size={24} />
          </a>
        </div>
        <Link
          href="https://github.com/Deroubaix"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2024. Made by Marisha Deroubaix
        </Link>
      </footer>
    </section>
  );
}
