"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/profile";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const update = () => {
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      // The last section may be too short to reach the line; select it at the page bottom.
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `inline-flex min-h-11 items-center rounded-md px-3 text-base transition-colors ${
      active === id
        ? "font-semibold text-primary-deep underline decoration-primary decoration-2 underline-offset-8"
        : "text-muted hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex min-h-11 items-center gap-3 rounded-md">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-white"
          >
            {profile.initials}
          </span>
          <span className="font-semibold text-ink">{profile.name}</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={linkClass(n.id)} aria-current={active === n.id ? "true" : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={profile.resumeUrl ?? "#contact"}
          download={profile.resumeUrl ? true : undefined}
          className="hidden min-h-11 items-center rounded-md bg-primary px-4 text-base font-medium text-white transition-colors hover:bg-primary-hover md:inline-flex"
        >
          {profile.resumeUrl ? "Résumé (PDF)" : "Contact me"}
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`${linkClass(n.id)} w-full`}
                  aria-current={active === n.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
