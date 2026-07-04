import axios from "axios";

const API_URL = "http://localhost:5000/api/farmers";

export const getFarmers = async () => {
    
  const response = await axios.get(API_URL);
  return response.data;
};

export const getFarmerById = async (id) => {
  const response = await axios.get(
    `http://localhost:5000/api/farmers/${id}`
  );

  return response.data;
};

export const createFarmer = async (farmerData) => {
  const response = await axios.post(
    "http://localhost:5000/api/farmers",
    farmerData
  );

  return response.data;
};
export const updateFarmer = async (id, farmerData) => {

  const response = await axios.put(
    `http://localhost:5000/api/farmers/${id}`,
    farmerData
  );

  return response.data;

};