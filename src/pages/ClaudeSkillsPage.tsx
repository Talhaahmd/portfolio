import PageMeta from "@/seo/PageMeta";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import ClaudeSkillsSection from "@/shared/sections/resources/ClaudeSkillsSection";
import VideoSection from "@/shared/sections/resources/VideoSection";

export default function ClaudeSkillsPage() {
  return (
    <>
      <PageMeta
        title="Claude Skills Every Freelancer Should Know"
        description="6 Claude skills, from marketing to sales, that every freelancer should know."
      />
      <ResourcesHero
        title="Claude Skills Every Freelancer Should Know"
        description="Six Claude skills that cover the work freelancers do every day, from finding and pitching clients to marketing, content and closing deals. Learn what each skill does, how to set it up, and how to use it to deliver better work in less time."
      />
      <VideoSection
        videoId="V9xPG7KTbbI"
        tag="Full YouTube Guide"
        title="I Tried 100+ Claude Skills And These 6 Will Make You RICH"
        text="Watch the complete walkthrough of the six Claude skills worth learning, with the full setup and a clear look at how freelancers can use each one to win clients and earn more."
        bullets={[
          "The 6 skills that stood out from 100+ tested",
          "Full setup, step by step",
          "How freelancers can use them in marketing and sales",
        ]}
      />
      <ClaudeSkillsSection />
    </>
  );
}
