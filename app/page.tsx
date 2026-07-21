import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            How does SoulAnthem work?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Most affirmation apps hand you a statement and ask you to believe it. &quot;I am confident.&quot; &quot;I am worthy.&quot; If you already believed it, you would not need the app. Wood, Perunovic, and Lee (2009) found that repeating positive self-statements was associated with worse mood for participants with low self-esteem.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
            SoulAnthem starts somewhere else. It starts with something you already believe.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
            We call it believability laddering. You begin with a statement you genuinely accept, even a small one, and each step moves you one honest rung closer to the belief you are reaching for. Nothing you are asked to say outruns what you can actually accept. Belief is built, not declared.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
            Your voice carries it. An adaptive voice profile learns how you speak and what lands for you, and it grows with you as your belief grows.
          </p>
        </Reveal>
      </section>

      <section className="bg-[var(--bg-muted)] px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
              What is SoulAnthem built on?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
              SoulAnthem is informed by self-efficacy theory, introduced by psychologist Albert Bandura in 1977. In Bandura&apos;s research, a person&apos;s belief in their own capability was closely associated with whether they acted, persisted, and recovered from setbacks. Not talent. Not circumstance. Belief.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
              Bandura also identified how self-efficacy is actually built, and the most powerful source is mastery experience, meaning the accumulated evidence of having done something before. This is why SoulAnthem does not ask you to leap. It asks you to climb, one honest step at a time, and it keeps the evidence of every step you take.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
              The aim is not a louder affirmation, but one you can actually accept.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Who is SoulAnthem for?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            SoulAnthem is for anyone who has tried to talk themselves into believing something and felt the words bounce off.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
            It is for the person who knows what they are capable of on paper but cannot quite feel it. It is for the one rebuilding after a setback. It is for anyone who wants confidence that holds up under pressure, because it was earned rather than asserted.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/60">
            SoulAnthem is designed for adults, 18 and over.
          </p>
        </Reveal>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            When you don&apos;t believe them, affirmations feel fake because they are.
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
              SoulAnthem uses believability-laddering, informed by Bandura&apos;s research on self-efficacy: instead of leaping to a statement you can&apos;t accept, you start where you actually are and climb in steps you can genuinely believe, until the belief is real.
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
            We built SoulAnthem because the confidence advice we were handed never worked. It asked us to pretend. Real belief isn&apos;t pretending harder. It&apos;s taking one honest step, then the next.
          </p>
        </Reveal>
      </section>

      <section className="bg-[var(--bg-muted)] px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-16 space-y-12 text-left">
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">What is believability laddering?</h3>
                <p className="mt-4 leading-relaxed text-black/60">
                  Believability laddering starts with a statement you already accept and moves one honest step at a time toward the belief you are working to hold. Instead of asking you to repeat something you do not believe, each rung stays within reach of what you can genuinely accept.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">How is SoulAnthem different from other affirmation apps?</h3>
                <p className="mt-4 leading-relaxed text-black/60">
                  Most affirmation apps ask you to repeat positive statements regardless of whether you believe them. Wood, Perunovic, and Lee (2009) found that repeating positive self-statements was associated with worse mood for participants with low self-esteem. SoulAnthem instead builds belief incrementally, starting from what you already accept, and is informed by Albert Bandura&apos;s self-efficacy framework.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">What is self-efficacy?</h3>
                <p className="mt-4 leading-relaxed text-black/60">
                  Self-efficacy is a person&apos;s belief in their own capability to accomplish something. Psychologist Albert Bandura introduced the concept in 1977, and his research associated it with whether someone takes action, persists through difficulty, and recovers from setbacks.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Why is SoulAnthem voice-driven?</h3>
                <p className="mt-4 leading-relaxed text-black/60">
                  Hearing a line spoken, rather than only reading it, makes it feel addressed to you rather than at you. SoulAnthem&apos;s adaptive voice profile learns what lands for each person and grows with them.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Is SoulAnthem free?</h3>
                <p className="mt-4 leading-relaxed text-black/60">
                  SoulAnthem is launching as a free download.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold">Who builds SoulAnthem?</h3>
                <p className="mt-4 leading-relaxed text-black/60">
                  SoulAnthem is built by Pyrigen Incorporated, a software studio based in Little Elm, Texas, founded by Cleven Wright, most recently responsible for AI business solutions at a national B2B organization, where he directed cross-functional teams to design and deploy enterprise AI platforms adopted across the organization. That same conviction drives SoulAnthem.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
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
          <a href="/support" className="hover:text-black/70">Support</a>
          <span className="mx-2">·</span>
          <a href="/privacy" className="hover:text-black/70">Privacy Policy</a>
          <span className="mx-2">·</span>
          <a href="mailto:hello@pyrigen.com" className="hover:text-black/70">hello@pyrigen.com</a>
        </p>
      </footer>
    </main>
  );
}