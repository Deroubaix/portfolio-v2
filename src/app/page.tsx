import React from "react";
import type { Metadata } from "next";
import TopBar from "../components/layout/TopBar";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Footer from "../components/layout/Footer";
import { site } from "../content/site";
import { baseUrl } from "../lib/base-url";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl()}/#marisha`,
    name: `${site.name.first} ${site.name.last}`,
    url: baseUrl(),
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    description: site.lead,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lisbon",
      addressCountry: "PT",
    },
    knowsAbout: site.stack.map((s) => s.value).join(", "),
    sameAs: [site.github, site.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: baseUrl(),
    name: `${site.name.first} ${site.name.last}`,
    inLanguage: "en",
    publisher: { "@id": `${baseUrl()}/#marisha` },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <main className="page">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
