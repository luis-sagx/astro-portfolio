# Luis Sagnay — Portfolio

A modern, high-performance personal portfolio built with **Astro**, migrated from Angular to achieve optimal loading speeds and minimal client-side JavaScript.

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=gsap&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=white)

## ✨ Features

- **Blazing-fast performance** — Static-first rendering with minimal hydration
- **GSAP animations** — Smooth scroll-triggered animations replacing AOS
- **Responsive design** — Built with Tailwind CSS for all screen sizes
- **Optimized assets** — AVIF/WebP image formats with `<picture>` elements
- **Inline SVG icons** — Zero external icon dependencies
- **Package manager: Bun** — Faster installs and execution

## 🚀 Getting Started

### Prerequisites

- **Bun** `>=1.1.0` — [Install Bun](https://bun.sh/docs/installation)

### Installation

```bash
bun install
```

### Development

Start the local development server:

```bash
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production

Build the project for deployment:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## 📁 Project Structure

```
astro-portfolio/
├── src/
│   ├── assets/          # Static assets (images, etc.)
│   ├── components/
│   │   ├── sections/    # Page sections (Hero, Projects, About, Contact)
│   │   └── ui/          # Reusable UI components (Icon, ProjectCard, SkillTag)
│   ├── data/            # Portfolio content constants
│   └── pages/
│       └── index.astro  # Main page composition + GSAP animations
├── public/
│   ├── cv/              # Resume/CV files
│   └── img/             # Public images
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠 Tech Stack

| Category      | Technology          |
|---------------|---------------------|
| Framework     | Astro               |
| Styling       | Tailwind CSS        |
| Animations    | GSAP + ScrollTrigger|
| Icons         | Inline SVGs         |
| Package Mgr   | Bun                 |
| Language      | TypeScript          |

## 🎯 Optimizations Applied

- **Replaced AOS with GSAP** — Semantic `data-animate` attributes with a single unified GSAP script
- **Static rendering by default** — No framework runtime overhead on the client
- **Modern image formats** — `<picture>` elements with AVIF/WebP for projects
- **Eliminated external dependencies** — Removed Font Awesome; using inline SVGs
- **Minimal JavaScript** — Only essential interactivity is shipped to the client

## 📄 License

This project is open source and available under the MIT License.
