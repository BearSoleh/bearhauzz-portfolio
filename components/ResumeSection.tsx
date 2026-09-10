import { FiDownload } from "react-icons/fi";
export default function ResumeSection() {
  return (
    <div className="resume-actions">
      <a
        href="/resume.pdf"
        download="Afiq_Haikal_Web_Developer_Resume.pdf"
        className="button button-dark"
      >
        Download my résumé <FiDownload aria-hidden="true" />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
      >
        View résumé ↗
      </a>
    </div>
  );
}
