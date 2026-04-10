import { FaDownload } from "react-icons/fa";

export default function ResumeSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left side */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-[28px] border border-gray-200 bg-neutral-300 shadow-lg">
              <img
                src="/resume-preview.png"
                alt="Resume Preview"
                className="h-[360px] w-full object-cover object-top opacity-40 blur-[1.5px]"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-6 text-center">
                <p className="text-2xl font-semibold leading-snug text-white">
                  Want to see the full potential?
                  <br />
                  Hire me to unlock it.
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C6A96B]">
              Resume
            </p>

            <h2 className="mb-4 text-4xl font-bold leading-tight text-[#14213D]">
              A quick look at my experience and skills
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#4B5563]">
              Here’s a quick preview of my resume covering my background in
              front-end development, WordPress, responsive UI and web projects.
              Download it to view the full details.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-medium text-[#14213D] transition hover:bg-gray-50"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#C6A96B] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}