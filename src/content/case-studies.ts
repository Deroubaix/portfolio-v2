/**
 * Case study content.
 *
 * `results` is kept but no longer rendered. The outcomes section shipped as
 * three empty "number needed" cards, which advertises a missing answer rather
 * than giving one — worse than having no outcomes section at all. The prompts
 * stay here so the section can be restored the moment there is a figure worth
 * publishing. A Lighthouse score is the realistic first one; traffic and
 * sign-ups are the client's data, not ours to publish.
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
  /** Heading for the decisions block — varies with how much was actually mine. */
  decisionsTitle: string;
  decisionsCaption: string;
  /** Attribution, where the direction came from someone else. */
  decisionsNote?: string;
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
        intro: "Possums helps exhausted parents and the clinicians who support them. The knowledge was excellent; finding it was not. Marketing made the call to bring several separate sites under one domain, for SEO and a single brand; the team rebuilt them as one platform serving both audiences. I have worked on the front end throughout, and I am building the professional side now as NDC Institute moves across.",
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
        roleIntro: "Fullstack developer, working alongside the design and product teams. Most of my work is on the front end, but a fair amount sits behind it: NestJS endpoints, Prisma schema changes, GraphQL, and data migrations against live records.",
        owned: [
          "Front-end architecture and shared components",
          "Full-stack features from API to interface",
          "SQL → PostgreSQL migration and schema design",
          "Performance, SEO and accessibility work",
        ],
        decisionsTitle: "Problems I found and fixed",
        decisionsCaption: "03 — bugs I caught, and what I changed",
        decisionsNote:
          "Product direction came from the team and the architecture calls from my lead. These are problems I found in the code and the fixes I shipped.",
        decisions: [
          {
            n: "01", title: "Draft articles were publicly readable", tags: "Prisma · data integrity",
            body: "The blog listing queried articles without filtering on publish state, so anything saved as a draft was reachable by anyone who found the URL. I added the constraint at the query level in the article service rather than filtering in the component, so it holds everywhere that service is called.",
            tradeoff: "A query-level filter means any future preview mode has to opt out explicitly. Worth it — the safe default should be \"not published\".",
          },
          {
            n: "02", title: "Sign-ins failed on capitalisation", tags: "Prisma · auth",
            body: "Anyone who registered with a capitalised email could not log back in with the lowercase version — the lookup compared the stored string exactly. Fixing it properly took three changes rather than one: a case-insensitive lookup so existing accounts could sign in, normalisation on write so new ones are stored consistently, and an admin-only migration endpoint to clean up the rows already in the database.",
            tradeoff: "My first migration read every user and updated the mismatched ones row by row — one round trip per user for something the database does in a single statement. I replaced it with a raw SQL update three days later. Slower to write twice, far faster to run, and much less to go wrong halfway through.",
          },
          {
            n: "03", title: "The page stopped scrolling", tags: "React · lifecycle",
            body: "The article Progress Tracker locked body scroll while its sidebar was open, but never removed the class when the component unmounted. Navigating away left the whole page unscrollable. I added the cleanup to the effect and reset the sidebar state with it.",
            tradeoff: "Nothing is traded here — it was a missing cleanup, not a design choice. It did change how I work: anything added to the body now gets a paired removal in the same effect.",
          },
          {
            n: "04", title: "The carousel could never reach its last card", tags: "React · shared hook",
            body: "The guest speaker carousel tracked its position with a round of scrollLeft divided by the track width. Cards are sized as a percentage of that track, so the estimate drifts further out with every item — and the last card's left edge never reaches the viewport's, so it could not be selected at all. I measured position off the items themselves, special-cased the end of the scroll, and moved the whole thing into the shared carousel hook, which took 68 lines out of the component. While I was there I hid the dots and arrows when there is nothing to scroll, using a ResizeObserver so it stays correct as the layout changes.",
            tradeoff: "Measuring per item is a little more work on each scroll than a single division. It is correct at any card width, which the division never was.",
          },
        ],
        layers: [
          { layer: "Front end", detail: "Next.js · TypeScript · Sass modules" },
          { layer: "API", detail: "NestJS · GraphQL" },
          { layer: "Data", detail: "PostgreSQL via Prisma" },
          { layer: "Content", detail: "Editor-managed pages, resources and courses" },
          { layer: "Search", detail: "Meilisearch, indexed from the article service" },
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
        decisionsTitle: "Problems I found and fixed",
        decisionsCaption: "03 — bugs I caught, and what I changed",
        decisionsNote:
          "Course structure and product direction came from the team. These are problems I found in the code and the fixes I shipped.",
        decisions: [
          {
            n: "01", title: "Terms couldn't be edited without a deploy", tags: "Next.js · content",
            body: "The terms and conditions page was 370 lines of hardcoded JSX. Every wording change needed a developer and a release. I replaced it with a fetch from the article service, keyed by an ID in config, so the content team edits it in the CMS like any other article.",
            tradeoff: "The page now depends on the backend being reachable, so it needs a sensible failure path. Worth it — legal copy changes more often than anyone plans for.",
          },
          {
            n: "02", title: "Fonts silently stopped loading", tags: "Turbopack · build",
            body: "Montserrat was pulled in with a CSS @import in the shared typography partial. Turbopack strips @import rules when it bundles, so the font quietly failed across every app with no error to follow. I moved it to a link tag in each app's layout, with preconnect, so all three load it the same way.",
            tradeoff: "The font is now declared in three places instead of one. That is the cost of not depending on bundler-specific behaviour.",
          },
          {
            n: "03", title: "Finding a practitioner meant scrolling", tags: "NestJS · API",
            body: "The practitioner directory had no way to search by name, so anyone looking for someone specific scrolled the list. I added public search and autocomplete endpoints on the practitioner controller, filtered to the accreditation and maintenance programmes so only qualified practitioners come back, with a minimum query length so a single keystroke does not scan the table.",
            tradeoff: "The programme IDs come from config rather than the code, so who counts as accredited can change without a deploy. The minimum query length is a blunt guard though — a busier directory would want proper rate limiting rather than a length check.",
          },
          {
            n: "04", title: "Completed work still looked outstanding", tags: "React · UX",
            body: "Required activities carried a red asterisk to mark them as mandatory, but the marker stayed after completion — so finished modules still read as something left to do. I scoped it to incomplete activities and reduced its size so it reads as a marker rather than an error.",
            tradeoff: "Learners can no longer tell at a glance which completed activities had been required. That is on the activity itself, and the list stays legible.",
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
          "It is moving. NDC Institute is being folded into possums.org — marketing's call, for SEO and a single brand — and I am building the professional side of Possums that will host it: the accreditation pathway, course and purchase pages, guest speakers and the professional dashboard. The Education Hub follows after that.",
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
        decisionsTitle: "Decisions & trade-offs",
        decisionsCaption: "03 — what I chose, what I gave up",
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
