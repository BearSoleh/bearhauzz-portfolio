# Afiq Haikal — Portfolio

A light portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Layout and typography follow the Fastfolio reference, adapted to Afiq’s projects and experience.

## Development

- `npm install` (only if dependencies are missing)
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm start` to serve the production build

## Updating content

- `data/projects.ts`: project descriptions, status, screenshots, links and case studies. The homepage shows the BearHauzz Portfolio followed by all seven GoViral Lab projects; all projects appear at /projects. Personal and previous-role projects have an agency/context label so they stay separate from the GVL contract status note.
- `components/Experience.tsx`: employment timeline.
- `app/page.tsx`: introduction, about and working approach.
- `components/DesignGallery.tsx`: creative portfolio items.
- `public/resume.pdf`: current downloadable résumé.
- `scripts/generate_resume.py`: source for the two-page résumé targeting web developer and software developer/engineer roles. Run with Python and ReportLab to generate `output/pdf/Afiq Haikal - Resume.pdf`, then replace `public/resume.pdf` and render its first page to update `public/resume-preview.png`.
- `app/globals.css`: shared styling and responsive breakpoints.

Project detail routes are generated from the shared project data. No public source-code links are assumed for client work. The seven GoViral Lab projects reflect contributions and status at the end of the contract on 9 October 2026. The Janine image remains labelled as a Framer design preview and unpublished/development/review work is distinguished from confirmed launches.

The homepage and project index lead with BearHauzz Portfolio, Vastiq Solutions, MyPATH, GoViral Lab, Why Travel & Tours, Upstairs, Janine Kuala Lumpur and Pferd Equestrian. The portfolio case study covers its Next.js implementation, shared project data and accessibility work. Vastiq is live on cPanel, Why Travel on Framer and GoViral Lab on Netlify, each using its own domain. The case studies also cover Upstairs’ local AI-assisted WordPress workflow with Docker/OrbStack, SSH and phpMyAdmin and custom Shopify Liquid sections for Janine and Pferd.

## Images and typography

The seven recent project thumbnails are real screenshots of the supplied websites/previews, captured in September 2026. WebP copies reduce transfer size; original design PNGs are preserved. Inter and Manrope are self-hosted by next/font (network access is required for their first build download).

The gallery uses a native modal dialog with Escape handling and focus restoration. The technology animation can be paused and honours reduced-motion preferences. Navigation, project cards, experience entries and gallery adapt to mobile screens.

The existing Vercel project automatically deploys updates pushed to `main`. The production portfolio is available at https://bearhauzz-portfolio.vercel.app/.
