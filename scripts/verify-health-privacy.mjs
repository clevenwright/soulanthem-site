// Pins the published Consumer Health Data Privacy Policy page so it cannot drift
// from the counsel-final text. This is the website half of the same guarantee
// enforced on the app by test/consumer_health_data_privacy_test.dart.
//
// Run: npm run test:policy
//
// Fails if any superseded phrase reappears, or if any counsel-final anchor
// sentence goes missing.

import { readFileSync } from "node:fs";

const PAGE = "app/health-privacy/page.tsx";
const src = readFileSync(PAGE, "utf8");

// Normalize to plain text: strip tags, decode the entities the page uses,
// collapse whitespace. This lets us match sentences that wrap across lines.
const text = src
  .replace(/<[^>]+>/g, " ")
  .replaceAll("&quot;", '"')
  .replaceAll("&apos;", "'")
  .replaceAll("&#39;", "'")
  .replaceAll("&amp;", "&")
  .replace(/\s+/g, " ");

// Language counsel removed. If any of these come back, fail loudly.
const FORBIDDEN = [
  "train their foundational models",
  "foundational models",
  "processors' systems",
  "processors' networks",
  "Google (Firebase)",
  "How to Exercise Your Rights",
  "Mental State and Emotional Data",
  "6 months",
  "statutory extension",
];

// Counsel-final anchors that must be present (one per section / insertion).
const REQUIRED = [
  '"consumer health data" as defined by applicable state health privacy laws.',
  "1. Categories of Consumer Health Data We Collect",
  "Goals, feelings, and check-in inputs.",
  "ratings, rituals, journeys",
  "2. Sources of Consumer Health Data",
  "3. Why We Collect and Use Consumer Health Data",
  "4. How We Process and Disclose Consumer Health Data",
  "nor do we share it with third parties for their own independent commercial or marketing purposes.",
  "non-user-authored route identifier information, and are not used for advertising targeting.",
  "5. Your Rights Regarding Consumer Health Data",
  "request the deletion of your consumer health data as described below.",
  "If you contact support@pyrigen.com with a privacy or data-rights request, we will route your request to our privacy process.",
  "6. Retention, Deletion, and Protection of Consumer Health Data",
  "Our audio-generation provider may retain non-account-linked generated script text",
  "Where Washington's My Health My Data Act applies",
  "7. De-identification Commitment",
  "will not attempt to re-identify it.",
];

const failures = [];
for (const bad of FORBIDDEN) {
  if (text.includes(bad)) failures.push(`FORBIDDEN phrase present: "${bad}"`);
}
for (const need of REQUIRED) {
  if (!text.includes(need)) failures.push(`REQUIRED anchor missing: "${need}"`);
}

if (failures.length > 0) {
  console.error(`health-privacy policy guard FAILED (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(
  `health-privacy policy guard OK: ${REQUIRED.length} anchors present, ${FORBIDDEN.length} forbidden phrases absent.`,
);
