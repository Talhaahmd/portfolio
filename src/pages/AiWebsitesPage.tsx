import { Link } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import RelatedLinks from "@/shared/elements/RelatedLinks";
import ResourcesHero from "@/shared/sections/resources/ResourcesHero";
import VideoSection from "@/shared/sections/resources/VideoSection";
import AiWebsitesGallery from "@/shared/sections/resources/AiWebsitesGallery";
import "@/shared/sections/resources/AiWebsitesGallery.css";

export default function AiWebsitesPage() {
    return (
        <>
            <PageMeta
                title="AI Websites: Free Hero and Website Prompt Designs"
                description="Browse 239 free AI website and hero designs with live hover previews, filter by category, and open each prompt on MotionSites. Plus the 90 day roadmap to start earning."
            />
            <ResourcesHero
                title="AI Websites"
                description="A browsable library of free AI-designed websites and hero sections. Hover any design to watch it move, filter by category, and open the full prompt on MotionSites to build your own in minutes."
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
            <section className="aw-rm">
                <div className="container-fluid px-3 px-lg-5">
                    <div className="aw-rm-box">
                        <div>
                            <h2>Your 90 Days Roadmap</h2>
                            <p>Turn AI website building into a skill that earns. Follow the step-by-step 90 day plan covering projects, portfolio, CV, LinkedIn and landing international remote work.</p>
                        </div>
                        <div className="aw-rm-btns">
                            <Link to="/90-days-roadmap">See the roadmap</Link>
                            <Link className="ghost" to="/claude-skills">Claude skills</Link>
                        </div>
                    </div>
                </div>
            </section>
            <AiWebsitesGallery />
            <RelatedLinks />
        </>
    );
}
