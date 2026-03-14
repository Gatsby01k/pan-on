import type { Metadata } from "next";
import BackgroundShell from "@/components/ui/BackgroundShell";
import Footer from "@/components/ui/Footer";
import TopNav from "@/components/navigation/TopNav";
import StickyDealBar from "@/components/ui/StickyDealBar";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for VlaDDoS PAN covering participation rules, prohibited traffic, liability limits, intellectual property, and commercial communication.",
  alternates: {
    canonical: "https://vladdos.com/terms",
  },
};

const sections = [
  {
    title: "1. Purpose",
    text: "vladdos.com is a private-entry brand and communication surface for affiliate, advertiser, operator, and manager conversations. Use of the site indicates acceptance of these terms.",
  },
  {
    title: "2. Participation",
    text: "Users may submit commercial inquiries, traffic details, or partnership requests. Submission of an inquiry does not guarantee acceptance, access, a reply, or a business relationship.",
  },
  {
    title: "3. Commercial accuracy",
    text: "Users are responsible for the accuracy of all business information, including traffic source, budget, geo, offer requirements, and communication identity. Misrepresentation may result in refusal or termination of contact.",
  },
  {
    title: "4. Prohibited traffic and conduct",
    text: "Spam, fraudulent traffic, deceptive practices, illegal promotion methods, identity abuse, malware, unauthorized brand bidding, and unlawful acquisition activity are prohibited. VlaDDoS PAN may refuse or block any inquiry that appears risky or non-compliant.",
  },
  {
    title: "5. Intellectual property",
    text: "All site content, branding, visual identity, and original copy on vladdos.com remain the property of VlaDDoS PAN unless otherwise stated. Users may not copy, republish, or exploit site materials in a misleading or unauthorized way.",
  },
  {
    title: "6. External communication",
    text: "Telegram, email, LinkedIn, and other linked channels are external platforms subject to their own terms and privacy rules. VlaDDoS PAN is not responsible for changes, outages, or third-party platform policies.",
  },
  {
    title: "7. No guarantee",
    text: "No part of the site constitutes a guarantee of commercial performance, approval, conversions, payout, revenue, or future business success. All partnerships remain subject to due diligence and separate agreement.",
  },
  {
    title: "8. Limitation of liability",
    text: "To the maximum extent permitted by law, VlaDDoS PAN is not liable for indirect, incidental, consequential, or business losses arising from the use of the site, reliance on site content, or the failure to secure a partnership.",
  },
  {
    title: "9. Changes",
    text: "These terms may be updated at any time. Continued use of the site after changes are published means the revised terms are accepted.",
  },
];

export default function TermsPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-5xl space-y-10 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <section className="panel p-5 sm:p-7 lg:p-8">
          <div className="eyebrow">legal / trust</div>
          <h1 className="mt-4 text-[1.9rem] font-semibold leading-[1.04] text-white sm:text-5xl">Terms of Service</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/66 sm:text-[15px]">
            These terms explain the rules for using VlaDDoS PAN as a commercial contact and lead-generation surface.
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
