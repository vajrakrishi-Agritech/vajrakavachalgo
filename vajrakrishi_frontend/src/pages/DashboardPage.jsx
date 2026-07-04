import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function DashboardPage() {
  const navigate = useNavigate();

  // Precise Design System Colors from image_9c2cc1.jpg
  const colors = {
    bgCanvas: "#F8FAFC", // Premium light slate workspace canvas
    primaryGreen: "#093A1A", // Signature corporate green
    textDark: "#0F172A", // Slate 900 for high-contrast professional text
    textMuted: "#64748B", // Slate 500 for secondary descriptions
    cardBg: "#FFFFFF", // Pure white crisp cards
    cardBorder: "#E2E8F0", // Thin slate 200 panel dividers

    // Semantic Badge Colors from reference dashboard
    mintBg: "#DCFCE7",
    mintText: "#15803D",
    roseBg: "#FFE4E6",
    roseText: "#9F1239",
    amberGold: "#F59E0B",
    hydroBlue: "#0EA5E9",
  };

  // State trackers for clean dynamic inline hover effects
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const stats = [
    {
      label: "Total Registered Farmers",
      count: "1,248",
      icon: "👤",
      badgeBg: "#F1F5F9",
      iconColor: colors.textMuted,
    },
    {
      label: "Active Cultivations",
      count: "842",
      icon: "🌾",
      badgeBg: colors.mintBg,
      iconColor: colors.mintText,
    },
    {
      label: "Risk Anomalies Flagged",
      count: "14",
      icon: "⚠️",
      badgeBg: colors.roseBg,
      iconColor: colors.roseText,
    },
    {
      label: "Advisories Synced",
      count: "3,120",
      icon: "💾",
      badgeBg: "rgba(14,165,233,0.1)",
      iconColor: colors.hydroBlue,
    },
  ];

  const features = [
    {
      title: "Vajrakavach Risk Engine",
      description:
        "Applies algorithmic pattern indexing to cross-reference localized atmospheric threats, synthesize multi-variable hazard levels, and isolate field vulnerabilities.",
      icon: "🛡️",
      accent: colors.amberGold,
    },
    {
      title: "Smart Field Protection",
      description:
        "Monitors developmental metrics, dynamic Days After Sowing (DAS) schedules, and crop variance profiles to structure predictive defense grids.",
      icon: "🌿",
      accent: colors.mintText,
    },
    {
      title: "Circuit & Fluid Mapping",
      description:
        "Correlates high-resolution spatial coordinate matrices and water table trajectories with regional farming sectors for centralized system routing.",
      icon: "🌐",
      accent: colors.hydroBlue,
    },
  ];

  return (
    <MainLayout>
      {/* Outer workspace container styled with the clean slate background canvas */}
      <div
        style={{
          backgroundColor: colors.bgCanvas,
          minHeight: "100vh",
          padding: "40px 32px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: colors.textDark,
          textAlign: "left",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          {/* HEADER CONSOLE COMPONENT */}
          <div
            style={{
              marginBottom: "32px",
              borderBottom: `1px solid ${colors.cardBorder}`,
              paddingBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  backgroundColor: colors.mintBg,
                  color: colors.mintText,
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                Active Command Node
              </span>
              <span
                style={{
                  backgroundColor: "#FEF3C7",
                  color: "#B45309",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                System: Vajrakavach
              </span>
            </div>
            <h1
              style={{
                fontSize: "2.25rem",
                margin: "0 0 6px 0",
                fontWeight: "800",
                letterSpacing: "-0.5px",
                color: colors.primaryGreen,
              }}
            >
              Dashboard Overview
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                color: colors.textMuted,
                fontWeight: "400",
              }}
            >
              Deploy field profiles, evaluate live matrix indices, and manage
              active agro-lifecycle coordinates.
            </p>
          </div>

          {/* HERO CONTROL PROFILE CARD */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              padding: "40px",
              borderRadius: "16px",
              marginBottom: "32px",
              boxShadow:
                "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
              border: `1px solid ${colors.cardBorder}`,
              borderLeft: `6px solid ${colors.primaryGreen}`,
              position: "relative",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                margin: "0 0 6px 0",
                fontWeight: "800",
                color: colors.textDark,
                letterSpacing: "-0.5px",
              }}
            >
              Vajrakrishi Portal Command
            </h2>
            <p
              style={{
                color: colors.amberGold,
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Smart Protection. Sustainable Future.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: colors.textMuted,
                lineHeight: "1.6",
                maxWidth: "820px",
                marginBottom: "32px",
              }}
            >
              Welcome to your primary data engine environment. This layout
              coordinates centralized farm directories with predictive tech
              metrics to protect regional crop timelines, isolate environmental
              risks, and distribute localized agronomic advice.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => navigate("/farmers/add")}
                onMouseEnter={() => setHoveredBtn("add")}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: colors.primaryGreen,
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  transform: hoveredBtn === "add" ? "translateY(-1px)" : "none",
                  boxShadow:
                    hoveredBtn === "add"
                      ? "0 4px 12px rgba(9,58,26,0.25)"
                      : "none",
                }}
              >
                Onboard New Field Profile
              </button>
              <button
                onClick={() => navigate("/reports")}
                onMouseEnter={() => setHoveredBtn("reports")}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#FFFFFF",
                  color: colors.textDark,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Analyze Protection Registry
              </button>
            </div>
          </div>

          {/* SYSTEM METRICS GRID SUMMARY */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {stats.map((stat, idx) => {
              const isHovered = hoveredStat === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredStat(idx)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    backgroundColor: colors.cardBg,
                    padding: "24px",
                    borderRadius: "12px",
                    border: `1px solid ${isHovered ? "rgba(9,58,26,0.25)" : colors.cardBorder}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: "1 1 calc(25% - 20px)",
                    minWidth: "240px",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)",
                    transition: "all 0.2s ease",
                    transform: isHovered ? "translateY(-2px)" : "none",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        color: colors.textMuted,
                        margin: "0 0 6px 0",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {stat.label}
                    </p>
                    <p
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: "800",
                        margin: 0,
                        color: colors.textDark,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {stat.count}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "1.35rem",
                      color: stat.iconColor,
                      backgroundColor: stat.badgeBg,
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </span>
                </div>
              );
            })}
          </div>

          {/* PLATFORM ARCHITECTURE SECTION HEADER */}
          <div
            style={{
              borderBottom: `1px solid ${colors.cardBorder}`,
              paddingBottom: "12px",
              marginBottom: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                color: colors.primaryGreen,
                letterSpacing: "1px",
                margin: 0,
                fontWeight: "700",
              }}
            >
              Operational Technology Capabilities
            </h3>
          </div>

          {/* CAPABILITIES FEATURE BLOCKS */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {features.map((feature, idx) => {
              const isHovered = hoveredFeature === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    backgroundColor: colors.cardBg,
                    padding: "32px",
                    borderRadius: "14px",
                    border: `1px solid ${isHovered ? "rgba(9,58,26,0.2)" : colors.cardBorder}`,
                    textAlign: "left",
                    flex: "1 1 calc(33.33% - 24px)",
                    minWidth: "300px",
                    boxShadow:
                      "0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      backgroundColor: "#F1F5F9",
                      fontSize: "1.25rem",
                      marginBottom: "20px",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      margin: "0 0 10px 0",
                      fontWeight: "700",
                      color: colors.textDark,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: colors.textMuted,
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                  <div
                    style={{
                      marginTop: "24px",
                      height: "2px",
                      width: isHovered ? "100%" : "24px",
                      backgroundColor: feature.accent,
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* CONSOLE LAUNCHPAD QUICK NAVIGATION PANEL */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              padding: "24px 32px",
              borderRadius: "14px",
              border: `1px solid ${colors.cardBorder}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <div>
              <h5
                style={{
                  margin: "0 0 4px 0",
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: colors.textDark,
                }}
              >
                Granular System Registry Management
              </h5>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textMuted,
                }}
              >
                Access the dynamic master indexes directly to configure
                coordinate maps, manage sowing variables, or copy report
                sequences.
              </p>
            </div>
            <button
              onClick={() => navigate("/farmers")}
              onMouseEnter={() => setHoveredBtn("launcher")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                padding: "12px 24px",
                backgroundColor: colors.primaryGreen,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
              }}
            >
              Open Farmers Directory →
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
