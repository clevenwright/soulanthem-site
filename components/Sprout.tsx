import Image from "next/image";

export default function Sprout({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/soulanthem_sprout.png"
      alt="SoulAnthem"
      width={512}
      height={512}
      priority
      className={className}
    />
  );
}
