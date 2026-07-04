import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Logo Brand Colors
  const colors = {
    forestGreen: "#093A1A", // Corporate background green
    leafGreen: "#22C55E", // Active/Highlight green
    thunderGold: "#EAB308", // Brand accent yellow
    borderGreen: "#1C2E22", // Clean separation line green
  };

  // Navigation Directory items configuration
  const navItems = [
    { to: "/", label: "Dashboard", icon: "📊" },
    { to: "/farmers", label: "Farmers", icon: "🚜" },
    { to: "/reports", label: "Reports", icon: "🛡️" },
    { to: "/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside
      style={{
        width: "220px",
        height: "100vh", // Changed from minHeight to absolute height
        position: "sticky", // Keeps position stable
        top: 0, // Glues to top roof edge
        left: 0, // Glues to left side edge

        // Keep all your other existing color/padding styles exactly the same...
        backgroundColor: colors.forestGreen,
        color: "#ecfdf5",
        padding: "20px",
        borderRight: `1px solid ${colors.borderGreen}`,
        boxShadow: "4px 0 15px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div>
        {/* Brand Header Group */}
        <div
          style={{
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottom: `1px solid rgba(28, 46, 34, 0.6)`,
          }}
        >
          <h2
            style={{
              fontSize: "1.15rem",
              fontWeight: "900",
              color: "#fff",
              letterSpacing: "1px",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Vajrakrishi
          </h2>
          <span
            style={{
              fontSize: "10px",
              color: colors.thunderGold,
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginTop: "3px",
            }}
          >
            Agro Tech
          </span>
        </div>

        {/* Dynamic Navigation Menu */}
        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {navItems.map((item, idx) => {
              // Highlights the link if it matches the current path location
              const isActive = location.pathname === item.to;
              const isHovered = hoveredIdx === idx;

              return (
                <li key={idx}>
                  <Link
                    to={item.to}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      // Dynamic theme transition engine
                      color: isActive || isHovered ? "#fff" : "#a7f3d0",
                      backgroundColor: isActive
                        ? "rgba(34, 197, 94, 0.2)"
                        : isHovered
                          ? "rgba(255, 255, 255, 0.05)"
                          : "transparent",
                      border: isActive
                        ? `1px solid rgba(34, 197, 94, 0.3)`
                        : "1px solid transparent",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.1rem",
                        filter: isActive ? "none" : "grayscale(30%)",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer System Encryption Indicator */}
      <div
        style={{
          paddingTop: "16px",
          borderTop: `1px solid ${colors.borderGreen}`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "9px",
            color: colors.leafGreen,
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: "700",
            margin: 0,
          }}
        >
          Vajrakavach Protocol
        </p>
      </div>
    </aside>
  );
}
