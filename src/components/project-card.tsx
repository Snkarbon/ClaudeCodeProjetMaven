import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const inProgress = project.tags.includes("in progress");
  const number = String(index + 1).padStart(2, "0");

  return (
    <li>
      <Link
        href={`/project/${project.id}`}
        className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-5 border-t border-line py-8 md:grid-cols-[3rem_1fr_14rem] md:gap-x-10 md:py-10"
      >
        <span className="font-serif text-lg text-faint tabular-nums md:text-xl">
          {number}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-accent md:text-[1.75rem]">
              {project.title}
            </h3>
            {inProgress && (
              <span className="text-[0.7rem] uppercase tracking-[0.18em] text-faint">
                In progress
              </span>
            )}
          </div>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-accent">
            View project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>

        <div className="relative col-span-2 mt-6 aspect-[4/3] overflow-hidden rounded-sm bg-card md:col-span-1 md:mt-0 md:self-center">
          <Image
            src={project.cardImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 14rem"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </Link>
    </li>
  );
}
