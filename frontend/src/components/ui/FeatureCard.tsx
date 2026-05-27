import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  tag?: string;
  icon?: ReactNode;
  size?: "normal" | "wide" | "large";
  children?: ReactNode;
};

export default function FeatureCard({
  title,
  description,
  tag,
  icon,
  size = "normal",
  children,
}: FeatureCardProps) {
  const sizeClass =
    size === "large" ? "tile-2x2" : size === "wide" ? "tile-2x1" : "";

  return (
    <div className={`card-d tile ${sizeClass}`}>
      <div>
        {icon ? (
          <div className="icbox">{icon}</div>
        ) : (
          <div className="icbox">
            <svg className="icon" viewBox="0 0 20 20">
              <path d="M4 10l4 4 8-8" />
            </svg>
          </div>
        )}
      </div>

      <div>
        <h4>{title}</h4>
        <p style={{ marginTop: 10 }}>{description}</p>
      </div>

      {children}

      {tag && <span className="tag">{tag}</span>}
    </div>
  );
}