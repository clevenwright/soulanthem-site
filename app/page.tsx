import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* The problem */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Affirmations feel fake because they are &mdash; when you don&apos;t believe them.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Telling yourself &quot;I am confident&quot; when you feel the opposite doesn&apos;t build belief. It builds resistance. Your mind knows it isn&apos;t true, and it quietly pushes back.
          </p>
        </Reveal>
      </section>

      {/* The insight */}
      <section className="bg-[var(--bg-muted)] px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">The insight</p>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
              Belief is built one believable step at a time.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
              SoulAnthem uses believability-laddering, grounded in Bandura&apos;s research on self-efficacy: instead of leaping to a statement you can&apos;t accept, you start where you actually are and climb in steps you can genuinely believe &mdash; until the belief is real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <Reveal>
          <h2 className="text-center text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">How it works</h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            { n: "01", t: "Share your goal", d: "Tell SoulAnthem what you want to believe about yourself, in your own words." },
            { n: "02", t: "Get your ladder", d: "AI crafts affirmations that meet you where you are and rise in steps you can actually accept." },
            { n: "03", t: "Hear your anthem", d: "Your words become a personal audio journey, in a voice that adapts to you." },
          ].map((s) => (
            <Reveal key={s.n}>
              <div className="text-center">
                <p className="text-3xl font-semibold text-[var(--accent)]">{s.n}</p>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-black/60">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[var(--bg-muted)] px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
              Not louder affirmations. Honest ones.
            </h2>
            <div className="mx-auto mt-10 max-w-2xl space-y-6 text-left">
              <p className="text-lg leading-relaxed text-black/70"><span className="font-medium">The honest climb.</span> Start from what&apos;s true today, not a fantasy you&apos;ll reject.</p>
              <p className="text-lg leading-relaxed text-black/70"><span className="font-medium">An adaptive voice.</span> A personal anthem that meets you where you are and grows with you.</p>
              <p className="text-lg leading-relaxed text-black/70"><span className="font-medium">Believability, measured.</span> Rate each step, and your ladder adjusts to keep every rung real.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-2xl px-6 py-32 text-center">
        <Reveal>
          <p className="text-xl leading-relaxed text-black/70">
            We built SoulAnthem because the confidence advice we were handed never worked &mdash; it asked us to pretend. Real belief isn&apos;t pretending harder. It&apos;s taking one honest step, then the next.
          </p>
        </Reveal>
      </section>

      {/* Waitlist close */}
      <section id="waitlist" className="scroll-mt-24 bg-[var(--foreground)] px-6 py-32 text-center text-white">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-tight">
            Be first to build your anthem.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Join the waitlist for early access when SoulAnthem launches.
          </p>
          <div className="mt-10">
            <Waitlist />
          </div>
        </Reveal>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-black/40">
        <p>SoulAnthem, a product of Pyrigen Incorporated</p>
        <p className="mt-2">
          <a href="/privacy" className="hover:text-black/70">Privacy Policy</a>
          <span className="mx-2">·</span>
          <a href="mailto:hello@pyrigen.com" className="hover:text-black/70">hello@pyrigen.com</a>
        </p>
      </footer>
    </main>
  );
}