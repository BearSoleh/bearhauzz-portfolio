import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectCard";
import Contact from "@/components/Contact";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p?.name || "Project not found", description: p?.summary };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <section className="container page-intro">
        <Link href="/projects" className="text-link">
          <FiArrowLeft className="inline-icon" aria-hidden="true" focusable="false" /> All projects
        </Link>
        <span className="eyebrow">{p.category}</span>
        <h1>{p.name}.</h1>
        <p>{p.summary}</p>
        <div className="button-row">
          <span
            className={`project-status ${p.status === "Live" ? "status-live" : ""}`}
          >
            {p.status}
          </span>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              {p.linkLabel} <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
            </a>
          )}
        </div>
      </section>
      <section className="container case-study">
        <ProjectVisual project={p} large />
        <div className="case-info">
          <div>
            <span className="eyebrow">My role</span>
            <p>{p.role}</p>
          </div>
          <div>
            <span className="eyebrow">Context</span>
            <p>{p.agency || "Client / company work at GoViral Digital"}</p>
          </div>
          <div>
            <span className="eyebrow">Tools</span>
            <p>{p.stack.join(" · ")}</p>
          </div>
        </div>
        <div className="case-body">
          <div>
            <span className="eyebrow">01 / The brief</span>
            <h2>The challenge.</h2>
          </div>
          <p>{p.challenge}</p>
          <div>
            <span className="eyebrow">02 / The work</span>
            <h2>My contribution.</h2>
          </div>
          <ul>
            {p.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div>
            <span className="eyebrow">03 / The result</span>
            <h2>Where it stands.</h2>
          </div>
          <div>
            <p>{p.outcome}</p>
            <p className="status-note">
              Project status recorded September 2026.
            </p>
          </div>
        </div>
        <Link className="next-project" href={`/projects/${next.slug}`}>
          <span>Next project</span>
          <strong>{next.name}</strong>
          <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
        </Link>
      </section>
      <Contact />
    </>
  );
}
