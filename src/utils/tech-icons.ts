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
  java: { bg: '#ED8B00' },
  javascript: { bg: '#F7DF1E' },
  typescript: { bg: '#3178C6' },
  python: { bg: '#3776AB' },
  dart: { bg: '#0175C2' },
  csharp: { bg: '#512BD4' },
  angular: { bg: '#DD0031' },
  react: { bg: '#61DAFB' },
  tailwindcss: { bg: '#38BDF8' },
  flutter: { bg: '#02569B' },
  nodejs: { bg: '#5FA04E' },
  springboot: { bg: '#6DB33F' },
  aspnetcore: { bg: '#512BD4' },
  flask: { bg: '#000000' },
  mongodb: { bg: '#47A248' },
  sqlserver: { bg: '#CC2927' },
  postgresql: { bg: '#4169E1' },
  mysql: { bg: '#4479A1' },
  firebase: { bg: '#FFCA28' },
  git: { bg: '#F05032' },
  docker: { bg: '#2496ED' },
  linux: { bg: '#FCC624' },
  ubuntu: { bg: '#E95420' },
  postman: { bg: '#FF6C37' },
  express: { bg: '#000000' },
  html: { bg: '#E34F26' },
  css: { bg: '#1572B6' },
  vite: { bg: '#646CFF' },
  bootstrap: { bg: '#7952B3' },
  bun: { bg: '#FBF0DF' },
  materialdesign: { bg: '#0F172A' },
  n8n: { bg: '#EA4B71' },
}

const TECH_ASSET_SLUG_MAP: Record<string, string> = {
  materialdesign3: 'materialdesign',
}

// Techs with light backgrounds that need a dark icon
const LIGHT_BG_TECHS = new Set([
  'javascript',
  'react',
  'tailwindcss',
  'firebase',
  'bun',
  'linux',
  'java',
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

export const getIconColor = (name: string): string => {
  const key = normalizeTechKey(name)
  return LIGHT_BG_TECHS.has(key) ? '#1a1a1a' : '#ffffff'
}

/** @deprecated Use getIconColor instead */
export const shouldUseWhiteBadgeIcon = (name: string) => {
  const key = normalizeTechKey(name)
  return !LIGHT_BG_TECHS.has(key)
}
