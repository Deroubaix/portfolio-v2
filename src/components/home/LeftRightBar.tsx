import React from "react";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export default function LeftRightBar() {
  return (
    <>
      <div className="left-stick">
        <div className="icon-container">
          <Link
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={25}  />
          </Link>
          <Link
            href="https://github.com/Deroubaix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={25}  />
          </Link>
        </div>
        <div className="vertical-line"></div>
      </div>
      <div className="right-stick">
        <Link href="mailto:deroubaix.marisha@gmail.com" className="email-link">
          deroubaix.marisha@gmail.com
        </Link>
        <div className="vertical-line"></div>
      </div>
    </>
  );
}

