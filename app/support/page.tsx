import type { Metadata } from "next";
import SoulAnthemLogo from "@/components/SoulAnthemLogo";

export const metadata: Metadata = {
  title: "Support | SoulAnthem",
  description:
    "Get help with SoulAnthem. Contact our support team with questions, feedback, or account issues.",
};

export default function Support() {
  return (
    <>
      <header className="border-b border-black/5 bg-[var(--background)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center px-6 py-5">
          <a href="/" aria-label="SoulAnthem home">
            <SoulAnthemLogo />
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <h1 className="text-4xl font-semibold tracking-tight">Support</h1>
        <p className="mt-8 text-lg leading-relaxed text-black/60">
          We are here to help. If something is not working, if you have a question, or if you want to tell us how SoulAnthem is going for you, reach out and a real person will get back to you.
        </p>

        <h2 className="mt-16 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Contact us
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-black/60">
          Email:{" "}
          <a
            href="mailto:support@soulanthem.ai"
            className="text-[var(--accent)] hover:underline"
          >
            support@soulanthem.ai
          </a>
        </p>
        <p className="mt-4 text-lg leading-relaxed text-black/60">
          We aim to respond within two business days.
        </p>

        <h2 className="mt-16 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-12 space-y-12">
          <div>
            <h3 className="text-xl font-semibold">How do I delete my account and my data?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              Email{" "}
              <a
                href="mailto:support@soulanthem.ai"
                className="text-[var(--accent)] hover:underline"
              >
                support@soulanthem.ai
              </a>{" "}
              from the address associated with your account and ask us to delete it. We will remove your account and the data associated with it, and confirm when it is done.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">I forgot my password. What do I do?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              Use the password reset option on the sign in screen, and we will send a reset link to your email address. If you do not receive it, check your spam folder, then contact{" "}
              <a
                href="mailto:support@soulanthem.ai"
                className="text-[var(--accent)] hover:underline"
              >
                support@soulanthem.ai
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What are the age requirements?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              SoulAnthem is designed for adults, 18 and over.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How do I report a problem or a bug?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              Email{" "}
              <a
                href="mailto:support@soulanthem.ai"
                className="text-[var(--accent)] hover:underline"
              >
                support@soulanthem.ai
              </a>{" "}
              with a short description of what happened, what device you are using, and what version of the app you have. Screenshots help.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Where can I read the privacy policy?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              Our privacy policy is available at{" "}
              <a href="/privacy" className="text-[var(--accent)] hover:underline">
                soulanthem.ai/privacy
              </a>
              .
            </p>
          </div>
        </div>

        <h2 className="mt-16 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Privacy and terms
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-black/60">
          You can read our privacy policy at{" "}
          <a href="/privacy" className="text-[var(--accent)] hover:underline">
            soulanthem.ai/privacy
          </a>
          .
        </p>
      </main>

      <footer className="px-6 py-12 text-center text-sm text-black/40">
        <p>SoulAnthem, a product of Pyrigen Incorporated</p>
        <p className="mt-2">
          <a href="/support" className="hover:text-black/70">
            Support
          </a>
          <span className="mx-2">·</span>
          <a href="/privacy" className="hover:text-black/70">
            Privacy Policy
          </a>
          <span className="mx-2">·</span>
          <a href="mailto:hello@pyrigen.com" className="hover:text-black/70">
            hello@pyrigen.com
          </a>
        </p>
      </footer>
    </>
  );
}
