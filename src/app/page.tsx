"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftRightBar from "@/components/home/LeftRightBar";
import {
  IconExternalLink,
  IconBrandGithub,
  IconFolder,
  IconChevronRight,
} from "@tabler/icons-react";
import PhotoIcon from "../../public/images/Marisha.jpg";
import PspWebsiteImage from "../../public/images/possums-sleep-program-website.png";
import NdcWebsiteImage from "../../public/images/ndc-institute-website.png";
import DrPamWebsiteImage from "../../public/images/drpam-website.png";

export default function Home() {
  const [activePanel, setActivePanel] = useState(0);
  const highlightRef = useRef(null);

  useEffect(() => {
    const activeButton = document.querySelector(
      ".tablist .active"
    ) as HTMLElement | null;
    const highlight = highlightRef.current as HTMLElement | null;

    if (activeButton && highlight) {
      highlight.style.width = `${activeButton.offsetWidth}px`;
      highlight.style.transform = `translateX(${activeButton.offsetLeft}px)`;
    }
  }, [activePanel]);

  return (
    <div className="home-page">
      <section id="landing-section" className="dark-bg icon-bg">
        <div className="content">
          <p>
            <span className="emphasised-text">Hi, my name is</span>
          </p>
          <h1 className="color-slate">Marisha Deroubaix.</h1>
          <h1>
            <span>I&apos;m a full stack web developer.</span>
          </h1>
          <p>
            I specialize in building websites. Currently, I&apos;m focused on
            building all sorts of accessible, user friendly websites that lead
            to the overall success of your project.
          </p>
          <div className="button-container">
            <a href="#contact" className="button secondary small">
              Let&apos;s talk
            </a>
            <a
              href="/CV_Marisha-Deroubaix.pdf"
              className="button primary small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <section id="about-me" className=" dark-bg">
        <div className="content-about-me">
          <h2>
            <span className="emphasised-number">01. </span>About me
          </h2>
          <p>
            Hello! My name is Marisha, and I enjoy creating things that live on
            the internet. My interest in web development began back in 2017 when
            I decided to learn Swift, Apple&apos;s new programming language at
            the time.
          </p>
          <p>
            After trying out Swift, I decided to dive into web development and
            joined a bootcamp at{" "}
            <Link
              href={"https://www.ironhack.com/pt-en/lisbon"}
              target="_blank"
              rel="noopener noreferrer"
              className="emphasised-text"
            >
              Ironhack
            </Link>
            . During the bootcamp, I built a few websites and had the
            opportunity to work in teams, which was a great learning experience.
          </p>
          <p>
            Fast-forward to today, I have the privilege of working at a
            start-up. My main focus these days is building accessible websites
            for parents and health professionals at{" "}
            <Link
              href={"https://possumsndc.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="emphasised-text"
            >
              Possums by Dr Pam
            </Link>
            .
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="code-list">
            <li className="triangle">Next.js</li>
            <li className="triangle">Typescript</li>
            <li className="triangle">Prisma</li>
            <li className="triangle">Sass</li>
            <li className="triangle">NestJS</li>
            <li className="triangle">GraphQL</li>
          </ul>
        </div>
        <div className="image">
          <Image
            src={PhotoIcon}
            alt="Image of Marisha Deroubaix"
            className="hover-effect"
          ></Image>
        </div>
      </section>
      <section id="experience" className="middle-center dark-bg">
        <div className="content-experience">
          <h2>
            <span className="emphasised-number">02. </span>Experience
          </h2>
          <span className="scroll-indicator">
            Scroll to view more <IconChevronRight />
          </span>
          <div className="inner">
            <div className="tablist">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActivePanel(exp.id)}
                  className={activePanel === exp.id ? "active" : ""}
                >
                  <span>{exp.companyName}</span>
                </button>
              ))}
              <div className="tab-highlight" ref={highlightRef}></div>
            </div>
            <div className="panel-container">
              {experiences.map((exp) =>
                activePanel === exp.id ? (
                  <div key={exp.id} className="panel active">
                    <h3>
                      {exp.role}{" "}
                      <span>
                        <Link
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="emphasised-text"
                        >
                          @{exp.companyName}
                        </Link>
                      </span>
                    </h3>
                    <p className="emphasised-text-normal">{exp.period}</p>
                    <ul className="experience-list">
                      {exp.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="dark-bg ">
        <div className="content-work">
          <h2>
            <span className="emphasised-number">03. </span>Work
          </h2>
          <ul>
            {workProjects.map((project) => (
              <li
                key={project.id}
                className={`project project-${project.alignment}`}
              >
                <div className="project-image">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      width={500}
                      height={300}
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="project-content">
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <h3>{project.title}</h3>
                  </Link>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  <ul className="tech-list">
                    {project.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-only"
                  >
                    <IconExternalLink size={25} />
                  </Link>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn no-underline"
                  >
                    View website
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="projects" className="projects-section dark-bg">
        <div className="content-project">
          <h2>
            <span className="emphasised-number">04. </span>Projects
          </h2>
          <ul className="projects-grid">
            {personalProjects.map((project, index) => (
              <li key={index} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <IconFolder size={40} className="folder-icon" />
                    <div className="project-links">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink size={25} />
                      </Link>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandGithub size={25} />
                      </Link>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  <ul className="tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="contact" className="contact-section dark-bg">
        <div className="content">
          <h2>
            <span className="emphasised-number">04. </span>Contact
          </h2>
          <p>
            I’m always happy to connect! Whether you have a question, an idea to
            share, or just want to say hello, feel free to reach out. I’ll do my
            best to respond!
          </p>

          <Link
            href="mailto:deroubaix.marisha@gmail.com"
            className="contact-button no-underline"
          >
            Say Hello
          </Link>
        </div>
      </section>

      <LeftRightBar />
    </div>
  );
}

const experiences = [
  {
    id: 0,
    companyName: "Possums by Dr Pam",
    companyLink: "https://possumsndc.com/",
    role: "Fullstack Developer",
    period: "August 2023 - Present",
    responsibilities: [
      "Developed and maintained key websites, focusing on implementing user-friendly interfaces and ensuring accessibility for users.",
      "Implemented full-stack features, ensuring seamless functionality and integration with APIs and databases.",
      "Transitioned from SQL to PostgreSQL, learning how to design and manage relational databases for the project needs.",
      "Collaborated closely with the design and product teams to translate requirements into scalable and maintainable code.",
      "Optimized website performance and SEO to improve user experience and engagement.",
      "Gained experience in building responsive layouts and creating reusable components.",
    ],
  },
  {
    id: 1,
    companyName: "Delância",
    companyLink: "https://delancia.com/",
    role: "Freelance Developer",
    period: "December 2024 - March 2025",
    responsibilities: [
      "Designed and developed a fully responsive website tailored to the client’s needs.",
      "Implemented a modern UI/UX with optimized performance and accessibility.",
      "Integrated dynamic features and ensured seamless functionality across devices.",
      "Worked independently to deliver the project while managing client expectations.",
    ],
  },
  {
    id: 2,
    companyName: "Ironhack",
    companyLink: "https://www.ironhack.com/pt-en/lisbon",
    role: "Fullstack Developer",
    period: "January 2023 - April 2023",
    responsibilities: [
      "Completed an intensive full-stack development bootcamp focused on modern web technologies.",
      "Built and deployed several full-stack web applications, showcasing expertise in front-end and back-end development.",
      "Collaborated in teams to design, develop, and present projects, improving communication and project management skills.",
      "Gained hands-on experience with Git, RESTful APIs, and responsive web design principles.",
    ],
  },
];

const workProjects = [
  {
    id: 1,
    alignment: "left",
    imageUrl: PspWebsiteImage,
    imageAlt:
      "Image of Possums Sleep Program website built by Marisha Deroubaix",
    projectLink: "https://possumssleepprogram.com/",
    title: "Possums Sleep Program",
    description: `The Possums Sleep Program is a platform designed to help parents and their children achieve better sleep using evidence-based methods. This program empowers families by aligning with a child's natural biology, fostering secure attachment, and supporting mental and emotional wellbeing.`,
    techStack: [
      "Next.js",
      "Sass",
      "Node.js",
      "Prisma",
      "NestJS",
      "GraphQL",
      "SQL",
    ],
  },
  {
    id: 2,
    alignment: "right",
    imageUrl: NdcWebsiteImage,
    imageAlt: "Image of NDC Institute website built by Marisha Deroubaix",
    projectLink: "https://ndcinstitute.au/",
    title: "NDC Institute",
    description: `The NDC Institute is an innovative platform offering online education and resources in Neuroprotective Developmental Care (NDC), an evidence-based approach to early life care. The website supports health professionals, providers, and educators by delivering cutting-edge knowledge in breastfeeding, sleep, infant development, and perinatal mental health.`,
    techStack: [
      "Next.js",
      "Sass",
      "Node.js",
      "Prisma",
      "NestJS",
      "GraphQL",
      "SQL",
    ],
  },
  {
    id: 3,
    alignment: "left",
    imageUrl: DrPamWebsiteImage,
    imageAlt: "Image of Dr Pam website built by Marisha Deroubaix",
    projectLink: "https://possumsndc.com/",
    title: "Possums by Dr Pam",
    description: `Possums by Dr Pam is a comprehensive online platform introducing Neuroprotective Developmental Care (NDC), a groundbreaking, evidence-based approach to supporting parents and their infants. The website provides parents with accessible resources and tools to navigate the challenges of infant care, fostering healthier outcomes for families worldwide.`,
    techStack: ["Next.js", "React", "Prisma", "NestJS", "Sass", "PostgreSQL"],
  },
  {
    id: 4,
    alignment: "right", 
    imageUrl: "/images/delancia.avif",
    imageAlt: "Image of Delância website built by Marisha Deroubaix",
    projectLink: "https://delancia.com/",
    title: "Delância",
    description: `Delância is a modern, high-performance eCommerce website built with Next.js, featuring dynamic content powered by Shopify’s backend. I developed a fully customized frontend, integrating Shopify’s GraphQL API to fetch and display real-time product data, ensuring a smooth and engaging shopping experience.`,
    techStack: ["Next.js", "Sass", "Shopify", "GraphQL", "Framer Motion"],
  },
];

const personalProjects = [
  {
    title: "Clicked",
    description:
      "An app that connects people based on things they have in common, not looks! Sign up and answer a questionnaire and see everyone you Clicked with.",
    technologies: ["JavaScript (ES6+)", "React", "Node.js", "MongoDB"],
    liveLink: "https://yourclicks.netlify.app/",
    githubLink: "https://github.com/Deroubaix/clicked-client/",
  },
  {
    title: "Escape Baixa",
    description:
      "A simple web game inspired by one of the busiest streets in Lisbon. Jump and save yourself from all the obstacles that come your way. If you make contact with an obstacle, you will lose a life and experience side effects.",
    technologies: ["JavaScript (ES6+)", "HTML", "CSS", "Canvas"],
    liveLink: "https://escapebaixa.vercel.app/",
    githubLink: "https://github.com/Deroubaix/Project-One/",
  },
  {
    title: "Rick and Morty API",
    description:
      "The Rick and Morty API renders a website with all the characters and episodes from the show Rick and Morty. Explore, see, and search your favorite characters, episodes, and cast members.",
    technologies: ["JavaScript (ES6+)", "React", "API", "Bootstrap"],
    liveLink: "https://rickandmortyproject-api.netlify.app/",
    githubLink: "https://github.com/Deroubaix/project-rick/",
  },
];
