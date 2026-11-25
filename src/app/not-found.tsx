import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: `Page not found · ${profile.name}` };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center px-5">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary-deep">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-ink">This page doesn&apos;t exist</h1>
      <p className="mt-3 text-lg text-muted">The link may be out of date. You can find everything on the home page.</p>
      <a
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-primary px-5 font-medium text-white hover:bg-primary-hover"
      >
        Go to the home page
      </a>
    </main>
  );
}
