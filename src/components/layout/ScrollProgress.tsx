"use client";

import React, { useEffect, useRef } from "react";

/**
 * Width is written straight to style so scrolling does not re-render.
 * Decorative: it duplicates the scrollbar, so it is hidden from assistive tech.
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
