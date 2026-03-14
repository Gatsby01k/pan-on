import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="brand-badge relative grid place-items-center overflow-hidden rounded-[1.4rem] border border-white/12 bg-white/[0.04] backdrop-blur-xl">
        <Image
          src="/vladdos-crown.png"
          alt="Vladdos crown logo"
          width={compact ? 38 : 50}
          height={compact ? 38 : 50}
          className="h-auto w-auto opacity-95"
          priority
        />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.34em] text-white/42">{siteConfig.tagline}</div>
        <Image
          src="/vladdos-signature.png"
          alt="Vladdos signature"
          width={compact ? 156 : 196}
          height={compact ? 54 : 68}
          className="mt-1 h-auto w-[132px] sm:w-[156px]"
          priority
        />
      </div>
    </Link>
  );
}
