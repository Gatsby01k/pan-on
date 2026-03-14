"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { navItems } from "@/data/site";

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-[rgba(8,8,10,0.62)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-5 sm:py-3.5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04] sm:h-11 sm:w-11">
              <Image
                src="/vladdos-crown.png"
                alt="VlaDDoS crown"
                width={42}
                height={42}
                className="h-auto w-5 brightness-[1.45] contrast-[1.12] sm:w-5.5"
                priority
              />
            </div>
            <div className="hidden min-[380px]:block">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">VlaDDoS</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/46">Private Affiliate Network</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition",
                    active
                      ? "bg-white/[0.09] text-white"
                      : "text-white/58 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/join" className="button-primary px-5 py-3">
              Request Access
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-[1.35rem] border border-white/10 bg-[rgba(8,8,10,0.82)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-[1rem] px-4 py-3 text-sm transition",
                    pathname === item.href
                      ? "bg-white/[0.08] text-white"
                      : "bg-white/[0.03] text-white/70 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/join" className="button-primary mt-2 justify-center">
                Request Access
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
