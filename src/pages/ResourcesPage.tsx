import PageMeta from "@/seo/PageMeta";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import MotionGallery from "@/shared/sections/resources/MotionGallery";

export default function ResourcesPage() {
  return (
    <>
      <PageMeta
        title="Claude Motion Graphics"
        description="A gallery of Claude-generated motion graphics, plus free AI resources from Talha Speaks AI."
      />
      <ResourcesHero />
      <VideoSection />
      <MotionGallery />
    </>
  );
}
