import axiosInstance from "../axiosInterceptors";

export const postFeedbackComment = async (referenceId, pageNumber, params) => {
  try {
    const response = await axiosInstance.post(`reference/feedback/${referenceId}/${pageNumber}`, params);
    return response.data;
  } catch (error) {
    console.error('Error postFeedbackComment:', error);
  }
};

export const likeFeedbackComment = async (feedbackId) => {
  try {
    const response = await axiosInstance.post(`reference/feedback/${feedbackId}/like`);
    return response.data;
  } catch (error) {
    console.error('Error likeFeedbackComment:', error);
  }
};

export const putFeedbackComment = async (feedbackId, params) => {
  try {
    const response = await axiosInstance.put(`reference/feedback/${feedbackId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error putFeedbackComment:', error);
  }
};

export const deleteFeedbackComment = async (feedbackId) => {
  try {
    const response = await axiosInstance.delete(`reference/feedback/${feedbackId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteFeedbackComment:', error);
  }
};