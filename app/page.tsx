import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <NavBar />

        <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 pt-25">
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
                  Hi, I'm Afiq!
                </h1>

              <p className="mb-8 text-lg leading-8 text-gray-300 text-justify">
                I’m a Junior Front-End Developer with a Bachelor of Computer Science
                hons. Netcentric Computing. Experienced in building and maintaining
                real-world website and mobile applications, with a focus on clean UI,
                performance and modern development practices.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition duration-300 hover:scale-105 hover:bg-white/10"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="inline-block rounded-full bg-[#C6A96B] px-6 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <img
                src="/Profile.png"
                alt="Afiq Haikal"
                className="h-[400px] w-[300px] rounded-2xl border border-white/10 object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="grid gap-12 md:grid-cols-2">
            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
                About Me
              </p>

              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Building thoughtful digital experiences through clean design and modern development.
              </h2>

            </div>

            <div>
              <p className="mb-6 text-lg leading-8 text-gray-300">
                I’m Afiq, a Junior Front-End Developer with a Computer Science
                background and hands-on experience in building and maintaining websites
                and mobile applications. My experience spans WordPress development,
                Flutter mobile apps, UI enhancements, troubleshooting and digital
                content execution across real-world business environments.
              </p>

              <p className="text-lg leading-8 text-gray-300">
                I’m currently expanding my expertise in Next.js, React, TypeScript and
                full-stack development to build more scalable, polished and
                high-performing digital products.
              </p>

            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
              Featured Projects
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Selected work and development experience.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C6A96B]/40 hover:shadow-[0_0_30px_rgba(198,169,107,0.08)]">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
                Personal Project
              </p>
              <h3 className="mb-3 text-2xl font-semibold">BearHauz Portfolio</h3>
              <p className="mb-6 leading-7 text-gray-300">
                A premium personal portfolio built to strengthen my skills in Next.js,
                React, TypeScript and modern front-end development while showcasing my
                experience, projects and design approach in a polished way.
              </p>
              <p className="mb-6 text-sm text-gray-400">
                Next.js · React · TypeScript · Tailwind CSS
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#home"
                  className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/bearsoleh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C6A96B]/40 hover:shadow-[0_0_30px_rgba(198,169,107,0.08)]">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
                Web Development
              </p>
              <h3 className="mb-3 text-2xl font-semibold">
                Corporate Website Development
              </h3>
              <p className="mb-6 leading-7 text-gray-300">
                Designed, developed and maintained responsive company websites with a
                focus on UI/UX implementation, content management, performance
                optimization and SEO improvements using WordPress and modern page
                builders.
              </p>
              <p className="mb-6 text-sm text-gray-400">
                WordPress · Breakdance · Elementor · UI/UX · SEO
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C6A96B]/40 hover:shadow-[0_0_30px_rgba(198,169,107,0.08)]">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
                Mobile Development
              </p>
              <h3 className="mb-3 text-2xl font-semibold">
                Flutter Mobile Application Support
              </h3>
              <p className="mb-6 leading-7 text-gray-300">
                Maintained and improved mobile applications through UI enhancements,
                feature updates, content management, testing and bug fixing using
                Flutter and Android Studio.
              </p>
              <p className="mb-6 text-sm text-gray-400">
              Flutter · Android Studio · Testing · UI Enhancement
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C6A96B]/40 hover:shadow-[0_0_30px_rgba(198,169,107,0.08)]">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
                E-Commerce Support
              </p>
              <h3 className="mb-3 text-2xl font-semibold">
                Shopify & Website Maintenance
              </h3>
              <p className="mb-6 leading-7 text-gray-300">
                Supported e-commerce and company websites through UI updates, content
                improvements, troubleshooting and platform maintenance across Shopify
                and WordPress environments.
              </p>
              <p className="mb-6 text-sm text-gray-400">
                Shopify · WordPress · Troubleshooting · Content Updates
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-[#C6A96B] px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(198,169,107,0.12),_transparent_30%),linear-gradient(135deg,_#11131a_0%,_#0b0b0f_45%,_#0d1320_100%)] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
              <div className="flex flex-col justify-center">
                <span className="mb-4 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-green-400/30 bg-green-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-green-400">
                  ● Open to Work from June 2026
                </span>

                <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                  Ready to take on new {" "}
                    <span className="text-[#C6A96B]">opportunities?</span>
                </h2>

                <p className="max-w-xl text-lg leading-8 text-gray-300 text-justify">
                  I’m actively seeking junior developer roles or any IT-related positions
                  where I can contribute, grow my skills and gain hands-on experience. 
                  Feel free to reach out through any of the channels here.
                </p>
              </div>

              <div className="space-y-4 max-w-md ml-auto">
                <a
                  href="mailto:afiqztremo09@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-white/10"
                >
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                      Email
                    </p>
                    <p className="text-base font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
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
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-white/10"
                >
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                      GitHub
                    </p>
                    <p className="text-base font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
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
                  className="group flex items-center gap-24 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-white/10"
                >
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                      LinkedIn
                    </p>
                    <p className="text-base font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
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
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#C6A96B]/40 hover:bg-white/10"
                >
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                      WhatsApp
                    </p>
                    <p className="text-base font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
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