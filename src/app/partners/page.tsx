import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { partnerVerticals } from '@/data/networkContent';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Partner fit overview for affiliates, advertisers, operators, and PAN relationship-building.',
};

export default function PartnersPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="partners"
            title="Built for a small number of serious relationships, not public-directory noise."
            text="Use this page to explain who PAN is for, what qualifies faster, and how the relationship layer is designed before the first deal conversation begins."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {partnerVerticals.map((group) => (
              <div key={group.title} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-base font-medium text-white">{group.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/62">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-[0.9rem] border border-white/8 bg-black/15 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href="/join" eventName="partners_cta_click" eventLabel="join" className="button-primary w-full sm:w-auto">Apply to PAN</TrackedLink>
            <TrackedLink href="/for-advertisers" eventName="partners_cta_click" eventLabel="advertisers" className="button-secondary w-full sm:w-auto">For Advertisers</TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
