"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PreloadScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("vladdos_preload_seen") === "1";
    if (seen) return;
    sessionStorage.setItem("vladdos_preload_seen", "1");
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] flex items-center justify-center bg-[#030303]">
          <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(7,7,10,0.58)] px-6 py-5 text-center shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/48">VlaDDoS PAN</div>
            <div className="mt-3 text-base text-white/84">Preparing private affiliate network.</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
