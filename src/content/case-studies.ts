/**
 * Case study content.
 *
 * Section 06 ("What changed") ships with placeholder results on purpose. The
 * design's own note reads: fill these with figures you can defend, and delete
 * any card you can't — one real number beats three invented ones. They are
 * rendered as visibly unfilled rather than quietly dropped, so they cannot be
 * published by accident.
 */

export type CaseStudy = {
  id: string;
  n: string;
  name: string;
  link: string;
  img: string;
  kicker: string;
  timeline: string;
  h1a: string;
  h1b: string;
  intro: string;
  meta: ReadonlyArray<{ k: string; v: string }>;
  problem: readonly string[];
  constraint: string;
  roleIntro: string;
  owned: readonly string[];
  decisions: ReadonlyArray<{
    n: string;
    title: string;
    tags: string;
    body: string;
    tradeoff: string;
  }>;
  layers: ReadonlyArray<{ layer: string; detail: string }>;
  craftTitle: string;
  craftIntro: string;
  craft: ReadonlyArray<{ k: string; v: string }>;
  results: readonly string[];
  next: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
      {
        id: "possums", n: "01", name: "Possums", link: "https://possums.org/", img: "/images/possums-website.webp",
        kicker: "Health platform · consolidation", timeline: "Aug 2023 — ongoing",
        h1a: "Several sites,", h1b: "one platform.",
        intro: "Possums helps exhausted parents and the clinicians who support them. The knowledge was excellent; finding it was not. I rebuilt several separate websites into a single platform serving both audiences — programs, free resources and a practitioner directory in one place.",
        meta: [
          { k: "Client", v: "Possums" },
          { k: "My role", v: "Fullstack developer" },
          { k: "Team", v: "Design, product, engineering" },
          { k: "Timeline", v: "Aug 2023 — ongoing" },
        ],
        problem: [
          "The content lived across several separate websites, each with its own navigation, styling and login. A parent at 3am looking for help with an unsettled baby had to guess which site held the answer. A clinician looking for training had the same problem in reverse.",
          "Two very different audiences were being served by one voice, and neither journey was clear. Maintaining separate codebases also meant every change had to be made — and tested — several times over.",
        ],
        constraint: "The users are sleep-deprived. Every extra click, every ambiguous label, every slow page is a person giving up on help they need.",
        roleIntro: "Fullstack developer, working alongside the design and product teams. I owned the front end end-to-end and shared the back end and database work.",
        owned: [
          "Front-end architecture and shared components",
          "Full-stack features from API to interface",
          "SQL → PostgreSQL migration and schema design",
          "Performance, SEO and accessibility work",
        ],
        decisions: [
          {
            n: "01", title: "One platform, two front doors", tags: "Information architecture · Next.js",
            body: "Rather than one homepage trying to speak to parents and clinicians at once, the platform routes each audience into its own path early — parent programs and free resources on one side, professional training and the practitioner directory on the other — while sharing a single codebase, design system and CMS underneath.",
            tradeoff: "More routing and navigation logic to maintain, and a harder cold-start for anyone who doesn't self-identify. Worth it: neither audience wades through content meant for the other.",
          },
          {
            n: "02", title: "A component library before pages", tags: "Design system · Sass",
            body: "Consolidating several separate sites meant a large body of existing content. I built the shared pieces first — layout, typography, cards, forms, media blocks — so pages became compositions rather than bespoke builds. Design handed over patterns, not screens.",
            tradeoff: "Slower for the first weeks, with little visible to show. It paid for itself the first time a global style change shipped in one commit instead of dozens.",
          },
          {
            n: "03", title: "Moving to PostgreSQL", tags: "PostgreSQL · Prisma",
            body: "The merged data model — programs, lessons, practitioners, enrolments — needed real relational integrity. I migrated the project from SQL to PostgreSQL and designed the schema with Prisma, which also gave the team typed queries end to end.",
            tradeoff: "I was learning parts of it as I went, so I moved in stages rather than one cutover. Slower migration, no data loss.",
          },
        ],
        layers: [
          { layer: "Front end", detail: "Next.js · TypeScript · Sass modules" },
          { layer: "API", detail: "NestJS · GraphQL" },
          { layer: "Data", detail: "PostgreSQL via Prisma" },
          { layer: "Content", detail: "Editor-managed pages, resources and courses" },
          { layer: "Quality", detail: "Semantic HTML, keyboard paths, Lighthouse budgets" },
        ],
        craftTitle: "Accessibility",
        craftIntro: "Health information has to reach everyone, including a parent one-handed on a phone in a dark room. Treated as a requirement, not a polish pass.",
        craft: [
          { k: "Semantics first", v: "Real headings, landmarks and lists, so screen readers and skim-readers get the same structure." },
          { k: "Keyboard paths", v: "Every interactive element reachable and visibly focused — no mouse-only journeys." },
          { k: "Contrast & type", v: "Readable sizes and contrast held to WCAG AA, checked in the component library rather than per page." },
          { k: "One-handed use", v: "Mobile-first layouts and generous tap targets, for the parent holding a baby in the other arm." },
        ],
        results: [
          "e.g. traffic or sign-ups after consolidation",
          "e.g. Lighthouse performance / accessibility score",
          "e.g. time to publish a new page, before → after",
        ],
        next: [
          "Two things I'd push for with more time: proper search across programs and resources, so parents stop navigating by menu; and visual regression tests on the shared components, because the design system is now load-bearing across every page.",
          "Saying this out loud isn't a weakness — it's the part that shows I think past shipping.",
        ],
      },
      {
        id: "ndc-institute", n: "02", name: "NDC Institute", link: "https://ndcinstitute.au/", img: "/images/ndc-institute-website.png",
        kicker: "Online education · course delivery", timeline: "2024",
        h1a: "Clinical training,", h1b: "delivered online.",
        intro: "NDC Institute teaches Neuroprotective Developmental Care to health professionals and educators — breastfeeding, sleep, infant development and perinatal mental health. The task was turning a serious clinical curriculum into a course platform busy practitioners could actually get through.",
        meta: [
          { k: "Client", v: "NDC Institute" },
          { k: "My role", v: "Fullstack developer" },
          { k: "Team", v: "Design, product, engineering" },
          { k: "Timeline", v: "2024" },
        ],
        problem: [
          "The audience is health professionals studying between shifts — often on a phone, often interrupted. Long-form clinical content has to be broken into pieces that survive being put down mid-lesson and picked up days later.",
          "It also has to feel credible. Practitioners are paying for professional education, so the platform has to read as authoritative rather than as a marketing site with videos bolted on.",
        ],
        constraint: "Learners are professionals with no spare time. If they lose their place, or can't tell what's left to do, they stop coming back.",
        roleIntro: "Fullstack developer on the platform, building the course experience and the data model behind it alongside design and product.",
        owned: [
          "Course, lesson and enrolment interfaces",
          "GraphQL API work for content and progress",
          "Schema design for courses, modules and users",
          "Responsive, accessible front-end build",
        ],
        decisions: [
          {
            n: "01", title: "Structure the curriculum as data", tags: "Prisma · schema design",
            body: "Courses, modules, lessons and media were modelled as first-class relational entities rather than pages of prose. That let the team reorder a curriculum, reuse a lesson across courses and report on progress without a developer touching markup.",
            tradeoff: "More modelling work before anything was visible, and stricter constraints on how content can be authored. In exchange the curriculum is editable by the people who own it.",
          },
          {
            n: "02", title: "Built for interrupted study", tags: "UX · front end",
            body: "The interface leans on clear lesson boundaries, visible progress and obvious resumption points, so a learner returning after a week can see where they stopped and what remains — rather than scrolling to find their place.",
            tradeoff: "More state to track and keep in sync than a simple video list. Worth it for an audience that studies in fragments.",
          },
          {
            n: "03", title: "Shared foundations with the wider platform", tags: "Design system · reuse",
            body: "NDC sits alongside the other Possums-family properties, so it reuses the same component conventions and stack instead of forking a new one. Fixes and accessibility improvements travel between projects.",
            tradeoff: "Less freedom to design NDC in isolation; some patterns had to be generalised rather than made bespoke. The payoff is one set of habits to maintain, not two.",
          },
        ],
        layers: [
          { layer: "Front end", detail: "Next.js · TypeScript · Sass modules" },
          { layer: "API", detail: "NestJS · GraphQL" },
          { layer: "Data", detail: "Relational schema via Prisma" },
          { layer: "Content", detail: "Courses, modules, lessons, media" },
          { layer: "Quality", detail: "Semantic structure, keyboard paths, responsive" },
        ],
        craftTitle: "What made it hard",
        craftIntro: "Educational platforms fail in quiet ways — people simply don't finish. Most of the care went into the parts that keep someone moving through a course.",
        craft: [
          { k: "Long-form content", v: "Clinical material broken into lessons that stay coherent when read out of order." },
          { k: "Progress & state", v: "Where a learner is, what's next, what's done — visible at every level." },
          { k: "Mixed media", v: "Video, text and downloads presented consistently rather than per-lesson improvisation." },
          { k: "Credibility", v: "Typography and hierarchy that read as professional education, not marketing." },
        ],
        results: [
          "e.g. enrolments or course completions",
          "e.g. completion rate, or drop-off before → after",
          "e.g. performance / accessibility score",
        ],
        next: [
          "The obvious next step is richer assessment and certification — practitioners want evidence of completion they can show an employer or professional body.",
          "After that, analytics on where learners stall. Completion data tells you which lesson needs rewriting, and right now that's guesswork.",
        ],
      },
      {
        id: "delancia", n: "03", name: "Delância", link: "https://delancia.com/", img: "/images/delancia.webp",
        kicker: "eCommerce · freelance, solo build", timeline: "Dec 2024 — ongoing",
        h1a: "Headless store,", h1b: "built solo.",
        intro: "A freelance build for a brand that needed a storefront matching its own identity rather than a themed template. I built a fully custom front end on Shopify's GraphQL API — real product data, motion-led browsing — and ran the project end to end myself.",
        meta: [
          { k: "Client", v: "Delância" },
          { k: "My role", v: "Freelance developer — solo" },
          { k: "Team", v: "Just me, with the client" },
          { k: "Timeline", v: "Dec 2024 — ongoing" },
        ],
        problem: [
          "The brand's identity was too specific for an off-the-shelf theme, but the business still needed everything Shopify gives you for free: inventory, checkout, payments and orders that non-technical staff can manage.",
          "As a solo freelance build, it also had to be maintainable by one person and handable to the client without a developer on retainer.",
        ],
        constraint: "A storefront earns its keep or it doesn't. Every design flourish had to survive the question: does this help someone buy?",
        roleIntro: "Everything. Scoping, design decisions, build, launch and client communication — a solo engagement from first conversation to live site.",
        owned: [
          "Scoping and client communication",
          "Custom front end on the Shopify Storefront API",
          "Product, collection and cart interfaces",
          "Performance, motion and responsive behaviour",
        ],
        decisions: [
          {
            n: "01", title: "Headless, not a theme", tags: "Shopify Storefront API · Next.js",
            body: "The front end is custom and talks to Shopify over GraphQL, so the brand controls every pixel while the client keeps the Shopify admin they already know for products, orders and payments.",
            tradeoff: "More to build and maintain than a theme, and app-ecosystem conveniences have to be replaced by hand. Right call for a brand whose look is the product.",
          },
          {
            n: "02", title: "Motion that serves browsing", tags: "Framer Motion · UX",
            body: "Transitions and reveals are used to make browsing feel considered — but they're tied to real interactions rather than decorating idle screens, and they never delay a product image or a price.",
            tradeoff: "Restraint over spectacle. A flashier site was possible; a faster one sells more.",
          },
          {
            n: "03", title: "Handover as a design goal", tags: "Freelance · maintainability",
            body: "Because the client has no in-house developer, content that changes often — products, imagery, copy, collections — stays in Shopify, and only structural change needs code.",
            tradeoff: "Some layouts are less bespoke than they could be, in exchange for a client who isn't blocked on me for everyday updates.",
          },
        ],
        layers: [
          { layer: "Front end", detail: "Next.js · TypeScript · Framer Motion" },
          { layer: "Commerce", detail: "Shopify Storefront GraphQL API" },
          { layer: "Content", detail: "Products and collections managed in Shopify" },
          { layer: "Delivery", detail: "Solo build — scoping to launch" },
          { layer: "Quality", detail: "Responsive, performance-budgeted, accessible" },
        ],
        craftTitle: "Working solo",
        craftIntro: "No design partner, no reviewer, no product manager. The interesting part of this project was the process, not just the code.",
        craft: [
          { k: "Client comms", v: "Translating brand instinct into scope, and saying no to what wouldn't help sales." },
          { k: "Own reviewer", v: "Reviewing my own work honestly, with checklists standing in for a second pair of eyes." },
          { k: "Scope control", v: "Shipping a strong core rather than a half-finished wishlist." },
          { k: "After launch", v: "Ongoing support and changes — the site is still evolving with the brand." },
        ],
        results: [
          "e.g. conversion rate, or sales since launch",
          "e.g. store speed score vs. previous theme",
          "e.g. client time saved on updates per week",
        ],
        next: [
          "Next up: expanding the merchandising side — better collection filtering and product recommendations, which is where a custom storefront can beat a theme outright.",
          "I'd also add basic analytics instrumentation on the browse-to-cart path, so design changes can be argued from data rather than taste.",
        ],
      },
    ] as const;
