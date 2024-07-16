import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer-container" style={{ blockSize: "auto" }}>
      <footer className="dark-bg">
        <div className="links">
          <Link href="">projects</Link>
          <Link href="">about</Link>
          <Link href="">contact</Link>
        </div>
      </footer>
    </section>
  );
}
