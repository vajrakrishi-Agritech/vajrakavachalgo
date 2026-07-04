import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getFarmerById, updateFarmer } from "../services/farmerApi";

export default function EditFarmerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    village: "",
    crop: "",
    variety: "",
    sowingDate: "",
    latitude: "",
    longitude: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null); // Added to handle fetch failures gracefully

  // 1. LIFECYCLE MONITOR BLOCK (Function moved inside to solve React hook linting cleanly)
  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getFarmerById(id);
        
        const farmer = result?.data ? result.data : result;

        if (farmer) {
          let parsedDateString = "";
          if (farmer.sowingDate) {
            const incomingDate = new Date(farmer.sowingDate);
            if (!isNaN(incomingDate.getTime())) {
              parsedDateString = incomingDate.toISOString().split("T")[0];
            }
          }

          setFormData({
            name: farmer.name || "",
            mobile: farmer.mobile || "",
            village: farmer.village || "",
            crop: farmer.crop || "",
            variety: farmer.variety || "",
            sowingDate: parsedDateString,
            latitude: farmer.latitude || "",
            longitude: farmer.longitude || "",
          });
        } else {
          setError("No farmer profile matched this record identifier.");
        }
      } catch (err) {
        console.error("🔴 Vajrakavach Fetch Pipeline Exception:", err);
        setError("Failed to synchronize with node repository. Verify connectivity.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFarmer();
    }
  }, [id]); // Correctly tracked without creating evaluation dependency loops

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      await updateFarmer(id, formData);
      alert("Farmer profile data synchronized successfully!");
      navigate("/farmers");
    } catch (err) {
      console.error("Update payload dispatch error:", err);
      alert("Update operation failed. Confirm backend connection parameters.");
    } finally {
      setUpdating(false);
    }
  };

  // Tailwind uniform styling tokens
  const inputClasses = "w-full text-xs px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0a361b] focus:bg-white transition-all font-medium text-gray-800 placeholder-gray-400";
  const labelClasses = "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5";

  // Loading UI View State
  if (loading) {
    return (
      <MainLayout>
        <div className="text-center py-12 text-sm font-semibold text-gray-400 animate-pulse">
          🔄 Syncing database references with node repository...
        </div>
      </MainLayout>
    );
  }

  // Error UI View State (Prevents editing empty forms on network failure)
  if (error) {
    return (
      <MainLayout>
        <div className="max-w-md mx-auto text-center py-12 space-y-4">
          <div className="text-xl">⚠️</div>
          <p className="text-sm font-medium text-red-500">{error}</p>
          <button
            onClick={() => navigate("/farmers")}
            className="text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-all"
          >
            Return to Directory
          </button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8 py-4 font-sans">
        
        {/* HEADER CONTROLS ACTIONS PANEL */}
        <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-[#0a361b] tracking-tight uppercase">
              Modify Field Directory Row
            </h1>
            <p className="text-xs text-gray-400 font-medium mt-0.5">
              Editing Database Reference System UID: <span className="font-mono text-amber-600 font-bold">{id}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/farmers")}
            className="w-fit text-xs font-bold text-gray-500 hover:text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-xl transition-all cursor-pointer"
          >
            ← Cancel and Back
          </button>
        </div>

        {/* CORE GRID FORM COMPONENT CONTAINER */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* COLUMN CARD 1: IDENTITY DETAILS */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold text-[#0a361b] uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                <span>👤</span> Core Personal Identity Identifiers
              </h3>

              <div>
                <label className={labelClasses}>Farmer Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>Mobile Contact String</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="e.g. +91 XXXXX XXXXX"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Target Village Region</label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  placeholder="Enter village geographic sector"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* COLUMN CARD 2: AGRICULTURAL METRICS */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold text-[#0a361b] uppercase tracking-wider border-b border-gray-50 pb-2 flex items-center gap-2">
                <span>🌾</span> Cultivation Crop Coordinates
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Crop (పైరు)</label>
                  <input
                    type="text"
                    name="crop"
                    value={formData.crop}
                    onChange={handleChange}
                    placeholder="e.g. Maize"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className={labelClasses}>Variety Strain</label>
                  <input
                    type="text"
                    name="variety"
                    value={formData.variety}
                    onChange={handleChange}
                    placeholder="e.g. PBW-343"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Sowing Calendar Metric</label>
                <input
                  type="date"
                  name="sowingDate"
                  value={formData.sowingDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className={labelClasses}>Center Latitude</label>
                  <input
                    type="number"
                    step="any"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="e.g. 14.6819"
                    className={`${inputClasses} font-mono`}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Center Longitude</label>
                  <input
                    type="number"
                    step="any"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="e.g. 77.6006"
                    className={`${inputClasses} font-mono`}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* MASTER ACTIONS DISPATCH CONTROLLER TRIGGER */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={updating}
              className={`w-full md:w-64 bg-[#0a361b] hover:bg-[#062311] text-white text-xs font-bold py-4 rounded-xl cursor-pointer shadow-md transition-all tracking-wider uppercase border border-emerald-950 ${
                updating ? "opacity-50 cursor-not-allowed animate-pulse" : ""
              }`}
            >
              {updating ? "Syncing Database Row..." : "💾 Save Operational Changes"}
            </button>
          </div>
        </form>

      </div>
    </MainLayout>
  );
}