import { Link } from "react-router-dom";
import { useEffect as useEff } from "react";
import SocialLinks from "@/shared/elements/SocialLinks";
import RevealText from "@/shared/effects/RevealText";

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

export default function ContactSection({ classList = "" }: { classList?: string }) {

    useEff(() => {
        // Inject Google Calendar stylesheet
        if (!document.getElementById('gcal-css')) {
            const link = document.createElement('link');
            link.id = 'gcal-css';
            link.rel = 'stylesheet';
            link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
            document.head.appendChild(link);
        }

        // Inject Google Calendar script and init button on load
        if (!document.getElementById('gcal-js')) {
            const script = document.createElement('script');
            script.id = 'gcal-js';
            script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
            script.async = true;
            script.onload = () => {
                const target = document.getElementById('gcal-btn-target');
                if (target && (window as any).calendar?.schedulingButton) {
                    (window as any).calendar.schedulingButton.load({
                        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qDvwRTaK2JAy9rVIQImaORQHDLWSAGMSmSAyMUo6ebDMFQmBd880K-kX1P2VQfzvHxq2q7Iie?gv=true',
                        color: '#039BE5',
                        label: 'Book an appointment',
                        target,
                    });
                }
            };
            document.body.appendChild(script);
        } else {
            // Script already loaded — init immediately
            const target = document.getElementById('gcal-btn-target');
            if (target && (window as any).calendar?.schedulingButton) {
                (window as any).calendar.schedulingButton.load({
                    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qDvwRTaK2JAy9rVIQImaORQHDLWSAGMSmSAyMUo6ebDMFQmBd880K-kX1P2VQfzvHxq2q7Iie?gv=true',
                    color: '#039BE5',
                    label: 'Book an appointment',
                    target,
                });
            }
        }
    }, []);
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

                <div className="row">
                    {/* Contact Info Column */}
                    <div className="col-xxl-4 col-lg-5">
                        <div className="row g-4">
                            {OFFICES.map((office, i) => (
                                <div key={i} className="col-lg-12 col-md-6">
                                    <div className="d-flex gap-4">
                                        <div className="icon">{office.icon}</div>
                                        <div>
                                            <h6 className="fw-600">{office.title}</h6>
                                            <div className="d-flex flex-wrap gap-md-5 gap-4">
                                                <span className="fz-font-md neutral-500">
                                                    {office.address}
                                                    {office.city && (
                                                        <>
                                                            <br className="d-block" />
                                                            {office.city}
                                                        </>
                                                    )}
                                                    <br className="d-block" />
                                                    Email:{" "}
                                                    <span className="neutral-900">
                                                        <Link to={office.emailHref}>{office.email}</Link>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="pt-50"><SocialLinks variant="labeled" /></div>
                            </div>
                        </div>
                    </div>

                    {/* Google Calendar Booking Column */}
                    <div className="col-xxl-8 col-lg-7 ms-auto pt-lg-0 pt-30">
                        <div className="sec-4-about-calendar">
                            <div
                                id="gcal-btn-target"
                                className="sec-4-about-calendar__btn-wrap"
                                aria-label="Book an appointment with Google Calendar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
