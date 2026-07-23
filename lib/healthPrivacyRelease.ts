/**
 * Single release gate for the Consumer Health Data Privacy Policy.
 *
 * Staged deployments default to false. Once every legal prerequisite is true,
 * set HEALTH_PRIVACY_PUBLISHED=true and redeploy. That one switch controls all
 * site links, page indexing, robots.txt, and sitemap inclusion.
 */
export const healthPrivacyPublished =
  process.env.HEALTH_PRIVACY_PUBLISHED === "true";

export const healthPrivacyPath = "/health-privacy";
export const healthPrivacyUrl = `https://www.soulanthem.ai${healthPrivacyPath}`;
export const healthPrivacyLinkLabel = "Consumer Health Data Privacy";

/**
 * Effective date printed on the published CHD policy AND the SoulAnthem
 * Terms of Service. Set ONCE in the coordinated deploy so the in-app CHD
 * policy, the web CHD page, and /terms show the exact same date (no
 * independent dates). The app reads the same value from its
 * HEALTH_PRIVACY_EFFECTIVE_DATE build define. Default is the staging
 * placeholder — do not set until Cleven provides the publish date.
 */
export const healthPrivacyEffectiveDate =
  process.env.HEALTH_PRIVACY_EFFECTIVE_DATE ?? "[Insert Date, 2026]";
