import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        
        <div className="flex items-center justify-center gap-6 text-2xl text-gray-400">
          <a
            href="https://github.com/bearsoleh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,169,107,0.6)]"
          >
            <FaGithub />
          </a>
          
          <a
            href="https://www.linkedin.com/in/afiq-haikal-43141531b"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,169,107,0.6)]"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.tiktok.com/@bearsoleh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,169,107,0.6)]"
          >
            <SiTiktok />
          </a>

          <a
            href="https://wa.me/60127543270"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#C6A96B] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(198,169,107,0.6)]"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-sm tracking-wide text-gray-400">
           © 2026 · Designed and built by Afiq Haikal aka BearSoleh.
        </p>
      </div>
    </footer>
  );
}