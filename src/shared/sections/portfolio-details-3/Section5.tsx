import { useCaseStudy } from "./CaseStudyContext";

export default function Section5() {
    const { data: cs, loading } = useCaseStudy();
    if (loading || !cs || !cs.quote_text) return null;

    return (
        <section className="sec-5-portfolio-details-3 overflow-hidden pt-100 pb-100 bg-neutral-950 changeless">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9 text-center">
                        <span className="sec-5-portfolio-details-3__mark at_fade_anim" data-fade-from="bottom" data-delay=".05" aria-hidden="true">&ldquo;</span>
                        <blockquote className="sec-5-portfolio-details-3__quote text-white fw-500 mb-50 at_fade_anim" data-fade-from="bottom" data-delay=".15">
                            {cs.quote_text}
                        </blockquote>
                        <p className="sec-5-portfolio-details-3__author text-white fw-500 fz-font-xl mb-1 at_fade_anim" data-fade-from="bottom" data-delay=".3">
                            {cs.quote_author}
                        </p>
                        <p className="sec-5-portfolio-details-3__role fz-font-label text-uppercase fw-500 mb-0 at_fade_anim" data-fade-from="bottom" data-delay=".4">
                            {cs.quote_role}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
