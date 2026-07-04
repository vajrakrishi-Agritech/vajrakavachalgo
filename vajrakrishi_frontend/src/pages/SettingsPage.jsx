import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function SettingsPage() {
  // Design system tokens pulled directly from the image_9c2cc1.jpg reference layout
  const colors = {
    bgCanvas: "#F8FAFC", // Light slate workspace background canvas
    primaryGreen: "#093A1A", // Signature deep corporate green
    textDark: "#0F172A", // Slate 900 for high-contrast professional text
    textMuted: "#64748B", // Slate 500 for secondary description/header labels
    cardBg: "#FFFFFF", // Pure white crisp panel background
    cardBorder: "#E2E8F0", // Thin slate divider line
    amberGold: "#F59E0B", // Highlights and toggle warnings
    mintBg: "#DCFCE7", // Mint accent background
    mintText: "#15803D", // Emerald text color
  };

  // Safe mock configurations for layout demo state tracking
  const [riskThreshold, setRiskThreshold] = useState(75);
  const [smsSync, setSmsSync] = useState(true);

  const cardStyle = {
    backgroundColor: colors.cardBg,
    padding: "24px 32px",
    borderRadius: "16px",
    border: `1px solid ${colors.cardBorder}`,
    boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)",
    marginBottom: "24px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    textTransform: "uppercase",
    color: colors.textMuted,
    fontWeight: "700",
    letterSpacing: "0.5px",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "10px 14px",
    borderRadius: "8px",
    border: `1px solid ${colors.cardBorder}`,
    fontSize: "0.9rem",
    color: colors.textDark,
    backgroundColor: colors.bgCanvas,
    outline: "none",
  };

  const handleSave = () => {
    alert("System configuration properties updated successfully.");
  };

  return (
    <MainLayout>
      {/* Outer block wrapper using clean slate workspace layout tokens */}
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* PAGE BANNER CONSOLE HEADER */}
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
                gap: "6px",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  backgroundColor: colors.mintBg,
                  color: colors.mintText,
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                System Controls
              </span>
            </div>
            <h1
              style={{
                fontSize: "2rem",
                margin: 0,
                fontWeight: "800",
                color: colors.primaryGreen,
                letterSpacing: "-0.5px",
              }}
            >
              System Configuration
            </h1>
            <p
              style={{
                margin: "4px 0 0 0",
                fontSize: "0.9rem",
                color: colors.textMuted,
              }}
            >
              Calibrate risk threshold algorithms, map dispatch pipes, and
              manage active platform parameters.
            </p>
          </div>

          {/* BLOCK 1: OPERATIVE ACCOUNT IDENTITY PROFILE */}
          <div style={cardStyle}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: colors.primaryGreen,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                margin: "0 0 16px 0",
              }}
            >
              👤 Operative Context Details
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                backgroundColor: colors.bgCanvas,
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: colors.primaryGreen,
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyTxt: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                K
              </div>
              <div>
                <h4
                  style={{ margin: 0, fontSize: "0.95rem", fontWeight: "700" }}
                >
                  Karthik Nayani
                </h4>
                <p
                  style={{
                    margin: "2px 0 0 0",
                    fontSize: "0.75rem",
                    color: colors.mintText,
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Role: Operative Clear
                </p>
              </div>
            </div>
          </div>

          {/* BLOCK 2: VAJRAKAVACH THRESHOLD SETTINGS */}
          <div style={cardStyle}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: colors.primaryGreen,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                margin: "0 0 16px 0",
              }}
            >
              🛡️ Vajrakavach Engine Parameters
            </h3>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>
                Critical Severity Cutoff Score ({riskThreshold}%)
              </label>
              <input
                type="range"
                min="50"
                max="95"
                value={riskThreshold}
                onChange={(e) => setRiskThreshold(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  accentColor: colors.primaryGreen,
                }}
              />
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.8rem",
                  color: colors.textMuted,
                }}
              >
                Advisories scoring higher than this metric automatically
                generate a{" "}
                <span style={{ color: colors.roseText, fontWeight: "700" }}>
                  Critical Status Badge
                </span>
                .
              </p>
            </div>
          </div>

          {/* BLOCK 3: DISPATCH GATEWAY SETTINGS */}
          <div style={cardStyle}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: colors.primaryGreen,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                margin: "0 0 16px 0",
              }}
            >
              📡 Communication & API Gateways
            </h3>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>
                Regional Weather Provider API Token
              </label>
              <input
                type="password"
                value="••••••••••••••••••••••••"
                readOnly
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ ...labelStyle, marginBottom: "12px" }}>
                Automated Dispatch Pipeline
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                <input
                  type="checkbox"
                  checked={smsSync}
                  onChange={(e) => setSmsSync(e.target.checked)}
                  style={{
                    width: "16px",
                    height: "16px",
                    accentColor: colors.primaryGreen,
                  }}
                />
                Instantly sync advisory outputs over SMS to Farmer Mobiles
              </label>
            </div>
          </div>

          {/* MASTER ACTIONS FOOTER BAR */}
          <div
            style={{
              display: "flex",
              backgroundColor: colors.cardBg,
              padding: "16px 24px",
              borderRadius: "12px",
              border: `1px solid ${colors.cardBorder}`,
              boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
            }}
          >
            <button
              onClick={handleSave}
              style={{
                padding: "10px 20px",
                backgroundColor: colors.primaryGreen,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              💾 Save Configuration Changes
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
