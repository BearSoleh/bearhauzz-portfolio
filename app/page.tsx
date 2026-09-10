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
            Hi, I’m Afiq Haikal, a web developer based in Malaysia. I build and
            improve e-commerce, corporate, and marketing websites with thoughtful
            design and practical code.
          </p>
          <div className="button-row">
            <Link href="#projects" className="button button-outline">
              See my work
            </Link>
            <Link href="#contact" className="button button-dark">
              Contact me <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
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
                Seven recent projects. Different platforms. The same attention
                to detail.
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
              Explore all projects <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
            </Link>
          </div>
        </div>
      </section>
      <Experience />
      <section id="approach" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How I work</span>
            <h2>Care in every step.</h2>
            <p>
              From understanding the brief to checking the details before
              launch.
            </p>
          </div>
          <div className="approach-grid">
            {[
              [
                "01",
                "Understand the brief",
                "Turn client requirements and approved designs into a clear set of pages, features, and priorities.",
              ],
              [
                "02",
                "Build to be maintained",
                "Create reusable sections and editable content so the website stays useful after handover.",
              ],
              [
                "03",
                "Refine the details",
                "Work through feedback, responsive layouts, navigation, and content with care.",
              ],
              [
                "04",
                "Prepare for delivery",
                "Check across devices, resolve outstanding issues, and manage staging and launch steps.",
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
              Curious by nature.
              <br />A builder by practice.
            </h2>
          </div>
          <div>
            <p>
              I’m Afiq, also known as BearSoleh. My work brings together web
              development, visual implementation, and the practical details that
              keep a website running.
            </p>
            <p>
              At GoViral Digital, I work across client projects—from Shopify
              storefronts and Framer websites to custom Laravel content systems.
              I enjoy taking an idea, or an unfinished project, and helping it
              become something people can use.
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
              An eye for
              <br />
              the visual side.
            </h2>
            <p>
              Posters, brochures, and campaign assets created for training
              programmes and branded communications.
            </p>
            <Link href="/designs" className="button button-outline">
              Explore creative work <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
            </Link>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
