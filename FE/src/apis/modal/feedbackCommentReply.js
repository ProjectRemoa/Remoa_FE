import axiosInstance from "../axiosInterceptors";

export const postFeedbackCommentReply = async (referenceId, feedbackId, params) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/feedback/${feedbackId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error postFeedbackCommentReply:', error);
  }
};

export const putFeedbackCommentReply = async (feedbackId, replyId, params) => {
  try {
    const response = await axiosInstance.put(`reference/feedback/${feedbackId}/reply/${replyId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error putFeedbackCommentReply:', error);
  }
};

export const deleteFeedbackCommentReply = async (feedbackId, replyId) => {
  try {
    const response = await axiosInstance.delete(`reference/feedback/${feedbackId}/reply/${replyId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteFeedbackCommentReply:', error);
  }
};