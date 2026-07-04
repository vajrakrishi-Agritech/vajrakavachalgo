import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { createFarmer } from "../services/farmerApi";

export default function AddFarmerPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    village: "",
    crop: "",
    variety: "",
    sowingDate: "",
    latitude: "",
    longitude: "",
    point1Lat: "",
    point1Lon: "",
    point2Lat: "",
    point2Lon: "",
    point3Lat: "",
    point3Lon: "",
    point4Lat: "",
    point4Lon: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const farmerData = {
        ...formData,
        fieldCoordinates: [
          [Number(formData.point1Lat), Number(formData.point1Lon)],
          [Number(formData.point2Lat), Number(formData.point2Lon)],
          [Number(formData.point3Lat), Number(formData.point3Lon)],
          [Number(formData.point4Lat), Number(formData.point4Lon)],
        ],
      };

      await createFarmer(farmerData);
      alert("Farmer saved successfully!");
      navigate("/farmers");
    } catch (error) {
      console.error(error);
      alert("Error saving farmer");
    }
  };

  // Professional design tokens matching the image_9c2cc1.jpg theme layout
  const colors = {
    bgCanvas: "#F8FAFC",
    primaryGreen: "#093A1A",
    textDark: "#0F172A",
    textMuted: "#64748B",
    cardBg: "#FFFFFF",
    cardBorder: "#E2E8F0",
    amberGold: "#F59E0B",
    mintBg: "#DCFCE7",
    mintText: "#15803D",
  };

  // State engines to compute isolated real-time animation values
  const [hoveredCard, setHoveredCard] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);

  // Dynamic style synthesis generator for card layout assets
  const getCardStyle = (cardId) => ({
    backgroundColor: colors.cardBg,
    border: `1px solid ${hoveredCard === cardId ? "rgba(9,58,26,0.2)" : colors.cardBorder}`,
    borderRadius: "16px",
    padding: "24px",
    boxShadow:
      hoveredCard === cardId
        ? "0 12px 20px -8px rgba(0,0,0,0.05), 0 4px 12px -2px rgba(9,58,26,0.03)"
        : "0 1px 3px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.02)",
    boxSizing: "border-box",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: hoveredCard === cardId ? "translateY(-2px)" : "none",
    animation: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
  });

  // Dynamic style synthesis generator for form input text fields
  const getInputStyle = (inputName) => ({
    width: "100%",
    fontSize: "0.85rem",
    padding: "10px 14px",
    backgroundColor: focusedInput === inputName ? "#FFFFFF" : "#F8FAFC",
    border: `1px solid ${focusedInput === inputName ? colors.primaryGreen : colors.cardBorder}`,
    borderRadius: "8px",
    outline: "none",
    fontWeight: "500",
    color: colors.textDark,
    boxSizing: "border-box",
    transition: "all 0.2s ease-in-out",
    boxShadow:
      focusedInput === inputName ? "0 0 0 3px rgba(9,58,26,0.06)" : "none",
  });

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "700",
    color: colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
  };

  return (
    <MainLayout>
      {/* Native keyframe stylesheet generation injection block */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Main interface layout content box */}
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
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* SYSTEM COMMAND BANNER HEADER */}
          <div
            style={{
              marginBottom: "32px",
              borderBottom: `1px solid ${colors.cardBorder}`,
              paddingBottom: "24px",
              animation: "fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
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
                Onboard Console
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
              Onboard New Farm Profile
            </h1>
            <p
              style={{
                margin: "4px 0 0 0",
                fontSize: "0.9rem",
                color: colors.textMuted,
              }}
            >
              Configure target fields, agricultural metrics, and boundary
              polygon geo-fencing frameworks.
            </p>
          </div>

          {/* WORKSPACE DATA ENTRY CARD MATRICES */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {/* CARD 1: PRIMARY PROFILE IDENTIFICATION */}
              <div
                onMouseEnter={() => setHoveredCard("idDetails")}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  ...getCardStyle("idDetails"),
                  flex: "1 1 calc(50% - 12px)",
                  minWidth: "320px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  animationDelay: "0.05s",
                }}
              >
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: colors.primaryGreen,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: "0 0 4px 0",
                    borderBottom: `1px solid ${colors.bgCanvas}`,
                    paddingBottom: "8px",
                  }}
                >
                  👤 Farmer Identification Details
                </h3>

                <div>
                  <label style={labelStyle}>Farmer Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                    style={getInputStyle("name")}
                  />
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="e.g. +91 XXXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("mobile")}
                      onBlur={() => setFocusedInput(null)}
                      style={getInputStyle("mobile")}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Village Location</label>
                    <input
                      type="text"
                      name="village"
                      placeholder="Village name"
                      value={formData.village}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("village")}
                      onBlur={() => setFocusedInput(null)}
                      style={getInputStyle("village")}
                    />
                  </div>
                </div>
              </div>

              {/* CARD 2: AGRONOMIC METRICS MATRIX */}
              <div
                onMouseEnter={() => setHoveredCard("cropDetails")}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  ...getCardStyle("cropDetails"),
                  flex: "1 1 calc(50% - 12px)",
                  minWidth: "320px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  animationDelay: "0.1s",
                }}
              >
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: colors.primaryGreen,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: "0 0 4px 0",
                    borderBottom: `1px solid ${colors.bgCanvas}`,
                    paddingBottom: "8px",
                  }}
                >
                  🌾 Crop & Cultivation Metrics
                </h3>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Crop (పైరు)</label>
                    <input
                      type="text"
                      name="crop"
                      placeholder="e.g. Maize"
                      value={formData.crop}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("crop")}
                      onBlur={() => setFocusedInput(null)}
                      style={getInputStyle("crop")}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Variety Name</label>
                    <input
                      type="text"
                      name="variety"
                      placeholder="e.g. Hybrid-37"
                      value={formData.variety}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("variety")}
                      onBlur={() => setFocusedInput(null)}
                      style={getInputStyle("variety")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Sowing Calendar Date</label>
                  <input
                    type="date"
                    name="sowingDate"
                    value={formData.sowingDate}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("sowingDate")}
                    onBlur={() => setFocusedInput(null)}
                    style={getInputStyle("sowingDate")}
                  />
                </div>
              </div>
            </div>

            {/* CARD 3: ANCHOR TELEMETRY COORDINATES */}
            <div
              onMouseEnter={() => setHoveredCard("centerTelemetry")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                ...getCardStyle("centerTelemetry"),
                width: "100%",
                animationDelay: "0.15s",
              }}
            >
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: colors.primaryGreen,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  margin: "0 0 16px 0",
                  borderBottom: `1px solid ${colors.bgCanvas}`,
                  paddingBottom: "8px",
                }}
              >
                📍 Center Anchor Telemetry Point
              </h3>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 calc(50% - 8px)" }}>
                  <label style={labelStyle}>Center Latitude</label>
                  <input
                    type="number"
                    name="latitude"
                    placeholder="e.g. 14.6819"
                    value={formData.latitude}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("latitude")}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                      ...getInputStyle("latitude"),
                      fontFamily: "monospace",
                    }}
                    step="any"
                  />
                </div>
                <div style={{ flex: "1 1 calc(50% - 8px)" }}>
                  <label style={labelStyle}>Center Longitude</label>
                  <input
                    type="number"
                    name="longitude"
                    placeholder="e.g. 77.6006"
                    value={formData.longitude}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("longitude")}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                      ...getInputStyle("longitude"),
                      fontFamily: "monospace",
                    }}
                    step="any"
                  />
                </div>
              </div>
            </div>

            {/* CARD 4: FIELD BOUNDARY POLYGON GEOMATICS MATRIX */}
            <div
              onMouseEnter={() => setHoveredCard("polygonMatrix")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                ...getCardStyle("polygonMatrix"),
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                animationDelay: "0.2s",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: colors.primaryGreen,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: "0 0 4px 0",
                    borderBottom: `1px solid ${colors.bgCanvas}`,
                    paddingBottom: "8px",
                  }}
                >
                  📐 Boundary Polygon Matrix (Geo-Fence Corners)
                </h3>
                <p
                  style={{
                    margin: "6px 0 0 0",
                    fontSize: "11px",
                    color: colors.textMuted,
                    fontWeight: "500",
                  }}
                >
                  Map the four peripheral corner vectors of the cultivation
                  cluster area plot layout.
                </p>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {/* POINT 1 */}
                <div
                  style={{
                    flex: "1 1 calc(50% - 8px)",
                    minWidth: "280px",
                    padding: "16px",
                    backgroundColor: colors.bgCanvas,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: colors.amberGold,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    📍 Corner Point 1
                  </span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="number"
                      name="point1Lat"
                      placeholder="Latitude"
                      value={formData.point1Lat}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point1Lat")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point1Lat"),
                        backgroundColor:
                          focusedInput === "point1Lat" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                    <input
                      type="number"
                      name="point1Lon"
                      placeholder="Longitude"
                      value={formData.point1Lon}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point1Lon")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point1Lon"),
                        backgroundColor:
                          focusedInput === "point1Lon" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                  </div>
                </div>

                {/* POINT 2 */}
                <div
                  style={{
                    flex: "1 1 calc(50% - 8px)",
                    minWidth: "280px",
                    padding: "16px",
                    backgroundColor: colors.bgCanvas,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: colors.amberGold,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    📍 Corner Point 2
                  </span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="number"
                      name="point2Lat"
                      placeholder="Latitude"
                      value={formData.point2Lat}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point2Lat")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point2Lat"),
                        backgroundColor:
                          focusedInput === "point2Lat" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                    <input
                      type="number"
                      name="point2Lon"
                      placeholder="Longitude"
                      value={formData.point2Lon}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point2Lon")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point2Lon"),
                        backgroundColor:
                          focusedInput === "point2Lon" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                  </div>
                </div>

                {/* POINT 3 */}
                <div
                  style={{
                    flex: "1 1 calc(50% - 8px)",
                    minWidth: "280px",
                    padding: "16px",
                    backgroundColor: colors.bgCanvas,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: colors.amberGold,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    📍 Corner Point 3
                  </span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="number"
                      name="point3Lat"
                      placeholder="Latitude"
                      value={formData.point3Lat}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point3Lat")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point3Lat"),
                        backgroundColor:
                          focusedInput === "point3Lat" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                    <input
                      type="number"
                      name="point3Lon"
                      placeholder="Longitude"
                      value={formData.point3Lon}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point3Lon")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point3Lon"),
                        backgroundColor:
                          focusedInput === "point3Lon" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                  </div>
                </div>

                {/* POINT 4 */}
                <div
                  style={{
                    flex: "1 1 calc(50% - 8px)",
                    minWidth: "280px",
                    padding: "16px",
                    backgroundColor: colors.bgCanvas,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: "12px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: colors.amberGold,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    📍 Corner Point 4
                  </span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="number"
                      name="point4Lat"
                      placeholder="Latitude"
                      value={formData.point4Lat}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point4Lat")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point4Lat"),
                        backgroundColor:
                          focusedInput === "point4Lat" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                    <input
                      type="number"
                      name="point4Lon"
                      placeholder="Longitude"
                      value={formData.point4Lon}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("point4Lon")}
                      onBlur={() => setFocusedInput(null)}
                      style={{
                        ...getInputStyle("point4Lon"),
                        backgroundColor:
                          focusedInput === "point4Lon" ? "#FFFFFF" : "#FFFFFF",
                        fontFamily: "monospace",
                      }}
                      step="any"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECURITY SUBMISSION DISPATCH PANEL */}
          <div
            style={{
              marginTop: "32px",
              textAlign: "center",
              animation: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
              animationDelay: "0.25s",
            }}
          >
            <button
              onClick={handleSubmit}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                width: "100%",
                maxWidth: "260px",
                backgroundColor: btnHovered ? "#062311" : colors.primaryGreen,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: "700",
                padding: "14px 24px",
                cursor: "pointer",
                boxShadow: btnHovered
                  ? "0 6px 16px rgba(9,58,26,0.25)"
                  : "0 1px 3px rgba(0,0,0,0.1)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: btnHovered ? "translateY(-1px)" : "none",
              }}
            >
              💾 Save Profile Row
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
