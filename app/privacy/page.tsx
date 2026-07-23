import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Privacy Policy | SoulAnthem",
  description: "How SoulAnthem and Pyrigen Incorporated handle your data.",
};

function SupportLink() {
  return (
    <a href="mailto:support@pyrigen.com" className="text-[var(--accent)] hover:underline">
      support@pyrigen.com
    </a>
  );
}

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-black/40">Last updated: July 20, 2026</p>

      <p className="mt-8 text-lg leading-relaxed text-black/60">
        SoulAnthem is built by Pyrigen Incorporated, a Texas corporation. This policy explains what
        information SoulAnthem collects, how we use it, and the choices you have. We keep it in plain
        language on purpose.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Who we are</h2>
      <p className="mt-4 text-black/60">
        SoulAnthem is a product of Pyrigen Incorporated, based in Dallas, Texas. If you have any
        question about this policy or your data, email <SupportLink />.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Who can use SoulAnthem</h2>
      <p className="mt-4 text-black/60">
        SoulAnthem is designed for adults, 18 and over. We ask you to confirm your age during onboarding.
        We do not knowingly collect information from anyone under 18. If you believe a minor has provided
        us information, contact us at <SupportLink /> and we will delete it.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">How you sign in</h2>
      <p className="mt-4 text-black/60">
        SoulAnthem supports &quot;Continue with Google&quot; and email-and-password sign-in. If you use
        Google, we receive basic account information from Google, such as your name and email address, so
        we can create and secure your account. We do not receive your Google password. If you create an
        account with email and password, our authentication provider handles those credentials to
        authenticate and secure your account.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">What we collect</h2>
      <p className="mt-4 text-black/60">We collect only what we need to make SoulAnthem work for you.</p>
      <ul className="mt-4 space-y-3 text-black/60">
        <li>
          <span className="font-medium text-black/80">Account information.</span> Your name, when
          available, your email address, and a user identifier received or created through your chosen
          sign-in method so we can keep your account and content associated with you.
        </li>
        <li>
          <span className="font-medium text-black/80">Your content.</span> The words, affirmations,
          journeys, ratings, and rituals you create or complete inside the app. This is the heart of
          SoulAnthem and it belongs to you.
        </li>
        <li>
          <span className="font-medium text-black/80">Generated audio.</span> When SoulAnthem creates an
          anthem for you, it generates an audio version using text to speech, and a soft instrumental.
          These audio files are stored and associated with your account so you can play them back.
          SoulAnthem does not record your voice and does not access your microphone.
        </li>
        <li>
          <span className="font-medium text-black/80">Usage and device information.</span> Basic
          information about how the app is used and the device it runs on, collected through analytics,
          so we can understand what is working and fix what is not.
        </li>
      </ul>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">How we use your information</h2>
      <p className="mt-4 text-black/60">
        We use your information to create and secure your account, to build and play back your anthems, to
        save your progress, to respond when you contact support, and to improve the app. We do not sell
        your personal information. We do not use your information for third-party advertising or
        cross-app tracking.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Service Providers</h2>
      <p className="mt-4 text-black/60">
        We use service providers that help us operate, secure, and deliver SoulAnthem, including cloud
        hosting and infrastructure providers, authentication and database providers, payment processors,
        AI text-generation providers, safety-analysis providers, audio-generation providers, analytics or
        diagnostics providers, and customer-support tools.
      </p>
      <p className="mt-4 text-black/60">
        These providers may process information on our behalf only as needed to provide services to us,
        support security and reliability, comply with legal obligations, or as otherwise described in this
        Privacy Policy and our applicable agreements with them. We may update our service providers from
        time to time as our infrastructure and operations evolve.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Analytics and Performance Monitoring</h2>
      <p className="mt-4 text-black/60">
        We use analytics and performance-monitoring tools, including Google Analytics for Firebase and
        Firebase Performance Monitoring, to understand how SoulAnthem is used, measure product performance,
        diagnose reliability issues, and improve the service.
      </p>
      <p className="mt-4 text-black/60">
        We configure these tools to limit the information sent for analytics. We do not send emotional
        free-text entries, mental-block text, affirmation text, anthem script text, or email addresses to
        analytics. Analytics events are limited to product usage and performance information, such as app
        flow events, feature usage, device and app performance information, and similar diagnostic data.
        Where we use custom goal-related analytics, we collapse custom goal names into a generic
        &quot;Custom&quot; label.
      </p>
      <p className="mt-4 text-black/60">
        We do not use Google Analytics for Firebase for advertising targeting, and Google Signals is
        disabled.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">How your information is stored and protected</h2>
      <p className="mt-4 text-black/60">
        Your account, your content, and your generated audio are stored securely using Google Firebase
        infrastructure. We take reasonable measures to protect your information, though no method of
        storage or transmission is ever completely secure.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">International data processing</h2>
      <p className="mt-4 text-black/60">
        Our services run on Google Cloud infrastructure located in the United States (Cloud Functions in
        the us-central1 region). If you use SoulAnthem from outside the United States, your information
        will be processed in the U.S. and other countries where our service providers operate.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Deleting your account and your data</h2>
      <p className="mt-4 text-black/60">
        You can delete your account from inside the app. Open Profile and tap &quot;Delete my
        account.&quot; You can also open &quot;Privacy &amp; research&quot; from Profile and tap
        &quot;Delete my account&quot; there.
      </p>
      <p className="mt-4 text-black/60">
        When the in-app deletion request completes, your journeys, affirmations, anthems and their audio
        files, ratings, completed rituals, and account are removed from our active systems. Processor and
        backup systems follow the timeframes required by applicable law. You do not need to send an email
        when you can access the in-app deletion controls.
      </p>
      <p className="mt-4 text-black/60">
        If you cannot access your account for any reason, email <SupportLink /> and we will handle it for
        you.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Your rights</h2>
      <p className="mt-4 text-black/60">
        Depending on where you live, you may have rights to access, correct, or delete your personal
        information. SoulAnthem provides direct in-app account and active-system data deletion. You can
        use those controls at any time. For anything else, email <SupportLink />. You may exercise privacy
        or Consumer Health Data rights by contacting us at{" "}
        <a href="mailto:privacy@pyrigen.com" className="text-[var(--accent)] hover:underline">
          privacy@pyrigen.com
        </a>{" "}
        or through the in-app privacy menu. If you contact <SupportLink /> with a privacy or data-rights
        request, we will route your request to our privacy process.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Changes to this policy</h2>
      <p className="mt-4 text-black/60">
        We may update this policy from time to time. When we make a meaningful change, we will update the
        date at the top of this page.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 text-black/60">
        Questions about this policy or your data can be sent to <SupportLink />.
      </p>

      <p className="mt-16">
        <a href="/" className="text-[var(--accent)] hover:underline">
          &larr; Back to SoulAnthem
        </a>
      </p>
    </main>
    </>
  );
}
