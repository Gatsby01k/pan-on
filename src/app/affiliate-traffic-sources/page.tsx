import type { Metadata } from "next";
import Link from "next/link";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { seoLandingPageLinks } from "@/data/site";
import { seoLandingPageMap } from "@/data/seoContent";

const page = seoLandingPageMap["affiliate-traffic-sources"];

export const metadata: Metadata = {
  title: page.metadataTitle,
  description: page.metadataDescription,
  alternates: {
    canonical: "https://vladdos.com/affiliate-traffic-sources",
  },
  openGraph: {
    title: `${page.metadataTitle} | VlaDDoS PAN`,
    description: page.metadataDescription,
    url: "https://vladdos.com/affiliate-traffic-sources",
    type: "article",
  },
};

export default function Page() {
  return (
    <SeoLandingPage
      slug={page.slug}
      eyebrow={page.eyebrow}
      title={page.title}
      text={page.text}
      aside={
        <div className="text-sm leading-7 text-white/66">
          Looking for a faster route? Start with the <Link href="/join" className="text-white underline underline-offset-4">join page</Link> or review <Link href="/for-affiliates" className="text-white underline underline-offset-4">affiliate fit</Link>.
        </div>
      }
      intro={page.intro}
      corePoints={page.corePoints}
      benefitTitle={page.benefitTitle}
      benefitPoints={page.benefitPoints}
      processTitle={page.processTitle}
      processPoints={page.processPoints}
      fitTitle={page.fitTitle}
      fitCards={page.fitCards}
      faqItems={page.faqItems}
      relatedLinks={seoLandingPageLinks}
      ctaTitle={page.ctaTitle}
      ctaText={page.ctaText}
    />
  );
}
