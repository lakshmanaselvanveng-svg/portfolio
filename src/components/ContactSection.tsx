import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { openTo, profile } from "@/data/profile";
import { LinkedInIcon, Section } from "./ui";

function MethodCard({
  icon,
  label,
  value,
  href,
  download,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  download?: boolean;
}) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary transition-colors group-hover:bg-primary group-hover:text-white"
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-muted">{label}</span>
        <span className="block font-semibold text-ink [overflow-wrap:anywhere]">{value}</span>
      </span>
      {href && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 shrink-0 text-muted transition group-hover:text-primary motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
        />
      )}
    </>
  );
  const cls = "group flex items-center gap-4 rounded-xl border border-line bg-bg p-4 sm:p-5";
  return href ? (
    <a href={href} download={download || undefined} className={`${cls} transition hover:border-primary/50 hover:bg-primary-tint/50`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line shadow-sm lg:grid-cols-[1.1fr_1fr]">
        {/* Invitation panel */}
        <div className="relative isolate overflow-hidden bg-primary-deep p-8 text-white sm:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-primary/60" />

          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-[#0f7a4a]">
            <span aria-hidden="true" className="size-2 rounded-full bg-[#0f7a4a]" />
            Available for new roles
          </p>
          <h3 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">Looking for an SAP ABAP developer?</h3>
          <p className="mt-4 max-w-[48ch] text-lg text-[#dcebfa]">
            I bring solid software engineering habits to SAP development: clean code, careful debugging and a
            habit of turning business requirements into working solutions.
          </p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#dcebfa]">Open to</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {openTo.map((r) => (
              <li key={r} className="rounded-full bg-[#0a4a8c] px-3.5 py-1.5 text-sm">
                {r}
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 font-semibold text-primary-deep transition hover:bg-primary-tint focus-visible:outline-white"
          >
            <Mail aria-hidden="true" className="size-5" /> Email me
          </a>
        </div>

        {/* Contact methods */}
        <div className="flex flex-col justify-center gap-4 bg-surface p-6 sm:p-10">
          <MethodCard
            icon={<Mail className="size-6" />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <MethodCard
            icon={<LinkedInIcon className="size-6" />}
            label="LinkedIn"
            value="lakshmana-selvan-v"
            href={profile.linkedin}
          />
          {profile.phone && (
            <MethodCard
              icon={<Phone className="size-6" />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            />
          )}
          {profile.resumeUrl && (
            <MethodCard
              icon={<Download className="size-6" />}
              label="Résumé"
              value="Download PDF"
              href={profile.resumeUrl}
              download
            />
          )}
          <MethodCard icon={<MapPin className="size-6" />} label="Location" value={profile.location} />
        </div>
      </div>
    </Section>
  );
}
