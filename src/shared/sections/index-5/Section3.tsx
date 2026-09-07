import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";
import OdometerCounter from "@/shared/elements/OdometerCounter";

{/* Home 7 Section 2 (We Power the World's Fastest Growing Startups) */ }
const FEATURE_DATA = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20V0H20H0V20V40H20L40 20Z"
                    fill="currentColor"
                />
            </svg>
        ),
        title: "Ustahub",
        desc: "Helping businesses build better digital experiences and reach the right audience.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20V0H20H0V20V40H20L40 20Z"
                    fill="currentColor"
                />
            </svg>
        ),
        title: "Nordic ERP",
        desc: "Streamlining business operations with smarter systems, automation, and data.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20V0H20H0V20V40H20L40 20Z"
                    fill="currentColor"
                />
            </svg>
        ),
        title: "Manychat",
        desc: "Creating automated customer journeys that turn conversations into opportunities.",
    },
];

const STAT_DATA = [
    {
        value: 3,
        suffix: "+",
        label: "countries where clients expanded their business",
    },
    {
        value: 10,
        suffix: "k+",
        label: "verified personnel registered on ERP",
    },
    {
        value: 98,
        suffix: "%",
        label: "client retention gained over the last year",
    },
];

const IMG_DATA = [
    {
        src: "/assets/imgs/pages/1%202.png",
        mobileSrc: "/assets/imgs/pages/1%203.png",
        alt: "Talha Speaks AI",
    },
    {
        src: "/assets/imgs/pages/2%202.png",
        mobileSrc: "/assets/imgs/pages/2%203.png",
        alt: "Talha Speaks AI",
    },
    {
        src: "/assets/imgs/pages/3%202.png",
        mobileSrc: "/assets/imgs/pages/3%203.png",
        alt: "Talha Speaks AI",
    },
];

const EYEBROW_ARROW_SVG = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
    >
        <path
            d="M3.33325 12.6667L12.6666 3.33337"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4 3.33337H12.6667V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function Section2() {
    return (
        <section className="sec-2-home-7">

            <div className="container">

                {/* Section Header */}
                <div className="sec-2-home-7__header">

                    <div className="row">

                        <div className="col-xl-5 col-lg-5">

                            <div className="sec-2-home-7__eyebrow at_fade_anim">
                                <span>
                                    {EYEBROW_ARROW_SVG}
                                </span>

                                <span>
                                    Selected work
                                </span>
                            </div>

                        </div>

                        <div className="col-xl-7 col-lg-7">

                            <div className="sec-2-home-7__title-wrap">

                                <h2 className="sec-2-home-7__title">
                                    <RevealText>
                                        We Power the World's Fastest Growing Startups
                                    </RevealText>
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Main Grid */}
                <div className="sec-2-home-7__grid">


                    {/* =========================================
                        ROW 1
                    ========================================== */}

                    <div className="sec-2-home-7__row">


                        {/* IMAGE 1 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-1">

                            <div className="sec-2-home-7__img-wrap">

                                <div className="thumb fix anim-zoomin">

                                    <picture>

                                        {/* MOBILE IMAGE */}
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={IMG_DATA[0].mobileSrc}
                                        />

                                        {/* DESKTOP IMAGE */}
                                        <img
                                            data-speed=".8"
                                            src={IMG_DATA[0].src}
                                            alt={IMG_DATA[0].alt}
                                            width={640}
                                            height={480}
                                            loading="lazy"
                                        />

                                    </picture>

                                </div>

                            </div>

                        </div>


                        {/* FEATURE 1 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-2">

                            <div className="ps-4">

                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {FEATURE_DATA[0].icon}
                                </div>

                                <h3 className="sec-2-home-7__feature-title at-char-animation">
                                    {FEATURE_DATA[0].title}
                                </h3>

                                <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                                    {FEATURE_DATA[0].desc}
                                </p>

                            </div>

                        </div>


                        {/* STAT 1 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-4">

                            <h3 className="sec-2-home-7__stat-value mb-3">

                                <OdometerCounter
                                    count={STAT_DATA[0].value}
                                />

                                {STAT_DATA[0].suffix}

                            </h3>

                            <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                                {STAT_DATA[0].label}
                            </p>

                        </div>

                    </div>



                    {/* =========================================
                        ROW 2
                    ========================================== */}

                    <div className="sec-2-home-7__row">


                        {/* IMAGE 2 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-2">

                            <div className="sec-2-home-7__img-wrap ms-2">

                                <div className="thumb fix anim-zoomin">

                                    <picture>

                                        {/* MOBILE IMAGE */}
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={IMG_DATA[1].mobileSrc}
                                        />

                                        {/* DESKTOP IMAGE */}
                                        <img
                                            data-speed=".8"
                                            src={IMG_DATA[1].src}
                                            alt={IMG_DATA[1].alt}
                                            width={640}
                                            height={480}
                                            loading="lazy"
                                        />

                                    </picture>

                                </div>

                            </div>

                        </div>


                        {/* FEATURE 2 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-3">

                            <div className="ps-4">

                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {FEATURE_DATA[1].icon}
                                </div>

                                <h3 className="sec-2-home-7__feature-title at-char-animation">
                                    {FEATURE_DATA[1].title}
                                </h3>

                                <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                                    {FEATURE_DATA[1].desc}
                                </p>

                            </div>

                        </div>


                        {/* STAT 2 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-5">

                            <h3 className="sec-2-home-7__stat-value mb-3">

                                <OdometerCounter
                                    count={STAT_DATA[1].value}
                                />

                                {STAT_DATA[1].suffix}

                            </h3>

                            <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                                {STAT_DATA[1].label}
                            </p>

                        </div>

                    </div>



                    {/* =========================================
                        ROW 3
                    ========================================== */}

                    <div className="sec-2-home-7__row">


                        {/* STAT 3 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-1">

                            <h3 className="sec-2-home-7__stat-value mb-3">

                                <OdometerCounter
                                    count={STAT_DATA[2].value}
                                />

                                {STAT_DATA[2].suffix}

                            </h3>

                            <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                                {STAT_DATA[2].label}
                            </p>

                        </div>



                        {/* IMAGE 3 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-3">

                            <div className="sec-2-home-7__img-wrap ms-2">

                                <div className="thumb fix anim-zoomin">

                                    <picture>

                                        {/* MOBILE IMAGE */}
                                        <source
                                            media="(max-width: 767px)"
                                            srcSet={IMG_DATA[2].mobileSrc}
                                        />

                                        {/* DESKTOP IMAGE */}
                                        <img
                                            data-speed=".8"
                                            src={IMG_DATA[2].src}
                                            alt={IMG_DATA[2].alt}
                                            width={640}
                                            height={480}
                                            loading="lazy"
                                        />

                                    </picture>

                                </div>

                            </div>

                        </div>



                        {/* FEATURE 3 */}

                        <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-4">

                            <div className="ps-4">

                                <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                                    {FEATURE_DATA[2].icon}
                                </div>

                                <h3 className="sec-2-home-7__feature-title at-char-animation">
                                    {FEATURE_DATA[2].title}
                                </h3>

                                <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                                    {FEATURE_DATA[2].desc}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}