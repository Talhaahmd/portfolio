import PageMeta from "@/seo/PageMeta";
import RelatedLinks from "@/shared/elements/RelatedLinks";
import { itemListSchema } from "@/seo/site";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import RoadmapResources, { RESOURCES } from "@/shared/sections/resources/RoadmapResources";

export default function LeadGenerationPage() {
  return (
    <>
      <PageMeta
        title="Lead Generation With Claude and LinkedIn"
        description="Learn how to generate leads with Claude and LinkedIn: find the right prospects, write outreach that gets replies and turn conversations into clients. Full video guide plus free resources."
        jsonLd={[itemListSchema("Lead generation and roadmap resources", RESOURCES.map((r) => ({ name: r.title, description: r.description })))]}
      />
      <ResourcesHero
        title="Lead Generation"
        subtitle="Generate leads with Claude and LinkedIn"
        description="A practical guide to finding prospects on LinkedIn, using Claude to research them and write personal outreach, and turning those conversations into paying clients, without paying for a lead list."
      />
      <VideoSection
        videoId="hSNBZ6rMn6o"
        tag="Full YouTube Guide"
        title="How to Generate Leads With Claude and LinkedIn"
        text="Watch the complete walkthrough: how to find the right prospects on LinkedIn, use Claude to research them and write outreach that gets replies, and build a repeatable lead generation routine."
        bullets={[
          "Find and qualify prospects on LinkedIn",
          "Use Claude to research and personalise outreach",
          "Turn conversations into a steady stream of leads",
        ]}
      />
      <RoadmapResources />
      <RelatedLinks />
    </>
  );
}
