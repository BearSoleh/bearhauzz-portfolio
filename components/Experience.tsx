import { FiArrowDown } from "react-icons/fi";
import ResumeSection from "./ResumeSection";
const experience = [
  {
    role: "Management Trainee · Web Development",
    company: "GoViral Digital",
    date: "Jun 2026 — Present",
    items: [
      "Develop and improve seven client and company websites across Shopify, Framer, WordPress, custom code, and Laravel.",
      "Build reusable sections, responsive layouts, product templates, and editable content systems.",
      "Take ownership of inherited work, resolve client amendments, and coordinate concurrent projects through review and delivery.",
      "Handle cross-device QA, troubleshooting, staging workflows, and production deployment.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Construction Professionals Malaysia",
    date: "Jan 2026 — May 2026",
    items: [
      "Developed and maintained responsive WordPress websites using Breakdance, with UI, SEO, and performance refinements.",
      "Recovered compromised WordPress installations and strengthened website security.",
      "Supported Flutter application improvements, functional testing, and Android/iOS release work.",
    ],
  },
  {
    role: "Program Executive · Digital Media",
    company: "Mega Jati Academy",
    date: "May 2025 — Jan 2026",
    items: [
      "Managed Wix website content and designed training, webinar, and corporate promotional assets.",
      "Maintained Flutter application content and supported testing and troubleshooting.",
      "Coordinated programme materials and participant communications.",
    ],
  },
  {
    role: "Shopify Web Developer Intern",
    company: "Homy Villa (Borneo)",
    date: "Oct 2024 — Jan 2025",
    items: [
      "Customised Shopify Plus themes using Liquid, HTML, CSS, and JavaScript.",
      "Supported product updates, Shopify POS, B2B pricing, and e-commerce troubleshooting.",
      "Maintained storefronts and assisted with cross-device testing.",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2>Where I’ve worked.</h2>
          <p>
            My roles in web development, digital media, and application support.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((job, i) => (
            <details
              className="experience-item"
              key={job.company}
              open={i === 0}
              name="experience"
            >
              <summary>
                <div>
                  <h3>
                    {job.role}
                    <span> — {job.company}</span>
                  </h3>
                  <span className="experience-date">{job.date}</span>
                </div>
                <span className="expand-icon" aria-hidden="true">
                  <FiArrowDown className="inline-icon" aria-hidden="true" focusable="false" />
                </span>
              </summary>
              <ul>
                {job.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <ResumeSection />
      </div>
    </section>
  );
}
