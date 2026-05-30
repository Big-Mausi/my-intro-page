import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Palette, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Frontend Developer" },
      { name: "description", content: "Personal intro of Alex Carter, a frontend developer crafting expressive, accessible web interfaces." },
      { property: "og:title", content: "Alex Carter — Frontend Developer" },
      { property: "og:description", content: "Personal intro of Alex Carter, a frontend developer crafting expressive, accessible web interfaces." },
    ],
  }),
  component: Index,
});

const passions = [
  { icon: Code2, title: "Clean Code", text: "Readable, typed, and tested — built to last." },
  { icon: Palette, title: "Thoughtful Design", text: "Pixel-honest interfaces with real personality." },
  { icon: Rocket, title: "Performance", text: "Fast loads, smooth motion, no compromises." },
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

        <section className="grid flex-1 grid-cols-1 items-center gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
              <Sparkles className="size-3.5 text-primary" /> Hello, I'm
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                Alex <span className="italic" style={{ backgroundImage: "var(--gradient-accent)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Carter</span>
              </h1>
              <p className="text-lg font-medium text-muted-foreground md:text-xl">
                Frontend developer crafting expressive, accessible interfaces.
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              My goal is simple: build web experiences that feel as good as they look. I care about
              the small details — type, motion, and the moments between clicks — and I'm focused on
              shipping interfaces that are fast, inclusive, and a little bit delightful.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" className="group h-12 rounded-full px-6 text-base" style={{ boxShadow: "var(--shadow-glow)" }}>
                View My Projects
                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <a href="#passions" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                or scroll to see what I love →
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl" style={{ backgroundImage: "var(--gradient-accent)" }} />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img
                src={avatar}
                alt="Portrait of Alex Carter"
                width={768}
                height={768}
                className="aspect-square w-full object-cover"
              />
              <div className="flex items-center justify-between border-t border-border bg-card/80 px-5 py-3 text-sm backdrop-blur">
                <span className="font-medium">Based in Lisbon</span>
                <span className="text-muted-foreground">· UTC+0</span>
              </div>
            </div>
          </div>
        </section>

        <section id="passions" className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-3">
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
      </div>
    </main>
  );
}
