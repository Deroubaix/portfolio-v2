"use client";

import React, { useEffect, useRef } from "react";

/**
 * Reading progress bar. Present on every page.
 *
 * Width is written straight to style rather than held in state, so scrolling
 * does not re-render. Decorative — it duplicates the scrollbar, so it is
 * hidden from assistive tech and dropped under reduced motion (in CSS).
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) {
        ref.current.style.width = `${
          max > 0 ? (window.scrollY / max) * 100 : 0
        }%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="progress" ref={ref} aria-hidden="true" />;
}
