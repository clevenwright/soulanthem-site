import SoulAnthemLogo from "./SoulAnthemLogo";
import { APP_URL } from "@/lib/appUrl";

/**
 * Primary site nav: logo home + Sign in to the app.
 * Use transparent on the homepage hero; solid on content pages.
 */
export default function SiteHeader({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-20"
          : "border-b border-black/5 bg-[var(--background)]/80 backdrop-blur-xl"
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" aria-label="SoulAnthem home">
          <SoulAnthemLogo />
        </a>
        <a
          href={APP_URL}
          className="text-sm font-medium text-black/55 transition-colors hover:text-black/90"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
}
