"use client";
import { useState } from "react";

// TODO: replace with your real Formspree endpoint, e.g. https://formspree.io/f/xxxxxxxx
const FORM_ENDPOINT = "https://formspree.io/f/xlgyvoey";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit() {
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-lg font-medium text-[var(--accent)]">
        You&apos;re on the list. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="you@email.com"
        className="w-full rounded-full border border-black/10 bg-white px-6 py-4 text-base outline-none focus:border-[var(--accent)]"
      />
      <button
        onClick={submit}
        disabled={status === "loading"}
        className="whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-4 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Joining..." : "Get early access"}
      </button>
    </div>
  );
}