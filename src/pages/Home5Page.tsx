import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/index-5/Section1";
import Home2Section1 from "@/shared/sections/index-2/Section1";
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
      <PageMeta title="Talha Speaks AI" description="AI Automations, N8n, Claude, OpenAI integrations, and MVP Development for founders and operators." />
      <div className="d-none d-md-block">
        <Section1 />
      </div>
      <div className="d-block d-md-none">
        <Home2Section1 />
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
