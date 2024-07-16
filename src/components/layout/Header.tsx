"use client";

import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotoIcon from "../../../public/images/Marisha.jpg";

export type HeaderProps = {

};

export default function Header(props: HeaderProps) {
  const {  } = props;

  const [navEl, setNavEl] = useState<HTMLElement | null>(null);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClicked: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

 /*  useClickOutside(() => setIsMenuOpen(false), null, [navEl, menuEl]); */

  return (
    <>
      <header className="dark-bg">
        <Link href="/" className="header-logo ndc-logo">
          <Image src={PhotoIcon} alt=""></Image>
        </Link>
        <nav
          ref={setNavEl}
          className={`switch-link-underline-direction ${
            isMenuOpen ? "menu-open" : ""
          }`}
          onClick={handleMenuClicked}
        >
          <Link href="#about-me">about</Link>
          <Link href="#projects">projects</Link>
          <Link href="#contact">contact</Link>
       
        </nav>
        <Link
          ref={setMenuEl}
          href="#"
          className="menu-toggle"
          onClick={handleMenuClicked}
        >
        {/*   <IconMenu2 /> */}
        </Link>
      </header>
    </>
  );
}
