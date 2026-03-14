import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import TopNav from "@/components/navigation/TopNav";
import StickyDealBar from "@/components/ui/StickyDealBar";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for VlaDDoS PAN explaining analytics cookies, functional cookies, consent, and measurement technologies used on vladdos.com.",
  alternates: {
    canonical: "https://vladdos.com/cookie-policy",
  },
};

const sections = [
  {
    title: "1. What this policy covers",
    text: "This Cookie Policy explains how vladdos.com may use cookies and similar technologies to measure traffic, improve performance, and support core site functionality.",
  },
  {
    title: "2. Analytics cookies",
    text: "Analytics technologies may be used to understand how users reach the site, which pages perform best, how long users stay, and which routes produce the strongest lead intent. This includes Google Analytics or similar services.",
  },
  {
    title: "3. Functional cookies",
    text: "Functional technologies may be used to support navigation behavior, page stability, and a smoother user experience across sessions and devices.",
  },
  {
    title: "4. Consent",
    text: "By continuing to use vladdos.com, users consent to the reasonable use of cookies and related measurement technologies described in this policy, except where local law requires a stricter form of consent management.",
  },
  {
    title: "5. Managing cookies",
    text: "Users can block or delete cookies through their browser settings. Some site functionality or measurement accuracy may be reduced when cookies are disabled.",
  },
  {
    title: "6. Policy updates",
    text: "This policy may change as site functionality, analytics setup, or legal requirements evolve. The latest version published on vladdos.com applies.",
  },
];

export default function CookiePolicyPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-5xl space-y-10 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <div className="eyebrow">legal / trust</div>
          <h1 className="mt-4 text-[1.9rem] font-semibold leading-[1.04] text-white sm:text-5xl">Cookie Policy</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
            This page explains how measurement and functionality technologies are used on vladdos.com to improve performance and qualification flow.
          </p>
        </section>

        <section className="panel p-5 sm:p-7">
          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-lg font-medium text-white">{section.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/64">{section.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyDealBar />
    </BackgroundShell>
  );
}
