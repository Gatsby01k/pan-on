"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function getCursorLabel(target: HTMLElement | null): string {
  if (!target) return "";

  const explicit = target.closest<HTMLElement>("[data-cursor-label]");
  if (explicit?.dataset.cursorLabel) return explicit.dataset.cursorLabel;

  if (target.closest('a[href*="/access"]')) return "private access";
  if (target.closest('a[href*="t.me/PAN_affiliate"], a[href*="t.me/pan_affiliate"]')) return "open line";
  if (target.closest('a[href*="t.me/V1aDDoS"], a[href*="t.me/v1addos"]')) return "owner route";
  if (target.closest('a[href^="mailto:"]')) return "direct contact";
  if (target.closest(".button-primary")) return "open line";
  if (target.closest(".button-secondary")) return "private access";

  return "";
}

export default function SignatureCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, {
    stiffness: 420,
    damping: 34,
    mass: 0.22,
  });

  const sy = useSpring(y, {
    stiffness: 420,
    damping: 34,
    mass: 0.22,
  });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 20);
      y.set(event.clientY - 20);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, .button-primary, .button-secondary, [data-cursor-label]'
      );

      setActive(interactive);
      setLabel(getCursorLabel(target));
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.94 : active ? 1.06 : 1,
        }}
        transition={{ duration: 0.12 }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      >
        <div className="relative h-10 w-10">
          <motion.div
            animate={{
              opacity: active ? 0.82 : 0.56,
              scale: active ? 1.1 : 1,
            }}
            transition={{ duration: 0.14 }}
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(222,18,2,0.16),rgba(222,18,2,0.07),transparent_72%)] blur-xl"
          />

          <motion.div
            animate={{
              borderColor: active ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
              backgroundColor: active ? "rgba(255,255,255,0.075)" : "rgba(255,255,255,0.045)",
            }}
            transition={{ duration: 0.14 }}
            className="absolute inset-0 flex items-center justify-center rounded-2xl border backdrop-blur-xl shadow-[0_0_24px_rgba(222,18,2,0.08)]"
          >
            <Image
              src="/vladdos-crown.png"
              alt="Custom cursor"
              width={28}
              height={28}
              className="h-auto w-5 brightness-[1.75] contrast-[1.22] drop-shadow-[0_6px_16px_rgba(0,0,0,0.30)]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        animate={{
          opacity: visible && pressed ? 1 : 0,
          scale: visible && pressed ? 1.35 : 0.8,
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-10 w-10 rounded-full border border-[rgba(222,18,2,0.30)] md:block"
      />

      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        animate={{
          opacity: visible && active && label ? 1 : 0,
          scale: visible && active && label ? 1 : 0.98,
        }}
        transition={{ duration: 0.14 }}
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden md:block"
      >
        <div className="ml-12 mt-1 whitespace-nowrap rounded-full border border-white/8 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 shadow-[0_0_20px_rgba(222,18,2,0.08)] backdrop-blur-xl">
          {label}
        </div>
      </motion.div>
    </>
  );
}
