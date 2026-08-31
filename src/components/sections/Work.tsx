"use client";

import React, { useRef } from "react";
import { work } from "../../content/site";

/**
 * Index of work. Hovering a row lifts a preview that tracks the cursor.
 *
 * The preview is decorative: it only appears for fine pointers, is hidden
 * under prefers-reduced-motion, and carries no information that isn't already
 * in the row. Positioned by writing transform directly rather than through
 * state, so pointer moves don't trigger a React render on every frame.
 */
export default function Work() {
  const peekRef = useRef<HTMLDivElement>(null);
  const peekImgRef = useRef<HTMLImageElement>(null);

  const fine = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const show = (src: string) => {
    if (!fine() || !peekRef.current || !peekImgRef.current) return;
    peekImgRef.current.src = src;
    peekRef.current.classList.add("is-visible");
  };

  const hide = () => peekRef.current?.classList.remove("is-visible");

  const move = (e: React.PointerEvent) => {
    if (!fine() || !peekRef.current) return;
    peekRef.current.style.transform = `translate3d(${e.clientX - 170}px, ${
      e.clientY - 108
    }px, 0)`;
  };

  return (
    <section id="work" className="section shell work">
      <div className="section-head">
        <h2 className="section-head__label">Index of work</h2>
        <span className="section-head__rule" aria-hidden="true" />
      </div>

      <ul className="work__rows">
        {work.map((item) => (
          <li key={item.slug}>
            <a
              className="work__row"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onPointerEnter={() => show(item.img)}
              onPointerLeave={hide}
              onPointerMove={move}
              onFocus={hide}
            >
              <span className="work__n">{item.n}</span>
              <span className="work__title">{item.title}</span>
              <span className="work__stack">{item.stack}</span>
              <span className="work__year">{item.year}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="work__peek" ref={peekRef} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={peekImgRef} alt="" />
      </div>

      <div className="work__notes">
        {work.map((item) => (
          <div key={item.slug}>
            <p className="work__note-label">{item.title}</p>
            <p className="work__note-text">{item.note}</p>
            <p className="work__note-links">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Visit ↗
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
