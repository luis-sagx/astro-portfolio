const normalizeTechKey = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/#/g, 'sharp')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]/g, '')

const TECH_ICON_MAP: Record<string, string> = {
  java: 'devicon:java',
  javascript: 'devicon:javascript',
  typescript: 'devicon:typescript',
  python: 'devicon:python',
  dart: 'devicon:dart',
  csharp: 'devicon:csharp',
  angular: 'devicon:angular',
  react: 'devicon:react',
  tailwindcss: 'devicon:tailwindcss',
  flutter: 'devicon:flutter',
  nodejs: 'devicon:nodejs',
  springboot: 'devicon:spring',
  flask: 'devicon:flask',
  aspnetcore: 'devicon:dotnetcore',
  mongodb: 'devicon:mongodb',
  sqlserver: 'devicon:microsoftsqlserver',
  postgresql: 'devicon:postgresql',
  mysql: 'devicon:mysql',
  firebase: 'devicon:firebase',
  git: 'devicon:git',
  docker: 'devicon:docker',
  linux: 'devicon:linux',
  ubuntu: 'devicon:ubuntu',
  postman: 'devicon:postman',
  express: 'devicon:express',
  html: 'devicon:html5',
  css: 'devicon:css3',
  vite: 'devicon:vitejs',
  vercel: 'devicon:vercel',
  bootstrap: 'devicon:bootstrap',
  bun: 'devicon:bun',
}

const TECH_BADGE_COLOR_MAP: Record<string, { bg: string }> = {
  java: { bg: '#ffb13d' },
  javascript: { bg: '#323330' },
  typescript: { bg: '#2148ad' },
  python: { bg: '#3e7bad' },
  dart: { bg: '#0175c2' },
  csharp: { bg: '#2f145e' },
  angular: { bg: '#400505' },
  react: { bg: '#20232a' },
  tailwindcss: { bg: '#0c4a6e' },
  flutter: { bg: '#c5d2e0' },
  nodejs: { bg: '#dadbd9' },
  springboot: { bg: '#1b5e20' },
  flask: { bg: '#f1f5f9' },
  aspnetcore: { bg: '#d3c5e0' },
  mongodb: { bg: '#1b5e20' },
  sqlserver: { bg: '#18181b' },
  postgresql: { bg: '#336791' },
  mysql: { bg: '#0a142e' },
  firebase: { bg: '#c27a04' },
  git: { bg: '#1c1c1c' },
  docker: { bg: '#333' },
  linux: { bg: '#fcc624' },
  ubuntu: { bg: '#e95420' },
  postman: { bg: '#993f1f' },
  express: { bg: '#f8fafc' },
  html: { bg: '#e34f26' },
  css: { bg: '#1572b6' },
  vite: { bg: '#646cff' },
  vercel: { bg: '#fff' },
  bootstrap: { bg: '#1d1b1f' },
  bun: { bg: '#000000' },
  materialdesign: { bg: '#2563eb' },
}

const TECH_ASSET_SLUG_MAP: Record<string, string> = {
  materialdesign3: 'materialdesign',
}

const WH_BADGE_ICONS = new Set([
  'javascript',
  'react',
  'linux',
  'nodejs',
  'typescript',
  'csharp',
  'postgresql',
  'firebase',
  'postman',
  'docker',
])

export const resolveTechIcon = (name: string) => {
  const key = normalizeTechKey(name)
  return TECH_ICON_MAP[key]
}

export const resolveTechAssetSlug = (name: string) => {
  const key = normalizeTechKey(name)
  return TECH_ASSET_SLUG_MAP[key] ?? key
}

export const resolveTechBadgeColor = (name: string) => {
  const key = normalizeTechKey(name)
  return TECH_BADGE_COLOR_MAP[key] ?? { bg: '#374151' }
}

export const shouldUseWhiteBadgeIcon = (name: string) => {
  const key = normalizeTechKey(name)
  return !WH_BADGE_ICONS.has(key)
}