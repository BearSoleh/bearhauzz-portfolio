import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ResumeSection from "../components/ResumeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] bg-[linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:32px_32px] text-[#111827]">
      <NavBar />

      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 pt-25"
      >
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid w-full items-center gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
                Afiq Haikal Portfolio
              </p>

              <h1 className="mb-2 flex items-center gap-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                <img
                  src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                  alt="typing animation"
                  className="h-10 md:h-14"
                />
                Hi, I&apos;m Afiq!
              </h1>

              <p className="mb-8 text-lg text-justify leading-8 text-gray-600">
                A Junior Front-End Developer with a Bachelor in Computer Science hons. Netcentric Computing, 
                who enjoys turning ideas into clean, functional and user-friendly digital experiences.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition duration-300 hover:scale-105 hover:bg-gray-100"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="inline-block rounded-full bg-[#C6A96B] px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <img
                src="/Profile.png"
                alt="Afiq Haikal"
                className="h-[460px] w-[360px] rounded-2xl border border-gray-200 object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-16 text-[#111827]"
      >
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
                About Me
              </p>

              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Designing clean, scalable digital experiences.
              </h2>
            </div>

            <div>
              <p className="mb-6 text-lg text-justify leading-8 text-gray-600">
                Built a strong technical foundation through a final year project, developing a 
                full web application using Laravel and PHP with a focus on system functionality, 
                database integration and clean application logic. This was followed by hands-on 
                industry exposure as a Shopify Web Developer Intern, where an e-commerce platform 
                was developed from the ground up  and that continues to be actively used today.
              </p>

              <p className="mb-6 text-lg text-justify leading-8 text-gray-600">
                Expanded into real-world business environments at Mega Jati Academy as a Program
                Executive (Digital Media), combining creative and technical skills in designing 
                digital assets, managing website content via Wix CMS and supporting mobile application 
                maintenance using Flutter. Currently contributing at Construction Professionals Malaysia
                as a Junior Front-End Developer, developing and maintaining responsive websites using 
                WordPress (Breakdance), with a strong emphasis on performance, usability and seamless 
                user experience. Continuously advancing expertise in Next.js, React and TypeScript to 
                deliver scalable and high-performance digital solutions.
              </p>

              <p className="text-lg leading-8 text-gray-800 font-semibold italic">
                — Building with purpose, growing with every line of code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-16 text-[#111827]"
      >
        <div className="mb-12">
          <h2 className="text-3xl font-bold md:text-5xl">
            Selected work and development experience.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
              Personal Project
            </p>
            <h3 className="mb-3 text-2xl font-semibold">BearHauz Portfolio</h3>
            <p className="mb-6 leading-7 text-gray-600">
              A premium personal portfolio built to strengthen my skills in
              Next.js, React, TypeScript and modern front-end development while
              showcasing my experience, projects and design approach in a
              polished way.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              Next.js · React · TypeScript · Tailwind CSS
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#home"
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/bearsoleh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition duration-300 hover:scale-105 hover:bg-gray-100"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
              Web Development
            </p>
            <h3 className="mb-3 text-2xl font-semibold">
              Corporate Website Development
            </h3>
            <p className="mb-6 leading-7 text-gray-600">
              Designed, developed and maintained responsive company websites
              with a focus on UI/UX implementation, content management,
              performance optimization and SEO improvements using WordPress.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              WordPress · Breakdance · Elementor · Wix · UI/UX · SEO
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.megajatiacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                MJA Website
              </a>

              <a
                href="https://www.construction.org.my/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                CPM Website
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
              Mobile Development
            </p>
            <h3 className="mb-3 text-2xl font-semibold">
              Mobile Application Support
            </h3>
            <p className="mb-6 leading-7 text-gray-600">
              Maintained and improved mobile applications through UI
              enhancements, feature updates, content management, testing and bug
              fixing using Flutter and Android Studio.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              Flutter · Android Studio · Testing · UI Enhancement
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.megajatiacademy.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                MJA Mobile App
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.cpm.apps&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                CPM Mobile App
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
              E-Commerce Support
            </p>
            <h3 className="mb-3 text-2xl font-semibold">
              Shopify e-Commerce Website Development
            </h3>
            <p className="mb-6 leading-7 text-gray-600">
              Designed and developed e-commerce websites on Shopify, delivering UI 
              enhancements, optimized content and ensuring platform performance 
              through continuous maintenance and troubleshooting.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              Shopify · Troubleshooting · Content Updates · e-Commerce
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://myelala.com/"
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                Shopify Website
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
              Final Year Project
            </p>
            <h3 className="mb-3 text-2xl font-semibold">
              Web Application Development
            </h3>
            <p className="mb-6 leading-7 text-gray-600">
              Developed a full-stack web application using Laravel, focusing on robust 
              system functionality, efficient database integration, and scalable 
              application performance.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              Laravel · PHP · MySQL · HTML5 · CSS3 · JavaScript · MVC Architecture · RESTful APIs
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href=""
                className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                CampusSphere Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <ResumeSection />

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-16 text-[#111827]"
      >
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-green-400/30 bg-green-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-green-500">
                ● Open to Work from June 2026
              </span>

              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Ready to take on new{" "}
                <span className="text-[#C6A96B]">opportunities?</span>
              </h2>

              <p className="max-w-xl text-lg leading-8 text-gray-600">
                I’m actively seeking junior developer roles or any IT-related
                positions where I can contribute, grow my skills and gain
                hands-on experience. Feel free to reach out through any of the
                channels here.
              </p>
            </div>

            <div className="ml-auto max-w-md space-y-4">
              <a
                href="mailto:afiqztremo09@gmail.com"
                className="group flex items-center justify-between gap-40 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-gray-50"
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-gray-700">
                    afiqztremo09@gmail.com
                  </p>
                </div>
                <span className="text-xl text-gray-400 transition duration-300 group-hover:text-[#C6A96B]">
                  →
                </span>
              </a>

              <a
                href="https://github.com/bearsoleh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-gray-50"
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                    GitHub
                  </p>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-gray-700">
                    github.com/bearsoleh
                  </p>
                </div>
                <span className="text-xl text-gray-400 transition duration-300 group-hover:text-[#C6A96B]">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/afiq-haikal-43141531b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-gray-50"
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                    LinkedIn
                  </p>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-gray-700">
                    linkedin.com/in/afiq-haikal
                  </p>
                </div>
                <span className="text-xl text-gray-400 transition duration-300 group-hover:text-[#C6A96B]">
                  →
                </span>
              </a>

              <a
                href="https://wa.me/60127543270"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-gray-50"
              >
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                    WhatsApp
                  </p>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-gray-700">
                    +60 12-754 3270
                  </p>
                </div>
                <span className="text-xl text-gray-400 transition duration-300 group-hover:text-[#C6A96B]">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}