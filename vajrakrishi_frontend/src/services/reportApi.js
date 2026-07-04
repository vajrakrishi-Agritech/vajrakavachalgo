import axios from "axios";

const REPORT_URL = "http://localhost:5000/api/reports";

export const generateReport = async (farmerId) => {
  const response = await axios.post(
    `${REPORT_URL}/generate/${farmerId}`
  );

  return response.data;
};

export const getReports = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/reports"
  );

  return response.data;
};
export const getReportById = async (id) => {

  const response = await axios.get(
    `http://localhost:5000/api/reports/${id}`
  );

  return response.data;

};

export const getReportsByFarmer = async (farmerId) => {

  const response = await axios.get(
    `http://localhost:5000/api/reports/farmer/${farmerId}`
  );

  return response.data;

};