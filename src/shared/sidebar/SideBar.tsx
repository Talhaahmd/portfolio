import { SOCIALS } from "@/seo/site";
import { ICON_PATHS } from "@/shared/elements/socialIcons";
import { Link } from "react-router-dom";
import { OffcanvasMenuMount } from "@/shared/mobile-menu/MobileMenuCloneContext";
import MenuClone from "@/shared/mobile-menu/MenuClone";
import Logo from "@/shared/Logo";

interface SideBarProps {
  open: boolean;
  hamburgerOpen: boolean;
  onClose: () => void;
}


function CloseIconSvg() {
  return (
    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9.19141 9.80762L27.5762 28.1924"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19141 28.1924L27.5762 9.80761"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "YouTube", href: SOCIALS.youtube, ariaLabel: "YouTube", path: ICON_PATHS.youtube, viewBox: "0 0 24 24" },
  { label: "X", href: SOCIALS.x, ariaLabel: "X", path: ICON_PATHS.x, viewBox: "0 0 24 24" },
  { label: "LinkedIn", href: SOCIALS.linkedin, ariaLabel: "LinkedIn", path: ICON_PATHS.linkedin, viewBox: "0 0 24 24" },
  { label: "Instagram", href: SOCIALS.instagram, ariaLabel: "Instagram", path: ICON_PATHS.instagram, viewBox: "0 0 24 24" },
] satisfies { label: string; href: string; ariaLabel: string; path: string; viewBox?: string; h?: number }[];

function SocialGrid() {
  return (
    <ul className="at-offcanvas-social__grid">
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="at-offcanvas-social__link"
            aria-label={item.ariaLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height={item.h ?? 18}
              viewBox={item.viewBox ?? "0 0 18 18"}
              fill="none"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={item.path} fill="currentColor" />
            </svg>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SideBar({ open, hamburgerOpen, onClose }: SideBarProps) {
  const isAnyOpen = open || hamburgerOpen;

  return (
    <OffcanvasMenuMount>
      <MenuClone />
      {/* Overlay */}
      <div
        className={`body-overlay sidebar-overlay ${isAnyOpen ? "apply" : ""}`}
        aria-hidden={!isAnyOpen}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close sidebar"
      />

      {/* at-offcanvas-area */}
      <div className="at-offcanvas-area" aria-hidden={!open}>
        <div className={`at-offcanvas ${open ? "opened" : ""}`}>
          <div className="at-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="at-offcanvas-logo">
              <Logo />
            </div>
            <div className="at-offcanvas-close-btn">
              <button type="button" className="close-btn close-sidebar" aria-label="Close" onClick={onClose}>
                <CloseIconSvg />
              </button>
            </div>
          </div>

          <div className="at-offcanvas-content d-none d-xl-block">
            <div className="at-offcanvas-title fw-bold">Hey there!</div>
            <p className="fz-font-lg">
              I'm Talha, an AI engineer building intelligent products, automations, and scalable software, while sharing how you can do the same.
            </p>
          </div>

          <div className="at-offcanvas-menu d-xl-none pb-50">
            <nav />
          </div>

          <div className="at-offcanvas-contact">
            <div className="at-offcanvas-title sm fw-bold">Get in touch</div>
            <ul>
              <li>
                <a className="fz-font-lg" href="mailto:muhammad.talha@klarus.io">
                  muhammad.talha@klarus.io
                </a>
              </li>
              <li>
                <a className="fz-font-lg" href="#" onClick={(e) => e.preventDefault()}>
                  Lahore, Pakistan
                </a>
              </li>
            </ul>
          </div>

          <div className="at-offcanvas-social">
            <div className="at-offcanvas-title sm fw-bold">Follow Us</div>
            <SocialGrid />
          </div>
        </div>
      </div>

      {/* at-offcanvas-2-area */}
      <div className={`at-offcanvas-2-area ${hamburgerOpen ? "menu-open" : ""}`} aria-hidden={!hamburgerOpen}>
        <div className="offcanvas-bg" />
        <div className="at-offcanvas-2-wrapper offcanvas-menu sidebar-left">
          <div className="at-offcanvas-2-left">
            <div className="at-header-logo d-flex justify-content-between align-items-center mb-50">
              <Logo />
              <span className="hamburger-close-btn close-sidebar" role="button" tabIndex={0} aria-label="Close" onClick={onClose}>
                <CloseIconSvg />
              </span>
            </div>

            <div className="at-offcanvas-menu counter-row">
              <nav />
            </div>

            <div className="at-offcanvas-social">
              <SocialGrid />
            </div>

            <span
              className="hamburger-close-btn hamburger-mobile-close-btn close-sidebar d-md-none"
              role="button"
              tabIndex={0}
              aria-label="Close"
              onClick={onClose}
            >
              CLOSE
            </span>
          </div>
        </div>
      </div>
    </OffcanvasMenuMount>
  );
}

