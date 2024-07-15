import axiosInstance from "../axiosInterceptors";

export const getReference = async (referenceId) => {
  try {
    const response = await axiosInstance.get(`reference/${referenceId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const deleteReference = async (referenceId) => {
  try {
    const response = await axiosInstance.delete(`user/reference/${referenceId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const likeReference = async (referenceId) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/like`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const scrapReference = async (referenceId) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/scrap`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}