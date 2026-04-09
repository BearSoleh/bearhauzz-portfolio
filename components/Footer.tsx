import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 px-6 py-7 text-[#111827] shadow-[0_-1px_0_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        
        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-6 text-2xl text-gray-500">
          <a
            href="https://github.com/bearsoleh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(198,169,107,0.4)]"
          >
            <FaGithub />
          </a>
          
          <a
            href="https://www.linkedin.com/in/afiq-haikal-43141531b"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(198,169,107,0.4)]"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.tiktok.com/@bearsoleh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(198,169,107,0.4)]"
          >
            <SiTiktok />
          </a>

          <a
            href="https://wa.me/60127543270"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(198,169,107,0.4)]"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* TEXT */}
        <p className="text-sm tracking-wide text-gray-500">
          © 2026 · Designed and built by Afiq Haikal aka BearSoleh.
        </p>
      </div>
    </footer>
  );
}