import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Palette, Rocket, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Habeebat Yusuf — Frontend Developer" },
      { name: "description", content: "Personal intro of Habeebat Yusuf, a frontend developer crafting expressive, accessible web interfaces." },
      { property: "og:title", content: "Habeebat Yusuf — Frontend Developer" },
      { property: "og:description", content: "Personal intro of Habeebat Yusuf, a frontend developer crafting expressive, accessible web interfaces." },
    ],
  }),
  component: Index,
});

const passions = [
  { icon: Code2, title: "Clean Code", text: "Readable, typed, and tested — built to last." },
  { icon: Palette, title: "Thoughtful Design", text: "Pixel-honest interfaces with real personality." },
  { icon: Rocket, title: "Performance", text: "Fast loads, smooth motion, no compromises." },
];

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "Framer Motion"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Vite", "shadcn/ui"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:py-16">
        <header className="flex items-center justify-between">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Portfolio · 2026</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Available for work
          </span>
        </header>

        <section className="flex flex-1 flex-col items-start justify-center gap-8 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
            <Sparkles className="size-3.5 text-primary" /> Hello, I'm
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Habeebat <span className="italic" style={{ backgroundImage: "var(--gradient-accent)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Yusuf</span>
            </h1>
            <p className="text-lg font-medium text-muted-foreground md:text-xl">
              Frontend developer crafting expressive, accessible interfaces.
            </p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            My goal is simple: build web experiences that feel as good as they look. I care about
            the small details — type, motion, and the moments between clicks — and I'm focused on
            shipping interfaces that are fast, inclusive, and a little bit delightful.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg" className="group h-12 rounded-full px-6 text-base" style={{ boxShadow: "var(--shadow-glow)" }}>
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <a href="#passions" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              or scroll to see what I love →
            </a>
          </div>
        </section>

        <section id="passions" className="grid grid-cols-1 gap-4 pb-16 md:grid-cols-3">
          {passions.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1" style={{ transitionTimingFunction: "var(--transition-smooth)" }}>
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" />
              </div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </section>

        <section id="projects" className="pb-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Selected Work</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">My Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1"
                style={{ transitionTimingFunction: "var(--transition-smooth)", boxShadow: "var(--shadow-soft)" }}
              >
                <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border" style={{ backgroundImage: "var(--gradient-accent)" }} />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-sm">
                  <a href={p.liveUrl} className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                    <ExternalLink className="size-3.5" /> Live
                  </a>
                  <a href={p.codeUrl} className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground">
                    <Github className="size-3.5" /> Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
