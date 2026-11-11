import PageMeta from "@/seo/PageMeta";
import { itemListSchema } from "@/seo/site";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import RoadmapResources, { RESOURCES } from "@/shared/sections/resources/RoadmapResources";

export default function RoadmapPage() {
  return (
    <>
      <PageMeta
        title="Your 90 Days Roadmap"
        description="A step-by-step action plan to build in-demand skills, create projects, and land international remote jobs from Pakistan."
        jsonLd={[itemListSchema("90 day roadmap resources", RESOURCES.map((r) => ({ name: r.title, description: r.description })))]}
      />
      <ResourcesHero
        title="Your 90 Days Roadmap"
        description="A step-by-step action plan to help you build in-demand skills, create real-world projects, develop a professional portfolio, optimize your CV and LinkedIn profile, and start landing international remote job opportunities from Pakistan."
      />
      <VideoSection
        videoId="z9LbYi_YeOU"
        tag="Full YouTube Guide"
        title="Your 90 Day Roadmap to a Remote Job From Pakistan"
        text="Watch the complete walkthrough of the 90-day plan: what to learn, which projects to build, how to set up your portfolio, CV and LinkedIn, and how to start applying to international remote jobs."
        bullets={[
          "Week-by-week plan from skills to job applications",
          "Build a portfolio, CV and LinkedIn that get noticed",
          "How to find and apply to international remote roles",
        ]}
      />
      <RoadmapResources />
    </>
  );
}
