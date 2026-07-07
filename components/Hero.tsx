"use client";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Aurora from "./Aurora";
import Waitlist from "./Waitlist";

gsap.registerPlugin(SplitText, useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = new SplitText(".hero-title", { type: "words" });
        gsap.from(split.words, { yPercent: 120, opacity: 0, stagger: 0.12, duration: 1.4, ease: "power3.out", delay: 0.4 });
        gsap.to(".hero-sub", { opacity: 1, duration: 1.2, delay: 1.2 });
        gsap.to(".hero-cta", { opacity: 1, duration: 1.2, delay: 1.6 });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-title", ".hero-sub", ".hero-cta"], { opacity: 1 });
      });
    },
    { scope: container }
  );

  return (
    <section id="top" ref={container} className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]">
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center text-[var(--foreground)]">
        <h1 className="hero-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.1] tracking-tight pb-[0.1em]">
          Build unshakable self-belief, one honest step at a time.
        </h1>
        <p className="hero-sub mt-6 max-w-xl text-lg text-black/60 opacity-0">
          SoulAnthem turns the affirmations you can&apos;t quite believe into ones you can &mdash; grounded in the science of self-efficacy.
        </p>
        <div className="hero-cta mt-10 w-full opacity-0">
          <Waitlist />
          <p className="mt-4 text-sm text-black/55">Join the waitlist for early access.</p>
        </div>
      </div>
    </section>
  );
}