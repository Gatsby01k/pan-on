import type { Metadata } from "next";
import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { insightArticles, seoLandingPages } from "@/data/seoContent";

export const metadata: Metadata = {
  title: "Insights",
  description: "Affiliate marketing insights covering private networks, iGaming, crypto, and performance traffic.",
};

export default function InsightsPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <BreadcrumbSchema items={[{ href: "https://vladdos.com/", label: "Home" }, { href: "https://vladdos.com/insights", label: "Insights" }]} />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/insights", label: "Insights" }]} />
          <SectionHeader
            eyebrow="insights"
            title="Editorial pages built to rank, educate, and route readers into Request Access."
            text="The insight hub supports authority and search discovery, but every serious path still points back to qualified partner conversations."
          />
        </div>
        <section className="grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">why this hub exists</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/66 sm:text-base">
              <p>Strong affiliate brands need both commercial pages and authority content. The insights hub handles research intent and feeds the join funnel.</p>
              <p>Each article is designed to answer a real industry question and then move the right reader toward a direct partnership conversation.</p>
            </div>
          </div>
          <div className="panel p-5 sm:p-7">
            <div className="eyebrow">commercial pages</div>
            <div className="mt-5 grid gap-3">
              {seoLandingPages.slice(0, 6).map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                  {page.metadataTitle}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {insightArticles.map((article) => (
            <article key={article.slug} className="panel p-5 sm:p-6">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/38">{article.eyebrow}</div>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-white">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/64">{article.description}</p>
              <Link href={`/insights/${article.slug}`} className="mt-6 inline-flex text-sm text-white underline underline-offset-4">Read article</Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
