import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="eyebrow">Let’s connect</span>
        <h2>
          Let’s build
          <br />
          something great.
        </h2>
        <p>Have a role or a project in mind? I’d love to hear about it.</p>
        <a href="mailto:afiqztremo09@gmail.com" className="button button-dark">
          Get in touch <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
        </a>
        <div className="contact-links">
          <a href="mailto:afiqztremo09@gmail.com">afiqztremo09@gmail.com</a>
          <span aria-hidden="true">/</span>
          <a
            href="https://wa.me/60127543270"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
          </a>
          <span aria-hidden="true">/</span>
          <Link href="/resume.pdf" target="_blank">
            View résumé <FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" />
          </Link>
        </div>
        <div className="contact-note">
          Based in Petaling Jaya, Malaysia · Available with one month’s notice
        </div>
      </div>
    </section>
  );
}
