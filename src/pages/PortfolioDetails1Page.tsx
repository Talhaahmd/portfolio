import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/portfolio-details-1/Section1";
import Section2 from "@/shared/sections/portfolio-details-1/Section2";
import { getCaseStudy, type CaseStudy } from "@/lib/supabase";

export default function PortfolioDetails1Page() {
    const { slug } = useParams<{ slug?: string }>();
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const targetSlug = slug || "smart-automation";
        getCaseStudy(targetSlug)
            .then((data) => {
                setCaseStudy(data);
            })
            .catch((err) => {
                console.warn("Failed to load case study from Supabase:", err);
            });
    }, [slug]);

    return (
        <>
            <PageMeta title={caseStudy?.title ? `${caseStudy.title} - Klarus AI` : "Klarus AI - Case Study"} />
            <Section1 caseStudy={caseStudy} />
            <Section2 currentSlug={slug || "smart-automation"} relatedSlugs={caseStudy?.related_slugs} />
        </>
    );
}
