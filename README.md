# Afiq Haikal — Portfolio

A light portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Layout and typography follow the Fastfolio reference, adapted to Afiq’s projects and experience.

## Development

- `npm install` (only if dependencies are missing)
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm start` to serve the production build

## Updating content

- `data/projects.ts`: project descriptions, status, screenshots, links, and case studies. The first seven projects appear on the homepage; all appear at /projects.
- `components/Experience.tsx`: employment timeline.
- `app/page.tsx`: introduction, about, and working approach.
- `components/DesignGallery.tsx`: creative portfolio items.
- `public/resume.pdf`: current downloadable résumé.
- `app/globals.css`: shared styling and responsive breakpoints.

Project detail routes are generated from the shared project data. No public source-code links are assumed for client work. The Janine image is labelled as a Framer design preview; development and review statuses reflect the supplied September 2026 records.

## Images and typography

The seven recent project thumbnails are real screenshots of the supplied websites/previews, captured in September 2026. WebP copies reduce transfer size; original design PNGs are preserved. Inter and Manrope are self-hosted by next/font (network access is required for their first build download).

The gallery uses a native modal dialog with Escape handling and focus restoration. The technology animation can be paused and honours reduced-motion preferences. Navigation, project cards, experience entries, and gallery adapt to mobile screens.

This remains the existing Next.js project and can use its established Vercel deployment workflow. No production deployment is performed by the redesign itself.
