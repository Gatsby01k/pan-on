import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import FaqSchema from "@/components/seo/FaqSchema";

const faqItems = [
  {
    q: "What is a private affiliate network?",
    a: "A private affiliate network is a selective partnership layer that connects vetted affiliates, advertisers, operators, and managers without relying on a public marketplace model. The emphasis is on fit, trust, communication quality, and better commercial outcomes.",
  },
  {
    q: "How does VlaDDoS PAN work?",
    a: "VlaDDoS PAN routes qualified prospects into direct Telegram conversations after a short commercial brief. The goal is to compress qualification, reduce noise, and move faster on high-fit partnerships.",
  },
  {
    q: "Who can join the network?",
    a: "Affiliates, media buyers, advertisers, operators, and managers can join when they bring clear traffic, budget, geo, vertical, or partnership relevance and communicate with commercial precision.",
  },
  {
    q: "What traffic sources are allowed?",
    a: "The network can review SEO, content, paid social, PPC, native, influencer, Telegram, and community-led traffic when the source is legitimate, transparent, and commercially relevant to the offer structure.",
  },
  {
    q: "Do you work with CPA or revenue share deals?",
    a: "Yes. VlaDDoS PAN is built for performance partnerships across CPA, revenue share, hybrid structures, and direct operator-side commercial models when the economics and execution fit are strong.",
  },
  {
    q: "How do advertisers join?",
    a: "Advertisers can use the join page, access desk, or direct Telegram route to submit their target geos, verticals, compliance needs, traffic preferences, and current acquisition goals.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about VlaDDoS PAN, private affiliate networks, allowed traffic sources, advertiser access, and Telegram-based deal routing.",
  alternates: {
    canonical: "https://vladdos.com/faq",
  },
  openGraph: {
    title: "FAQ | VlaDDoS PAN",
    description:
      "Answers about private affiliate networks, traffic sources, CPA and RevShare models, and advertiser access.",
    url: "https://vladdos.com/faq",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <FaqSchema items={faqItems} />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <SectionHeader
          eyebrow="faq"
          title="Answers for affiliates, advertisers, operators, and managers evaluating VlaDDoS PAN."
          text="This page supports search visibility, trust, and qualification. It answers the recurring questions that usually appear before a serious partnership conversation starts."
          aside={<div className="text-sm leading-7 text-white/66">Best first step: use the <Link href="/join" className="text-white underline underline-offset-4">join page</Link> or the <Link href="/access" className="text-white underline underline-offset-4">access desk</Link> with a short brief.</div>}
        />

        <section className="panel p-5 sm:p-7">
          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article key={item.q} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">Question {String(index + 1).padStart(2, "0")}</div>
                <h2 className="mt-2 text-lg font-medium text-white">{item.q}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
