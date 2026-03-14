import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightArticlePage from "@/components/seo/InsightArticlePage";
import { insightArticleMap, insightArticles } from "@/data/seoContent";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = insightArticleMap[params.slug];
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://vladdos.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://vladdos.com/insights/${article.slug}`,
      type: "article",
    },
  };
}

export default function InsightArticleRoute({ params }: Props) {
  const article = insightArticleMap[params.slug];
  if (!article) notFound();
  return <InsightArticlePage slug={params.slug} />;
}
