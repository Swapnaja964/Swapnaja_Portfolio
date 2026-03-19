export const siteConfig = {
  name: "Swapnaja Magarde",
  role: "Software Engineer",
  email: "swapnajamagarde2004@gmail.com",
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
] as const

export type ProjectCategory = "AI" | "Web" | "Software"

export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  category: ProjectCategory
  impact?: string
}

export const projects: Project[] = [
  {
    title: "NLP Student Guidance System",
    description:
      "AI-driven NLP chatbot using TF-IDF and TensorFlow with 98.6% accuracy",
    tech: ["Python", "TensorFlow", "NLP", "Flask"],
    github: "#",
    category: "AI",
    impact: "Achieved 98.6% intent classification accuracy",
  },
  {
    title: "Tiffin Management System",
    description:
      "Full-stack platform for meal ordering, vendor management, and secure payments",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "JWT"],
    github: "https://github.com/Swapnaja964/Tiffin-Management-System",
    category: "Web",
    impact: "Streamlined daily orders and vendor operations",
  },
  {
    title: "Fleet Management System",
    description:
      "System to monitor and optimize vehicle and driver operations",
    tech: ["Java", "MySQL"],
    github: "https://github.com/Swapnaja964/Fleetmanagement",
    category: "Software",
    impact: "Improved route planning and operational visibility",
  },
  {
    title: "Robocon Website",
    description:
      "Dynamic website for robotics club showcasing events and achievements",
    tech: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/Swapnaja964/MTT-Robocon-Website",
    category: "Web",
  },
] satisfies Project[]
