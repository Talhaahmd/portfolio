import { NavLink, useLocation } from "react-router-dom";
import "@/shared/MainMenu.css";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

type Item = { to: string; label: string };

const RESOURCE_LINKS: Item[] = [
  { to: "/resources", label: "Motion Graphics" },
  { to: "/claude-skills", label: "Claude Skills" },
  { to: "/90-days-roadmap", label: "90 Days Roadmap" },
];

const MENU_LINKS: Item[] = [
  { to: "/", label: "Home" },
  { to: "/contact-2", label: "Contact" },
];

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

function MenuLink({ to, label }: Item) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : undefined)}>
      <LinkSwap label={label} />
    </NavLink>
  );
}

export default function MainMenu() {
  const { pathname } = useLocation();
  const resourcesActive = RESOURCE_LINKS.some((l) => pathname === l.to);

  return (
    <MainMenuRootList>
      {MENU_LINKS.slice(0, 1).map((item) => (
        <li key={item.label}>
          <MenuLink to={item.to} label={item.label} />
        </li>
      ))}
      {/* Dropdown: opens on hover (desktop) and on tap via MenuClone (mobile offcanvas) */}
      <li className="has-dropdown">
        <a href="#" className={resourcesActive ? "active" : undefined} onClick={(e) => e.preventDefault()}>
          <LinkSwap label="Resources" />
        </a>
        <ul className="submenu at-submenu">
          {RESOURCE_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
      {MENU_LINKS.slice(1).map((item) => (
        <li key={item.label}>
          <MenuLink to={item.to} label={item.label} />
        </li>
      ))}
    </MainMenuRootList>
  );
}
