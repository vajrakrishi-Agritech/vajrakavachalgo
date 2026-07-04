import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import FarmersPage from "./pages/FarmersPage";
import AddFarmerPage from "./pages/AddFarmerPage";
import FarmerDetailsPage from "./pages/FarmerDetailsPage";
import ReportsPage from "./pages/ReportsPage";
import ReportDetailsPage from "./pages/ReportDetailsPage";
import SettingsPage from "./pages/SettingsPage";
import FarmerReportsPage from "./pages/FarmerReportsPage";
import EditFarmerPage from "./pages/EditFarmerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/farmers" element={<FarmersPage />} />
        <Route path="/farmers/add" element={<AddFarmerPage />} />
        <Route path="/farmers/:id" element={<FarmerDetailsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/:id" element={<ReportDetailsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/farmers/:id/reports" element={<FarmerReportsPage />} />
        <Route path="/farmers/:id/edit" element={<EditFarmerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
