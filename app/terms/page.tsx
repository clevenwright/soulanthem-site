import type { Metadata } from "next";

// SoulAnthem Terms of Service — public surface.
//
// LEGAL COPY: render verbatim. The "Subscriptions, Cancellation, and Refunds"
// section below is counsel-approved. Additional Terms sections may be added
// later; keep counsel-approved wording identical to the source of truth.
export const metadata: Metadata = {
  title: "Terms of Service | SoulAnthem",
  description:
    "SoulAnthem subscription, cancellation, and refund terms from Pyrigen Incorporated.",
};

function SupportLink() {
  return (
    <a href="mailto:support@pyrigen.com" className="text-[var(--accent)] hover:underline">
      support@pyrigen.com
    </a>
  );
}

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-3 text-sm text-black/40">Effective Date: [Insert Date, 2026]</p>

      <p className="mt-8 text-lg leading-relaxed text-black/60">
        These Terms of Service govern your use of SoulAnthem, a product of Pyrigen Incorporated, a Texas
        corporation. By using SoulAnthem, you agree to these terms.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Subscriptions, Cancellation, and Refunds</h2>
      <p className="mt-4 text-black/60">
        SoulAnthem offers paid subscription plans, including monthly and annual plans. Subscription prices,
        billing periods, renewal terms, and any trial terms are shown at checkout before purchase.
      </p>
      <p className="mt-4 text-black/60">
        Subscriptions renew automatically unless canceled before the next billing date. You may cancel your
        subscription through the Stripe customer portal or other cancellation method we make available. If
        you cancel, your access will continue through the end of the then-current paid subscription period,
        and you will not be charged for the next period.
      </p>
      <p className="mt-4 text-black/60">
        Except where required by applicable law, subscription payments are non-refundable and we do not
        provide refunds or credits for partially used billing periods. If we are required by law to provide
        a refund, we will do so in accordance with applicable law.
      </p>
      <p className="mt-4 text-black/60">
        If you believe you were charged in error, please contact us at <SupportLink />.
      </p>

      <p className="mt-16">
        <a href="/" className="text-[var(--accent)] hover:underline">
          &larr; Back to SoulAnthem
        </a>
      </p>
    </main>
  );
}
