export default function Navbar() {
  // Design system tokens pulled directly from your reference dashboard layout
  const colors = {
    cardBg: "#FFFFFF",
    cardBorder: "#E2E8F0",
    primaryGreen: "#093A1A",
    textDark: "#0F172A",
    textMuted: "#64748B",
    roseBg: "#FFE4E6",
    roseText: "#9F1239",
    mintText: "#15803D",
  };

  return (
    <header
      style={{
        height: "70px",
        backgroundColor: colors.cardBg,
        borderBottom: `1px solid ${colors.cardBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* LEFT PORTAL CONTEXT */}
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            color: colors.textMuted,
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          Farm Advice & Agro-Tech Intelligence Portal
        </p>
      </div>

      {/* RIGHT OPERATIVE IDENTITY PACK */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Risk System Alert Badge */}
        <div
          style={{
            backgroundColor: colors.roseBg,
            color: colors.roseText,
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid rgba(159,18,57,0.1)",
          }}
        >
          <span>🚨</span> 1 High Risk Logs
        </div>

        {/* Vertical Separator */}
        <div
          style={{
            width: "1px",
            height: "24px",
            backgroundColor: colors.cardBorder,
          }}
        />

        {/* User Account Details */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Avatar Disc */}
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: colors.primaryGreen,
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "0.9rem",
            }}
          >
            VK
          </div>

          {/* Label Stack */}
          <div style={{ textAlign: "left" }}>
            <h4
              style={{
                margin: 0,
                fontSize: "0.85rem",
                fontWeight: "700",
                color: colors.textDark,
                lineHeight: "1.2",
              }}
            >
              Login
            </h4>
            <span
              style={{
                fontSize: "9px",
                color: colors.mintText,
                fontWeight: "800",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
