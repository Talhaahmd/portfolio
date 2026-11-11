import "./SocialLinks.css";
import { SOCIALS } from "@/seo/site";
import { ICON_PATHS } from "./socialIcons";

type Network = "youtube" | "x" | "linkedin" | "instagram";
const META: Record<Network, { label: string; href: string }> = {
  youtube: { label: "YouTube", href: SOCIALS.youtube },
  x: { label: "X", href: SOCIALS.x },
  linkedin: { label: "LinkedIn", href: SOCIALS.linkedin },
  instagram: { label: "Instagram", href: SOCIALS.instagram },
};

type Props = {
  /** "icons" = round logo buttons, "labeled" = logo + name pills */
  variant?: "icons" | "labeled";
  networks?: Network[];
  light?: boolean;
  className?: string;
};

export default function SocialLinks({
  variant = "icons",
  networks = ["youtube", "x", "linkedin", "instagram"],
  light = false,
  className = "",
}: Props) {
  return (
    <ul className={`tsl tsl--${variant} ${light ? "tsl--light" : ""} ${className}`} aria-label="Talha Speaks AI on social media">
      {networks.map((n) => (
        <li key={n}>
          <a
            href={META[n].href}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={`Talha Speaks AI on ${META[n].label}`}
            title={META[n].label}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
              <path d={ICON_PATHS[n]} fill="currentColor" />
            </svg>
            {variant === "labeled" ? <span>{META[n].label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
