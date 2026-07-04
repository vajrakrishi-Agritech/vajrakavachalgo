import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Combined imports
import MainLayout from "../layouts/MainLayout";
import { getFarmerById } from "../services/farmerApi";
import { generateReport } from "../services/reportApi";

export default function FarmerDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false); // Prevents multi-click spamming

  // Design tokens extracted directly from the image_9c2cc1.jpg reference layout
  const colors = {
    bgCanvas: "#F8FAFC", // Light slate workspace background canvas
    primaryGreen: "#093A1A", // Signature deep corporate green
    textDark: "#0F172A", // Deep slate text for main data visibility
    textMuted: "#64748B", // Slate 500 for secondary technical labels
    cardBg: "#FFFFFF", // Pure white crisp profile surfaces
    cardBorder: "#E2E8F0", // Clear panel separation outline border
    amberGold: "#F59E0B", // Operational command copy/generate highlight yellow
    darkCommand: "#0F291B", // Secondary dark green action option
  };

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        setLoading(true);
        const result = await getFarmerById(id);
        // Fallback check to safely capture Axios responses or direct data objects
        setFarmer(result?.data ? result.data : result);
      } catch (error) {
        console.error("Error fetching farmer details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFarmer();
    }
  }, [id]); // Correctly tracks the ID dependency

  const handleGenerateReport = async () => {
    try {
      setGenerating(true); // Disable button immediately
      await generateReport(id);
      alert("Report Generated Successfully!");
    } catch (error) {
      console.error("Report generation error:", error);
      alert("Failed to generate report");
    } finally {
      setGenerating(false); // Re-enable button
    }
  };

  // Reusable inline layout style blocks for specific profile registry lines
  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 0",
    borderBottom: `1px solid ${colors.bgCanvas}`,
    boxSizing: "border-box",
  };

  // Graceful loading state check - Styled cleanly to fit the light canvas workspace
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
            Loading farmer records...
          </h2>
        </div>
      </MainLayout>
    );
  }

  // Handle cases where API returns empty or invalid data
  if (!farmer) {
    return (
      <MainLayout>
        <div
          style={{
            backgroundColor: colors.bgCanvas,
            minHeight: "100vh",
            padding: "40px 32px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: colors.textDark,
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Farmer record not found.
          </h2>
          <button
            onClick={() => navigate("/farmers")}
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
            Back to Directory
          </button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Outer workspace wrap using the clean slate design layout background */}
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
          {/* REGISTRY ROW HEADER CONSOLE */}
          <div style={{ marginBottom: "28px" }}>
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
                  backgroundColor: "#DCFCE7",
                  color: "#15803D",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                Active Protection Profile
              </span>
              <span
                style={{
                  color: colors.textMuted,
                  fontSize: "11px",
                  fontFamily: "monospace",
                }}
              >
                ID: {id}
              </span>
            </div>
            <h1
              style={{
                fontSize: "1.75rem",
                margin: 0,
                fontWeight: "800",
                color: colors.primaryGreen,
                letterSpacing: "-0.5px",
              }}
            >
              Farmer Details
            </h1>
          </div>

          {/* MASTER BLOCK: WHITE SPECIFICATION SHEET CARD */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              padding: "24px 36px",
              borderRadius: "16px",
              marginBottom: "28px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)",
              border: `1px solid ${colors.cardBorder}`,
            }}
          >
            <div style={{ ...rowStyle, paddingTop: "8px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Name:
                </strong>{" "}
                {farmer.name || "N/A"}
              </p>
            </div>
            <div style={rowStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Mobile:
                </strong>{" "}
                {farmer.mobile || "N/A"}
              </p>
            </div>
            <div style={rowStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Crop:
                </strong>{" "}
                {farmer.crop || "N/A"}
              </p>
            </div>
            <div style={rowStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Variety:
                </strong>{" "}
                {farmer.variety || "N/A"}
              </p>
            </div>
            <div style={rowStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Village:
                </strong>{" "}
                {farmer.village || "N/A"}
              </p>
            </div>
            <div style={rowStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Latitude:
                </strong>{" "}
                {farmer.latitude || "N/A"}
              </p>
            </div>
            <div
              style={{
                ...rowStyle,
                borderBottom: "none",
                paddingBottom: "8px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: colors.textDark,
                }}
              >
                <strong
                  style={{
                    display: "inline-block",
                    width: "180px",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                    letterSpacing: "0.5px",
                    fontWeight: "700",
                  }}
                >
                  Longitude:
                </strong>{" "}
                {farmer.longitude || "N/A"}
              </p>
            </div>
          </div>

          {/* LOWER OPERATIONAL COMMAND BAR */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              flexWrap: "wrap",
              backgroundColor: colors.cardBg,
              padding: "16px 20px",
              borderRadius: "12px",
              border: `1px solid ${colors.cardBorder}`,
              boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
            }}
          >
            <button
              onClick={handleGenerateReport}
              disabled={generating}
              style={{
                padding: "10px 18px",
                backgroundColor: colors.amberGold,
                color: "#000000",
                border: "none",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                opacity: generating ? 0.6 : 1,
              }}
            >
              {generating ? "Generating..." : "Generate Report"}
            </button>

            <button
              onClick={() => navigate(`/farmers/${id}/edit`)}
              style={{
                padding: "10px 18px",
                backgroundColor: colors.primaryGreen,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Edit Farmer
            </button>

            <button
              onClick={() => navigate(`/farmers/${id}/reports`)}
              style={{
                padding: "10px 18px",
                backgroundColor: colors.darkCommand,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              View Reports
            </button>

            <button
              onClick={() => navigate("/farmers")}
              style={{
                marginLeft: "auto",
                padding: "10px 16px",
                backgroundColor: "#FFFFFF",
                color: colors.textMuted,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              ← Back to List
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
