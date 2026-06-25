import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
      <header className="mb-24 md:mb-32">
        <div className="mb-12 flex items-center justify-between">
          <span className="font-serif text-lg italic text-muted">
            Sarah Nicol
          </span>
          <Link
            href="/cv"
            className="text-sm uppercase tracking-[0.18em] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Resume
          </Link>
        </div>

        <h1 className="font-serif text-[3.25rem] font-light leading-[1.02] tracking-tight text-ink md:text-[5.5rem]">
          Senior Product
          <br />
          <span className="italic">Designer</span>
        </h1>

        <p className="mt-8 text-base uppercase tracking-[0.2em] text-faint">
          B2B SaaS · Complex systems · AI-powered products
        </p>

        <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m a Senior Product Designer with 8+ years of experience
            designing B2B SaaS products. I specialize in taking complex
            workflows and transforming them into intuitive, user-centered
            experiences.
          </p>
          <p>
            I currently work at Bodyguard, a B2B SaaS platform helping brands
            moderate, analyze, and protect their online communities at scale.
            The product serves non-technical but expert users through complex
            workflows, permission systems, analytics, and AI-driven features. I
            take end-to-end ownership of features from discovery and problem
            framing through design, specification, delivery, and QA, working
            closely with product managers, engineers, and data teams.
          </p>
          <p>
            The projects presented here focus on my most recent work at
            Bodyguard, as they best reflect my current scope and design
            approach. I&apos;m happy to discuss additional projects from
            previous roles in more detail during conversations.
          </p>
        </div>
      </header>

      <section>
        <h2 className="mb-2 font-serif text-sm uppercase tracking-[0.22em] text-faint">
          Selected work
        </h2>
        <ul className="border-b border-line">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ul>
      </section>

      <footer className="mt-24 flex flex-col gap-2 border-t border-line pt-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <span className="font-serif italic">Sarah Nicol</span>
        <a
          href="mailto:sarah.nicol.pro@gmail.com"
          className="underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          sarah.nicol.pro@gmail.com
        </a>
      </footer>
    </div>
  );
}
