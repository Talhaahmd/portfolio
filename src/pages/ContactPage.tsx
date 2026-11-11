import PageMeta from "@/seo/PageMeta";
import ContactSection from "@/shared/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageMeta title="Talha Speaks AI | Contact & Book a Call" description="Book an appointment with Talha — AI automation specialist based in Lahore, Pakistan." />
      <div className="pt-85" />
      <ContactSection />

    </>
  );
}
