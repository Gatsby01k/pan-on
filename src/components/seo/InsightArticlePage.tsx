import Link from "next/link";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import StickyDealBar from "@/components/ui/StickyDealBar";
import TopNav from "@/components/navigation/TopNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FaqSchema from "@/components/seo/FaqSchema";
import { insightArticleMap, seoLandingPageMap } from "@/data/seoContent";

export default function InsightArticlePage({ slug }: { slug: string }) {
  const article = insightArticleMap[slug];
  const relatedPages = article.relatedSlugs.map((relatedSlug) => seoLandingPageMap[relatedSlug]).filter(Boolean);
  const baseUrl = "https://vladdos.com";

  return (
    <BackgroundShell>
      <TopNav />
      <BreadcrumbSchema items={[{ href: `${baseUrl}/`, label: "Home" }, { href: `${baseUrl}/insights`, label: "Insights" }, { href: `${baseUrl}/insights/${article.slug}`, label: article.title }]} />
      <ArticleSchema title={article.title} description={article.description} url={`${baseUrl}/insights/${article.slug}`} />
      <FaqSchema items={article.faqItems} id={`faq-${article.slug}`} />

      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="space-y-5">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/insights", label: "Insights" }, { href: `/insights/${article.slug}`, label: article.title }]} />
          <SectionHeader eyebrow={article.eyebrow} title={article.title} text={article.description} />
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <article className="panel p-5 sm:p-7">
            <div className="eyebrow">overview</div>
            <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">{article.intro}</p>
            <div className="mt-8 space-y-8">
              {article.sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-white/66 sm:text-base">{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="panel p-5 sm:p-7">
              <div className="eyebrow">private network access</div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">Looking for private affiliate deals?</h2>
              <p className="mt-4 text-sm leading-7 text-white/64">
                Use the join page to send a short brief. Qualified traffic teams and advertisers move into Telegram quickly.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/join" className="button-primary">Request Access</Link>
                <Link href="/telegram" className="button-secondary">Open Telegram</Link>
              </div>
            </div>

            <div className="panel p-5 sm:p-7">
              <div className="eyebrow">related pages</div>
              <div className="mt-5 grid gap-3">
                {relatedPages.map((page) => (
                  <Link key={page.slug} href={`/${page.slug}`} className="rounded-[1rem] border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-white/72 transition hover:border-white/16 hover:text-white">
                    {page.metadataTitle}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
