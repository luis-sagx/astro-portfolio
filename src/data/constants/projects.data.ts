import type { ProjectMetadata } from "../models/portfolio.model";

export const PROJECTS: ProjectMetadata[] = [
  {
    id: "sureno",
    title: "Sureño",
    images: [
      "/img/sureno/1_home.webp",
      "/img/sureno/2_mayoreo.webp",
      "/img/sureno/3_cart.webp",
    ],
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://github.com/luis-sagx/sureno-next",
    githubUrl: "https://github.com/luis-sagx/sureno-next",
  },
  {
    id: "chiroless",
    title: "Chiroless",
    images: [
      "/img/chiroless/1_principal_gastos.webp",
      "/img/chiroless/2_registro.webp",
      "/img/chiroless/3_summary.webp",
    ],
    technologies: ["Flutter", "Firebase", "Material Design 3"],
    link: "https://github.com/luis-sagx/chiroless",
    githubUrl: "https://github.com/luis-sagx/chiroless",
  },
  {
    id: "parrashub",
    title: "ParrasHub",
    images: [
      "/img/parrashub/1_rooms.webp",
      "/img/parrashub/2_send_image.webp",
      "/img/parrashub/3_messages.webp",
    ],
    technologies: [
      "React",
      "NestJS",
      "Nginx",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "BullMQ",
    ],
    link: "https://github.com/luis-sagx/parrahub",
    githubUrl: "https://github.com/luis-sagx/parrahub",
  },
  {
    id: "lotengo",
    title: "Lotengo",
    images: [
      "/img/lotengo/1_lotengo_inicio.webp",
      "/img/lotengo/3_lotengo_recorrido.webp",
      "/img/lotengo/3_lotengo_uso.webp",
    ],
    technologies: ["Expo", "React Native", "Tailwind CSS"],
    link: "https://github.com/luis-sagx/lotengo",
    githubUrl: "https://github.com/luis-sagx/lotengo",
  },
  {
    id: "pockly",
    title: "Pockly",
    images: [
      "/img/pockly/1_pockly.webp",
      "/img/pockly/2_remove-bg.webp",
      "/img/pockly/3_login.webp",
    ],
    technologies: ["Angular", "TypeScript", "Tailwind CSS"],
    link: "https://www.pockly.uk/",
    liveUrl: "https://www.pockly.uk/",
  },
];
