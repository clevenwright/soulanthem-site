export const metadata = {
    title: "Privacy Policy — SoulAnthem",
    description: "How SoulAnthem and Pyrigen Incorporated handle your data.",
  };
  
  export default function Privacy() {
    return (
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-black/40">Effective date: July 6, 2026</p>
  
        <p className="mt-8 text-lg leading-relaxed text-black/60">
          This Privacy Policy explains how SoulAnthem, a product of Pyrigen Incorporated (&quot;Pyrigen,&quot; &quot;we,&quot; &quot;us&quot;), collects, uses, and protects your information across the SoulAnthem app and this website.
        </p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Information We Collect</h2>
        <ul className="mt-4 space-y-3 text-black/60">
          <li><span className="font-medium text-black/80">Waitlist email.</span> If you join our waitlist on this website, we collect the email address you provide so we can notify you about early access and launch.</li>
          <li><span className="font-medium text-black/80">Account information.</span> In the app, when you sign in through Google Sign-In, we receive your name, email address, and basic Google profile information.</li>
          <li><span className="font-medium text-black/80">Your inputs.</span> The goals and text you type into the app, which our AI uses to generate your affirmations.</li>
          <li><span className="font-medium text-black/80">Believability ratings.</span> Your 1&ndash;5 laddering feedback on each affirmation.</li>
          <li><span className="font-medium text-black/80">Generated content.</span> The affirmation text and anthem audio created for you, stored in Firebase Storage.</li>
          <li><span className="font-medium text-black/80">Usage data.</span> Analytics about how you interact with the app (events, sessions, and device and app information, including a device identifier), collected through Google Analytics for Firebase to help us understand usage and improve the service.</li>
          <li><span className="font-medium text-black/80">Session data.</span> Information used to keep you signed in and preserve your journey between visits.</li>
        </ul>
  
        <p className="mt-6 rounded-2xl bg-[var(--bg-muted)] p-6 text-black/70">
          <span className="font-medium">SoulAnthem does not collect or record your voice.</span> You type text, and the app generates the audio journey as output. We do not use your information for third-party advertising or cross-app tracking.
        </p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">How We Use Your Information</h2>
        <p className="mt-4 text-black/60">We use your information to contact you about early access if you join the waitlist, authenticate your account, generate your personalized affirmations and anthem audio, save and restore your progress, understand usage through analytics, and operate and improve the service.</p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Service Providers</h2>
        <p className="mt-4 text-black/60">We rely on trusted third parties to operate SoulAnthem. They process your information only to provide their services to us:</p>
        <ul className="mt-4 space-y-3 text-black/60">
          <li><span className="font-medium text-black/80">Google (Firebase &amp; Google Sign-In).</span> Authentication (Google Sign-In); Firebase Hosting, Storage, Authentication, and Cloud Functions for running the app and storing your data; and Google Analytics for Firebase for usage analytics.</li>
          <li><span className="font-medium text-black/80">Anthropic.</span> Processes the text you provide, via our Cloud Functions, to generate your affirmations.</li>
          <li><span className="font-medium text-black/80">ElevenLabs.</span> Generates the anthem audio from the affirmation text.</li>
          <li><span className="font-medium text-black/80">Formspree.</span> Processes waitlist form submissions on this website so we receive your email address.</li>
        </ul>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Data Storage and Security</h2>
        <p className="mt-4 text-black/60">Your data is stored using Google Firebase infrastructure (and, for waitlist emails, Formspree). We use industry-standard measures to protect it, but no method of transmission or storage is completely secure.</p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">International Data Processing</h2>
        <p className="mt-4 text-black/60">Our services run on Google Cloud infrastructure located in the United States (Cloud Functions in the us-central1 region). If you use SoulAnthem from outside the United States, your information will be processed in the U.S. and other countries where our service providers operate.</p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Data Retention and Your Choices</h2>
        <p className="mt-4 text-black/60">We keep your information while your account is active or while you remain on our waitlist. You may request access to, correction of, or deletion of your data at any time by contacting us at the email below, and we will respond consistent with applicable law.</p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Children&apos;s Privacy</h2>
        <p className="mt-4 text-black/60">SoulAnthem is intended for adults and is not directed to children. You must be at least 18 years old to use the app, and we ask you to confirm your age during onboarding. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us information, contact us at the email below and we will delete it.</p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Changes to This Policy</h2>
        <p className="mt-4 text-black/60">We may update this policy from time to time. Material changes will be reflected by updating the effective date above.</p>
  
        <h2 className="mt-12 text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 text-black/60">Pyrigen Incorporated, a Texas corporation. Questions or requests: <a href="mailto:hello@pyrigen.com" className="text-[var(--accent)] hover:underline">hello@pyrigen.com</a></p>
  
        <p className="mt-16"><a href="/" className="text-[var(--accent)] hover:underline">&larr; Back to SoulAnthem</a></p>
      </main>
    );
  }