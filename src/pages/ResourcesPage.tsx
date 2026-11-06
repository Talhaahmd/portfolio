import PageMeta from "@/seo/PageMeta";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import MotionGallery from "@/shared/sections/resources/MotionGallery";

export default function ResourcesPage() {
  return (
    <>
      <PageMeta
        title="Claude Motion Graphics"
        description="Free prompts to most viral videos. 83 AI motion graphics made with Claude Opus 5.5."
      />
      <ResourcesHero />
      <VideoSection />
      <MotionGallery />
    </>
  );
}
