/**
 * Single source of truth for site copy.
 *
 * Kept out of the components so wording can be reviewed and changed without
 * touching markup — and so the same facts cannot drift between sections.
 */

export const site = {
  name: { first: "Marisha", last: "Deroubaix" },
  role: "Full stack developer",
  location: "Lisbon / remote",
  edition: "Portfolio no. 03 — 2026",
  email: "deroubaix.marisha@gmail.com",
  github: "https://github.com/Deroubaix",
  linkedin: "https://www.linkedin.com/in/marisha-deroubaix",
  cv: "/CV_Marisha-Deroubaix.pdf",

  lead: "I build accessible, fast websites end to end — and I care most about the parts nobody praises.",

  stack: [
    { label: "Front", value: "Next.js, TypeScript, Sass" },
    { label: "Back", value: "NestJS, Prisma, GraphQL" },
    { label: "Data", value: "PostgreSQL" },
  ],

  now: "Currently at Possums, building for parents and clinicians.",
} as const;
