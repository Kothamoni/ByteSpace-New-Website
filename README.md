# ByteSpace New

Landing page (plus bonus Login/Signup pages) built from the Figma design, using Next.js App Router, TypeScript and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure

```
src/app/            routes: /, /login, /signup
src/components/ui/  Button, Container, Input, Logo, SafeImage, Shape, FloatingCard, AvatarStack, SectionHeading
src/components/layout/  Navbar, Footer, AuthLayout
src/components/cards/   CourseCard, CategoryCard, TestimonialCard, StatItem
src/components/sections/ Hero, LogoStrip, CourseSection, CategoriesSection, GrowthSection,
                         CreateManageSection, CreatorCTA, Testimonials
src/data/            content arrays (courses, categories, testimonials, footer links)
public/images/       placeholder visuals — replace with real Figma exports (see ASSETS.md)
```

## Replacing placeholder images

Every image (hero cutouts, decorative shapes, course thumbnails, avatars, testimonial
photos) is currently a generated placeholder so the page renders fully out of the box.
Export the real assets from Figma and drop them into `public/images/` using the same
filenames — see `ASSETS.md` for the full list. No code changes needed.

## Notes

- Colors (`--color-brand-blue`, `--color-brand-lime`) and fonts (Poppins/Urbanist) are set
  in `src/app/globals.css` and `src/app/layout.tsx` — verify against Figma and adjust if needed.
- Login/Signup are front-end only (client-side validation, no backend) — bonus scope.
- Deploy target: Vercel (zero config for Next.js).
