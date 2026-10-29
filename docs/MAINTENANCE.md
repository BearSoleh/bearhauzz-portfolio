# Portfolio maintenance

This guide describes the implementation reviewed at commit `406ef5fb56e7cd22291e3ea1095842d5834e4aae`. Return to the [portfolio README](../README.md).

## Project content and selection

Edit [data/projects.ts](../data/projects.ts). Each `Project` has these required fields:

| Field | Use |
| --- | --- |
| `slug` | Unique URL segment used by cards and the detail route |
| `name`, `category` | Project title and category |
| `stack` | Technology labels |
| `status` | Displayed state, such as Live or Client review |
| `summary` | Card/intro text and detail-page metadata description |
| `role`, `challenge` | Contribution context and original problem |
| `contributions` | List of work completed |
| `outcome` | Result and remaining work |

Optional fields are `agency`, `image`, `imageNote`, `url` and `linkLabel`. Provide `linkLabel` when supplying a `url` so the external-link button has meaningful text. Images use public asset paths such as `/projects/example.webp`.

The two exports at the bottom control selection:

- `clientProjects` includes entries with no `agency` value.
- `featuredProjects` includes the `bearhauzz` entry plus entries with no `agency` value.

Currently this produces **12** case studies and **8** homepage projects. Adding an `agency` label to an existing client entry will remove it from the homepage and from the group that receives the GoViral Lab contract-status note. Check both effects when editing context.

Project-array order controls the index, filtered homepage order and circular “Next project” link. Choose unique slugs; known paths are generated from that same array. Page-specific titles and descriptions come from the selected entry.

Keep contribution and publication status precise:

- Preserve the 9 October 2026 context for the seven GoViral Lab projects.
- Distinguish live sites, staging/client review, unpublished themes and development previews.
- The Janine image/link is a Framer design preview, while the described work includes an unpublished Shopify theme.
- Use `imageNote` for preview qualifications. Keep `status`, `outcome` and `linkLabel` consistent.
- Add source-code links only when a public repository exists and publication is permitted.

## Other content locations

| Content | File |
| --- | --- |
| Intro, about, education and working approach | [app/page.tsx](../app/page.tsx) |
| Employment timeline | [components/Experience.tsx](../components/Experience.tsx) |
| Technology names and animation | [components/Skills.tsx](../components/Skills.tsx) |
| Creative-gallery items | [components/DesignGallery.tsx](../components/DesignGallery.tsx) |
| Contact details | [components/Contact.tsx](../components/Contact.tsx) and [components/Footer.tsx](../components/Footer.tsx) |
| Site title/description and fonts | [app/layout.tsx](../app/layout.tsx) |
| Responsive styling and motion preferences | [app/globals.css](../app/globals.css) |

The gallery currently has six items. Its `file` values resolve to `/designs/<file>.webp`; keep those filenames synchronized with the assets.

## Images and screenshots

Keep web assets in [public/](../public/). Project images belong under `public/projects/`; creative thumbnails use `public/designs/`. The original design PNGs are preserved alongside WebP copies. The seven recent client thumbnails were captured from supplied websites/previews in September 2026, according to the original project documentation.

[ProjectCard.tsx](../components/ProjectCard.tsx) uses `next/image`, an optional image note and a text-cover fallback when no image is supplied. Check both card and large case-study layouts after changing an image.

The documentation captures in [docs/images/](images/) were taken from the live portfolio on 29 October 2026:

| File | Captured view |
| --- | --- |
| `desktop-home.png` | Desktop homepage in the browser's default viewport |
| `mobile-home.png` | Homepage at a 390 × 844 viewport |
| `project-case-study.png` | Technical contribution section at `/projects/bearhauzz` |

Use real captures when refreshing documentation. Update the date and alt text when a capture changes; avoid presenting historical previews as newly launched sites.

## Optional résumé generation

The website serves [public/resume.pdf](../public/resume.pdf). [ResumeSection.tsx](../components/ResumeSection.tsx) supplies download/view links; contact links also reference that path.

The optional [Python script](../scripts/generate_resume.py) generates the two-page résumé. It requires Python and ReportLab, separately from the npm app:

```bash
python -m pip install reportlab
python scripts/generate_resume.py
```

The default output is `output/pdf/Afiq Haikal - Resume.pdf`. An alternative path can be supplied with `--output`.

Review the exported PDF before replacing `public/resume.pdf`. The original workflow also calls for rendering its first page to refresh `public/resume-preview.png`; the generator does not create that PNG. No renderer is configured in this repository. The reviewed application components do not reference the preview PNG.

The PDF and generator contain public professional/contact information. Check the intended details before replacing either. Python is not required to run or build the website.

## Local checks

Run these from the repository root after content or application changes:

```bash
npm ci
npm run lint
npm run build
npm start
```

Visit `/`, `/projects`, a changed `/projects/<slug>` route and `/designs`. Check relevant image paths, metadata, status labels and links. Check an unknown project slug reaches the not-found page.

For interaction changes, check keyboard navigation, the skip link, menu Escape handling, gallery close/focus restoration, animation pause and reduced-motion behavior. Review a narrow mobile viewport as well as desktop. These manual checks supplement linting and a build; there is currently no automated test script.

A fresh build may require access to Google Fonts for Inter and Manrope. The reviewed app has no environment-variable reads. Keep credentials out of future source changes; `.env*` and `.vercel` are ignored by the existing gitignore.

## Vercel deployment

The original README records that the existing Vercel project deploys pushes to `main`. A successful Vercel status was present on reviewed commit `406ef5f`; private dashboard settings were not inspected.

Before changing deployment settings, confirm in the existing Vercel project:

1. The linked GitHub repository is `BearSoleh/bearhauzz-portfolio` and the intended production branch is selected.
2. The root directory, Next.js framework detection, build command and Node version match the project.
3. The intended commit completes deployment successfully.
4. The [production URL](https://bearhauzz-portfolio.vercel.app/) displays the intended content, routes and assets.

Publishing documentation to an automatically deployed branch can trigger a Vercel build even when application files are unchanged.
