import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soulanthem.ai"),
  title: "SoulAnthem — Build unshakable self-belief",
  description:
    "SoulAnthem turns affirmations you can't quite believe into ones you can, grounded in the science of self-efficacy. Join the waitlist.",
  openGraph: {
    title: "SoulAnthem — Build unshakable self-belief",
    description:
      "Build unshakable self-belief, one honest step at a time. Join the waitlist for early access.",
    url: "https://www.soulanthem.ai",
    siteName: "SoulAnthem",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SoulAnthem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoulAnthem — Build unshakable self-belief",
    description: "Build unshakable self-belief, one honest step at a time.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}