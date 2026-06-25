import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  getProjectById,
  projects,
  projectGalleries,
} from "@/data/projects";
import { Gallery, HeroFigure } from "@/components/project-gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  return {
    title: project
      ? `${project.title} — Sarah Nicol`
      : "Project — Sarah Nicol",
    description: project?.shortDescription,
  };
}

// Turn bare URLs in a string into clickable links.
function withLinks(text: string): ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4 hover:opacity-80"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

// The exported solution list encodes nesting via trailing ":" / "." markers.
function indentForSolution(items: string[], index: number): string {
  let level = 0;
  for (let i = 0; i < index; i++) {
    const prev = items[i];
    if (prev.endsWith(":")) level++;
    else if (prev.endsWith(".")) level = Math.max(0, level - 1);
  }
  return level === 1 ? "ml-6" : level === 2 ? "ml-12" : level >= 3 ? "ml-16" : "";
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 font-serif text-sm uppercase tracking-[0.22em] text-faint">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 leading-relaxed text-muted">
          <span className="select-none text-accent">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const gallery = projectGalleries[project.id] ?? [];

  return (
    <div className="min-h-screen">
      <nav className="no-print sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-5 md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <span aria-hidden>&larr;</span> Back
          </Link>
          <span className="text-line">/</span>
          <span className="truncate text-sm text-faint">{project.title}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <header className="mb-20">
          <h1 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <HeroFigure src={project.cardImage} alt={project.title} />
        </header>

        <div className="space-y-16">
          <Section title="Context">
            <p className="leading-relaxed text-muted">{project.context}</p>
          </Section>

          <Section title="My role">
            <BulletList items={project.role} />
          </Section>

          <Section title="Key challenge">
            <BulletList items={project.keyChallenge} />
          </Section>

          <Section title="Solution">
            <ul className="space-y-3">
              {project.solution.map((item, i) => (
                <li
                  key={i}
                  className={`flex gap-4 leading-relaxed text-muted ${indentForSolution(
                    project.solution,
                    i,
                  )}`}
                >
                  <span className="select-none text-accent">—</span>
                  <span>{withLinks(item)}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title={project.isExpectedImpact ? "Expected impact" : "Impact"}>
            <BulletList items={project.impact} />
          </Section>

          {gallery.length > 0 && (
            <Section title="Visuals">
              <Gallery images={gallery} captions={project.imagePlaceholders} />
            </Section>
          )}
        </div>
      </main>
    </div>
  );
}
