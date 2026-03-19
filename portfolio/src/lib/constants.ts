export const siteConfig = {
  name: "Your Name",
  role: "Frontend Engineer",
  email: "you@example.com",
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
] as const
