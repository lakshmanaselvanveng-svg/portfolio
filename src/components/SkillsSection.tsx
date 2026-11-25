import { CheckCircle2, Cloud, Code, Database, FileText, Layers, Sparkles, Sprout, Wrench } from "lucide-react";
import { coreFocus, skillGroups, type Skill, type SkillGroup } from "@/data/profile";
import { Section } from "./ui";

const groupIcons: Record<SkillGroup["icon"], typeof Code> = {
  code: Code,
  cloud: Cloud,
  layers: Layers,
  file: FileText,
  database: Database,
  wrench: Wrench,
};

function LearningBadge() {
  return (
    <span className="ml-1.5 inline-block rounded border border-dashed border-line-strong px-1.5 text-xs font-medium text-muted">
      Learning
    </span>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.learning ? Sprout : CheckCircle2;
  return (
    <li className="flex items-start gap-2.5">
      <Icon aria-hidden="true" className={`mt-0.5 size-[18px] shrink-0 ${skill.learning ? "text-muted" : "text-primary"}`} />
      <span className="text-ink">
        {skill.name}
        {skill.learning && <LearningBadge />}
      </span>
    </li>
  );
}

function FeaturedCard({ group }: { group: SkillGroup }) {
  const Icon = groupIcons[group.icon];
  const learning = group.skills.filter((s) => s.learning).length;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-bg p-7 shadow-sm transition motion-safe:hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="flex items-start justify-between gap-4">
        <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-xl bg-primary-tint text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="size-6" />
        </span>
        <span className="rounded-full bg-surface px-3 py-1 text-sm text-muted">
          {group.skills.length} skills{learning > 0 && ` · ${learning} learning`}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{group.title}</h3>
      <p className="mt-1.5 text-muted">{group.description}</p>
      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {group.skills.map((s) => (
          <SkillItem key={s.name} skill={s} />
        ))}
      </ul>
    </article>
  );
}

function SupportingCard({ group }: { group: SkillGroup }) {
  const Icon = groupIcons[group.icon];
  return (
    <article className="rounded-2xl border border-line bg-bg p-6">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-lg bg-surface text-primary">
          <Icon className="size-5" />
        </span>
        <div>
          <h4 className="font-semibold text-ink">{group.title}</h4>
          <p className="text-sm text-muted">{group.description}</p>
        </div>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((s) => (
          <li
            key={s.name}
            className={`rounded-md px-2.5 py-1 text-sm leading-snug ${
              s.learning ? "border border-dashed border-line-strong text-muted" : "bg-primary-tint text-primary-deep"
            }`}
          >
            {s.name}
            {s.learning && <span className="sr-only"> (learning)</span>}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Skills() {
  const featured = skillGroups.filter((g) => g.featured);
  const supporting = skillGroups.filter((g) => !g.featured);

  return (
    <Section id="skills" eyebrow="Skills" title="Technical expertise">
      <div className="-mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-[60ch] text-lg text-muted">
          SAP development across ABAP Cloud, S/4HANA and BTP, backed by 2 years 4 months of backend engineering.
        </p>
        <ul aria-label="Legend" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <li className="flex items-center gap-2">
            <CheckCircle2 aria-hidden="true" className="size-4 text-primary" /> Hands-on experience
          </li>
          <li className="flex items-center gap-2">
            <Sprout aria-hidden="true" className="size-4 text-muted" /> Currently learning
          </li>
        </ul>
      </div>

      {/* Core focus strip */}
      <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-primary-tint p-5 sm:flex-row sm:items-center sm:p-6">
        <p className="flex shrink-0 items-center gap-2 font-semibold text-primary-deep">
          <Sparkles aria-hidden="true" className="size-5" /> Core focus
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {coreFocus.map((s) => (
            <li
              key={s.name}
              className={`rounded-full bg-bg px-4 py-1.5 text-base font-medium ${
                s.learning ? "border border-dashed border-line-strong text-muted" : "border border-primary/30 text-primary-deep"
              }`}
            >
              {s.name}
              {s.learning && <span className="text-sm font-normal"> · learning</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((g) => (
          <FeaturedCard key={g.title} group={g} />
        ))}
      </div>

      <h3 className="mt-14 text-lg font-semibold text-ink">Supporting skills</h3>
      <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {supporting.map((g) => (
          <SupportingCard key={g.title} group={g} />
        ))}
      </div>
    </Section>
  );
}
