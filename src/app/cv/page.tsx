import Link from "next/link";
import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume — Sarah Nicol",
  description: "Resume of Sarah Nicol, Senior Product Designer.",
};

type Experience = {
  company: string;
  period: string;
  role: string;
  summary?: string;
  bullets?: string[];
  extra?: string;
};

const experience: Experience[] = [
  {
    company: "Bodyguard",
    period: "Sep 2023 – Present",
    role: "Senior Product Designer",
    summary:
      "Senior Product Designer on a B2B SaaS platform dedicated to social media moderation, analytics and AI-powered insights. Sole Product Designer, working in close collaboration with a Product Manager.",
    bullets: [
      "Owned end-to-end product design across complex, data-heavy features: discovery, user research, ideation, prototyping, specifications, delivery and QA",
      "Led design decisions autonomously across 20+ product initiatives, while partnering closely with the PM on product strategy, prioritization and scope definition",
      "Conducted user interviews and usability testing to uncover user pain points and validate solutions in production",
      "Designed and maintained the product design system from scratch, ensuring scalability, accessibility and long-term consistency",
      "Led key strategic initiatives including analytics redesign, alerting management, roles & permissions, AI integration and navigation restructuring",
      "Worked daily with Engineering and Data teams to align UX decisions with technical constraints and implementation realities",
      "Actively contributed to roadmap discussions, feature prioritization and technical refinements",
    ],
  },
  {
    company: "Questel",
    period: "Dec 2019 – Sep 2023",
    role: "Product Designer",
    summary:
      "Principal designer on a B2B SaaS IP portfolio management platform.",
    bullets: [
      "Worked closely with Product Managers from discovery to delivery on complex enterprise features",
      "Led user research to understand client needs and business constraints",
      "Designed user journeys, flows, prototypes and final UI for data-heavy products",
      "Created and maintained the design system used across multiple product areas",
    ],
    extra:
      "Additionally, took on Product Owner responsibilities for one year: wrote user stories and functional specifications, prioritized roadmap items and bug fixes, managed the product backlog and facilitated Scrum ceremonies.",
  },
  {
    company: "Youstock",
    period: "Oct 2019 – Dec 2019",
    role: "UX / UI Designer",
    bullets: [
      "Led design workshops and user research sessions",
      "Conducted usability audits",
      "Designed prototypes to support product decisions",
    ],
  },
  {
    company: "Orange (via Groupe SII)",
    period: "Jul 2018 – Oct 2019",
    role: "UX Designer",
    summary:
      "Solo UX Designer working across multiple products (B2B software, applications and marketing websites). Led discovery and user research phases, designed user journeys, flows and interfaces, collaborated closely with cross-functional teams (product, tech, marketing).",
  },
  {
    company: "Smood",
    period: "Sep 2017 – Jun 2018",
    role: "UX / UI Designer",
    summary:
      "Solo UX/UI Designer in a startup environment. Owned discovery and delivery for two main products, redesigned the design system, designed interfaces for both web and mobile applications.",
  },
  {
    company: "Tête d'Affiche",
    period: "Sep 2016 – Sep 2017",
    role: "Web Designer",
    summary:
      "Solo designer on a WordPress e-commerce product. Worked from discovery and prototyping to delivery and integration.",
  },
  {
    company: "Best Western",
    period: "Sep 2015 – Sep 2016",
    role: "Web Designer",
    summary:
      "Solo designer on a marketing website. Worked from discovery to delivery and integration.",
  },
];

const education = [
  { title: "Master Sup de Web", period: "2016–2018" },
  { title: "Design Thinking Certification", period: "2018" },
  { title: "UX Design Certification", period: "2018" },
  { title: "Bachelor Pro NTIC", period: "2015–2016" },
  { title: "Bachelor LEA", period: "2010–2014" },
];

const productSkills = [
  "End-to-end product design (discovery → delivery)",
  "UX research & usability testing",
  "Information architecture & interaction design",
  "Design systems & scalable UI",
  "Data-heavy and analytics-driven interfaces",
  "AI-powered product experiences",
  "Product strategy & prioritization",
  "Agile collaboration & backlog management",
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <div className="no-print mb-16 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden>&larr;</span> Back to home
        </Link>
        <PrintButton />
      </div>

      <header className="border-b border-line pb-10">
        <h1 className="font-serif text-5xl font-light tracking-tight text-ink">
          Sarah Nicol
        </h1>
        <p className="mt-3 font-serif text-xl italic text-muted">
          Senior Product Designer
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          <a
            href="mailto:sarah.nicol.pro@gmail.com"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            sarah.nicol.pro@gmail.com
          </a>
          <span>06 50 61 56 68</span>
        </div>
      </header>

      <div className="mt-12 grid gap-14 md:grid-cols-[2fr_1fr]">
        {/* Experience */}
        <section>
          <h2 className="mb-8 font-serif text-sm uppercase tracking-[0.22em] text-faint">
            Experience
          </h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="mb-1 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-serif text-xl text-ink">{job.company}</h3>
                  <span className="text-sm text-faint">{job.period}</span>
                </div>
                <p className="mb-2 text-sm uppercase tracking-[0.14em] text-accent">
                  {job.role}
                </p>
                {job.summary && (
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>
                )}
                {job.bullets && (
                  <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="select-none text-faint">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {job.extra && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {job.extra}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Education + Skills */}
        <div className="space-y-14">
          <section>
            <h2 className="mb-6 font-serif text-sm uppercase tracking-[0.22em] text-faint">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.title}>
                  <h3 className="text-ink">{e.title}</h3>
                  <p className="text-sm text-faint">{e.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-serif text-sm uppercase tracking-[0.22em] text-faint">
              Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm uppercase tracking-[0.14em] text-ink">
                  Product &amp; UX
                </h3>
                <ul className="space-y-1.5 text-sm text-muted">
                  {productSkills.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="select-none text-faint">—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm uppercase tracking-[0.14em] text-ink">
                  Tools
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Figma, Figma Make, Axure, Notion, Linear, Jira, Confluence,
                  Aha, Adobe Suite (Sketch, Adobe XD, InVision, Zeplin – legacy
                  tools)
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
