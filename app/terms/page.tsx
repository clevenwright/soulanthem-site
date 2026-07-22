import type { Metadata } from "next";

// SoulAnthem Terms of Service - counsel-final text (verbatim, 28 sections).
//
// LEGAL COPY: render verbatim. Do not paraphrase, condense, or edit. Text nodes
// use template literals so counsel's curly quotes/apostrophes render exactly.
//
// STATUS: staged. Keep robots noindex and the "[Insert publication date]"
// placeholder until Cleven gives the publish go-ahead.
export const metadata: Metadata = {
  title: "Terms of Service | SoulAnthem",
  description:
    "SoulAnthem Terms of Service from Pyrigen Incorporated, including subscription, cancellation, and refund terms.",
  robots: { index: false, follow: false },
};

function SupportLink() {
  return (
    <a href="mailto:support@pyrigen.com" className="text-[var(--accent)] hover:underline">
      support@pyrigen.com
    </a>
  );
}

function PrivacyLink() {
  return (
    <a href="mailto:privacy@pyrigen.com" className="text-[var(--accent)] hover:underline">
      privacy@pyrigen.com
    </a>
  );
}

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">SoulAnthem Terms of Service</h1>
      <p className="mt-3 text-sm text-black/40">Effective Date: [Insert publication date]</p>

      <p className="mt-8 text-lg leading-relaxed text-black/60">
        {`These SoulAnthem Terms of Service (“Terms”) govern your access to and use of SoulAnthem, a product operated by Pyrigen Incorporated, a Texas corporation (“Pyrigen,” “SoulAnthem,” “we,” “us,” or “our”).`}
      </p>
      <p className="mt-4 text-black/60">
        {`Please read these Terms carefully. By creating an account, confirming that you are at least 18 years old, accessing SoulAnthem, purchasing a subscription, selecting “I agree,” or otherwise using SoulAnthem, you agree to these Terms.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If you do not agree to these Terms, do not use SoulAnthem.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">
        1. Product-Specific Terms; Relationship to Pyrigen Corporate Terms
      </h2>
      <p className="mt-4 text-black/60">{`These Terms govern your use of SoulAnthem.`}</p>
      <p className="mt-4 text-black/60">
        {`Pyrigen Incorporated may maintain separate corporate terms or website terms for other Pyrigen services, websites, programs, or communications. If these SoulAnthem Terms conflict with any Pyrigen corporate terms or other general terms, these SoulAnthem Terms control for your use of SoulAnthem.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">2. Who May Use SoulAnthem</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem is designed for adults. You must be at least 18 years old to use SoulAnthem.`}
      </p>
      <p className="mt-4 text-black/60">{`By using SoulAnthem, you represent and warrant that:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`you are at least 18 years old;`}</li>
        <li>{`you have the legal capacity to enter into these Terms;`}</li>
        <li>{`the information you provide to us is accurate and complete; and`}</li>
        <li>{`you will use SoulAnthem only in accordance with these Terms and applicable law.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`We may restrict, suspend, or terminate access if we believe a user does not meet these eligibility requirements or has violated these Terms.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">3. What SoulAnthem Is</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem is a wellness and self-belief application that helps users generate personalized affirmations and spoken-word anthem-style audio based on the goals, feelings, check-ins, and words they choose to share.`}
      </p>
      <p className="mt-4 text-black/60">
        {`SoulAnthem may use artificial intelligence and audio-generation technologies to generate text, scripts, affirmations, and audio outputs.`}
      </p>
      <p className="mt-4 text-black/60">
        {`SoulAnthem is not a medical device, health care provider, therapy service, crisis service, emergency service, or substitute for professional care. SoulAnthem does not diagnose, treat, cure, prevent, or mitigate any disease, condition, mental-health condition, or medical issue. SoulAnthem does not provide medical, clinical, psychological, psychiatric, legal, financial, or professional advice.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If you may be experiencing a medical or mental-health emergency, or if you believe you may harm yourself or someone else, do not rely on SoulAnthem. Contact emergency services, a crisis hotline, or a qualified professional immediately.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">4. Privacy and Consumer Health Data</h2>
      <p className="mt-4 text-black/60">{`Your use of SoulAnthem is also governed by our privacy policies, including:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`the SoulAnthem Privacy Policy; and`}</li>
        <li>{`the SoulAnthem Consumer Health Data Privacy Policy, where applicable.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`These policies explain how we collect, use, disclose, retain, protect, and delete information, including information that may constitute Consumer Health Data.`}
      </p>
      <p className="mt-4 text-black/60">
        {`By using SoulAnthem, you acknowledge that you have had an opportunity to review these policies. Where required, SoulAnthem will request your affirmative consent before processing information that may constitute Consumer Health Data.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If there is a conflict between these Terms and the SoulAnthem Privacy Policy or Consumer Health Data Privacy Policy regarding privacy, data rights, retention, deletion, or consumer health data practices, the applicable privacy policy controls for that subject matter.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">5. Accounts and Account Security</h2>
      <p className="mt-4 text-black/60">
        {`You may need to create an account to use some or all SoulAnthem features.`}
      </p>
      <p className="mt-4 text-black/60">{`You are responsible for:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`providing accurate account information;`}</li>
        <li>{`maintaining the confidentiality of your login credentials;`}</li>
        <li>{`all activity that occurs under your account; and`}</li>
        <li>{`promptly notifying us if you believe your account has been compromised.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`You may not share your account credentials with another person or allow another person to use your account.`}
      </p>
      <p className="mt-4 text-black/60">
        {`We may use authentication, security, fraud-prevention, and account-management tools to operate and protect SoulAnthem.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">6. Your Content and Generated Content</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem may allow you to provide goals, feelings, check-ins, free-text entries, reflections, ratings, preferences, and other information (“User Content”).`}
      </p>
      <p className="mt-4 text-black/60">
        {`SoulAnthem may generate affirmations, anthem scripts, audio, recommendations, summaries, or other outputs based on your User Content and other inputs (“Generated Content”).`}
      </p>
      <p className="mt-4 text-black/60">
        {`As between you and Pyrigen, you retain the rights you have in the User Content you provide. Subject to these Terms and our privacy policies, you grant Pyrigen a limited license to use, process, transmit, store, display, reproduce, and create Generated Content from your User Content as needed to operate SoulAnthem, provide requested features, maintain safety and security, troubleshoot issues, comply with legal obligations, and support the purposes described in our privacy policies.`}
      </p>
      <p className="mt-4 text-black/60">
        {`To the extent permitted by law, you may use Generated Content for your personal, non-commercial purposes. You are responsible for how you use or share Generated Content.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Because SoulAnthem uses artificial intelligence and automated systems, Generated Content may be inaccurate, repetitive, similar to content generated for other users, incomplete, unsuitable for your circumstances, or different from what you expected. You should not rely on Generated Content as professional advice.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">7. Subscriptions, Cancellation, and Refunds</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem offers paid subscription plans, including monthly and annual plans. Subscription prices, billing periods, renewal terms, and any trial terms are shown at checkout before purchase.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Subscriptions renew automatically unless canceled before the next billing date. You may cancel your subscription through the Stripe customer portal or another cancellation method we make available. If you cancel, your access will continue through the end of the then-current paid subscription period, and you will not be charged for the next period.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Except where required by applicable law, subscription payments are non-refundable and we do not provide refunds or credits for partially used billing periods. If we are required by law to provide a refund, we will do so in accordance with applicable law.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If you believe you were charged in error, please contact us at `}
        <SupportLink />
        {`.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">8. Free Trials and Promotional Offers</h2>
      <p className="mt-4 text-black/60">
        {`We may offer free trials, promotional periods, discounted subscriptions, access codes, or other offers.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Any trial length, promotional price, renewal price, renewal date, and cancellation terms will be disclosed at or before checkout or redemption. Unless otherwise stated, a trial or promotional subscription may convert to a paid subscription at the end of the trial or promotional period unless canceled before the renewal date.`}
      </p>
      <p className="mt-4 text-black/60">
        {`We may modify, limit, or discontinue promotional offers at any time, subject to applicable law and the terms presented with the offer.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">9. Acceptable Use</h2>
      <p className="mt-4 text-black/60">{`You agree not to use SoulAnthem to:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`violate any law or regulation;`}</li>
        <li>{`infringe, misappropriate, or violate the rights of another person;`}</li>
        <li>{`submit content that you do not have the right to provide;`}</li>
        <li>{`attempt to generate unlawful, abusive, harassing, threatening, hateful, exploitative, or harmful content;`}</li>
        <li>{`attempt to bypass safety systems, consent gates, age restrictions, authentication, payment systems, or access controls;`}</li>
        <li>{`interfere with or disrupt SoulAnthem, its infrastructure, or its service providers;`}</li>
        <li>{`reverse engineer, scrape, crawl, probe, overload, or attack SoulAnthem or related systems;`}</li>
        <li>{`use SoulAnthem to build, train, or improve a competing product or model, except as permitted by law;`}</li>
        <li>{`impersonate another person or misrepresent your identity or affiliation;`}</li>
        <li>{`use SoulAnthem for emergency, crisis, clinical, diagnostic, treatment, or professional decision-making purposes; or`}</li>
        <li>{`encourage or facilitate harm to yourself or others.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`We may remove content, limit access, suspend accounts, or terminate accounts if we believe a user has violated these Terms or created risk for SoulAnthem, other users, Pyrigen, our service providers, or the public.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">10. Safety Features and Crisis-Related Responses</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem may include safety features intended to detect certain distress, crisis, self-harm, or harm-to-others signals in user-provided text and respond with supportive, safety-oriented messaging.`}
      </p>
      <p className="mt-4 text-black/60">
        {`These features are not a crisis service, emergency service, therapy service, clinical assessment, diagnosis, or substitute for professional care. Safety-related outputs may be incomplete, inaccurate, delayed, or unavailable.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If you are in danger, may harm yourself or someone else, or need urgent help, contact emergency services or an appropriate crisis resource immediately.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">11. Intellectual Property</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem, including its software, design, branding, logos, models, prompts, workflows, text, graphics, interfaces, features, technology, and other materials, is owned by Pyrigen or its licensors and is protected by intellectual-property and other laws.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Except for the limited rights expressly granted in these Terms, we do not grant you any right, title, or interest in SoulAnthem or Pyrigen intellectual property.`}
      </p>
      <p className="mt-4 text-black/60">
        {`You may not copy, modify, distribute, sell, lease, sublicense, reverse engineer, or create derivative works from SoulAnthem except as expressly permitted by these Terms or applicable law.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">12. Feedback</h2>
      <p className="mt-4 text-black/60">
        {`If you provide ideas, suggestions, comments, bug reports, or other feedback about SoulAnthem, you grant Pyrigen a non-exclusive, worldwide, royalty-free, irrevocable license to use that feedback to improve, develop, operate, and promote SoulAnthem or other Pyrigen products and services, without obligation to compensate you.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Do not include confidential, proprietary, or sensitive information in feedback unless you intend for us to use it for these purposes.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">13. Third-Party Services and Providers</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem may rely on third-party service providers for hosting, authentication, storage, payment processing, analytics, diagnostics, AI text processing, safety analysis, audio generation, communications, and other operational functions.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Your use of certain features may also be subject to third-party terms, such as payment processing terms or app-store/platform rules. We are not responsible for third-party services except to the extent required by applicable law or our agreements with you.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">14. Changes to SoulAnthem</h2>
      <p className="mt-4 text-black/60">
        {`We may modify, suspend, discontinue, limit, or replace any part of SoulAnthem at any time. We may also update features, change pricing for future billing periods, modify subscription offerings, or discontinue access to certain functionality.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If we make material changes that affect your paid subscription, we will provide notice where required by applicable law or these Terms.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">15. Termination</h2>
      <p className="mt-4 text-black/60">
        {`You may stop using SoulAnthem at any time. You may also request account deletion through the in-app privacy/account tools or by contacting us as described in our privacy policies.`}
      </p>
      <p className="mt-4 text-black/60">{`We may suspend or terminate your access to SoulAnthem if:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`you violate these Terms;`}</li>
        <li>{`your payment fails or your subscription expires;`}</li>
        <li>{`we believe your use creates legal, security, operational, safety, or reputational risk;`}</li>
        <li>{`we are required to do so by law; or`}</li>
        <li>{`we discontinue SoulAnthem or a relevant feature.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`Sections that by their nature should survive termination will survive, including provisions regarding intellectual property, disclaimers, limitation of liability, dispute resolution, and any payment obligations incurred before termination.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">16. Disclaimers</h2>
      <p className="mt-4 text-black/60">
        {`SoulAnthem is provided on an “as is” and “as available” basis.`}
      </p>
      <p className="mt-4 text-black/60">
        {`To the fullest extent permitted by law, Pyrigen disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, reliability, and uninterrupted or error-free operation.`}
      </p>
      <p className="mt-4 text-black/60">{`We do not warrant that:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`SoulAnthem will meet your expectations or needs;`}</li>
        <li>{`SoulAnthem will be accurate, reliable, uninterrupted, secure, or error-free;`}</li>
        <li>{`Generated Content will be accurate, appropriate, unique, or suitable for your circumstances;`}</li>
        <li>{`defects will be corrected; or`}</li>
        <li>{`SoulAnthem will be available at any particular time or location.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`You are responsible for your use of SoulAnthem and for evaluating any Generated Content before relying on it or sharing it.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Some jurisdictions do not allow certain warranty disclaimers, so some of the above disclaimers may not apply to you.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">17. Limitation of Liability</h2>
      <p className="mt-4 text-black/60">
        {`To the fullest extent permitted by law, Pyrigen Incorporated, its affiliates, officers, directors, employees, contractors, agents, service providers, licensors, and partners will not be liable for any indirect, incidental, special, consequential, exemplary, punitive, or enhanced damages, including lost profits, lost data, loss of goodwill, service interruption, computer damage, system failure, or the cost of substitute services, arising out of or relating to SoulAnthem or these Terms.`}
      </p>
      <p className="mt-4 text-black/60">
        {`To the fullest extent permitted by law, Pyrigen’s total liability for any claim arising out of or relating to SoulAnthem or these Terms will not exceed the greater of:`}
      </p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`the amount you paid to Pyrigen for SoulAnthem during the three months before the event giving rise to the claim; or`}</li>
        <li>{`$100.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`The limitations in this section apply regardless of the legal theory, whether based on warranty, contract, statute, tort, negligence, strict liability, or otherwise, even if we have been advised of the possibility of damages.`}
      </p>
      <p className="mt-4 text-black/60">
        {`Some jurisdictions do not allow certain limitations of liability, so some limitations may not apply to you.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">18. Indemnification</h2>
      <p className="mt-4 text-black/60">
        {`To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless Pyrigen Incorporated, its affiliates, officers, directors, employees, contractors, agents, service providers, licensors, and partners from and against any claims, damages, liabilities, losses, costs, and expenses, including reasonable attorneys’ fees, arising out of or relating to:`}
      </p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`your use or misuse of SoulAnthem;`}</li>
        <li>{`your User Content;`}</li>
        <li>{`your violation of these Terms;`}</li>
        <li>{`your violation of applicable law; or`}</li>
        <li>{`your violation of another person’s rights.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`We may assume exclusive defense and control of any matter subject to indemnification, and you agree to cooperate with our defense.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">19. Governing Law</h2>
      <p className="mt-4 text-black/60">
        {`These Terms and any dispute arising out of or relating to SoulAnthem or these Terms are governed by the laws of the State of Texas, without regard to conflict-of-law rules, except to the extent federal law applies.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">
        20. Dispute Resolution; Arbitration; Class-Action Waiver
      </h2>
      <p className="mt-4 text-black/60">{`Please read this section carefully. It affects your legal rights.`}</p>
      <p className="mt-4 text-black/60">
        {`You and Pyrigen agree to first try to resolve any dispute informally. Before filing any claim, the party raising the dispute must send written notice describing the dispute and the requested resolution. Notices to Pyrigen must be sent to support@pyrigen.com with the subject line “Legal Dispute Notice.” The parties will attempt in good faith to resolve the dispute informally.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If the dispute is not resolved informally, you and Pyrigen agree that any dispute, claim, or controversy arising out of or relating to SoulAnthem or these Terms will be resolved by binding individual arbitration, except as stated below.`}
      </p>
      <p className="mt-4 text-black/60">
        {`The arbitration will be conducted on an individual basis. You and Pyrigen agree that neither party may bring claims as a plaintiff or class member in any class action, class arbitration, collective action, consolidated action, private attorney general action, or representative proceeding.`}
      </p>
      <p className="mt-4 text-black/60">
        {`The arbitrator may award relief only on an individual basis and only to the extent necessary to resolve the individual claim. The arbitrator may not consolidate claims or preside over any form of class or representative proceeding.`}
      </p>
      <p className="mt-4 text-black/60">{`This arbitration agreement does not prevent either party from:`}</p>
      <ul className="mt-4 space-y-2 text-black/60 list-disc pl-6">
        <li>{`bringing an individual claim in small-claims court, if the claim qualifies;`}</li>
        <li>{`seeking temporary or preliminary injunctive relief in court to prevent actual or threatened misuse of intellectual property, unauthorized access, security threats, or other irreparable harm; or`}</li>
        <li>{`reporting concerns to a government agency.`}</li>
      </ul>
      <p className="mt-4 text-black/60">
        {`If a court determines that any part of this class-action waiver is unenforceable with respect to a claim, then the unenforceable portion will be severed to the minimum extent necessary, and the remaining portions will remain in effect to the fullest extent permitted by law.`}
      </p>
      <h3 className="mt-8 text-lg font-semibold tracking-tight">Arbitration Opt-Out</h3>
      <p className="mt-4 text-black/60">
        {`You may opt out of this arbitration agreement within 30 days after first agreeing to these Terms by emailing support@pyrigen.com with the subject line “Arbitration Opt-Out.” Your notice must include the email address associated with your SoulAnthem account and a clear statement that you wish to opt out of arbitration. Opting out of arbitration does not affect any other part of these Terms.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">21. Venue for Court Proceedings</h2>
      <p className="mt-4 text-black/60">
        {`For any dispute that is not subject to arbitration and is not filed in small-claims court, you and Pyrigen consent to the exclusive jurisdiction and venue of the state and federal courts located in or serving Denton County, Texas, except where applicable law requires otherwise.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">22. Changes to These Terms</h2>
      <p className="mt-4 text-black/60">
        {`We may update these Terms from time to time. When we do, we will update the effective date above.`}
      </p>
      <p className="mt-4 text-black/60">
        {`If we make material changes, we may provide notice through SoulAnthem, by email, or by another reasonable method. Your continued use of SoulAnthem after updated Terms become effective means you accept the updated Terms.`}
      </p>
      <p className="mt-4 text-black/60">{`If you do not agree to updated Terms, you must stop using SoulAnthem.`}</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">23. Electronic Communications</h2>
      <p className="mt-4 text-black/60">
        {`You agree that notices, agreements, disclosures, and other communications from us may be provided electronically, including through SoulAnthem, by email, or by posting to our website.`}
      </p>
      <p className="mt-4 text-black/60">{`You are responsible for keeping your account contact information current.`}</p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">24. Assignment</h2>
      <p className="mt-4 text-black/60">
        {`You may not assign or transfer these Terms or your rights or obligations under these Terms without our prior written consent.`}
      </p>
      <p className="mt-4 text-black/60">
        {`We may assign or transfer these Terms in connection with a merger, acquisition, reorganization, sale of assets, financing, corporate transaction, or by operation of law.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">25. Severability</h2>
      <p className="mt-4 text-black/60">
        {`If any provision of these Terms is found invalid, illegal, or unenforceable, that provision will be enforced to the maximum extent permitted, and the remaining provisions will remain in full force and effect.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">26. No Waiver</h2>
      <p className="mt-4 text-black/60">
        {`Our failure to enforce any provision of these Terms is not a waiver of that provision or any other provision.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">27. Entire Agreement</h2>
      <p className="mt-4 text-black/60">
        {`These Terms, together with any policies or terms expressly incorporated by reference, including the SoulAnthem Privacy Policy and Consumer Health Data Privacy Policy, constitute the entire agreement between you and Pyrigen regarding your use of SoulAnthem.`}
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight">28. Contact</h2>
      <p className="mt-4 text-black/60">{`If you have questions about these Terms, contact us at:`}</p>
      <p className="mt-4 text-black/60">
        Pyrigen Incorporated
        <br />
        Little Elm, Texas
        <br />
        Email: <SupportLink />
        <br />
        Privacy requests: <PrivacyLink />
      </p>

      <p className="mt-16">
        <a href="/" className="text-[var(--accent)] hover:underline">
          &larr; Back to SoulAnthem
        </a>
      </p>
    </main>
  );
}
