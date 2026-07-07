"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Waitlist from "./Waitlist";

gsap.registerPlugin(SplitText, useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useGSAP(
    () => {
      if (!videoReady) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".hero-video", { opacity: 1, duration: 2, ease: "power2.out" });
        const split = new SplitText(".hero-title", { type: "words" });
        gsap.from(split.words, {
          yPercent: 120, opacity: 0, stagger: 0.12,
          duration: 1.4, ease: "power3.out", delay: 0.8,
        });
        gsap.to(".hero-sub", { opacity: 1, duration: 1.2, delay: 1.8 });
        gsap.to(".hero-cta", { opacity: 1, duration: 1.2, delay: 2.3 });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-video", ".hero-title", ".hero-sub", ".hero-cta"], { opacity: 1 });
      });
    },
    { scope: container, dependencies: [videoReady] }
  );

  return (
    <section id="top" ref={container} className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-muted)]">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover opacity-0"
        autoPlay muted loop playsInline poster="/poster.jpg"
        onPlaying={() => setVideoReady(true)}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/45" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center text-white">
        <h1 className="hero-title max-w-4xl text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.1] tracking-tight pb-[0.1em]">
          Build unshakable self-belief, one honest step at a time.
        </h1>
        <p className="hero-sub mt-6 max-w-xl text-lg text-white/85 opacity-0">
          SoulAnthem turns the affirmations you can&apos;t quite believe into ones you can &mdash; grounded in the science of self-efficacy.
        </p>
        <div className="hero-cta mt-10 w-full opacity-0">
          <Waitlist />
          <p className="mt-4 text-sm text-white/70">Join the waitlist for early access.</p>
        </div>
      </div>
    </section>
  );
}