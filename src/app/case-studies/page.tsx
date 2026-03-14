import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { caseStudies } from '@/data/networkContent';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'PAN case-study style proof blocks that strengthen trust and explain how better qualification turns into cleaner deal flow.',
};

export default function CaseStudiesPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <SectionHeader
            eyebrow="proof"
            title="Trust signals that explain how PAN operates in real deal flow."
            text="These case blocks are intentionally structured to answer the questions serious partners ask before they commit time: what type of route this is, what the commercial problem was, and why private qualification improves the next step."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-[1.3rem] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-lg font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-[0.9rem] border border-white/8 bg-black/15 px-3 py-2">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href="/join" eventName="case_study_cta_click" eventLabel="case-studies" className="button-primary w-full sm:w-auto">Request Access</TrackedLink>
            <TrackedLink href="/offers" eventName="case_study_cta_click" eventLabel="offers" className="button-secondary w-full sm:w-auto">View Offers</TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
