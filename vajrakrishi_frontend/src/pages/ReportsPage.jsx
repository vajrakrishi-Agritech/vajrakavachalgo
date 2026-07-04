import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getReports } from "../services/reportApi";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Design system tokens pulled directly from the image_9c2cc1.jpg reference layout
  const colors = {
    bgCanvas: "#F8FAFC", // Light slate workspace background canvas
    primaryGreen: "#093A1A", // Premium deep corporate green
    textDark: "#0F172A", // Slate 900 for high-contrast legible text
    textMuted: "#64748B", // Slate 500 for secondary description/header labels
    cardBg: "#FFFFFF", // Pure white crisp panel background
    cardBorder: "#E2E8F0", // Thin slate divider line

    // Status Badge colors from the reference table rows
    mintBg: "#DCFCE7",
    mintText: "#15803D",
    roseBg: "#FFE4E6",
    roseText: "#9F1239",
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getReports();

        // Safely extract data array whether it's an Axios response or direct payload
        setReports(result?.data ? result.data : result || []);
      } catch (err) {
        console.error("Error fetching reports directory:", err);
        setError(
          "Failed to load reports directory. Please verify your connection.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []); // Safely leaves dependency array empty since function is declared inside

  // Safe date formatting utility to prevent unexpected rendering crashes
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
  };

  // Shared reusable design systems for table cell alignments
  const thStyle = {
    backgroundColor: "#F8FAFC",
    color: colors.textMuted,
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    padding: "14px 16px",
    borderBottom: `2px solid ${colors.cardBorder}`,
    textAlign: "left",
  };

  const tdStyle = {
    padding: "16px",
    fontSize: "0.875rem",
    color: colors.textDark,
    borderBottom: `1px solid ${colors.cardBorder}`,
  };

  return (
    <MainLayout>
      {/* Outer block wrapper using clean slate workspace tokens */}
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
          {/* PAGE BANNER CONSOLE HEADER */}
          <div style={{ marginBottom: "32px" }}>
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
                Protection Registry
              </span>
              <span
                style={{
                  backgroundColor: "#F1F5F9",
                  color: colors.textMuted,
                  fontSize: "10px",
                  fontWeight: "700",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                Count: {reports.length}
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
              Reports Directory
            </h1>
            <p
              style={{
                margin: "4px 0 0 0",
                fontSize: "0.9rem",
                color: colors.textMuted,
              }}
            >
              Review compiled advisory outputs, log historical timelines, and
              track threat conditions.
            </p>
          </div>

          {/* 1. Loading State */}
          {loading && (
            <div
              style={{
                padding: "40px",
                backgroundColor: colors.cardBg,
                borderRadius: "12px",
                border: `1px solid ${colors.cardBorder}`,
                color: colors.textMuted,
                fontWeight: "600",
              }}
            >
              Syncing all report records...
            </div>
          )}

          {/* 2. Error State */}
          {error && (
            <div
              style={{
                padding: "20px",
                backgroundColor: colors.roseBg,
                color: colors.roseText,
                borderRadius: "12px",
                border: `1px solid ${colors.cardBorder}`,
                fontWeight: "600",
              }}
            >
              {error}
            </div>
          )}

          {/* 3. Empty State */}
          {!loading && !error && reports.length === 0 && (
            <div
              style={{
                padding: "40px",
                textAlign: "center",
                backgroundColor: colors.cardBg,
                borderRadius: "16px",
                border: `2px dashed ${colors.cardBorder}`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: colors.textMuted,
                  fontSize: "0.95rem",
                  fontWeight: "500",
                }}
              >
                No systemic reports found in the database directory.
              </p>
            </div>
          )}

          {/* 4. Data State - Pure White Dashboard Card Module Container */}
          {!loading && !error && reports.length > 0 && (
            <div
              style={{
                backgroundColor: colors.cardBg,
                borderRadius: "16px",
                border: `1px solid ${colors.cardBorder}`,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)",
                overflow: "hidden",
              }}
            >
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                style={{ width: "100%", borderCollapse: "collapse" }}
              >
                <thead>
                  <tr>
                    <th style={thStyle}>Farmer Name</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Date</th>
                    <th style={{ ...thStyle, textAlign: "right" }}>View</th>
                  </tr>
                </thead>

                <tbody>
                  {reports.map((report) => (
                    <tr key={report._id}>
                      <td style={{ ...tdStyle, fontWeight: "700" }}>
                        {report.farmerName || "Unknown Farmer"}
                      </td>

                      <td style={tdStyle}>
                        {/* Status badging derived directly from crisp conditional requirements */}
                        <span
                          style={{
                            fontWeight:
                              report.status === "Critical" ? "700" : "700",
                            backgroundColor:
                              report.status === "Critical"
                                ? colors.roseBg
                                : colors.mintBg,
                            color:
                              report.status === "Critical"
                                ? colors.roseText
                                : colors.mintText,
                            fontSize: "11px",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            display: "inline-block",
                          }}
                        >
                          {report.status || "N/A"}
                        </span>
                      </td>

                      <td
                        style={{
                          ...tdStyle,
                          color: colors.textMuted,
                          fontFamily: "monospace",
                        }}
                      >
                        {formatDate(report.createdAt)}
                      </td>

                      <td style={{ ...tdStyle, textAlign: "right" }}>
                        {/* Solid Green View command element matches the active dashboard row look */}
                        <button
                          onClick={() => navigate(`/reports/${report._id}`)}
                          style={{
                            padding: "8px 16px",
                            backgroundColor: colors.primaryGreen,
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "0.8rem",
                            fontWeight: "700",
                            cursor: "pointer",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                          }}
                        >
                          View Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
