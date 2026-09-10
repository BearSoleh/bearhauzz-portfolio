import { FiArrowUp } from "react-icons/fi";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-name">
              Afiq Haikal.
            </Link>
            <p>
              Thoughtful websites.
              <br />
              Built for the people who use them.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/bearsoleh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/afiq-haikal-43141531b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/60127543270"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.tiktok.com/@bearsoleh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <SiTiktok />
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/#skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/designs">Creative work</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Afiq Haikal. All rights reserved.
          </span>
          <span>Built with Next.js & a little curiosity.</span>
          <a href="#top">Back to top <FiArrowUp className="inline-icon" aria-hidden="true" focusable="false" /></a>
        </div>
      </div>
    </footer>
  );
}
