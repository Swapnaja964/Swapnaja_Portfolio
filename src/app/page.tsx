import Link from "next/link"

import { Button } from "@/components/ui/button"
import { navLinks, siteConfig } from "@/lib/constants"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-20">
      <section className="max-w-2xl">
        <p className="text-sm text-muted-foreground">Portfolio starter</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {siteConfig.role}. This is a clean App Router structure with Tailwind and
          shadcn/ui.
        </p>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        {navLinks
          .filter((l) => l.href !== "/")
          .map((link) => (
            <Button key={link.href} variant="outline" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
      </section>
    </main>
  );
}
