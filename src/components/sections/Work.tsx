"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { work } from "../../content/site";

/**
 * Selected work. Each row links to that project's case study; the live site is
 * reachable from the note beneath.
 *
 * The hover preview is decorative — fine pointers only, hidden under
 * prefers-reduced-motion, and it shows nothing the row does not already say.
 * Positioned by writing transform directly rather than through state, so
 * pointer moves do not trigger a render on every frame.
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
    <section id="work" className="work">
      <div className="band work__head">
        <h2>Selected work</h2>
        <p className="work__hint">
          Hover to preview — click to read the case study
        </p>
      </div>

      {work.map((item) => (
        <Link
          key={item.slug}
          className="work__row"
          href={`/case-studies#${item.slug}`}
          onPointerEnter={() => show(item.img)}
          onPointerLeave={hide}
          onPointerMove={move}
          onFocus={hide}
        >
          <span className="work__n">{item.n}</span>
          <span className="work__title">{item.title}</span>
          <span className="work__stack">{item.stack}</span>
          <span className="work__year">{item.year}</span>
          <span className="work__case">Case →</span>
        </Link>
      ))}

      <div className="work__peek" ref={peekRef} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={peekImgRef} alt="" />
      </div>

      <div className="work__notes">
        {work.map((item) => (
          <div key={item.slug} className="work__note">
            <p className="work__note-label">{item.title}</p>
            <p className="work__note-text">{item.note}</p>
            <p className="work__note-links">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Visit site ↗
              </a>
              <Link href={`/case-studies#${item.slug}`}>Case study →</Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
