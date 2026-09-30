<<<<<<< HEAD
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
=======
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# ByteSpace-New-Website
>>>>>>> d781d51346ec9c7cd510103764ce95f7141da724
>>>>>>> f800b4b783c587c4e89c633aab056d2ab3364a91
