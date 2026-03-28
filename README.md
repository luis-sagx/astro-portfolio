# Luis Sagnay Portfolio (Astro)

Portafolio migrado de Angular a Astro con foco en rendimiento:

- Runtime principal en Astro (contenido estático + mínima hidratación)
- Gestor de paquetes: **Bun** (únicamente)
- Animaciones: **GSAP + ScrollTrigger** (reemplaza AOS)
- Íconos: **SVG inline reutilizables** (reemplaza Font Awesome)
- Tailwind CSS para estilos utilitarios

## Requisitos

- Bun `>=1.1.0`

## Comandos

```bash
bun install
bun run dev
bun run build
bun run preview
```

## Estructura relevante

- `src/pages/index.astro`: composición de secciones + animaciones GSAP
- `src/components/sections`: Hero, Projects, About, Contact
- `src/components/ui`: Icon, ProjectCard, SkillTag
- `src/data/constants`: contenido del portafolio
- `public/assets`: imágenes y CV

## Notas de optimización aplicadas

- Reemplazo de `data-aos` por atributos semánticos `data-animate` y script GSAP único
- Render estático por defecto (sin framework runtime en cliente)
- Uso de `<picture>` con `avif/webp` para proyectos
- Eliminación de dependencia de íconos externos
