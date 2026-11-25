import { ArrowRight, Award, Download, GraduationCap, MapPin } from "lucide-react";
import {
  about,
  certifications,
  education,
  experience,
  highlights,
  profile,
  projects,
} from "@/data/profile";
import { ButtonLink, LinkedInIcon, Section, Tag } from "./ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-tint px-3 py-1 text-sm text-primary-deep">
            <MapPin aria-hidden="true" className="size-4" />
            Open to SAP ABAP roles
          </p>
          <h1 id="hero-heading" className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-primary-deep">{profile.role}</p>
          <p className="mt-2 text-base text-muted">{profile.focus.join(" · ")}</p>
          <p className="mt-6 max-w-[60ch] text-lg text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contact">
              Contact me <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            {profile.resumeUrl ? (
              <ButtonLink href={profile.resumeUrl} variant="secondary" download>
                <Download aria-hidden="true" className="size-4" /> Download résumé (PDF)
              </ButtonLink>
            ) : (
              <ButtonLink href="#projects" variant="secondary">
                View projects
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-line p-5">
              <p className="text-3xl font-semibold leading-tight text-primary-deep [text-wrap:balance]">{h.value}</p>
              <p className="mt-1 text-sm text-muted">{h.label}</p>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-4 rounded-xl border border-line p-5">
            <Award aria-hidden="true" className="size-7 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-ink">SAP Learning: Basic ABAP Programming</p>
              <p className="text-sm text-muted">Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From backend engineer to SAP ABAP developer" alt>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[68ch] space-y-4 text-lg text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="space-y-4">
          {about.pillars.map((p) => (
            <li key={p.title} className="rounded-xl border border-line bg-bg p-5">
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional experience" alt>
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={job.company} className="relative border-l-2 border-line pl-8">
            <span aria-hidden="true" className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-primary ring-4 ring-surface" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-ink">
                {job.title} <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              <p className="text-sm text-muted">{job.period}</p>
            </div>
            <ul className="mt-4 max-w-[75ch] list-disc space-y-2 pl-5 text-muted marker:text-primary">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {job.tags.map((t) => (
                <li key={t}>
                  <Tag variant="outline">{t}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="SAP technical projects">
      <ul className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.title} className="flex flex-col rounded-xl border border-line bg-bg p-6">
            <div>
              <Tag>{p.category}</Tag>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-muted">{p.summary}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-primary">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies used">
              {p.tags.map((t) => (
                <li key={t}>
                  <Tag variant="outline">{t}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education and certifications" alt>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex gap-4 rounded-xl border border-line bg-bg p-6">
          <GraduationCap aria-hidden="true" className="size-7 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-ink">{education.degree}</h3>
            <p className="mt-1 text-muted">
              {education.school} · {education.year}
            </p>
          </div>
        </div>
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-center gap-4 rounded-xl border border-line bg-bg p-5">
              <Award aria-hidden="true" className="size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-ink">{c.name}</h3>
                <p className="text-sm text-muted">{c.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href={profile.linkedin} className="inline-flex min-h-11 items-center gap-2 text-primary-deep underline underline-offset-4">
          <LinkedInIcon className="size-4" /> LinkedIn profile
        </a>
      </div>
    </footer>
  );
}
