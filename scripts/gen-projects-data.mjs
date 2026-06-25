// One-off transform: turn the Figma Make export into a clean Next.js data module.
// - strips `import ... from 'figma:asset/<hash>.png'`
// - rewrites every `image_<hash>` reference to `/assets/<hash>.png`
// - lifts the project gallery map out of project-page.tsx
import fs from 'node:fs';

const SRC = 'Portfolio_figmamake/src';
const projSrc = fs.readFileSync(`${SRC}/data/projects.ts`, 'utf8');
const pageSrc = fs.readFileSync(`${SRC}/app/components/project-page.tsx`, 'utf8');

const toPath = (s) => s.replace(/image_([0-9a-f]{40})/g, "'/assets/$1.png'");

// projects.ts: drop imports, rewrite image refs
const body = toPath(
  projSrc
    .split('\n')
    .filter((l) => !l.trimStart().startsWith('import '))
    .join('\n')
);

// gallery map from project-page.tsx
const start = pageSrc.indexOf('const images: Record<string, string[]> =');
const end = pageSrc.indexOf('};', start) + 2;
const galleries = toPath(pageSrc.slice(start, end)).replace(
  'const images: Record<string, string[]> =',
  'export const projectGalleries: Record<string, string[]> ='
);

const out = `// Auto-ported from the Figma Make export. Content is the source of truth here.\n${body}\n${galleries}\n`;
fs.writeFileSync('src/data/projects.ts', out);
console.log('Wrote src/data/projects.ts');
