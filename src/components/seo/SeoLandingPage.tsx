import type { ReactNode } from "react";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import FaqSchema from "@/components/seo/FaqSchema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

export type SeoFaqItem = {
  q: string;
  a: string;
};

type SeoLandingPageProps = {
  slug: string;
  eyebrow: string;
  title: string;
  text: string;
  intro: string[];
  corePoints: Array<{ title: string; text: string }>;
  benefitTitle: string;
  benefitPoints: string[];
  processTitle: string;
  processPoints: string[];
  fitTitle: string;
  fitCards: Array<{ title: string; text: string }>;
  faqItems: SeoFaqItem[];
  relatedLinks: Array<{ href: string; label: string }>;
  ctaTitle: string;
  ctaText: string;
  aside?: ReactNode;
};

export default function SeoLandingPage({
  slug,
  eyebrow,
  title,
  text,
  intro,
  corePoints,
  benefitTitle,
  benefitPoints,
  processTitle,
  processPoints,
  fitTitle,
  fitCards,
  faqItems,
  relatedLinks,
  ctaTitle,
  ctaText,
  aside,
}: SeoLandingPageProps) {
  const breadcrumbs = [
    { href: "https://vladdos.com/", label: "Home" },
    { href: `https://vladdos.com/${slug}`, label: title },
  ];

  return (
    <BackgroundShell>
      <TopNav />
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema title={title} description={text} url={`https://vladdos.com/${slug}`} />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: `/${slug}`, label: title }]} />
          <SectionHeader eyebrow={eyebrow} title={title} text={text} aside={aside} />
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">overview</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/66 sm:text-base">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">best next step</div>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Turn search intent into a qualified partnership brief.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/64">
              If this page matches what you are looking for, the next step is simple: request access and move the conversation into Telegram.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/join" className="button-primary">Request Access</Link>
              <Link href="/for-affiliates" className="button-secondary">For Affiliates</Link>
              <Link href="/for-advertisers" className="button-secondary">For Advertisers</Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {corePoints.map((item) => (
            <article key={item.title} className="panel p-5 sm:p-6">
              <h2 className="text-base font-medium text-white sm:text-lg">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">{benefitTitle}</div>
            <div className="mt-5 grid gap-3">
              {benefitPoints.slice(0, 4).map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm leading-7 text-white/66">{item}</div>
              ))}
            </div>
          </div>
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">{processTitle}</div>
            <div className="mt-5 grid gap-3">
              {processPoints.slice(0, 4).map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/8 bg-black/20 px-4 py-3 text-sm leading-7 text-white/66">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader eyebrow="commercial fit" title={fitTitle} text="These cards explain who should move from reading into a direct access request." />
          <div className="grid gap-4 md:grid-cols-3">
            {fitCards.map((item) => (
              <article key={item.title} className="panel p-5 sm:p-6">
                <h2 className="text-base font-medium text-white sm:text-lg">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">faq</div>
            <div className="mt-5 grid gap-4">
              {faqItems.map((item, index) => (
                <article key={item.q} className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4 sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">Question {String(index + 1).padStart(2, "0")}</div>
                  <h2 className="mt-2 text-lg font-medium text-white">{item.q}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">related pages</div>
            <div className="mt-5 grid gap-3">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 rounded-[1.3rem] border border-[rgba(222,18,2,0.18)] bg-[rgba(222,18,2,0.08)] p-4 sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">Private network access</div>
              <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{ctaTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{ctaText}</p>
              <div className="mt-5 flex flex-col gap-3">
                <Link href="/join" className="button-primary">Request Access</Link>
                <Link href="/contact" className="button-secondary">Contact</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
