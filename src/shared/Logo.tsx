import { Link } from "react-router-dom";

export default function Logo({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <Link
      to="/"
      className={`text-decoration-none d-inline-flex align-items-center ${className}`}
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        color: "#000000",
        fontSize: "22px",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      Talha Speaks AI
    </Link>
  );
}
