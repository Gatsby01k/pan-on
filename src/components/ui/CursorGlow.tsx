"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-120);
  const y = useMotionValue(-120);

  const sx = useSpring(x, {
    stiffness: 520,
    damping: 42,
    mass: 0.18,
  });

  const sy = useSpring(y, {
    stiffness: 520,
    damping: 42,
    mass: 0.18,
  });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reduced) return;

    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 90);
      y.set(event.clientY - 90);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.08 }}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[180px] w-[180px] rounded-full md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(222,18,2,0.08),rgba(222,18,2,0.03),transparent_72%)] blur-2xl" />
    </motion.div>
  );
}
