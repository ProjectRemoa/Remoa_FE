import axiosInstance from "../axiosInterceptors";

export const postFeedbackComment = async (referenceId, pageNumber, params) => {
  try {
    const response = await axiosInstance.post(
      `reference/feedback/${referenceId}/${pageNumber}`,
      params
    );
    return response.data;
  } catch (error) {
    console.error("Error postFeedbackComment:", error);
  }
};

export const likeFeedbackComment = async (referenceId, feedbackMemberId) => {
  try {
    const response = await axiosInstance.post(
      `reference/feedback/${referenceId}/${feedbackMemberId}/like`
    );
    return response.data;
  } catch (error) {
    console.error("Error likeFeedbackComment:", error);
  }
};

export const putFeedbackComment = async (referenceId, feedbackId, params) => {
  try {
    const response = await axiosInstance.put(
      `reference/feedback/${referenceId}/${feedbackId}`,
      params
    );
    return response.data;
  } catch (error) {
    console.error("Error putFeedbackComment:", error);
  }
};

export const deleteFeedbackComment = async (referenceId, feedbackId) => {
  try {
    const response = await axiosInstance.delete(
      `reference/feedback/${referenceId}/${feedbackId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleteFeedbackComment:", error);
  }
};
