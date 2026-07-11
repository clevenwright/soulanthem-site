"use client";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Aurora from "./Aurora";
import Sprout from "./Sprout";
import Waitlist from "./Waitlist";

gsap.registerPlugin(SplitText, useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();
        tl.from(".brand", { scale: 0.9, opacity: 0, filter: "blur(12px)", duration: 1.4, ease: "power3.out" })
          .from(".brand-accent", { scaleX: 0, duration: 0.9, ease: "power2.out" }, "-=0.5");

        const split = new SplitText(".hero-title", { type: "words" });
        tl.from(split.words, { yPercent: 120, opacity: 0, stagger: 0.1, duration: 1.1, ease: "power3.out" }, "-=0.3")
          .to(".hero-sub", { opacity: 1, duration: 1 }, "-=0.4")
          .to(".hero-cta", { opacity: 1, duration: 1 }, "-=0.5");
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".brand", ".brand-accent", ".hero-title", ".hero-sub", ".hero-cta"], { opacity: 1, scale: 1, filter: "none" });
      });
    },
    { scope: container }
  );

  return (
    <section id="top" ref={container} className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]">
      <Aurora />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center text-[var(--foreground)]">

        <div className="brand mb-8 flex flex-col items-center">
          <Sprout className="mb-6 h-24 w-auto sm:h-28" />
          <span className="text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-none tracking-tight">
            Soul<span className="text-[var(--accent)]">Anthem</span>
          </span>
          <span className="brand-accent mt-4 block h-[3px] w-24 origin-center rounded-full bg-[var(--accent)]" />
        </div>

        <h1 className="hero-title max-w-3xl text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium leading-[1.15] tracking-tight text-black/80 pb-[0.1em]">
          Build unshakable self-belief, one honest step at a time.
        </h1>

        <p className="hero-sub mt-6 max-w-xl text-lg text-black/55 opacity-0">
          Turn the affirmations you can&apos;t quite believe into ones you can &mdash; grounded in the science of self-efficacy.
        </p>

        <div className="hero-cta mt-10 w-full opacity-0">
          <Waitlist />
          <p className="mt-4 text-sm text-black/50">Join the waitlist for early access.</p>
        </div>
      </div>
    </section>
  );
}