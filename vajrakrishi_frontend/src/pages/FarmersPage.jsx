import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Combined imports
import MainLayout from "../layouts/MainLayout";
import { getFarmers } from "../services/farmerApi";

export default function FarmersPage() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const navigate = useNavigate();

  // Design tokens extracted directly from the image_9c2cc1.jpg reference layout
  const colors = {
    bgCanvas: "#F8FAFC", // Light slate workspace background canvas
    primaryGreen: "#093A1A", // Signature deep corporate green
    textDark: "#0F172A", // Deep slate text for data line items
    textMuted: "#64748B", // Slate 500 for secondary technical labels
    cardBg: "#FFFFFF", // Pure white crisp panel modules
    cardBorder: "#E2E8F0", // Thin clean divider panel outline border
    mintBg: "#DCFCE7", // Registry indicator badge mint green
    mintText: "#15803D", // Active text indicator emerald green
  };

  useEffect(() => {
    // Defining the function inside useEffect satisfies React's dependency rules
    const fetchFarmers = async () => {
      try {
        setLoading(true);
        const result = await getFarmers();
        setFarmers(result.data || []);
      } catch (error) {
        console.error("Error fetching farmers:", error);
        setError("Failed to load farmers list. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []); // Safely leaves dependency array empty

  // Shared reusable table header styling tokens
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

  // Shared reusable table cell styling tokens
  const tdStyle = {
    padding: "16px",
    fontSize: "0.875rem",
    color: colors.textDark,
    borderBottom: `1px solid ${colors.cardBorder}`,
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
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          {/* MASTER PAGE HEADER PANEL */}
          <div
            style={{
              marginBottom: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
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
                  Farmers Directory
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
                  Active Record Count: {farmers.length}
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
                Raju (Farmer) Registry Command
              </h1>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.9rem",
                  color: colors.textMuted,
                }}
              >
                Deploy field profiles, map coordinate parameters, and manage
                active agro-lifecycle stages.
              </p>
            </div>

            {/* Solid green link button action matches the primary interactive look */}
            <Link to="/farmers/add" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "12px 24px",
                  backgroundColor: colors.primaryGreen,
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                ➕ Add New Security Profile
              </button>
            </Link>
          </div>

          {/* 1. Loading State Placeholder */}
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
              Loading farmers registry data tracks...
            </div>
          )}

          {/* 2. Error State Placeholder */}
          {error && (
            <div
              style={{
                padding: "20px",
                backgroundColor: "#FFE4E6",
                color: "#9F1239",
                borderRadius: "12px",
                border: "1px solid #FCA5A5",
                fontWeight: "600",
              }}
            >
              {error}
            </div>
          )}

          {/* 3. Empty State Module */}
          {!loading && !error && farmers.length === 0 && (
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
                No active farmer profiles located inside this directory slice.
              </p>
            </div>
          )}

          {/* 4. Core Registry Data Table Framework */}
          {!loading && !error && farmers.length > 0 && (
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
                    <th style={thStyle}>Mobile String</th>
                    <th style={thStyle}>Current Crop Stage</th>
                    <th style={thStyle}>Village Sector</th>
                    <th style={{ ...thStyle, textAlign: "right" }}>
                      Operational Commands
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {farmers.map((farmer) => (
                    <tr key={farmer._id}>
                      <td style={{ ...tdStyle, fontWeight: "700" }}>
                        {farmer.name}
                      </td>
                      <td
                        style={{
                          ...tdStyle,
                          color: colors.textMuted,
                          fontFamily: "monospace",
                        }}
                      >
                        {farmer.mobile || "N/A"}
                      </td>
                      <td style={tdStyle}>
                        {farmer.crop ? (
                          <span
                            style={{
                              backgroundColor: colors.mintBg,
                              color: colors.mintText,
                              fontSize: "11px",
                              fontWeight: "700",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              display: "inline-block",
                            }}
                          >
                            🌿 {farmer.crop}
                          </span>
                        ) : (
                          <span style={{ color: colors.textMuted }}>N/A</span>
                        )}
                      </td>
                      <td style={{ ...tdStyle, color: colors.textMuted }}>
                        {farmer.village || "N/A"}
                      </td>
                      <td style={{ ...tdStyle, textAlign: "right" }}>
                        {/* Interactive operational row view controller button */}
                        <button
                          onClick={() => navigate(`/farmers/${farmer._id}`)}
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
                          View Profile
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
