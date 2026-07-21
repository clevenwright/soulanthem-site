export const metadata = {
  title: "Privacy Policy — SoulAnthem",
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
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-black/40">Last updated: July 14, 2026</p>

      <p className="mt-8 text-lg leading-relaxed text-black/60">
        SoulAnthem is built by Pyrigen Incorporated, a Texas corporation. This policy explains what
        information SoulAnthem collects, how we use it, and the choices you have. We keep it in plain
        language on purpose.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Who we are</h2>
      <p className="mt-4 text-black/60">
        SoulAnthem is a product of Pyrigen Incorporated, based in Little Elm, Texas. If you have any
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
        SoulAnthem gives you two ways to sign in: with Google, shown in the app as &quot;Continue with
        Google,&quot; or with an email address and password. If you sign in with Google, we receive basic
        account information such as your name and email address so we can create and secure your account,
        and we do not receive your Google password. If you sign up with email and password, we use your
        email address to create your account, and your password is handled securely by our authentication
        provider; we never see or store it in readable form.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">What we collect</h2>
      <p className="mt-4 text-black/60">We collect only what we need to make SoulAnthem work for you.</p>
      <ul className="mt-4 space-y-3 text-black/60">
        <li>
          <span className="font-medium text-black/80">Account information.</span> Your name and email
          address, received when you sign in with Google or provided when you sign up with email and
          password, and a user identifier we use to keep your account and your content associated with you.
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

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Services we rely on</h2>
      <p className="mt-4 text-black/60">SoulAnthem uses a small number of trusted services to operate.</p>
      <ul className="mt-4 space-y-3 text-black/60">
        <li>
          <span className="font-medium text-black/80">Google.</span> For sign in and account information.
        </li>
        <li>
          <span className="font-medium text-black/80">Google Firebase.</span> For app infrastructure,
          secure storage of your account and content, and analytics through Google Analytics for Firebase.
        </li>
        <li>
          <span className="font-medium text-black/80">Anthropic.</span> Processes the text you provide to
          generate your affirmations.
        </li>
        <li>
          <span className="font-medium text-black/80">ElevenLabs.</span> Generates the anthem audio from
          the affirmation text.
        </li>
        <li>
          <span className="font-medium text-black/80">Formspree.</span> If we collect a waitlist or
          preregistration email through our website, we may use this form service to receive it.
        </li>
      </ul>
      <p className="mt-4 text-black/60">Each of these services handles data under its own privacy terms.</p>

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
        You are in control. You can delete your account yourself from inside the app: open your Profile and
        tap &quot;Delete my account,&quot; or go to Profile, then &quot;Privacy &amp; research,&quot; and tap
        &quot;Delete my account.&quot; You will be asked to confirm.
      </p>
      <p className="mt-4 text-black/60">
        Deleting your account removes your journeys, your affirmations, your anthems and their audio files,
        your ratings, your completed rituals, and your account itself. When an in-app deletion request
        completes, this information is removed from our active systems, and our service providers and backup
        systems follow the timeframes required by applicable law. There is no email to send.
      </p>
      <p className="mt-4 text-black/60">
        If you cannot access your account for any reason, email <SupportLink /> and we will handle it for
        you.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">Your rights</h2>
      <p className="mt-4 text-black/60">
        Depending on where you live, you may have rights to access, correct, or delete your personal
        information. Because SoulAnthem gives you direct account and data deletion inside the
        app, you can exercise the most important of these rights yourself at any time. For anything else,
        email <SupportLink />.
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
  );
}
