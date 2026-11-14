import SocialLinks from "@/shared/elements/SocialLinks";
import RevealText from "@/shared/effects/RevealText";
import "./ContactSection.css";

// About 1 Section 4 - Contact Us / Get in touch

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SCROLL_ROTATE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z"
            fill="currentColor"
        />
    </svg>
);

const OFFICE_ICON_1 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
        <path d="M0 20L20 40H0V20Z" fill="currentColor" />
    </svg>
);

const OFFICE_ICON_2 = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 20V10L30 0H40V10L30 20H20Z" fill="currentColor" />
        <path d="M20 30V20H10L20 10L10 0H0V20H10L0 30V40H10L20 30Z" fill="currentColor" />
        <path d="M20 30L30 40H40V20H30L20 30Z" fill="currentColor" />
    </svg>
);

const OFFICES = [
    {
        icon: OFFICE_ICON_1,
        title: "Get in Touch",
        address: "Lahore, Pakistan",
        city: "",
        email: "muhammad.talha@klarus.io",
        emailHref: "mailto:muhammad.talha@klarus.io",
    },
];

const BOOKING_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qDvwRTaK2JAy9rVIQImaORQHDLWSAGMSmSAyMUo6ebDMFQmBd880K-kX1P2VQfzvHxq2q7Iie?gv=true";

export default function ContactSection({ classList = "" }: { classList?: string }) {
    return (
        <section className={`sec-4-about pt-120 pb-120 ${classList}`.trim()}>
            <div className="container">
                <div className="row g-4 align-items-end mb-50">
                    <div className="col-lg-6">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">CONTACT ME</span>
                                <span className="text-2">CONTACT ME</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h1 className="alt-section-title fz-ds-1 lh-1 fw-500 mb-30 reveal-text mb-0">
                            <RevealText>Get in touch</RevealText>
                        </h1>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-8 ms-lg-auto text-lg-end">
                        <div className="scroll-rotate d-lg-inline-block d-none">{SCROLL_ROTATE_SVG}</div>
                        <p className="fz-font-lg pt-lg-4 mb-0">
                            Start the conversation by sharing your vision. <br />
                            I will respond within 1–2 business days.
                        </p>
                    </div>
                </div>

                <div className="contact-calendar-wrap">
                        <div className="sec-4-about-calendar">
                            <h2 className="fw-600 h5 mb-3">Book an appointment</h2>
                            <iframe
                                src={BOOKING_URL}
                                title="Book an appointment with Talha"
                                loading="lazy"
                                className="sec-4-about-calendar__frame"
                            />
                            <p className="fz-font-md neutral-500 mt-3 mb-0">
                                Can&apos;t see the calendar?{" "}
                                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                                    Open the booking page
                                </a>{" "}
                                or <a href="mailto:muhammad.talha@klarus.io">email me directly</a>.
                            </p>
                        </div>
                </div>

                <div className="contact-info">
                    {OFFICES.map((office, i) => (
                        <div key={i} className="contact-info__card">
                            <div className="icon">{office.icon}</div>
                            <div>
                                <h2 className="fw-600 h6">{office.title}</h2>
                                <div className="fz-font-md neutral-500">
                                    <div>{office.address}</div>
                                    <div>
                                        Email:{" "}
                                        <span className="neutral-900">
                                            <a href={office.emailHref}>{office.email}</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="contact-info__social">
                        <SocialLinks variant="labeled" />
                    </div>
                </div>
            </div>
        </section>
    );
}
