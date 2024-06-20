import axiosInstance from "../axiosInterceptors";

export const postFeedbackCommentAgain = async (referenceId, feedbackId, params) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/feedback/${feedbackId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error postFeedbackCommentAgain:', error);
  }
};

export const putFeedbackCommentAgain = async (feedbackId, replyId, params) => {
  try {
    const response = await axiosInstance.put(`reference/feedback/${feedbackId}/reply/${replyId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error putFeedbackCommentAgain:', error);
  }
};

export const deleteFeedbackCommentAgain = async (feedbackId, replyId) => {
  try {
    const response = await axiosInstance.delete(`reference/feedback/${feedbackId}/reply/${replyId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteFeedbackCommentAgain:', error);
  }
};