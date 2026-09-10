import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
export const metadata: Metadata = {
  title: "Selected Projects",
  description:
    "Explore Afiq Haikal’s web development projects, from Shopify storefronts to corporate websites and Laravel content systems.",
};
export default function Projects() {
  return (
    <>
      <section className="container page-intro">
        <Link href="/" className="text-link">
          ← Back to home
        </Link>
        <span className="eyebrow">Portfolio</span>
        <h1>Selected work.</h1>
        <p>
          Client projects, collaborative work, and things I’ve built along the
          way.
        </p>
      </section>
      <section className="container projects-index">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}
