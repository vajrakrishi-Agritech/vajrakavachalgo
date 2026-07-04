import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getReportById } from "../services/reportApi";

export default function ReportDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Style tokens extracted precisely from image_9c2cc1.jpg design layout
  const colors = {
    bgCanvas: "#F8FAFC", // Premium light slate workspace background
    primaryGreen: "#093A1A", // Deep corporate agritech green
    textDark: "#0F172A", // Slate 900 for sharp, legible data readouts
    textMuted: "#64748B", // Slate 500 for secondary metrics labels
    cardBg: "#FFFFFF", // Pure white crisp profile surfaces
    cardBorder: "#E2E8F0", // Thin clean divider panel outline
    roseBg: "#FFE4E6", // Alert background from reference badge
    roseText: "#9F1239", // Alert text color from reference badge
  };

  useEffect(() => {
    const fetchReport = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getReportById(id);

        // Handles standard payloads as well as Axios response envelopes safely
        setReport(result?.data ? result.data : result);
      } catch (err) {
        console.error("Error fetching report details:", err);
        setError(
          "Failed to retrieve report data. Please check your network connection.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchReport();
    }
  }, [id]); // Safely tracks changes to the route parameter

  // Shared spacing and font configuration for clean text data rows
  const rowItemStyle = {
    margin: "14px 0",
    fontSize: "0.95rem",
    color: colors.textDark,
    lineHeight: "1.5",
  };

  const sectionDividerStyle = {
    border: "none",
    borderTop: `1px solid ${colors.cardBorder}`,
    margin: "24px 0",
  };

  // 1. Loading UI View State - Immersed inside the slate workspace background
  if (loading) {
    return (
      <MainLayout>
        <div
          style={{
            backgroundColor: colors.bgCanvas,
            minHeight: "100vh",
            padding: "40px 32px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            boxSizing: "border-box",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              color: colors.textMuted,
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Loading report data...
          </h2>
        </div>
      </MainLayout>
    );
  }

  // 2. Error UI View State (Prevents infinite loading spin on failure)
  if (error || !report) {
    return (
      <MainLayout>
        <div
          style={{
            backgroundColor: colors.bgCanvas,
            minHeight: "100vh",
            padding: "40px 32px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            boxSizing: "border-box",
            textAlign: "left",
          }}
        >
          <div
            style={{
              padding: "24px",
              backgroundColor: colors.roseBg,
              color: colors.roseText,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: "12px",
              maxWidth: "600px",
            }}
          >
            <p style={{ margin: "0 0 16px 0", fontWeight: "600" }}>
              {error || "Report record could not be found."}
            </p>
            <button
              onClick={() => navigate(-1)}
              style={{
                padding: "8px 16px",
                backgroundColor: colors.roseText,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              ← Go Back
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Safe destructuring: Immunizes your UI elements against empty/missing database blocks
  const advisory = report?.advisory || {};

  return (
    <MainLayout>
      {/* Outer layout container utilizing clean workspace tokens */}
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
          {/* BACK ACTION COMMAND HEADER */}
          <div style={{ marginBottom: "24px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                padding: "10px 16px",
                backgroundColor: colors.cardBg,
                color: colors.textMuted,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              ← Back to Reports
            </button>
          </div>

          {/* MAIN CARD FRAMEWORK CONTAINER */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              padding: "36px 44px",
              borderRadius: "16px",
              border: `1px solid ${colors.cardBorder}`,
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <h1
                style={{
                  fontSize: "2rem",
                  margin: "0 0 6px 0",
                  fontWeight: "800",
                  color: colors.primaryGreen,
                  letterSpacing: "-0.5px",
                }}
              >
                Report Details
              </h1>
              <p
                style={{
                  color: colors.textMuted,
                  fontSize: "0.85em",
                  margin: 0,
                  fontFamily: "monospace",
                }}
              >
                Report UID: {id}
              </p>
            </div>

            <hr style={sectionDividerStyle} />

            {/* SEGMENT 1: CORE lifecycle LOG DETAILS */}
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Farmer:
              </strong>{" "}
              {report.farmerName || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Crop:
              </strong>{" "}
              {advisory.crop || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                DAS (Days After Sowing):
              </strong>{" "}
              {advisory.das || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Stage:
              </strong>{" "}
              {advisory.stage || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Season:
              </strong>{" "}
              {advisory.season || "N/A"}
            </p>

            <hr style={sectionDividerStyle} />

            {/* SEGMENT 2: PROTECTION ASSESSMENT METRICS */}
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Risk Level:
              </strong>{" "}
              {advisory.risk || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Risk Score:
              </strong>{" "}
              {advisory.riskScore !== undefined ? advisory.riskScore : "N/A"}
            </p>

            <hr style={sectionDividerStyle} />

            {/* SEGMENT 3: BIOMETRIC THREAT METRICS */}
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Primary Concern:
              </strong>{" "}
              {advisory.primaryConcern || "None Specified"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Secondary Concern:
              </strong>{" "}
              {advisory.secondaryConcern || "None Specified"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Major Disease:
              </strong>{" "}
              {advisory.majorDisease || "None Detected"}
            </p>

            <hr style={sectionDividerStyle} />

            {/* SEGMENT 4: ROUTING PARAMETERS */}
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Wind Direction:
              </strong>{" "}
              {advisory.windDirection || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Scout Start Side:
              </strong>{" "}
              {advisory.scoutStartSide || "N/A"}
            </p>
            <p style={rowItemStyle}>
              <strong
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  tracking: "0.5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Scouting Focus:
              </strong>{" "}
              {advisory.scoutingFocus || "N/A"}
            </p>

            <hr style={sectionDividerStyle} />

            {/* SEGMENT 5: ACTIONABLE operational COMMAND BOXES */}
            <h3
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                color: colors.primaryGreen,
                letterSpacing: "0.5px",
                margin: "0 0 10px 0",
                fontWeight: "700",
              }}
            >
              Today's Action:
            </h3>
            <p
              style={{
                backgroundColor: colors.bgCanvas,
                padding: "16px 20px",
                borderRadius: "10px",
                border: `1px solid ${colors.cardBorder}`,
                borderLeft: `4px solid ${colors.primaryGreen}`,
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: colors.textDark,
                margin: "0 0 24px 0",
              }}
            >
              {advisory.todayAction ||
                "No immediately required operational steps documented."}
            </p>

            <h3
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                color: colors.roseText,
                letterSpacing: "0.5px",
                margin: "0 0 10px 0",
                fontWeight: "700",
              }}
            >
              Precaution:
            </h3>
            <p
              style={{
                backgroundColor: colors.roseBg,
                padding: "16px 20px",
                borderRadius: "10px",
                border: `1px solid ${colors.cardBorder}`,
                borderLeft: `4px solid ${colors.roseText}`,
                fontSize: "0.9rem",
                lineHeight: "1.6",
                color: colors.roseText,
                fontWeight: "500",
                margin: 0,
              }}
            >
              {advisory.precaution ||
                "No explicit threat countermeasures necessary."}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
