import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Skills, { TechnologyStrip } from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { clientProjects } from "@/data/projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
export default function Home() {
  return (
    <>
      <section id="home" className="container hero">
        <div className="hero-copy">
          <span className="availability">
            <span />
            Open to opportunities · One month’s notice
          </span>
          <h1>Web Developer.</h1>
          <p className="hero-intro">
            Hi, I’m Afiq Haikal, a web developer in Malaysia. At GoViral Digital, I build and update client websites using Shopify, Framer, WordPress, and Laravel.
          </p>
          <div className="button-row">
            <Link href="#projects" className="button button-outline">
              See my work
            </Link>
            <Link href="#contact" className="button button-dark">
              Contact me <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
            </Link>
          </div>
          <TechnologyStrip />
        </div>
        <div className="portrait-panel">
          <Image
            src="/Profile.png"
            alt="Afiq Haikal, web developer"
            width={421}
            height={533}
            priority
            className="hero-portrait"
          />
          <span className="portrait-caption">
            Based in Malaysia
            <br />
            <strong>Building for the web.</strong>
          </span>
          <span className="portrait-index" aria-hidden="true">
            AH / 2026
          </span>
        </div>
      </section>
      <Skills />
      <section id="projects" className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Projects</span>
              <h2>Selected work.</h2>
              <p>
                Seven websites I’ve worked on at GoViral Digital, with details of my contribution to each.
              </p>
            </div>
          </Reveal>
          <div className="project-grid">
            {clientProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="section-action">
            <Link href="/projects" className="button button-outline">
              Explore all projects <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
            </Link>
          </div>
        </div>
      </section>
      <Experience />
      <section id="approach" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How I work</span>
            <h2>From brief to handover.</h2>
            <p>
              My day-to-day work includes development, client amendments, testing, and deployment.
            </p>
          </div>
          <div className="approach-grid">
            {[
              [
                "01",
                "Understand the brief",
                "I review the requested pages and features, check the existing website, and identify what still needs to be built.",
              ],
              [
                "02",
                "Make content editable",
                "I build reusable Shopify sections and Laravel admin tools so the team can update content without editing code.",
              ],
              [
                "03",
                "Work through feedback",
                "I work through client amendments, from page layouts and navigation to product images, copy, and mobile spacing.",
              ],
              [
                "04",
                "Check before launch",
                "I check pages across screen sizes and resolve issues before deployment. For VASTIQ, I also handled backups and the cPanel launch.",
              ],
            ].map(([n, title, text]) => (
              <Reveal key={n}>
                <article className="approach-card">
                  <span className="approach-number">{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="section section-soft">
        <div className="container about-layout">
          <div>
            <span className="eyebrow">A little about me</span>
            <h2>
              Afiq Haikal.
              <br />Also known as BearSoleh.
            </h2>
          </div>
          <div>
            <p>
              I’m based in Petaling Jaya and graduated in Netcentric Computing from UiTM Arau. My experience includes a Shopify internship, digital media work, and website and mobile app support.
            </p>
            <p>
              At GoViral Digital, I work on several websites at different stages. Some need new pages or an admin system; others need client amendments or unfinished development completed before launch.
            </p>
            <div className="education">
              <span className="eyebrow">Education</span>
              <strong>Bachelor of Computer Science (Hons.)</strong>
              <span>Netcentric Computing · UiTM Arau · 2021–2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container creative-preview">
          <div className="creative-images">
            <Image
              src="/designs/poster-1.webp"
              alt="Training programme poster from my design portfolio"
              width={400}
              height={560}
            />
            <Image
              src="/designs/brochure-1.webp"
              alt="Programme brochure from my design portfolio"
              width={400}
              height={560}
            />
          </div>
          <div>
            <span className="eyebrow">Beyond development</span>
            <h2>
              Posters, brochures,
              <br />
              and campaign work.
            </h2>
            <p>
              Alongside development, I’ve designed promotional materials for training programmes, webinars, and corporate events.
            </p>
            <Link href="/designs" className="button button-outline">
              Explore creative work <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
            </Link>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
