import PageMeta from "@/seo/PageMeta";
import ContactSection from "@/shared/sections/contact/ContactSection";
import ContactDetails, { CONTACT_FAQS } from "@/shared/sections/contact/ContactDetails";
import RelatedLinks from "@/shared/elements/RelatedLinks";
import Breadcrumbs from "@/shared/elements/Breadcrumbs";
import "@/shared/elements/Breadcrumbs.css";

export default function ContactPage() {
  return (
    <>
      <PageMeta title="Contact & Book a Call" description="Contact Talha Speaks AI or book a call. AI creator based in Lahore, Pakistan, teaching Claude and automation. Replies within 1 to 2 business days."
        jsonLd={[{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: CONTACT_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }]}
      />
      <div className="pt-85" />
      <div className="container pt-40 text-start">
        <Breadcrumbs current="Contact" />
      </div>
      <ContactSection />
      <ContactDetails />
      <RelatedLinks />

    </>
  );
}
