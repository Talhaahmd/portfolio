import PageMeta from "@/seo/PageMeta";
import RelatedLinks from "@/shared/elements/RelatedLinks";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import MotionGallery from "@/shared/sections/resources/MotionGallery";

export default function ResourcesPage() {
  return (
    <>
      <PageMeta
        title="Claude Motion Graphics"
        description="Browse 83 AI motion graphics made with Claude, each with the exact prompt. Copy a prompt or remix the idea into a paid motion design service."
      />
      <ResourcesHero />
      <VideoSection />
      <MotionGallery />
      <RelatedLinks />
    </>
  );
}
