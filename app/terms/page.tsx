import type { Metadata } from "next";

// SoulAnthem Terms of Service — DRAFT scaffold.
//
// STATUS: NOT FOR PUBLICATION. Only the "Subscriptions, Cancellation, and
// Refunds" section is counsel-approved (verbatim, matches pyrigen.com/terms).
// Every other section is a PLACEHOLDER awaiting counsel-drafted content — do
// not write legal terms here. Effective date is a placeholder. Keep robots
// noindex until this page carries final counsel content and is approved to go
// live.
export const metadata: Metadata = {
  title: "Terms of Service | SoulAnthem",
  description:
    "SoulAnthem product terms, including subscription, cancellation, and refund terms from Pyrigen Incorporated.",
  robots: { index: false, follow: false },
};

function SupportLink() {
  return (
    <a href="mailto:support@pyrigen.com" className="text-[var(--accent)] hover:underline">
      support@pyrigen.com
    </a>
  );
}

// Clearly-marked placeholder. Distinct styling so it can never be mistaken for
// final legal copy. Each note says what counsel needs to supply.
function Placeholder({ note }: { note: string }) {
  return (
    <div className="mt-4 rounded-md border border-dashed border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
      <span className="font-semibold">PLACEHOLDER &mdash; counsel-approved content required.</span> {note}{" "}
      This section is not final and must not be published.
    </div>
  );
}

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-3 text-sm text-black/40">Effective Date: [Insert Date, 2026]</p>

      <div className="mt-6 rounded-md border border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
        <span className="font-semibold">DRAFT &mdash; not for publication.</span> Only the Subscriptions,
        Cancellation, and Refunds section below is counsel-approved. All other sections are placeholders
        awaiting counsel-drafted content.
      </div>

      <p className="mt-8 text-lg leading-relaxed text-black/60">
        These are the Terms of Service for SoulAnthem, a product of Pyrigen Incorporated, a Texas
        corporation.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">1. Acceptance of Terms</h2>
      <Placeholder note="Counsel to supply acceptance language (how using SoulAnthem constitutes agreement, who is bound, incorporation of other policies)." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">2. Eligibility and Age</h2>
      <Placeholder note="Counsel to supply eligibility and 18+ age requirement language. Note: the app records an authoritative 18+ attestation (termsVersion) at onboarding." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">3. Description of Service</h2>
      <Placeholder note="Counsel to supply a description of the SoulAnthem service and any wellness/non-medical framing (see the app disclaimer copy for reference)." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">4. Subscriptions, Cancellation, and Refunds</h2>
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

      <h2 className="mt-12 text-xl font-semibold tracking-tight">5. User Conduct</h2>
      <Placeholder note="Counsel to supply acceptable-use and prohibited-conduct language." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">6. Intellectual Property</h2>
      <Placeholder note="Counsel to supply intellectual-property and license language, including ownership of user-created content and generated anthems." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">7. Disclaimers</h2>
      <Placeholder note="Counsel to supply disclaimer of warranties (and any wellness/non-medical disclaimer alignment with the in-app disclaimer)." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">8. Limitation of Liability</h2>
      <Placeholder note="Counsel to supply limitation-of-liability language." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">9. Governing Law and Dispute Resolution</h2>
      <Placeholder note="Counsel to supply governing-law, venue, and dispute-resolution/arbitration language (Texas)." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">10. Changes to These Terms</h2>
      <Placeholder note="Counsel to supply change-notice language and how the effective date is updated." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">11. Product-Specific Terms Control</h2>
      <Placeholder note="Counsel to confirm the exact wording of the product-specific terms control clause (SoulAnthem product terms control for SoulAnthem practices). Insert once confirmed." />

      <h2 className="mt-12 text-xl font-semibold tracking-tight">12. Contact</h2>
      <Placeholder note="Counsel to confirm contact section wording. Operational contact: support@pyrigen.com; Pyrigen Incorporated, a Texas corporation." />

      <p className="mt-16">
        <a href="/" className="text-[var(--accent)] hover:underline">
          &larr; Back to SoulAnthem
        </a>
      </p>
    </main>
  );
}
