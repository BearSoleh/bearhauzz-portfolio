import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return project.image ? (
    <div className={`project-visual ${large ? "project-visual-large" : ""}`}>
      <Image
        src={project.image}
        alt={`${project.name} — ${project.imageNote || "website screenshot"}`}
        fill
        sizes={
          large
            ? "(max-width: 700px) 100vw, 1120px"
            : "(max-width: 700px) 100vw, 550px"
        }
      />
      {project.imageNote && (
        <span className="image-note">{project.imageNote}</span>
      )}
    </div>
  ) : (
    <div className={`project-visual project-cover cover-${project.slug}`}>
      <span>{project.category}</span>
      <strong>{project.name}</strong>
      <span>{project.stack.join(" / ")}</span>
    </div>
  );
}
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name} project`}
      >
        <ProjectVisual project={project} />
      </Link>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span
            className={`project-status ${project.status === "Live" ? "status-live" : ""}`}
          >
            {project.status}
          </span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="button-row">
          <Link
            href={`/projects/${project.slug}`}
            className="button button-outline"
          >
            View project
          </Link>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              {project.linkLabel}
              <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
