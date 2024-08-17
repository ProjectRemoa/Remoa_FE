import axiosInstance from "../axiosInterceptors";

const API_SERVER = process.env.REACT_APP_API_SERVER;

export const getReferences = async (params) => {
  try {
    const response = await axiosInstance.get(`${API_SERVER}reference`, { params });
    return response;
  } catch (error) {
    console.error('Error getReferences:', error);
  }
};

