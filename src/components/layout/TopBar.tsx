"use client";

import React, { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

/** Live Lisbon time. Renders nothing until mounted so SSR and client agree. */
function useLisbonTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Europe/Lisbon",
        }).format(new Date())
      );

    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return time;
}

/** Highlights whichever section currently occupies the upper viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-10% 0px -70% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

/** Width tracks scroll position. Written directly to style, not state. */
function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) {
        ref.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ref;
}

export default function TopBar() {
  const time = useLisbonTime();
  const active = useActiveSection();
  const progressRef = useScrollProgress();

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <header className="top-bar">
      <a href="#top" className="top-bar__mark">
        M. Deroubaix
      </a>

      <nav className="top-bar__nav" aria-label="Sections">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? "is-active" : undefined}
            aria-current={active === s.id ? "true" : undefined}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <p className="top-bar__clock">
        <span className="top-bar__dot" aria-hidden="true" />
        {/* suppressHydrationWarning: the clock is client-only by design */}
        <span suppressHydrationWarning>{time ?? "--:--"} LIS</span>
      </p>
      </header>
    </>
  );
}
