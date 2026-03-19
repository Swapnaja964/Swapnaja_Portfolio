import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Add a contact form or link out to email and socials.
      </p>
      <div className="mt-8">
        <Button asChild>
          <a href={`mailto:swapnajamagarde2004@gmail.com`}>Email me</a>
        </Button>
      </div>
    </main>
  )
}
