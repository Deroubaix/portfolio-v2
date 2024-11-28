"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IconMenu2, IconX, IconHexagonLetterM } from "@tabler/icons-react";

export type HeaderProps = {};

export default function Header(props: HeaderProps) {
  const {} = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  function useClickOutside(
    callback: () => void,
    ref: React.RefObject<HTMLElement>
  ) {
    const savedCallback = useRef(callback);

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          savedCallback.current();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useClickOutside(() => setIsMenuOpen(false), navRef);

  const handleMenuClicked = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="dark-bg">
        <Link href="/" className="header-logo">
          <IconHexagonLetterM />
        </Link>
        <nav
          ref={navRef}
          className={`switch-link-underline-direction ${
            isMenuOpen ? "menu-open" : ""
          }`}
        >
          <Link href="#about-me">
            <span className="emphasised-text">01. </span>about
          </Link>
          <Link href="#experience">
            <span className="emphasised-text">02. </span>experience
          </Link>
          <Link href="#work">
            <span className="emphasised-text">03. </span>work
          </Link>
          <Link href="#projects">
            <span className="emphasised-text">04. </span>projects
          </Link>
          <Link href="#contact">
            <span className="emphasised-text">05. </span>contact
          </Link>
        </nav>
        <Link
          href="#"
          className="menu-toggle no-underline"
          onClick={handleMenuClicked}
        >
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </Link>
      </header>
    </>
  );
}
