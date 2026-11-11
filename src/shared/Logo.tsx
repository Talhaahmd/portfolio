import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  style?: React.CSSProperties;
  /** "dark" = dark logo for light backgrounds (default), "light" = white logo for dark backgrounds */
  variant?: "dark" | "light";
  height?: number;
};

export default function Logo({ className = "", style = {}, variant = "dark", height = 38 }: LogoProps) {
  return (
    <Link to="/" className={`text-decoration-none d-inline-flex align-items-center ${className}`} style={style} aria-label="Talha Speaks AI home">
      <img
        src={`/assets/imgs/template/logo/logo-talha-${variant}.webp`}
        alt="Talha Speaks AI"
        width={Math.round((height * 720) / 253)}
        height={height}
        style={{ height, width: "auto", display: "block" }}
      />
    </Link>
  );
}
