// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import { getReportsByFarmer } from "../services/reportApi";

// export default function FarmerReportsPage() {

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   const fetchReports = async () => {

//     try {

//       const result = await getReportsByFarmer(id);

//       setReports(result.data);

//     } catch (error) {

//       console.error(error);

//     }

//   };

//   return (
//     <MainLayout>

//       <h1>Farmer Reports</h1>

//       <table border="1" cellPadding="10">

//         <thead>
//           <tr>
//             <th>Status</th>
//             <th>Date</th>
//             <th>View</th>
//           </tr>
//         </thead>

//         <tbody>

//           {reports.map((report) => (

//             <tr key={report._id}>

//               <td>{report.status}</td>

//               <td>
//                 {new Date(report.createdAt).toLocaleDateString()}
//               </td>

//               <td>
//                 <button
//                   onClick={() =>
//                     navigate(`/reports/${report._id}`)
//                   }
//                 >
//                   View
//                 </button>
//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </MainLayout>
//   );
// }

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getReportsByFarmer } from "../services/reportApi";

export default function FarmerReportsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getReportsByFarmer(id);

        // Safely extract data array whether it's an Axios response or direct payload
        setReports(result?.data ? result.data : result || []);
      } catch (err) {
        console.error("Error fetching farmer reports:", err);
        setError("Failed to load reports. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchReports();
    }
  }, [id]); // Correctly tracks the ID dependency to satisfy React rules

  // Safe date formatting utility to prevent unexpected rendering crashes
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
  };

  return (
    <MainLayout>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate(`/farmers/${id}`)}>
          ← Back to Farmer Details
        </button>
      </div>

      <h1>Farmer Reports</h1>

      {/* 1. Loading State */}
      {loading && <p>Loading reports...</p>}

      {/* 2. Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 3. Empty State */}
      {!loading && !error && reports.length === 0 && (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            border: "1px dashed #ccc",
          }}
        >
          <p>No reports have been generated for this farmer yet.</p>
        </div>
      )}

      {/* 4. Data State */}
      {!loading && !error && reports.length > 0 && (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report._id}>
                <td>
                  <span style={{ fontWeight: "bold" }}>
                    {report.status || "Unknown"}
                  </span>
                </td>
                <td>{formatDate(report.createdAt)}</td>
                <td>
                  <button onClick={() => navigate(`/reports/${report._id}`)}>
                    View Detailed Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </MainLayout>
  );
}
