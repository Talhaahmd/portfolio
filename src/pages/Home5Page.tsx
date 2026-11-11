import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/index-5/Section1";
import MobileHero from "@/shared/sections/index-5/MobileHero";
import Section2 from "@/shared/sections/index-5/Section22";
import Section3 from "@/shared/sections/index-5/Section3";
import Section4 from "@/shared/sections/index-5/Section4";
import Section5 from "@/shared/sections/index-5/Section5";
import Section6 from "@/shared/sections/index-5/Section6";
import Section7 from "@/shared/sections/index-5/Section7";
import Section8 from "@/shared/sections/index-5/Section8";

export default function Home5Page() {
  return (
    <>
      <PageMeta title="Talha Speaks AI | AI Creator, Automations & Claude" description="Talha (Talha Speaks AI) is an AI creator teaching Claude, n8n automations and AI skills. Free resources, Claude skills and a 90 day roadmap to remote work." />
      <div className="d-none d-lg-block">
        <Section1 />
      </div>
      <div className="d-block d-lg-none">
        <MobileHero />
      </div>
      <Section2 />
      <Section4 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section8 />

    </>
  );
}
