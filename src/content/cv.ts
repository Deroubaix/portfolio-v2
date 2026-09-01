// CV-only content. Roles, links and the stack come from site.ts and
// case-studies.ts so the CV and the site cannot disagree.

export const cv = {
  address: "Lisbon, Portugal",
  portfolio: "marishaderoubaix.vercel.app",

  /** Achievements per role, drawn from real commits. */
  achievements: {
    Possums: [
      "Front-end development on the company platform, building accessible interfaces for two audiences: parents and clinicians.",
      "Ship full-stack features end to end: NestJS endpoints, Prisma schema changes, GraphQL and data migrations against live records.",
      "Fixed sign-ins that failed on capitalisation, across the lookup, the write path and the existing rows.",
      "Unified the parent and professional signup flows behind one generic checkout hook, removing roughly 350 lines of divergent code from a payment path and recovering the case where an existing email would otherwise have to start over.",
      "Corrected subscription access so a cancelled plan stays valid until the paid period ends, and centralised the entitlement check so two services could not disagree about who has access.",
    ],
    "Delância": [
      "Designed and built a custom Shopify storefront on the GraphQL Storefront API, with real-time product data.",
      "Ran the project solo: scoping, build, launch and client communication.",
    ],
  } as Record<string, readonly string[]>,

  education: [
    {
      what: "Fullstack Web Development bootcamp",
      where: "Ironhack, Lisbon",
      when: "Jan 2023 – Apr 2023",
    },
    { what: "iOS development", where: "Udacity", when: "2018" },
    { what: "Swift, then web development", where: "Self-taught", when: "From 2017" },
  ],

  skills: [
    { k: "Languages", v: "JavaScript, TypeScript, SQL, HTML, CSS, Sass" },
    { k: "Frameworks", v: "React, Next.js, NestJS, Prisma, GraphQL" },
    { k: "Tools", v: "Git, PostgreSQL, Docker, Meilisearch" },
  ],

  languages: "Portuguese, English",
  interests: "Hiking, sci-fi, photography, coding",
} as const;
