import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/about-1/Section4";

export default function Contact2Page() {
  return (
    <>
      <PageMeta title="Talha Speaks AI | Book a Call" description="Book an appointment with Talha — AI automation specialist based in Lahore, Pakistan." />
      <div className="pt-85">
        <div className="at-banner-thumb overflow-hidden scale-up-img pt-md-0 pt-20">
          <img className="img-cover scale-up" data-speed=".8" src="https://images.pexels.com/photos/16748674/pexels-photo-16748674.jpeg" alt="Talha Speaks AI" width={1920} height={800} loading="lazy" />
        </div>
      </div>
      <Section1 />

    </>
  );
}
