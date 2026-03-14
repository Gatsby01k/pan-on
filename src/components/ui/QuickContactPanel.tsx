import { TrackedLink } from '@/components/analytics/TrackedLink';
import { primaryContactLinks } from '@/data/site';

export default function QuickContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className="panel p-5 sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="eyebrow">quick contact</div>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Request access or open a direct partnership conversation.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">
            Send a short brief with role, traffic type, GEO focus, and what you need now.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {primaryContactLinks.map((item, index) => (
          <TrackedLink
            key={item.label}
            href={item.href}
            external={item.href.startsWith('http')}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            eventName={item.label.toLowerCase().includes('telegram') ? 'telegram_click' : 'email_click'}
            eventLabel="quick_contact"
            className={[
              'group rounded-[1.2rem] border p-4 transition sm:p-5',
              index === 0
                ? 'border-[rgba(222,18,2,0.26)] bg-[rgba(222,18,2,0.08)] hover:border-[rgba(222,18,2,0.4)]'
                : 'border-white/8 bg-white/[0.035] hover:border-white/16',
            ].join(' ')}
          >
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">{item.label}</div>
            <div className="mt-2 text-base font-medium text-white transition group-hover:text-white">{item.value}</div>
            {!compact ? (
              <p className="mt-2 text-sm leading-6 text-white/58">
                {index === 0 && 'Fastest route for affiliate and advertiser applications.'}
                {index === 1 && 'Use for strategic direct opportunities and escalation.'}
                {index === 2 && 'Use for structured written briefs and longer context.'}
              </p>
            ) : null}
          </TrackedLink>
        ))}
      </div>
    </section>
  );
}
