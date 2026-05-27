type SectionHeaderProps = {
  sectionNumber?: string;
  sectionName?: string;
  ribbonText?: string;
  eyebrow?: string;
  title: string;
  mutedTitle?: string;
  dark?: boolean;
  maxWidth?: number;
};

export default function SectionHeader({
  sectionNumber,
  sectionName,
  ribbonText,
  eyebrow,
  title,
  mutedTitle,
  dark = false,
  maxWidth,
}: SectionHeaderProps) {
  return (
    <>
      {(sectionNumber || sectionName || ribbonText) && (
        <div className="sx-ribbon">
          <span
            className="idx"
            style={!dark ? { color: "var(--l-2)" } : undefined}
          >
            {sectionNumber}
            {sectionNumber && <span className="slash"> / </span>}
            {sectionName && <span className="name">{sectionName}</span>}
          </span>

          {ribbonText && (
            <span
              style={
                !dark
                  ? {
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--l-2)",
                    }
                  : undefined
              }
            >
              {ribbonText}
            </span>
          )}
        </div>
      )}

      {eyebrow && (
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          {eyebrow}
        </div>
      )}

      <h2
        className="h-section"
        style={{
          color: dark ? "var(--d-1)" : undefined,
          maxWidth: maxWidth ? maxWidth : undefined,
        }}
      >
        {title}
        {mutedTitle && (
          <>
            <br />
            <span className="muted-weight">{mutedTitle}</span>
          </>
        )}
      </h2>
    </>
  );
}