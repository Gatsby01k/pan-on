import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import { primaryContactLinks, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partner contact page for direct Telegram and email communication.",
};

export default function ContactPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="contact"
          title="Direct contact for partnership discussions and private deal flow."
          text="Telegram is the fastest route. Email works for longer structured briefs."
        />
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">direct routes</div>
            <div className="mt-5 grid gap-3">
              {primaryContactLinks.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">{item.label}</div>
                  <div className="mt-2 text-base text-white">{item.value}</div>
                </a>
              ))}
            </div>
          </div>
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">community</div>
            <div className="mt-5 grid gap-3">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">{item.label}</div>
                  <div className="mt-2 text-base text-white">{item.value}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
