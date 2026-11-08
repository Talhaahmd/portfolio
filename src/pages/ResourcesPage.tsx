import PageMeta from "@/seo/PageMeta";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import MotionGallery from "@/shared/sections/resources/MotionGallery";

export default function ResourcesPage() {
  return (
    <>
      <PageMeta
        title="Claude Motion Graphics"
      />
      <ResourcesHero />
      <VideoSection />
      <MotionGallery />
    </>
  );
}
