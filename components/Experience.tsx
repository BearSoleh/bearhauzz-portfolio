import { FiArrowDown } from "react-icons/fi";
import ResumeSection from "./ResumeSection";
const experience = [
  {
    role: "Management Trainee · Web Development (Contract)",
    company: "GoViral Digital Sdn Bhd",
    date: "June 2026 - Oct 2026",
    items: [
      "Developed and improved seven client and company websites across Shopify, Framer, WordPress, custom code and Laravel.",
      "Completed Vastiq Solutions within one month of taking over and launched it on its own domain through cPanel; completed and launched Why Travel & Tours on Framer within two months.",
      "Translated a Framer template design into HTML, CSS, JavaScript and React for the company website.",
      "Built a Laravel and MySQL CMS for MyPATH, enabling the team to manage job listings and candidate testimonials.",
      "Built every storefront section for Pferd and Janine using custom Shopify Liquid code and configurable theme-editor settings.",
      "Integrated Janine form submissions with a Railway-hosted service that sends email notifications.",
      "Set up Upstairs locally from its database and public_html files using Docker and OrbStack, used AI to help edit and test the website, then transferred files through SSH and imported the database through phpMyAdmin.",
      "Resolved client amendments and handled cross-device QA, troubleshooting, staging and deployment throughout the contract, which ended on 9 October 2026.",
      "Coordinated concurrent digital projects with internal teams, clients and external vendors, tracking scope, timelines, deliverables and follow-up actions.",
      "Supported Meta and TikTok advertising campaign setup, execution, performance monitoring and reporting with the marketing team.",
      "Assisted with quotations, invoices, proposals and client onboarding documentation.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Construction Professionals Malaysia Sdn Bhd",
    date: "Jan 2026 — May 2026",
    items: [
      "Internally reassigned from Mega Jati Academy to support Construction Professionals Malaysia’s digital operations.",
      "Developed and maintained responsive WordPress websites using Breakdance, with UI, SEO and performance refinements.",
      "Recovered WordPress websites affected by malware and phishing redirects and investigated inherited plugin, security-control and PHP runtime risks.",
      "Supported Flutter application improvements, functional testing and Android/iOS release work.",
      "Designed promotional posters for training programmes and handled programme registration through HRD Corp (HRDC).",
    ],
  },
  {
    role: "Program Executive · Digital Media",
    company: "Mega Jati Academy Sdn Bhd",
    date: "May 2025 — Jan 2026",
    items: [
      "Managed Wix website content and designed training, webinar and corporate promotional assets.",
      "Maintained Flutter application content and supported testing and troubleshooting.",
      "Handled training programme registration through HRD Corp (HRDC) and CIDB, including supporting programme information and documentation.",
      "Prepared registration materials and coordinated programme requirements and participant communications before transitioning internally to Construction Professionals Malaysia Sdn Bhd.",
    ],
  },
  {
    role: "Shopify Web Developer Intern",
    company: "Homy Villa (Borneo) Sdn Bhd",
    date: "Oct 2024 — Jan 2025",
    items: [
      "Customised Shopify Plus themes using Liquid, HTML, CSS and JavaScript.",
      "Supported product updates, Shopify POS, B2B pricing and e-commerce troubleshooting.",
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
            My roles in web development, digital media and application support.
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
