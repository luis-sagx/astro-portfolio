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
