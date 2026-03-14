import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import { monetizationBlocks } from "@/data/site";

export const metadata: Metadata = {
  title: "Advertiser Partnerships",
  description: "Advertiser partnerships for operators and brands seeking performance traffic and direct affiliate supply.",
};

export default function ForAdvertisersPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="for advertisers"
          title="Performance partnerships for operators and brands that need serious traffic counterparts."
          text="We work with advertisers that want direct relationships, clear conversion definitions, and partner communication that does not disappear inside long loops."
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {monetizationBlocks.map((item) => (
            <div key={item.title} className="panel p-5 sm:p-6">
              <div className="text-base font-medium text-white sm:text-lg">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">what advertisers should send</div>
            <div className="mt-5 grid gap-3">
              {[
                "Vertical and approved GEOs",
                "Offer structure and payout model",
                "Conversion definition",
                "Preferred traffic profile",
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/66">{item}</div>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">best next step</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">Request an advertiser partnership review.</h2>
            <p className="mt-4 text-sm leading-7 text-white/64">
              Send a short brief. Qualified advertisers move into Telegram for direct discussion.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="button-primary w-full sm:w-auto">Request Partnership</Link>
              <Link href="/contact" className="button-secondary w-full sm:w-auto">Contact</Link>
            </div>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
