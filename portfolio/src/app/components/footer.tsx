import Link from "next/link"

import { navLinks, siteConfig } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.role}</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {navLinks
            .filter((l) => l.href !== "/")
            .map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  )
}
