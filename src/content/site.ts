// All site copy. Kept out of the components so the same fact cannot drift
// between sections.

export const site = {
  name: { first: "Marisha", last: "Deroubaix" },
  role: "Full stack developer",
  location: "Lisbon / remote",
  edition: "Portfolio no. 03 — 2026",
  email: "deroubaix.marisha@gmail.com",
  github: "https://github.com/Deroubaix",
  linkedin: "https://www.linkedin.com/in/marisha-deroubaix",
  cv: "/CV_Marisha-Deroubaix.pdf",

  lead: "I build accessible, fast websites end to end, and I care most about the parts nobody praises.",

  stack: [
    { label: "Front", value: "Next.js, TypeScript, Sass" },
    { label: "Back", value: "NestJS, Prisma, GraphQL" },
    { label: "Data", value: "PostgreSQL" },
  ],

  now: "Currently at Possums, building for parents and clinicians.",
} as const;

/** Index of professional work. `img` drives the hover preview. */
export const work = [
  {
    n: "01",
    title: "Possums",
    year: "2023—",
    stack: "Next.js · NestJS · GraphQL · Prisma",
    link: "https://possums.org/",
    img: "/images/possums-website.webp",
    slug: "possums",
    note: "Several separate sites consolidated into one platform: parent programs, free resources and a practitioner directory, built for clinicians and exhausted parents alike.",
  },
  {
    n: "02",
    title: "NDC Institute",
    year: "2024",
    stack: "Next.js · NestJS · GraphQL · SQL",
    link: "https://ndcinstitute.au/",
    img: "/images/ndc-institute-website.png",
    slug: "ndc-institute",
    note: "Online education in Neuroprotective Developmental Care: courses on breastfeeding, sleep, infant development and perinatal mental health.",
  },
  {
    n: "03",
    title: "Delância",
    year: "2025",
    stack: "Next.js · Shopify · GraphQL · Motion",
    link: "https://delancia.com/",
    img: "/images/delancia.webp",
    slug: "delancia",
    note: "A custom storefront on Shopify's GraphQL API, with real-time product data and motion-led browsing. Shipped solo, end to end.",
  },
  {
    n: "04",
    title: "Marc Bonaventure",
    year: "2026",
    stack: "Next.js · Prisma · PostgreSQL · Mantine",
    link: "https://www.marcbonaventure.com/",
    img: "/images/marc-bonaventure.webp",
    slug: "marc-bonaventure",
    note: "A site for a French poet living in Belém: his trilogy, an agenda of readings, a gallery. Behind a password, a small CMS so he posts photographs and events himself, without a developer.",
  },
] as const;

export const about = {
  figure: "Fig. 01 — the developer",
  intro:
    "It began in 2017, teaching myself Swift, then took a hard turn into the web and became a career at a bootcamp in Lisbon.",
  paragraphs: [
    "Today I work across the whole stack at a start-up: interfaces and design systems on the front, Prisma, NestJS and GraphQL behind them. I like the unglamorous work: accessibility, performance, and code the next person can actually read.",
    "Outside of work I am building The Sommelier's Ledger, a blind tasting app that walks through the systematic approach from sight to final conclusion and keeps a record of what you have tasted. It is not live yet, since mobile and testing come first, but it is the one where every decision is mine.",
  ],
  portrait: "/images/marisha-photo.jpeg",
} as const;

export const jobs = [
  {
    name: "Possums",
    role: "Fullstack Developer",
    period: "Aug 2023 — Present",
    duties: [
      "Built and maintained the company web platform, focused on accessible, user-friendly interfaces.",
      "Shipped full-stack features end to end, integrating APIs and databases.",
      "Migrated from SQL to PostgreSQL, designing and managing the relational schema.",
      "Improved performance and SEO, lifting engagement across the site.",
    ],
  },
  {
    name: "Delância",
    role: "Freelance Developer",
    period: "Dec 2024 — Present",
    duties: [
      "Designed and built a fully responsive site tailored to the client's brand.",
      "Integrated dynamic Shopify-driven features across devices.",
      "Ran the project solo, from scoping to launch and client comms.",
    ],
  },
  {
    name: "Marc Bonaventure",
    role: "Freelance Developer",
    period: "Sep 2026",
    duties: [
      "Built a Portuguese-language author site with a password-protected CMS, so the poet posts his own readings and photographs.",
      "Modelled events, media and site copy in Prisma and PostgreSQL, with server actions in place of a separate API.",
      "Put uploads behind a storage interface, moving from local disk to Cloudinary and R2 without touching the upload path.",
    ],
  },
  {
    name: "Ironhack",
    role: "Fullstack Bootcamp — Lisbon",
    period: "Jan 2023 — Apr 2023",
    duties: [
      "Intensive full-stack bootcamp in modern web technologies.",
      "Built and deployed several full-stack applications, front to back.",
      "Designed, developed and presented team projects under deadline.",
    ],
  },
] as const;

/** Side projects. Labelled "Projects" in the UI, not "lab". */
export type Project = {
  kind: string;
  title: string;
  stack: string;
  blurb: string;
  /** Absent while there is nothing deployed to link to. */
  live?: string;
  code: string;
};

export const projects: readonly Project[] = [
  {
    kind: "Exam practice · in progress",
    title: "The Sommelier's Ledger",
    stack: "Next.js · Prisma · PostgreSQL",
    blurb:
      "Practice for the Court of Master Sommeliers deductive tasting grid: five phases against the exam clock, then the sheet is saved so you can see how your calls held up once you knew the answer.",
    code: "https://github.com/Deroubaix/blind-tasting-app/",
  },
  {
    kind: "Game",
    title: "Escape Baixa",
    stack: "JavaScript · Canvas",
    blurb:
      "A canvas side-scroller set on one of Lisbon's busiest streets. Jump the obstacles, or lose a life and live with the side effects.",
    live: "https://escapebaixa.vercel.app/",
    code: "https://github.com/Deroubaix/Project-One/",
  },
] as const;
