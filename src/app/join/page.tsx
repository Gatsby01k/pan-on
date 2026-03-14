import type { Metadata } from 'next';
import BackgroundShell from '@/components/ui/BackgroundShell';
import Footer from '@/components/ui/Footer';
import QuickContactPanel from '@/components/ui/QuickContactPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import StickyDealBar from '@/components/ui/StickyDealBar';
import TopNav from '@/components/navigation/TopNav';
import FaqSchema from '@/components/seo/FaqSchema';
import LeadCaptureForm from '@/components/forms/LeadCaptureForm';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { leadMagnets, networkStats } from '@/data/networkContent';
import { messageTemplates, siteConfig } from '@/data/site';

const joinFaqItems = [
  {
    q: 'Who should request access?',
    a: 'Affiliates, advertisers, operators, and managers with a real traffic or partnership need.',
  },
  {
    q: 'What should the brief include?',
    a: 'Role, traffic type, main GEOs, current volume or budget, and the kind of deal or partner needed now.',
  },
  {
    q: 'What happens after review?',
    a: 'Qualified applications move into Telegram for direct follow-up and live deal discussion.',
  },
];

export const metadata: Metadata = {
  title: 'Request Network Access',
  description: 'Submit a structured brief, trigger instant lead routing, and move qualified PAN conversations into Telegram quickly.',
};

export default function JoinPage() {
  const telegramHref = `https://t.me/${siteConfig.telegramAccount.replace('@', '')}?text=${messageTemplates.telegramText}`;
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(messageTemplates.emailSubject)}&body=${messageTemplates.emailBody}`;

  return (
    <BackgroundShell>
      <TopNav />
      <FaqSchema items={joinFaqItems} id="join-faq-schema" />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel p-5 sm:p-7 lg:p-8">
            <SectionHeader
              eyebrow="request access"
              title="Structured lead capture for affiliates, advertisers, and operators."
              text="This page is now the working intake layer for PAN. Submit the brief once, trigger instant Telegram alerts, and move serious commercial conversations into direct follow-up fast."
            />
            <div className="mt-6">
              <LeadCaptureForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel p-5 sm:p-7 lg:p-8">
              <div className="eyebrow">why this page exists</div>
              <div className="mt-5 grid gap-4">
                {[
                  ['01', 'Structured lead intake', 'No more decorative fields. Every serious application can be routed to Telegram alerts and a webhook-backed lead log.'],
                  ['02', 'Fast partner screening', 'Traffic source, GEO, commercial model, and monthly volume are collected up front so review time stays short.'],
                  ['03', 'Direct next step', 'Qualified leads move into Telegram, where PAN can review the brief, ask one or two high-value questions, and go straight into a deal discussion.'],
                ].map(([step, title, text]) => (
                  <div key={step} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">Step {step}</div>
                    <div className="mt-2 text-base font-medium text-white">{title}</div>
                    <p className="mt-2 text-sm leading-7 text-white/64">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-5 sm:p-7 lg:p-8">
              <div className="eyebrow">instant routes</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <TrackedLink
                  href={telegramHref}
                  external
                  target="_blank"
                  rel="noreferrer"
                  eventName="telegram_click"
                  eventLabel="join_page"
                  className="button-primary"
                >
                  Open Telegram
                </TrackedLink>
                <TrackedLink
                  href={emailHref}
                  external
                  eventName="email_click"
                  eventLabel="join_page"
                  className="button-secondary"
                >
                  Send by Email
                </TrackedLink>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {networkStats.map((item) => (
                  <div key={item.label} className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-4">
                    <div className="text-xl font-semibold text-white">{item.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/42">{item.label}</div>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="panel p-5 sm:p-7 lg:p-8">
          <div className="eyebrow">operating checklists</div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            The site now supports the commercial workflow instead of stealing time from it.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {leadMagnets.map((item) => (
              <div key={item.title} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-5">
                <div className="text-base font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
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
