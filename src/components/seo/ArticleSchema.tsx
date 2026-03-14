type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
};

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2026-03-12",
  dateModified = "2026-03-12",
}: ArticleSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "VlaDDoS PAN",
    },
    publisher: {
      "@type": "Organization",
      name: "VlaDDoS PAN",
      logo: {
        "@type": "ImageObject",
        url: "https://vladdos.com/vladdos-crown.png",
      },
    },
    image: ["https://vladdos.com/vladdos-crown.png"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
