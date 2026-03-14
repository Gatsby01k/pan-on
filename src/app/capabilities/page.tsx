import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import StickyDealBar from "@/components/ui/StickyDealBar";
import { capabilities, capabilityTracks, caseBlocks } from "@/data/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Affiliate qualification, advertiser intake, partner routing, and selective scaling capabilities.",
};

export default function CapabilitiesPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="capabilities"
          title="Capabilities built around partner fit, commercial clarity, and faster execution."
          text="This is the practical layer of the network: how applications are reviewed, how deals are routed, and how strong routes are scaled."
        />

        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.label} className="panel p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl font-medium text-white">{item.title}</div>
                <div className="text-sm text-white/35">{item.label}</div>
              </div>
              <div className="mt-5 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/62">{point}</div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-4">
          {capabilityTracks.map((item) => (
            <div key={item.title} className="panel p-6">
              <div className="eyebrow">track</div>
              <div className="mt-3 text-lg font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseBlocks.map((item) => (
            <div key={item.title} className="panel p-6">
              <div className="text-lg font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
            </div>
          ))}
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
