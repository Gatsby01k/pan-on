import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import TopNav from "@/components/navigation/TopNav";
import StickyDealBar from "@/components/ui/StickyDealBar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for VlaDDoS PAN covering contact data, analytics, cookies, Telegram communication, and data handling for partnership inquiries.",
  alternates: {
    canonical: "https://vladdos.com/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Scope",
    text: "This Privacy Policy explains how VlaDDoS PAN collects, uses, stores, and protects information submitted through vladdos.com, direct email communication, Telegram communication, and related partnership inquiries.",
  },
  {
    title: "2. Information collected",
    text: "The site may collect business contact details such as name, company, email address, Telegram handle, traffic source details, geos, budget information, and any commercial information voluntarily shared in a partnership brief.",
  },
  {
    title: "3. Analytics and technical data",
    text: "VlaDDoS PAN uses analytics tools, including Google Analytics, to understand traffic sources, page usage, engagement, and site performance. This can include device data, browser type, IP-derived approximate location, and on-site behavior.",
  },
  {
    title: "4. How information is used",
    text: "Information is used to review partnership fit, respond to inquiries, route applications into the correct communication channel, improve site performance, and protect the platform from spam, abuse, or low-quality submissions.",
  },
  {
    title: "5. Telegram and email communication",
    text: "When a user chooses to contact VlaDDoS PAN through Telegram or email, the information sent in that message is used to evaluate commercial relevance and continue the conversation. Users should avoid sharing sensitive personal information that is not required for business evaluation.",
  },
  {
    title: "6. Cookies",
    text: "The site may use cookies or similar technologies for analytics, functionality, and performance measurement. Continued use of the site indicates consent to the reasonable use of such technologies as described in the Cookie Policy.",
  },
  {
    title: "7. Data sharing",
    text: "VlaDDoS PAN does not sell personal data. Information may be shared with service providers that support hosting, analytics, or communication where necessary to operate the site and partnership workflow.",
  },
  {
    title: "8. Data retention",
    text: "Commercial inquiries and contact records may be retained for as long as necessary to evaluate, maintain, or follow up on potential partnership relationships, comply with legal obligations, or resolve disputes.",
  },
  {
    title: "9. GDPR-style rights",
    text: "Where applicable, users may request access, correction, or deletion of personal information by contacting hello@vladdos.com. Reasonable steps will be taken to review and respond to legitimate requests.",
  },
  {
    title: "10. Updates",
    text: "This policy may be updated periodically to reflect operational, legal, or platform changes. Continued use of vladdos.com after updates constitutes acceptance of the revised policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-5xl space-y-10 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <div className="eyebrow">legal / trust</div>
          <h1 className="mt-4 text-[1.9rem] font-semibold leading-[1.04] text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
            This policy supports trust, compliance, and search visibility by explaining how VlaDDoS PAN handles contact data, analytics, and partnership inquiries.
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
