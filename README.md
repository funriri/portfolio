# Portfolio

A static Astro + Tailwind portfolio. All personal text and case studies are placeholders; sample skills and interests should be confirmed before publication. Illustrations are original SVGs included in this repository. No external image or font services are required.

## Develop

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Build with `npm run build`; inspect the built site with `npm run preview`. The development and preview site use the `/portfolio/` base path.

## Make it yours

- Edit the homepage sections in `src/pages/index.astro`.
- Change the name, initials, navigation, and metadata in `src/layouts/Layout.astro`.
- Add a project by copying a Markdown file in `src/content/projects/`. Keep a unique filename and adjust its frontmatter. `order` controls the card order.
- Put images in `public/images/`; reference them as `/images/filename.svg` in project frontmatter. The template adds the deployment base path.
- Put a real CV in `public/` and replace the “CV · coming soon” text with a link when ready.
- Update contact details before sharing. Email and CV are intentionally not active links yet.

## Deploy

The included GitHub Actions workflow builds and deploys pushes to `main`. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**, then push the project to `main`. This requires permission to enable Pages; it has not been enabled or deployed by this draft.

`astro.config.mjs` targets `https://funriri.github.io/portfolio/`. For a custom domain, update `site` and remove or adjust `base`. No database, secrets, or paid hosting are needed.

## Temperature map asset

Add the original competition poster as `public/images/southern-africa-temperature.png`. The homepage automatically uses a cropped map view, while the competition case study displays the full poster. Once added, update the “Map and poster” paragraph in its Markdown file to remove the pending-image note. Confirm the processing platform and add the official competition results link before publication.
