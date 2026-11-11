import PageMeta from "@/seo/PageMeta";
import ContactSection from "@/shared/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageMeta title="Contact & Book a Call" description="Contact Talha Speaks AI or book a call. AI creator based in Lahore, Pakistan, teaching Claude and automation. Replies within 1 to 2 business days." />
      <div className="pt-85" />
      <ContactSection />

    </>
  );
}
