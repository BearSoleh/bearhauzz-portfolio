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
    slug: "vastiq",
    name: "VASTIQ Solutions",
    category: "Corporate website",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    image: "/projects/vastiq.webp",
    url: "https://www.vastiqsolutions.com/",
    linkLabel: "Live website",
    summary:
      "From an inherited project to a launched corporate website. Responsive pages, clearer navigation, and a complete production handover.",
    role: "Web development, client amendments & deployment",
    challenge:
      "Bring an inherited website through its remaining development, client review, and launch while maintaining consistency across a wide range of corporate content.",
    contributions: [
      "Developed and refined pages for company information, AI solutions, governance, robotics, projects, events, contact, and FAQs.",
      "Resolved navigation, content, image, spacing, and mobile presentation issues through client review.",
      "Managed staging-to-production deployment through cPanel, including backups and post-launch checks.",
    ],
    outcome:
      "Completed the remaining development within one month of taking over the project and launched the approved website on the client’s domain.",
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
      "A recruitment website that grew into a content-managed platform, connecting candidates with opportunities and giving administrators control of their content.",
    role: "Front-end development & Laravel CMS",
    challenge:
      "Move beyond manually maintained static pages so the team could update job listings and testimonials through an administration interface.",
    contributions: [
      "Built the initial responsive website using HTML, CSS, and JavaScript.",
      "Developed a Laravel and MySQL CMS for creating, updating, and managing job listings and candidate testimonials.",
      "Connected managed content to the public website and implemented direct WhatsApp enquiry pathways.",
    ],
    outcome:
      "Delivered a live recruitment website with a CMS that enables routine content changes without manually editing page code.",
  },
  {
    slug: "janine",
    name: "Janine Kuala Lumpur",
    category: "E-commerce redesign",
    stack: ["Shopify Liquid", "Framer"],
    status: "In development",
    image: "/projects/janine.webp",
    imageNote: "Framer design preview",
    url: "https://blushing-lifecycle-383741.framer.app/",
    linkLabel: "Design preview",
    summary:
      "A premium retail experience with thoughtful navigation, reusable product and collection templates, and a Framer-to-Shopify design migration.",
    role: "Shopify development & design migration",
    challenge:
      "Translate a changing design direction into an editable Shopify storefront while working alongside an existing live store.",
    contributions: [
      "Developed collection and product templates, filtering, sorting, mega navigation, and configurable sections.",
      "Refined service pages including curtains, appointments, showrooms, and bespoke upholstery.",
      "Worked within an unpublished theme and investigated shared product and collection behaviour affecting the live store.",
    ],
    outcome:
      "Substantial redesign work completed. The ten-page Framer-to-Shopify migration was still in progress at the last update; the linked Framer preview shows design work, not the published Shopify implementation.",
  },
  {
    slug: "pferd",
    name: "Pferd Equestrian",
    category: "Shopify storefront",
    stack: ["Shopify Liquid", "CSS", "JavaScript"],
    status: "In development",
    summary:
      "An equestrian storefront with reusable pages, flexible theme-editor controls, and carefully prepared product imagery and brand content.",
    role: "Theme development, product content & visual preparation",
    challenge:
      "Turn the brand’s visual direction into a flexible storefront that a nontechnical team could maintain through the Shopify Theme Editor.",
    contributions: [
      "Built and refined storefront pages for apparel, services, events, company information, careers, and collaborations.",
      "Added editor controls for typography, spacing, colours, images, and responsive settings.",
      "Prepared product visuals and refined product descriptions, founder quotes, and brand copy while developing in a theme copy.",
    ],
    outcome:
      "Storefront development and refinement are ongoing. Mobile optimisation and newer gallery/testimonial requests were not fully complete at the last update.",
    image: "/projects/pferd.webp",
    url: "https://3vbjex-rr.myshopify.com/",
    linkLabel: "Store preview",
    imageNote: "Storefront in development",
  },
  {
    slug: "why-travel",
    name: "Why Travel & Tours",
    category: "Marketing website",
    stack: ["Framer", "React", "TypeScript"],
    status: "Preview",
    image: "/projects/why-travel.webp",
    url: "https://rotating-decisions-826454.framer.app/",
    linkLabel: "View preview",
    summary:
      "A travel website brought to life with fullscreen navigation, animated transitions, consistent page layouts, and clear enquiry journeys.",
    role: "Page development & custom interactions",
    challenge:
      "Create consistent, engaging interactions across a multi-page marketing website while accommodating client feedback across devices.",
    contributions: [
      "Built and refined About, Contact, What’s New, Partner Program, and MICE & Events pages.",
      "Implemented fullscreen navigation, curtain transitions, staggered text animation, and responsive menu details.",
      "Standardised footers and CTAs, and refined forms, FAQ accordions, imagery, spacing, and hover interactions.",
    ],
    outcome:
      "The recorded amendment scope was completed. Production-domain launch has not been confirmed; the available link is a Framer preview.",
  },
  {
    slug: "upstairs",
    name: "Upstairs",
    category: "Home mobility website",
    stack: ["WordPress", "Elementor"],
    status: "Client review",
    summary:
      "A corporate website for a stairlift and home-mobility provider, refined through typography, colour exploration, responsive layouts, and client feedback.",
    role: "WordPress implementation & design refinement",
    challenge:
      "Translate evolving visual preferences into consistent pages while managing repeated colour and layout reviews.",
    contributions: [
      "Implemented and refined multi-page Elementor layouts, hero sections, typography, timelines, and spacing.",
      "Prepared and tested colour directions, including a blue homepage preview for client review.",
      "Improved mobile layouts and page-to-page consistency while supporting review and amendment cycles.",
    ],
    outcome:
      "Website implementation and visual refinement reached staging/client review. A production launch has not been confirmed.",
    image: "/projects/upstairs.webp",
    url: "https://mediumslateblue-goose-266777.hostingersite.com/",
    linkLabel: "View preview",
  },
  {
    slug: "goviral-lab",
    name: "GoViral Lab",
    category: "Company website refinement",
    stack: ["Framer"],
    status: "Live",
    summary:
      "Responsive refinements to the company website, with clearer content, better tablet and mobile layouts, and a direct WhatsApp enquiry route.",
    role: "Website refinement & responsive QA",
    challenge:
      "Improve an existing website’s presentation and enquiry access across desktop, tablet, and mobile.",
    contributions: [
      "Refined homepage content and layout, including the Our Purpose grid and full-width sections.",
      "Corrected tablet and mobile presentation and removed unnecessary interface elements.",
      "Added a floating WhatsApp button and improved content readability and consistency.",
    ],
    outcome:
      "Refinements were made to the company website, reported as live. My contribution focused on improvements to the existing site.",
    image: "/projects/goviral-lab.webp",
    url: "https://www.govirallab.com/",
    linkLabel: "Live website",
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
      "Responsive website development, content updates, troubleshooting, and Flutter mobile application support.",
    role: "Junior Web Developer",
    challenge:
      "Maintain usable company websites and support mobile application updates across ongoing business requirements.",
    contributions: [
      "Built and maintained responsive WordPress pages using Breakdance.",
      "Implemented UI refinements, SEO fundamentals, and performance improvements.",
      "Supported Flutter application content, bug fixes, functional testing, and releases.",
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
      "Website content, training campaign visuals, and mobile application support for a professional training provider.",
    role: "Program Executive · Digital Media",
    challenge:
      "Keep training information and promotional material consistent across the website, visual communications, and mobile application.",
    contributions: [
      "Managed Wix website content for training programmes, webinars, and corporate events.",
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
      "Shopify theme customisation, responsive storefront improvements, and product-content support during my web development internship.",
    role: "Shopify Web Developer Intern",
    challenge:
      "Support ongoing e-commerce operations and storefront improvements across a retail business.",
    contributions: [
      "Customised Shopify themes and supported product and content updates.",
      "Assisted with technical troubleshooting, Shopify POS, and B2B pricing workflows.",
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
      "A role-based campus marketplace with product management, shopping carts, orders, and administrative approval workflows.",
    role: "Final-year project developer",
    challenge:
      "Build a campus-focused marketplace with distinct buyer, seller, and administrative workflows.",
    contributions: [
      "Implemented authentication, seller product management, categories, search, and filtering.",
      "Built shopping cart, order management, receipt uploads, and administrative approval workflows.",
      "Conducted user acceptance testing covering usability, navigation, and usefulness.",
    ],
    outcome:
      "Completed the final-year project for my Computer Science degree at UiTM Arau.",
    agency: "Universiti Teknologi MARA",
  },
  {
    slug: "bearhauzz",
    name: "BearHauzz Portfolio",
    category: "Personal portfolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Personal project",
    summary:
      "My home on the web: selected projects, professional experience, creative work, and the tools behind them.",
    role: "Design implementation & development",
    challenge:
      "Present development experience clearly through a maintainable, responsive portfolio.",
    contributions: [
      "Built reusable React components and structured project content.",
      "Implemented responsive navigation, project pages, and an accessible creative gallery.",
      "Maintained the project using Git and GitHub.",
    ],
    outcome: "A central place to explore my work and get in touch.",
    agency: "Personal project",
  },
];
export const clientProjects = projects.slice(0, 7);
