import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "../../../content/case-studies";
import { site } from "../../../content/site";

type Params = { params: { slug: string } };

/** One static page per study, so each has a real shareable URL. */
export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = caseStudies.find((s) => s.id === params.slug);
  if (!study) return {};
  return {
    title: `${study.name} — case study · Marisha Deroubaix`,
    description: study.intro,
  };
}

export default function CaseStudyPage({ params }: Params) {
  const index = caseStudies.findIndex((s) => s.id === params.slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="cs">
      <div className="cs__bar">
        <Link href="/">← Index</Link>
        <span className="cs__counter">
          Case studies — {study.n} / 0{caseStudies.length}
        </span>
        <a href={study.link} target="_blank" rel="noopener noreferrer">
          Live site ↗
        </a>
      </div>

      <nav className="cs__tabs" aria-label="Case studies">
        {caseStudies.map((s) => (
          <Link
            key={s.id}
            href={`/case-studies/${s.id}`}
            className={`cs__tab${s.id === study.id ? " is-active" : ""}`}
            aria-current={s.id === study.id ? "page" : undefined}
          >
            <span className="cs__tab-n">{s.n}</span>
            {s.name}
          </Link>
        ))}
      </nav>

      <header className="cs__intro">
        <div className="cs__kicker">
          <span>{study.kicker}</span>
          <span>{study.timeline}</span>
        </div>

        <h1 className="cs__title">
          <span className="cs__line">
            <span className="cs__rise">{study.h1a}</span>
          </span>
          <span className="cs__line">
            <span className="cs__rise cs__rise--muted">{study.h1b}</span>
          </span>
        </h1>

        <p className="cs__lede">{study.intro}</p>

        <dl className="cs__meta">
          {study.meta.map((m) => (
            <div key={m.k} className="cs__meta-item">
              <dt className="cs__meta-k">{m.k}</dt>
              <dd className="cs__meta-v">{m.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="cs__shot">
        <Image
          src={study.img}
          alt={`${study.name} — screenshot`}
          width={1600}
          height={900}
          sizes="100vw"
          priority
        />
      </div>

      <section className="cs__split">
        <div>
          <h2 className="cs__h2">01 — The problem</h2>
          <div className="cs__prose">
            {study.problem.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="cs__callout">
            <p className="cs__callout-k">The real constraint</p>
            <p className="cs__callout-v">{study.constraint}</p>
          </div>
        </div>

        <div>
          <h2 className="cs__h2">02 — My role</h2>
          <div className="cs__prose">
            <p>{study.roleIntro}</p>
          </div>
          <div className="cs__arrows">
            {study.owned.map((o) => (
              <p key={o.slice(0, 24)} className="cs__arrow">
                <span>{o}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="cs__block">
        <h2 className="cs__h2 cs__h2--display">Decisions &amp; trade-offs</h2>
        <p className="cs__caption">03 — what I chose, what I gave up</p>

        {study.decisions.map((d) => (
          <div key={d.n} className="cs__decision">
            <div>
              <p className="cs__decision-n">{d.n}</p>
              <h3 className="cs__decision-title">{d.title}</h3>
              <p className="cs__decision-tags">{d.tags}</p>
            </div>
            <div>
              <div className="cs__prose">
                <p>{d.body}</p>
              </div>
              <div className="cs__callout">
                <p className="cs__callout-k">Trade-off</p>
                <p className="cs__callout-v">{d.tradeoff}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="cs__split">
        <div>
          <h2 className="cs__h2">04 — How it&rsquo;s built</h2>
          <dl className="cs__rows">
            {study.layers.map((l) => (
              <div key={l.layer} className="cs__row">
                <dt className="cs__row-k">{l.layer}</dt>
                <dd className="cs__row-v">{l.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="cs__h2">05 — {study.craftTitle}</h2>
          <div className="cs__prose">
            <p>{study.craftIntro}</p>
          </div>
          <dl className="cs__rows">
            {study.craft.map((c) => (
              <div key={c.k} className="cs__row">
                <dt className="cs__row-k">{c.k}</dt>
                <dd className="cs__row-v">{c.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cs__block">
        <h2 className="cs__h2 cs__h2--display">What changed</h2>
        <p className="cs__caption">06 — outcomes</p>

        <div className="cs__results">
          {study.results.map((r) => (
            <div key={r} className="cs__result">
              <p className="cs__result-value">Number needed</p>
              <p className="cs__result-hint">{r.replace(/^e\.g\.\s*/, "")}</p>
            </div>
          ))}
        </div>

        <p className="cs__note">
          These are deliberately unfilled. Fill them with figures you can
          defend, and delete any card you can&rsquo;t — one real number beats
          three invented ones.
        </p>
      </section>

      <section className="cs__block">
        <div className="cs__split">
          <div>
            <h2 className="cs__h2">07 — What I&rsquo;d do next</h2>
            <div className="cs__prose">
              {study.next.map((n) => (
                <p key={n.slice(0, 24)}>{n}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="cs__end">
          <div>
            <p className="cs__next-label">Next case study</p>
            <Link className="cs__next-link" href={`/case-studies/${next.id}`}>
              {next.name} →
            </Link>
          </div>
          <p className="cs__end-links">
            <a href={study.link} target="_blank" rel="noopener noreferrer">
              Visit {study.name} ↗
            </a>
            <Link href="/">All work</Link>
          </p>
        </div>
      </section>

      <div className="band cs__foot">
        <Link href="/">← Index</Link>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span>
          {site.name.first} {site.name.last} — 2026
        </span>
      </div>
    </article>
  );
}
