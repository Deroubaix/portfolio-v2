/**
 * `results` holds real, checkable figures only, and the outcomes section is
 * rendered only where they exist. A study with nothing measured yet omits the
 * field rather than shipping empty "number needed" cards.
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
  /** Short form of `intro`, kept under 160 characters for search and share cards. */
  summary: string;
  meta: ReadonlyArray<{ k: string; v: string }>;
  problem: readonly string[];
  constraint: string;
  roleIntro: string;
  owned: readonly string[];
  /** Heading for the decisions block. Varies with how much was actually mine. */
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
  results?: ReadonlyArray<{ k: string; v: string }>;
  /** Attribution, so a project outcome is not read as a personal one. */
  resultsNote?: string;
  next: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
      {
        id: "possums", n: "01", name: "Possums", link: "https://possums.org/", img: "/images/possums-website.webp",
        kicker: "Health platform · consolidation", timeline: "Aug 2023 — ongoing",
        h1a: "Several sites,", h1b: "one platform.",
        intro: "Possums helps exhausted parents and the clinicians who support them. The knowledge was excellent; finding it was not. The parent programs sat on one domain, the marketing that explained them on a second called Dr Pam, and the professional training on a third, NDC Institute. Marketing made the call to bring everything under possums.org, for SEO and a single brand. I have worked across the platform throughout: the programs app, the shared component and type packages the other apps build on, and the API and schema behind them. Dr Pam moved across last year; NDC Institute is next, and that is the part I am building now.",
        summary:
          "Parent programs, marketing and clinician training moving under one domain. Front end throughout, with NestJS, Prisma and GraphQL behind it.",
        meta: [
          { k: "Client", v: "Possums" },
          { k: "My role", v: "Fullstack developer" },
          { k: "Team", v: "Design, product, engineering" },
          { k: "Timeline", v: "Aug 2023 — ongoing" },
        ],
        problem: [
          "The content lived across separate websites, each with its own navigation, styling and login. A parent who arrived through the marketing site had to cross to a different domain to reach the programs it described, and a parent at 3am with an unsettled baby had to guess which site held the answer. A clinician looking for training had the same problem in reverse.",
          "Two very different audiences were being served by one voice, and neither journey was clear. Maintaining separate codebases also meant every change had to be made, and tested, several times over.",
        ],
        constraint: "The users are sleep-deprived. Every extra click, every ambiguous label, every slow page is a person giving up on help they need.",
        roleIntro: "Fullstack developer, working alongside the design and product teams. Most of my work is on the front end, including the shared component and type packages the other apps depend on, but a fair amount sits behind it: NestJS endpoints, Prisma schema changes, GraphQL, and data migrations against live records. Most recently I worked on a subscription model change, replacing short plans with multi-year ones, which meant keeping every existing subscriber working while the model shifted underneath them.",
        owned: [
          "Front-end architecture and shared components",
          "Full-stack features from API to interface",
          "SQL → PostgreSQL migration and schema design",
          "Subscription model migration, including legacy plan support",
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
            tradeoff: "A query-level filter means any future preview mode has to opt out explicitly. Worth it, because the safe default should be \"not published\".",
          },
          {
            n: "02", title: "Sign-ins failed on capitalisation", tags: "Prisma · auth",
            body: "Anyone who registered with a capitalised email could not log back in with the lowercase version, because the lookup compared the stored string exactly. Fixing it properly took three changes rather than one: a case-insensitive lookup so existing accounts could sign in, normalisation on write so new ones are stored consistently, and an admin-only migration endpoint to clean up the rows already in the database.",
            tradeoff: "My first migration read every user and updated the mismatched ones row by row. That is one round trip per user for something the database does in a single statement. I replaced it with a raw SQL update three days later. Slower to write twice, far faster to run, and much less to go wrong halfway through.",
          },
          {
            n: "03", title: "The page stopped scrolling", tags: "React · lifecycle",
            body: "The article Progress Tracker locked body scroll while its sidebar was open, but never removed the class when the component unmounted. Navigating away left the whole page unscrollable. I added the cleanup to the effect and reset the sidebar state with it.",
            tradeoff: "Nothing is traded here. It was a missing cleanup, not a design choice. It did change how I work: anything added to the body now gets a paired removal in the same effect.",
          },
          {
            n: "04", title: "The carousel could never reach its last card", tags: "React · shared hook",
            body: "The guest speaker carousel tracked its position with a round of scrollLeft divided by the track width. Cards are sized as a percentage of that track, so the estimate drifts further out with every item, and the last card's left edge never reaches the viewport's, so it could not be selected at all. I measured position off the items themselves, special-cased the end of the scroll, and moved the whole thing into the shared carousel hook, which took 68 lines out of the component. While I was there I hid the dots and arrows when there is nothing to scroll, using a ResizeObserver so it stays correct as the layout changes.",
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
          { k: "Keyboard paths", v: "Every interactive element reachable and visibly focused, with no mouse-only journeys." },
          { k: "Contrast & type", v: "Readable sizes and contrast held to WCAG AA, checked in the component library rather than per page." },
          { k: "One-handed use", v: "Mobile-first layouts and generous tap targets, for the parent holding a baby in the other arm." },
        ],
        results: [
          {
            k: "Organic search",
            v: "Sessions grew 37% year on year, from 14,494 to 19,835, and organic overtook direct to become the largest channel at 47% of all traffic.",
          },
          {
            k: "Not bought",
            v: "Paid search was reduced to almost nothing across the same period, from 9,444 sessions to 19, so none of that growth came from advertising.",
          },
          {
            k: "Organic social",
            v: "Up 68%, from 1,247 to 2,100 sessions, almost all of it Instagram and none of it promoted.",
          },
        ],
        resultsNote:
          "Outcomes for the platform as a whole, built by a team over several years. What I worked on is described above.",
        next: [
          "Audio is moving onto the site. A lot of Possums is meant to be listened to rather than read, by someone who cannot be looking at a screen, and it currently lives elsewhere. Hosting it ourselves makes the player, the storage and the progress tracking all ours to build.",
          "The other piece is making Possums installable. A progressive web app is the sensible route: one codebase rather than two native builds, and it answers the audio problem at the same time, because a service worker can cache episodes for offline listening. That matters for this audience specifically. A parent settling a baby at 3am is not reliably on wifi.",
        ],
      },
      {
        id: "ndc-institute", n: "02", name: "NDC Institute", link: "https://ndcinstitute.au/", img: "/images/ndc-institute-website.png",
        kicker: "Online education · course delivery", timeline: "2024",
        h1a: "Clinical training,", h1b: "delivered online.",
        intro: "NDC Institute teaches Neuroprotective Developmental Care to health professionals and educators: breastfeeding, sleep, infant development and perinatal mental health. The task was turning a serious clinical curriculum into a course platform busy practitioners could actually get through.",
        summary:
          "Online education in Neuroprotective Developmental Care: courses on breastfeeding, sleep, infant development and perinatal mental health.",
        meta: [
          { k: "Client", v: "NDC Institute" },
          { k: "My role", v: "Fullstack developer" },
          { k: "Team", v: "Design, product, engineering" },
          { k: "Timeline", v: "2024" },
        ],
        problem: [
          "The audience is health professionals studying between shifts, often on a phone and often interrupted. Long-form clinical content has to be broken into pieces that survive being put down mid-lesson and picked up days later.",
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
            tradeoff: "The page now depends on the backend being reachable, so it needs a sensible failure path. Worth it, because legal copy changes more often than anyone plans for.",
          },
          {
            n: "02", title: "Fonts silently stopped loading", tags: "Turbopack · build",
            body: "Montserrat was pulled in with a CSS @import in the shared typography partial. Turbopack strips @import rules when it bundles, so the font quietly failed across every app with no error to follow. I moved it to a link tag in each app's layout, with preconnect, so all three load it the same way.",
            tradeoff: "The font is now declared in three places instead of one. That is the cost of not depending on bundler-specific behaviour.",
          },
          {
            n: "03", title: "Finding a practitioner meant scrolling", tags: "NestJS · API",
            body: "The practitioner directory had no way to search by name, so anyone looking for someone specific scrolled the list. I added public search and autocomplete endpoints on the practitioner controller, filtered to the accreditation and maintenance programmes so only qualified practitioners come back, with a minimum query length so a single keystroke does not scan the table.",
            tradeoff: "The programme IDs come from config rather than the code, so who counts as accredited can change without a deploy. The minimum query length is a blunt guard though. A busier directory would want proper rate limiting rather than a length check.",
          },
          {
            n: "04", title: "Completed work still looked outstanding", tags: "React · UX",
            body: "Required activities carried a red asterisk to mark them as mandatory, but the marker stayed after completion, so finished modules still read as something left to do. I scoped it to incomplete activities and reduced its size so it reads as a marker rather than an error.",
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
        craftIntro: "Educational platforms fail in quiet ways. People simply don't finish. Most of the care went into the parts that keep someone moving through a course.",
        craft: [
          { k: "Long-form content", v: "Clinical material broken into lessons that stay coherent when read out of order." },
          { k: "Progress & state", v: "Where a learner is, what's next and what's done, visible at every level." },
          { k: "Mixed media", v: "Video, text and downloads presented consistently rather than per-lesson improvisation." },
          { k: "Credibility", v: "Typography and hierarchy that read as professional education, not marketing." },
        ],
        next: [
          "It is moving. NDC Institute is being folded into possums.org. That was marketing's call, for SEO and a single brand. I am building the professional side of Possums that will host it: the accreditation pathway, course and purchase pages, guest speakers and the professional dashboard. The Education Hub follows after that.",
          "The obvious next step is richer assessment and certification, because practitioners want evidence of completion they can show an employer or professional body.",
          "After that, analytics on where learners stall. Completion data tells you which lesson needs rewriting, and right now that's guesswork.",
        ],
      },
      {
        id: "delancia", n: "03", name: "Delância", link: "https://delancia.com/", img: "/images/delancia.webp",
        kicker: "eCommerce · freelance, solo build", timeline: "Dec 2024 — ongoing",
        h1a: "Headless store,", h1b: "built solo.",
        intro: "A freelance build for a brand that needed a storefront matching its own identity rather than a themed template. I built a fully custom front end on Shopify's GraphQL API, with real product data and motion-led browsing, and ran the project end to end myself.",
        summary:
          "A custom Shopify storefront built solo on the GraphQL Storefront API, with real product data and motion-led browsing. Scoping to launch.",
        meta: [
          { k: "Client", v: "Delância" },
          { k: "My role", v: "Freelance developer, solo" },
          { k: "Team", v: "Just me, with the client" },
          { k: "Timeline", v: "Dec 2024 — ongoing" },
        ],
        problem: [
          "The brand's identity was too specific for an off-the-shelf theme, but the business still needed everything Shopify gives you for free: inventory, checkout, payments and orders that non-technical staff can manage.",
          "As a solo freelance build, it also had to be maintainable by one person and handable to the client without a developer on retainer.",
        ],
        constraint: "A storefront earns its keep or it doesn't. Every design flourish had to survive the question: does this help someone buy?",
        roleIntro: "Everything: scoping, design decisions, build, launch and client communication. A solo engagement from first conversation to live site.",
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
            body: "Transitions and reveals are used to make browsing feel considered, but they're tied to real interactions rather than decorating idle screens, and they never delay a product image or a price.",
            tradeoff: "Restraint over spectacle. A flashier site was possible; a faster one sells more.",
          },
          {
            n: "03", title: "Handover as a design goal", tags: "Freelance · maintainability",
            body: "Because the client has no in-house developer, content that changes often, meaning products, imagery, copy and collections, stays in Shopify, and only structural change needs code.",
            tradeoff: "Some layouts are less bespoke than they could be, in exchange for a client who isn't blocked on me for everyday updates.",
          },
        ],
        layers: [
          { layer: "Front end", detail: "Next.js · TypeScript · Framer Motion" },
          { layer: "Commerce", detail: "Shopify Storefront GraphQL API" },
          { layer: "Content", detail: "Products and collections managed in Shopify" },
          { layer: "Delivery", detail: "Solo build, scoping to launch" },
          { layer: "Quality", detail: "Responsive, performance-budgeted, accessible" },
        ],
        craftTitle: "Working solo",
        craftIntro: "No design partner, no reviewer, no product manager. The interesting part of this project was the process, not just the code.",
        craft: [
          { k: "Client comms", v: "Translating brand instinct into scope, and saying no to what wouldn't help sales." },
          { k: "Own reviewer", v: "Reviewing my own work honestly, with checklists standing in for a second pair of eyes." },
          { k: "Scope control", v: "Shipping a strong core rather than a half-finished wishlist." },
          { k: "After launch", v: "Ongoing support and changes, as the site is still evolving with the brand." },
        ],
        next: [
          "A design pass, before anything else. I made the design decisions on this one myself, and I am a developer who has never taken a design course, so the site works but it is not as strong as it could be. Mobile in particular needs rethinking rather than adjusting.",
          "I'd also add basic analytics instrumentation on the browse-to-cart path, so design changes can be argued from data rather than taste.",
        ],
      },
      {
        id: "marc-bonaventure", n: "04", name: "Marc Bonaventure", link: "https://www.marcbonaventure.com/", img: "/images/marc-bonaventure.webp",
        kicker: "Author site · CMS · freelance, solo build", timeline: "Sep 2026 — ongoing",
        h1a: "A site the poet", h1b: "keeps himself.",
        intro: "Marc Bonaventure is a French poet who has lived in Pará, in the Brazilian north, since 2001, and writes about it in Portuguese. He had three books, a growing agenda of readings and nowhere to send anyone. The site is in Portuguese, and the whole point of it is that it stays current without me: behind a password there is a small admin where he posts photographs, video and the dates of his next readings.",
        summary:
          "A Portuguese-language site for a poet in Belém, with a password-protected CMS so he posts his own readings and photographs without a developer.",
        meta: [
          { k: "Client", v: "Marc Bonaventure" },
          { k: "My role", v: "Freelance developer, solo" },
          { k: "Team", v: "Just me, with the author" },
          { k: "Timeline", v: "Sep 2026 — ongoing" },
        ],
        problem: [
          "A reader after the trilogy, the next reading or photographs from a launch had to dig through Instagram posts and a publisher's catalogue page. There was no single address to give a journalist, a bookshop or a festival.",
          "A site he could not update himself would have been worse than none at all. Readings are booked and moved with a few days' notice, and he has no developer on retainer; anything that needed me in the loop would have gone stale inside a month.",
        ],
        constraint: "The person maintaining this site is a poet, not a developer, and usually on a phone. If posting a photograph from last night's reading takes more than a couple of minutes, it will not happen.",
        roleIntro: "Everything: schema, back end, front end, the admin, deployment, and the conversations about what he would actually use. A solo freelance build, in his language rather than mine.",
        owned: [
          "Data model, Prisma schema and migrations",
          "Public site in Brazilian Portuguese: books, agenda, gallery, press, contact",
          "Password-protected admin for events, media and site copy",
          "Image and video pipeline, and the storage drivers behind it",
          "Deployment, structured data and SEO",
        ],
        decisionsTitle: "Decisions & trade-offs",
        decisionsCaption: "04 — what I chose, what I gave up",
        decisions: [
          {
            n: "01", title: "One app, run twice", tags: "Next.js · APP_ROLE",
            body: "The public site and the admin are two instances of the same application, with one environment variable deciding which routes each answers: the public instance 404s /admin, the admin instance sends everything else back to the login. Same code, same database, same uploads.",
            tradeoff: "A genuinely separate admin would have needed an API built for it first, since the admin is server-rendered and talks to Postgres through Prisma directly. Two roles buy the same separation of addresses for the price of a config flag, though what they separate is routes, not processes.",
          },
          {
            n: "02", title: "Books in code, events in the database", tags: "Content modelling",
            body: "The admin started with a section for poems and books, and it came back out. A book has an edition history, a photographer, a preface writer and an imprint, none of which the schema had room for, and a new one arrives every year or two. The books are authored in the codebase; the database holds only what actually changes: events, images and a few pieces of copy.",
            tradeoff: "A new book means a deploy. That is roughly once a year, weighed against an admin form nobody would remember how to fill in.",
          },
          {
            n: "03", title: "Storage behind one interface", tags: "Cloudinary · R2 · sharp",
            body: "Every upload goes through a single storage interface, which is why the driver behind it could change twice without the upload path changing: local disk while building, then Cloudinary once it was hosted somewhere with no persistent volume. Video goes straight from the browser to R2, because a serverless function will not take a body over 4.5MB and a phone clip passes that ten times over.",
            tradeoff: "An abstraction over something a single file write would have done on day one. It paid for itself the first time the host changed.",
          },
          {
            n: "04", title: "Time is Belém's, not the server's", tags: "Timezones · agenda",
            body: "Every date is formatted through one module that pins the timezone to Belém, and the admin's date fields go through matching parse and format helpers. Constructing a date directly uses whatever timezone the process happens to run in, which quietly turns a 19h reading into a 22h one on a UTC host.",
            tradeoff: "Two helpers to remember instead of the standard library. The alternative is a reader turning up three hours late to an empty room.",
          },
        ],
        layers: [
          { layer: "Front end", detail: "Next.js 16 · React 19 · TypeScript · hand-written CSS" },
          { layer: "Admin", detail: "Mantine 9, server actions, one password" },
          { layer: "Data", detail: "Prisma 7 · PostgreSQL" },
          { layer: "Media", detail: "sharp for images, ffmpeg for video, swappable storage driver" },
          { layer: "Delivery", detail: "Solo build, scoping to launch" },
        ],
        craftTitle: "Building for one non-technical owner",
        craftIntro: "The stack was not the hard part. Deciding what Marc should be able to change, and making the rest impossible to break, was.",
        craft: [
          { k: "One door", v: "One author, one password, a hash and a signed cookie. No user table, no roles, no invitations, because there will never be a second user." },
          { k: "Fails politely", v: "Where video encoding is unavailable, an upload explains itself and asks him to tell whoever maintains the site. Photographs carry on working." },
          { k: "Whitespace is content", v: "Verse is rendered so that indents and stanza breaks survive exactly as typed. Trimming a poem's whitespace is a bug, and the README says so in as many words." },
          { k: "In his language", v: "The site, the admin and its error messages are all in Brazilian Portuguese, including the parts only he will ever see." },
        ],
        next: [
          "Real content. The gallery still has placeholder slots and the agenda is empty until the next reading is booked. The site is live and waiting on Marc rather than on me.",
          "An iCal feed for the agenda and an RSS feed for the site, so a bookshop or a festival can subscribe instead of checking.",
          "The poem and collection tables are still in the schema with nothing writing to them. They should either earn their place in a proper data-model pass, or come out.",
        ],
      },
    ] as const;
