import { FiArrowLeft } from "react-icons/fi";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
export const metadata: Metadata = {
  title: "Selected Projects",
  description:
    "Explore Afiq Haikal’s web applications, client websites and e-commerce projects, including BJBC, CampusSphere and Laravel content systems.",
};
export default function Projects() {
  return (
    <>
      <section className="container page-intro">
        <Link href="/" className="text-link">
          <FiArrowLeft className="inline-icon" aria-hidden="true" focusable="false" /> Back to home
        </Link>
        <span className="eyebrow">Portfolio</span>
        <h1>Selected work.</h1>
        <p>
          Web applications, client websites, e-commerce storefronts and academic projects, with details of my contribution to each.
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
