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
