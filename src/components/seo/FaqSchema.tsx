import Script from "next/script";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqSchema({ items, id = "faq-schema" }: { items: FaqItem[]; id?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}
