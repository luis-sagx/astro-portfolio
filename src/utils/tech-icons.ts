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
  bootstrap: 'devicon:bootstrap',
  bun: 'devicon:bun',
}

const TECH_BADGE_COLOR_MAP: Record<string, { bg: string; border?: string }> = {
  java: { bg: '#f89820' },
  javascript: { bg: '#f7df1e' },
  typescript: { bg: '#3178c6' },
  python: { bg: '#1e40af' },
  dart: { bg: '#035fa3' },
  csharp: { bg: '#3b0764' },
  angular: { bg: '#1f2937' },
  react: { bg: '#1f2937' },
  tailwindcss: { bg: '#083344' },
  flutter: { bg: '#1e293b' },
  nodejs: { bg: '#1f2937' },
  springboot: { bg: '#1b6638' },
  aspnetcore: { bg: '#1e1b4b' },
  flask: { bg: '#f8fafc', border: '#e5e7eb' },
  mongodb: { bg: '#1b6638' },
  sqlserver: { bg: '#1e293b' },
  postgresql: { bg: '#1e3a8a' },
  mysql: { bg: '#f1f5f9', border: '#cbd5f5' },
  firebase: { bg: '#92400e' },
  git: { bg: '#111827' },
  docker: { bg: '#075985' },
  linux: { bg: '#a16207' },
  ubuntu: { bg: '#9a3412' },
  postman: { bg: '#7c2d12' },
  express: { bg: '#f8fafc' },
  html: { bg: '#e34f26' },
  css: { bg: '#1572b6' },
  vite: { bg: '#4c1d95' },
  bootstrap: { bg: '#581c87' },
  bun: { bg: '#0a0a0a' },
  materialdesign: { bg: '#0f172a' },
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
  return TECH_BADGE_COLOR_MAP[key] ?? { bg: '#fff' }
}

export const shouldUseWhiteBadgeIcon = (name: string) => {
  const key = normalizeTechKey(name)
  return !WH_BADGE_ICONS.has(key)
}
