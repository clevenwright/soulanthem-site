import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soulanthem.ai"),
  title: "SoulAnthem: Build self-belief, one honest step at a time",
  description:
    "SoulAnthem turns affirmations you can't quite believe into ones you can, informed by psychological research on self-efficacy. Join the waitlist.",
  openGraph: {
    title: "SoulAnthem: Build self-belief, one honest step at a time",
    description:
      "Build self-belief, one honest step at a time. Join the waitlist for early access.",
    url: "https://www.soulanthem.ai",
    siteName: "SoulAnthem",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SoulAnthem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoulAnthem: Build self-belief, one honest step at a time",
    description: "Build self-belief, one honest step at a time.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is believability laddering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Believability laddering starts with a statement you already accept and moves one honest step at a time toward the belief you are working to hold. Instead of asking you to repeat something you do not believe, each rung stays within reach of what you can genuinely accept.",
        },
      },
      {
        "@type": "Question",
        name: "How is SoulAnthem different from other affirmation apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most affirmation apps ask you to repeat positive statements regardless of whether you believe them. Wood, Perunovic, and Lee (2009) found that repeating positive self-statements was associated with worse mood for participants with low self-esteem. SoulAnthem instead builds belief incrementally, starting from what you already accept, and is informed by Albert Bandura's self-efficacy framework.",
        },
      },
      {
        "@type": "Question",
        name: "What is self-efficacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Self-efficacy is a person's belief in their own capability to accomplish something. Psychologist Albert Bandura introduced the concept in 1977, and his research associated it with whether someone takes action, persists through difficulty, and recovers from setbacks.",
        },
      },
      {
        "@type": "Question",
        name: "Why is SoulAnthem voice-driven?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hearing a line spoken, rather than only reading it, makes it feel addressed to you rather than at you. SoulAnthem's adaptive voice profile learns what lands for each person and grows with them.",
        },
      },
      {
        "@type": "Question",
        name: "Is SoulAnthem free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SoulAnthem is launching as a free download.",
        },
      },
      {
        "@type": "Question",
        name: "Who builds SoulAnthem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SoulAnthem is built by Pyrigen Incorporated, a software studio based in Dallas, Texas, founded by Cleven Wright, most recently responsible for AI business solutions at a national B2B organization, where he directed cross-functional teams to design and deploy enterprise AI platforms adopted across the organization. That same conviction drives SoulAnthem.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}