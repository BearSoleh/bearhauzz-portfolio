export type Project = {
  slug: string;
  name: string;
  category: string;
  stack: string[];
  status: string;
  summary: string;
  role: string;
  challenge: string;
  contributions: string[];
  outcome: string;
  agency?: string;
  image?: string;
  imageNote?: string;
  url?: string;
  linkLabel?: string;
};
export const projects: Project[] = [
  {
    slug: "bearhauzz",
    name: "BearHauzz Portfolio",
    category: "Personal portfolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Personal project",
    image: "/projects/bearhauzz.png",
    url: "/",
    linkLabel: "View website",
    summary:
      "I built this portfolio with Next.js, React, TypeScript and Tailwind CSS to showcase my client websites, custom development and creative work through responsive project pages.",
    role: "Design implementation & development",
    challenge:
      "Bring work across multiple platforms into one clear portfolio with detailed case studies and a shared content structure that is easy to maintain.",
    contributions: [
      "Built the website using Next.js App Router, React, TypeScript and Tailwind CSS with reusable components for projects, experience and contact details.",
      "Organised project descriptions, technology stacks, contributions and outcomes in shared data used by the homepage, project index and individual case studies.",
      "Generated individual project routes from the shared content and added page-specific metadata.",
      "Implemented responsive navigation and an accessible creative gallery with keyboard controls and focus restoration.",
      "Added a pausable technology animation with support for reduced-motion preferences.",
      "Optimised project screenshots with responsive image sizing and verified the site with ESLint and a production build.",
      "Maintained the project using Git and GitHub.",
    ],
    outcome:
      "A responsive portfolio that connects my professional experience with project case studies and creative work. The shared content structure keeps project cards and detail pages consistent when I update my work.",
    agency: "Personal project",
  },
  {
    slug: "vastiq",
    name: "VASTIQ Solutions",
    category: "Corporate website",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    image: "/projects/vastiq.webp",
    url: "https://www.vastiqsolutions.com/",
    linkLabel: "Live website",
    summary:
      "I took over an unfinished corporate website, completed the remaining pages and client amendments and launched Vastiq Solutions on its own domain through cPanel within one month.",
    role: "Web development, client amendments & deployment",
    challenge:
      "Bring an inherited website through its remaining development, client review and launch while maintaining consistency across a wide range of corporate content.",
    contributions: [
      "Developed and refined pages for company information, AI solutions, governance, robotics, projects, events, contact and FAQs.",
      "Resolved navigation, content, image, spacing and mobile presentation issues through client review.",
      "Managed staging-to-production deployment through cPanel, including backups and post-launch checks.",
    ],
    outcome:
      "Completed the remaining development within one month of taking over the project. Vastiq Solutions is live at www.vastiqsolutions.com, deployed through cPanel.",
  },
  {
    slug: "mypath",
    name: "MyPATH",
    category: "Recruitment website & CMS",
    stack: ["Laravel", "MySQL", "JavaScript"],
    status: "Live",
    image: "/projects/mypath.webp",
    url: "https://www.borneoprogram.com/",
    linkLabel: "Live website",
    summary:
      "I built the recruitment website, then added a Laravel and MySQL admin system for updating job listings and candidate testimonials.",
    role: "Front-end development & Laravel CMS",
    challenge:
      "Move beyond manually maintained static pages so the team could update job listings and testimonials through an administration interface.",
    contributions: [
      "Built the initial responsive website using HTML, CSS and JavaScript.",
      "Developed a Laravel and MySQL CMS for creating, updating and managing job listings and candidate testimonials.",
      "Connected managed content to the public website and implemented direct WhatsApp enquiry pathways.",
    ],
    outcome:
      "Delivered a live recruitment website with a CMS that enables routine content changes without manually editing page code.",
  },
  {
    slug: "goviral-lab",
    name: "GoViral Lab",
    category: "Custom company website",
    stack: ["HTML", "CSS", "JavaScript", "React", "Netlify"],
    status: "Live",
    summary:
      "Translated a Framer template design into HTML, CSS, JavaScript and React for the company website.",
    role: "Custom website development, responsive QA & Netlify deployment",
    challenge:
      "Improve an existing website’s presentation and enquiry access across desktop, tablet and mobile.",
    contributions: [
      "Translated a Framer template design into HTML, CSS, JavaScript and React for the company website.",
      "Refined homepage content and layout, including the Our Purpose grid and full-width sections.",
      "Corrected tablet and mobile presentation and removed unnecessary interface elements.",
      "Added a floating WhatsApp button and improved content readability and consistency.",
      "Deployed the website to Netlify and published it on govirallab.com.",
    ],
    outcome:
      "GoViral Lab is live at govirallab.com, hosted on Netlify. My work covered custom website development, responsive improvements and deployment.",
    image: "/projects/goviral-lab.webp",
    url: "https://govirallab.com/",
    linkLabel: "Live website",
  },
  {
    slug: "why-travel",
    name: "Why Travel & Tours",
    category: "Marketing website",
    stack: ["Framer", "React", "TypeScript"],
    status: "Live",
    image: "/projects/why-travel.webp",
    url: "https://whytraveltour.com/",
    linkLabel: "Live website",
    summary:
      "I completed and launched Why Travel & Tours on Framer with its own domain in two months, including responsive pages, fullscreen navigation, animated transitions and client amendments.",
    role: "Framer development, custom interactions & deployment",
    challenge:
      "Build the requested pages and interactions, then apply client feedback across desktop and mobile layouts.",
    contributions: [
      "Built and refined About, Contact, What’s New, Partner Program and MICE & Events pages.",
      "Implemented fullscreen navigation, curtain transitions, staggered text animation and responsive menu details.",
      "Standardised footers and CTAs and refined forms, FAQ accordions, imagery, spacing and hover interactions.",
      "Completed development and deployed the Framer website to whytraveltour.com within two months.",
    ],
    outcome:
      "Completed and deployed the website within two months. Why Travel & Tours is hosted on Framer and live on its own domain, whytraveltour.com.",
  },
  {
    slug: "upstairs",
    name: "Upstairs",
    category: "Home mobility website",
    stack: ["WordPress", "Elementor", "Docker", "OrbStack", "MySQL", "SSH"],
    status: "Client review",
    summary:
      "I refined a WordPress website for a stairlift provider using AI-assisted code changes in a local Docker/OrbStack environment, alongside Elementor layout and mobile improvements.",
    role: "WordPress development, AI-assisted editing & environment setup",
    challenge:
      "Support code-level changes with AI beyond the WordPress drag-and-drop editor by reproducing the website locally, while maintaining consistent pages through client review.",
    contributions: [
      "Downloaded the WordPress database and public_html files to reproduce the existing website in a local Docker environment using OrbStack.",
      "Used AI to help edit and fix website code locally, then tested the changes before transferring them back to the server.",
      "Used SSH for server access and file transfer and phpMyAdmin to import the updated database.",
      "Implemented and refined multi-page Elementor layouts, hero sections, typography, timelines and spacing.",
      "Prepared and tested colour directions, including a blue homepage preview for client review.",
      "Improved mobile layouts and page-to-page consistency while supporting review and amendment cycles.",
    ],
    outcome:
      "Established a local workflow for AI-assisted WordPress editing and delivered page and mobile refinements for client review. The website remained at staging/client review at the end of my involvement; a production launch has not been confirmed.",
    image: "/projects/upstairs.webp",
    url: "https://mediumslateblue-goose-266777.hostingersite.com/",
    linkLabel: "View preview",
  },
  {
    slug: "janine",
    name: "Janine Kuala Lumpur",
    category: "E-commerce redesign",
    stack: ["Shopify Liquid", "HTML", "CSS", "JavaScript", "Framer", "Railway"],
    status: "Unpublished theme",
    image: "/projects/janine.webp",
    imageNote: "Framer design preview",
    url: "https://blushing-lifecycle-383741.framer.app/",
    linkLabel: "Design preview",
    summary:
      "I translated a Framer design into Shopify using custom Liquid code for every section, including product and collection templates, navigation and service pages. I also integrated form submissions with a Railway-hosted service that sends email notifications.",
    role: "Custom Shopify Liquid development, design migration & form integration",
    challenge:
      "Translate a changing design direction into an editable Shopify storefront while working alongside an existing live store.",
    contributions: [
      "Built every storefront section with custom Shopify Liquid, HTML, CSS and JavaScript, with configurable settings in the Shopify Theme Editor.",
      "Developed collection and product templates, filtering, sorting and mega navigation.",
      "Refined service pages including curtains, appointments, showrooms and bespoke upholstery.",
      "Integrated form submissions with a Railway-hosted service that sends email notifications when enquiries are submitted.",
      "Worked within an unpublished theme and investigated shared product and collection behaviour affecting the live store.",
    ],
    outcome:
      "Delivered custom Liquid sections and templates for the ten-page Framer-to-Shopify migration during my contract. The Shopify redesign remained unpublished at the end of my involvement; the link shows the Framer design preview.",
  },
  {
    slug: "pferd",
    name: "Pferd Equestrian",
    category: "Shopify storefront",
    stack: ["Shopify Liquid", "CSS", "JavaScript"],
    status: "Development preview",
    summary:
      "I built every storefront section with custom Shopify Liquid code for an equestrian brand, including theme-editor controls, responsive layouts, product imagery and content updates.",
    role: "Custom Shopify Liquid development, product content & visuals",
    challenge:
      "Turn the brand’s visual direction into a flexible storefront that a nontechnical team could maintain through the Shopify Theme Editor.",
    contributions: [
      "Coded every storefront section using custom Shopify Liquid, HTML, CSS and JavaScript.",
      "Built and refined storefront pages for apparel, services, events, company information, careers and collaborations.",
      "Added editor controls for typography, spacing, colours, images and responsive settings.",
      "Prepared product visuals and refined product descriptions, founder quotes and brand copy while developing in a theme copy.",
    ],
    outcome:
      "Built custom Liquid storefront sections and editor controls during my contract. Mobile optimisation and newer gallery/testimonial requests remained unfinished at the end of my involvement; the link is a store preview.",
    image: "/projects/pferd.webp",
    url: "https://3vbjex-rr.myshopify.com/",
    linkLabel: "Store preview",
    imageNote: "Development preview",
  },
  {
    slug: "cpm",
    name: "Construction Professionals Malaysia",
    category: "Corporate website & mobile support",
    stack: ["WordPress", "Breakdance", "Flutter"],
    status: "Previous work",
    url: "https://www.construction.org.my/",
    linkLabel: "Company website",
    summary:
      "Responsive website development, content updates, troubleshooting and Flutter mobile application support.",
    role: "Junior Web Developer",
    challenge:
      "Maintain usable company websites and support mobile application updates across ongoing business requirements.",
    contributions: [
      "Built and maintained responsive WordPress pages using Breakdance.",
      "Implemented UI refinements, SEO fundamentals and performance improvements.",
      "Supported Flutter application content, bug fixes, functional testing and releases.",
    ],
    outcome:
      "Delivered website and application improvements during my January–May 2026 role.",
    agency: "Construction Professionals Malaysia",
  },
  {
    slug: "mega-jati",
    name: "Mega Jati Academy",
    category: "Website, content & mobile support",
    stack: ["Wix CMS", "Flutter", "Visual design"],
    status: "Previous work",
    url: "https://www.megajatiacademy.com/",
    linkLabel: "Company website",
    summary:
      "Website content, training campaign visuals and mobile application support for a professional training provider.",
    role: "Program Executive · Digital Media",
    challenge:
      "Keep training information and promotional material consistent across the website, visual communications and mobile application.",
    contributions: [
      "Managed Wix website content for training programmes, webinars and corporate events.",
      "Designed digital promotional materials and supported programme communications.",
      "Maintained mobile application content and performed functional testing and troubleshooting.",
    ],
    outcome:
      "Supported the academy’s website and digital communications throughout my May 2025–January 2026 role.",
    agency: "Mega Jati Academy",
  },
  {
    slug: "myelala",
    name: "MyElala",
    category: "Shopify internship",
    stack: ["Shopify Liquid", "HTML", "CSS"],
    status: "Previous work",
    url: "https://myelala.com/",
    linkLabel: "Visit website",
    summary:
      "Shopify theme customisation, responsive storefront improvements and product-content support during my web development internship.",
    role: "Shopify Web Developer Intern",
    challenge:
      "Support ongoing e-commerce operations and storefront improvements across a retail business.",
    contributions: [
      "Customised Shopify themes and supported product and content updates.",
      "Assisted with technical troubleshooting, Shopify POS and B2B pricing workflows.",
      "Supported cross-device storefront testing and related WordPress maintenance.",
    ],
    outcome:
      "Gained hands-on storefront development and e-commerce operations experience during my October 2024–January 2025 internship.",
    agency: "Homy Villa (Borneo)",
  },
  {
    slug: "campussphere",
    name: "CampusSphere",
    category: "Student e-marketplace",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "Academic project",
    summary:
      "A role-based campus marketplace with product management, shopping carts, orders and administrative approval workflows.",
    role: "Final-year project developer",
    challenge:
      "Build a campus-focused marketplace with distinct buyer, seller and administrative workflows.",
    contributions: [
      "Implemented authentication, seller product management, categories, search and filtering.",
      "Built shopping cart, order management, receipt uploads and administrative approval workflows.",
      "Conducted user acceptance testing covering usability, navigation and usefulness.",
    ],
    outcome:
      "Completed the final-year project for my Computer Science degree at UiTM Arau.",
    agency: "Universiti Teknologi MARA",
  },
];
export const clientProjects = projects.filter((project) => !project.agency);
export const featuredProjects = projects.filter(
  (project) => project.slug === "bearhauzz" || !project.agency,
);
