import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  alt = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-t border-line py-16 sm:py-20 ${alt ? "bg-surface" : "bg-bg"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-deep">{eyebrow}</p>
        <h2 id={`${id}-heading`} className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children, variant = "tint" }: { children: ReactNode; variant?: "tint" | "outline" | "learning" }) {
  const styles = {
    tint: "bg-primary-tint text-primary-deep",
    outline: "border border-line text-ink",
    learning: "border border-dashed border-line-strong text-muted",
  }[variant];
  return <span className={`inline-block rounded px-2.5 py-1 text-sm leading-snug ${styles}`}>{children}</span>;
}

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-medium transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover"
      : "border border-primary text-primary-deep hover:bg-primary-tint";
  return (
    <a href={href} className={`${base} ${styles}`} download={download || undefined}>
      {children}
    </a>
  );
}

export function LinkedInIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
