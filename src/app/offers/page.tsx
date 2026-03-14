import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { offerCards } from '@/data/networkContent';

export const metadata: Metadata = {
  title: 'Private Offers',
  description: 'PAN offer board for affiliates and advertisers looking for fast qualification, clearer commercial models, and direct Telegram routing.',
};

export default function OffersPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="offers"
            title="A working offer board for PAN instead of a vague positioning page."
            text="These cards do not try to expose every commercial detail. They exist to help serious affiliates and advertisers self-qualify before the first Telegram discussion starts."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offerCards.map((offer) => (
              <div key={offer.title} className="rounded-[1.3rem] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-xl font-medium text-white">{offer.title}</div>
                <div className="mt-4 grid gap-3 text-sm text-white/64">
                  <div><span className="text-white/88">GEO:</span> {offer.geo}</div>
                  <div><span className="text-white/88">Model:</span> {offer.model}</div>
                  <div><span className="text-white/88">Traffic:</span> {offer.traffic}</div>
                  <div><span className="text-white/88">Best fit:</span> {offer.fit}</div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink href="/join" eventName="offer_apply_click" eventLabel={offer.title} className="button-primary w-full sm:w-auto">Apply for this route</TrackedLink>
                  <TrackedLink href="/contact" eventName="offer_contact_click" eventLabel={offer.title} className="button-secondary w-full sm:w-auto">Ask a question</TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
