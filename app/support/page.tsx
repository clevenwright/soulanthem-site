import type { Metadata } from "next";
import {
  healthPrivacyPublished,
  healthPrivacyPath,
  healthPrivacyLinkLabel,
} from "@/lib/healthPrivacyRelease";
import { APP_URL } from "@/lib/appUrl";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Support | SoulAnthem",
  description:
    "Get help with SoulAnthem. Contact our support team with questions, feedback, or account issues.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I delete my account and my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can delete your account from inside the app. Open Profile and tap \"Delete my account.\" You can also open \"Privacy & research\" from Profile and tap \"Delete my account\" there. When the in-app deletion request completes, your journeys, affirmations, anthems and their audio files, ratings, completed rituals, and account are removed from our active systems. Processor and backup systems follow the timeframes required by applicable law. You do not need to send an email when you can access the in-app deletion controls. If you cannot access your account, email support@pyrigen.com and we will handle it for you.",
      },
    },
    {
      "@type": "Question",
      name: "How do I sign in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'SoulAnthem supports "Continue with Google" and email-and-password sign-in. If you are having trouble signing in or resetting your password, email support@pyrigen.com.',
      },
    },
    {
      "@type": "Question",
      name: "What are the age requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SoulAnthem is designed for adults, 18 and over.",
      },
    },
    {
      "@type": "Question",
      name: "How do I report a problem or a bug?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest way is from inside the app. Go to Settings, then Support Center, and tell us what happened. You can attach screenshots, and the app automatically includes the technical details we need, meaning your app version, device, and the screen you were on, so you do not have to hunt for them. You can also email support@pyrigen.com if you prefer.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I read the privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our privacy policy is available at soulanthem.ai/privacy.",
      },
    },
    {
      "@type": "Question",
      name: "What's a rung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your rung is where your belief actually is. We start with something you can honestly agree with, then climb.",
      },
    },
    {
      "@type": "Question",
      name: "Why did it move me down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You told us a line felt like a stretch, so we stepped down to one you can accept today. That's the point, not a failure.",
      },
    },
    {
      "@type": "Question",
      name: "What's a stone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One stone for each ritual you finish. No streaks, no guilt for the days you miss.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change the words?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and you should. Rewrite anything that doesn't sound like you, and your anthem is rebuilt around your words.",
      },
    },
    {
      "@type": "Question",
      name: "How is my anthem made?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI writes to your rung and your words, an AI voice speaks it, and a soft instrumental sits underneath.",
      },
    },
  ],
};

export default function Support() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader />

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
            href="mailto:support@pyrigen.com"
            className="text-[var(--accent)] hover:underline"
          >
            support@pyrigen.com
          </a>
        </p>
        <p className="mt-4 text-lg leading-relaxed text-black/60">
          We aim to respond within one business day.
        </p>

        <h2 className="mt-16 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-12 space-y-12">
          <div>
            <h3 className="text-xl font-semibold">How do I delete my account and my data?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              You can delete your account from inside the app. Open Profile and tap &quot;Delete my account.&quot; You can also open &quot;Privacy &amp; research&quot; from Profile and tap &quot;Delete my account&quot; there.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              When the in-app deletion request completes, your journeys, affirmations, anthems and their audio files, ratings, completed rituals, and account are removed from our active systems. Processor and backup systems follow the timeframes required by applicable law. You do not need to send an email when you can access the in-app deletion controls.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              If you cannot access your account for any reason, email{" "}
              <a
                href="mailto:support@pyrigen.com"
                className="text-[var(--accent)] hover:underline"
              >
                support@pyrigen.com
              </a>{" "}
              and we will handle it for you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How do I sign in?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              SoulAnthem supports &quot;Continue with Google&quot; and email-and-password sign-in. If you are having trouble signing in or resetting your password, email{" "}
              <a
                href="mailto:support@pyrigen.com"
                className="text-[var(--accent)] hover:underline"
              >
                support@pyrigen.com
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
              The fastest way is from inside the app. Go to Settings, then Support Center, and tell us what happened. You can attach screenshots, and the app automatically includes the technical details we need, meaning your app version, device, and the screen you were on, so you do not have to hunt for them.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              You can also email{" "}
              <a
                href="mailto:support@pyrigen.com"
                className="text-[var(--accent)] hover:underline"
              >
                support@pyrigen.com
              </a>{" "}
              if you prefer.
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
          How it works
        </h2>
        <div className="mt-12 space-y-12">
          <div>
            <h3 className="text-xl font-semibold">What&apos;s a rung?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              Your rung is where your belief actually is. We start with something you can honestly agree with, then climb.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why did it move me down?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              You told us a line felt like a stretch, so we stepped down to one you can accept today. That&apos;s the point, not a failure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What&apos;s a stone?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              One stone for each ritual you finish. No streaks, no guilt for the days you miss.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I change the words?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              Yes, and you should. Rewrite anything that doesn&apos;t sound like you, and your anthem is rebuilt around your words.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How is my anthem made?</h3>
            <p className="mt-4 leading-relaxed text-black/60">
              AI writes to your rung and your words, an AI voice speaks it, and a soft instrumental sits underneath.
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
          {healthPrivacyPublished && (
            <>
              <span className="mx-2">·</span>
              <a href={healthPrivacyPath} className="hover:text-black/70">
                {healthPrivacyLinkLabel}
              </a>
            </>
          )}
          <span className="mx-2">·</span>
          <a href="/terms" className="hover:text-black/70">
            Terms
          </a>
          <span className="mx-2">·</span>
          <a href={APP_URL} className="hover:text-black/70">
            Sign in
          </a>
          <span className="mx-2">·</span>
          <a href="mailto:support@pyrigen.com" className="hover:text-black/70">
            support@pyrigen.com
          </a>
        </p>
      </footer>
    </>
  );
}
