import Image from 'next/image';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { heroStats, siteConfig } from '@/data/site';

export default function HeroScene() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
      <div className="glass-hero relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(222,18,2,0.14),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.06),transparent_18%)]" />
        <div className="relative z-10">
          <div className="eyebrow">private affiliate network</div>
          <h1 className="mt-4 max-w-4xl text-[2rem] font-semibold leading-[0.98] text-white sm:text-5xl lg:text-[4.3rem]">
            Selective partnerships for iGaming, crypto, and performance traffic.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
            VlaDDoS connects experienced affiliates, advertisers, and operators through direct deal flow,
            private qualification, and Telegram-first communication.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <TrackedLink href="/join" eventName="hero_cta_click" eventLabel="request_access" className="button-primary w-full sm:w-auto">
              Request Access
            </TrackedLink>
            <TrackedLink
              href={`https://t.me/${siteConfig.telegramAccount.replace('@', '')}`}
              external
              target="_blank"
              rel="noreferrer"
              eventName="telegram_click"
              eventLabel="hero"
              className="button-secondary w-full sm:w-auto"
            >
              Open Telegram
            </TrackedLink>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border border-white/8 bg-white/[0.035] p-4">
                <div className="text-lg font-medium text-white">{item.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/42">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-hero relative overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />
        <div className="relative h-full min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/20 sm:min-h-[420px]">
          <Image
            src="/bg.png"
            alt="VlaDDoS background"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.12),rgba(4,4,4,0.62))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(7,7,10,0.58)] p-4 backdrop-blur-xl sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">Who this is for</div>
              <div className="mt-3 grid gap-3 text-sm text-white/74 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3">Affiliates with paid traffic, SEO, or media buying.</div>
                <div className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3">Advertisers looking for performance partners and direct supply.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
