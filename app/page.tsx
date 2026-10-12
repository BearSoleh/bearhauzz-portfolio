import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Skills, { TechnologyStrip } from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
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
            Seeking my next development role
          </span>
          <h1>Web Developer.</h1>
          <p className="hero-intro">
            Hi, I’m Afiq Haikal, a web developer based in Petaling Jaya. I build and launch client websites, create custom Shopify storefronts and develop React interfaces and Laravel content systems.
          </p>
          <p className="hero-intro">
            I’m seeking a Web Developer or Junior Software Developer/Engineer role where I can contribute my delivery experience, deepen my backend skills and grow into full-stack development.
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
            Based in Petaling Jaya
            <br />
            <strong>Exploring tech. Always learning.</strong>
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
                This portfolio and seven client and company websites from my GoViral Lab contract, with details of my contribution to each.
              </p>
            </div>
          </Reveal>
          <div className="project-grid">
            {featuredProjects.map((project) => (
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
              My day-to-day work includes development, client amendments, testing and deployment.
            </p>
          </div>
          <div className="approach-grid">
            {[
              [
                "01",
                "Understand the brief",
                "I review the requested pages and features, check the existing website and identify what still needs to be built.",
              ],
              [
                "02",
                "Make content editable",
                "I code custom Shopify Liquid sections with theme-editor settings and build Laravel admin tools so teams can maintain their content.",
              ],
              [
                "03",
                "Develop and test locally",
                "For Upstairs, I reproduced the WordPress site from its database and files in Docker with OrbStack, then used AI to help edit and test the code.",
              ],
              [
                "04",
                "Check before launch",
                "I work through client feedback and check responsive layouts before launch. My delivery work includes cPanel, Framer, Netlify and WordPress file and database transfers.",
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
              I’m based in Petaling Jaya and graduated in Netcentric Computing from UiTM Arau. My experience includes a Shopify internship, digital media work and website and mobile app support.
            </p>
            <p>
              During my GoViral Lab contract, from June to 9 October 2026, I worked on seven client and company websites. I took over unfinished development, built custom storefront sections and an admin system, resolved client amendments and launched websites on their own domains.
            </p>
            <div className="education">
              <span className="eyebrow">Education</span>
              <strong>Bachelor of Computer Science (Hons.)</strong>
              <span>Netcentric Computing · UiTM Arau · 2021–2025</span>
            </div>
            <div className="education">
              <span className="eyebrow">Leadership</span>
              <span>Speaker of UiTM Arau Student Parliament</span>
              <span>Student Council Secretariat of UiTM Arau</span>
              <span>Head of Multimedia and Technical of UiTM Arau Student Orientation Committee</span>
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
              Posters, brochures
              <br />
              and campaign work.
            </h2>
            <p>
              Alongside development, I’ve designed promotional materials for training programmes, webinars and corporate events.
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
