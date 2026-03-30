const normalizeTechKey = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/#/g, 'sharp')
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]/g, '')

const TECH_ALIASES: Record<string, string> = {
  nodejs: 'nodejs',
  node: 'nodejs',
  typescript: 'typescript',
  csharp: 'csharp',
  aspnetcore: 'aspnetcore',
  materialdesign3: 'materialdesign',
}

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

const TECH_ASSET_SLUG_MAP: Record<string, string> = {
  materialdesign3: 'materialdesign3',
}

const TECH_BADGE_COLOR_MAP: Record<string, { bg: string; fg: string }> = {
  java: { bg: '#db8821', fg: '#ffffff' },
  javascript: { bg: '#323330', fg: '#f7df1e' },
  typescript: { bg: '#2148ad', fg: '#ffffff' },
  python: { bg: '#3776ab', fg: '#ffffff' },
  dart: { bg: '#0175c2', fg: '#ffffff' },
  csharp: { bg: '#2f145e', fg: '#ffffff' },
  angular: { bg: '#dd0031', fg: '#ffffff' },
  react: { bg: '#20232a', fg: '#61dafb' },
  tailwindcss: { bg: '#0ea5b7', fg: '#ffffff' },
  flutter: { bg: '#02569b', fg: '#ffffff' },
  nodejs: { bg: '#5fa04e', fg: '#ffffff' },
  springboot: { bg: '#6db33f', fg: '#ffffff' },
  flask: { bg: '#000000', fg: '#ffffff' },
  aspnetcore: { bg: '#512bd4', fg: '#ffffff' },
  mongodb: { bg: '#4ea94b', fg: '#ffffff' },
  sqlserver: { bg: '#cc2927', fg: '#ffffff' },
  postgresql: { bg: '#336791', fg: '#ffffff' },
  mysql: { bg: '#4479a1', fg: '#ffffff' },
  firebase: { bg: '#c27a04', fg: '#ffffff' },
  git: { bg: '#f05032', fg: '#ffffff' },
  docker: { bg: '#333', fg: '#ffffff' },
  linux: { bg: '#fcc624', fg: '#111111' },
  ubuntu: { bg: '#e95420', fg: '#ffffff' },
  postman: { bg: '#993f1f', fg: '#ffffff' },
  express: { bg: '#000000', fg: '#ffffff' },
  html: { bg: '#e34f26', fg: '#ffffff' },
  css: { bg: '#1572b6', fg: '#ffffff' },
  vite: { bg: '#646cff', fg: '#ffffff' },
  vercel: { bg: '#000000', fg: '#ffffff' },
  bootstrap: { bg: '#7952b3', fg: '#ffffff' },
  bun: { bg: '#000000', fg: '#ffffff' },
  materialdesign: { bg: '#757575', fg: '#ffffff' },
}

export const resolveTechKey = (name: string) => {
  const normalized = normalizeTechKey(name)
  return TECH_ALIASES[normalized] ?? normalized
}

export const resolveTechIcon = (name: string) =>
  TECH_ICON_MAP[resolveTechKey(name)]

export const resolveTechAssetSlug = (name: string) => {
  const key = resolveTechKey(name)
  return TECH_ASSET_SLUG_MAP[key] ?? key
}

export const resolveTechBadgeColor = (name: string) => {
  const key = resolveTechKey(name)
  return TECH_BADGE_COLOR_MAP[key] ?? { bg: '#374151', fg: '#ffffff' }
}

export const shouldUseWhiteBadgeIcon = (name: string) => {
  const key = resolveTechKey(name)
  return ![
    'javascript',
    'react',
    'linux',
    'typescript',
    'csharp',
    'postgresql',
    'firebase',
    'postman',
    'docker',
  ].includes(key)
}
