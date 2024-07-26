import axiosInstance from "../axiosInterceptors";

export const postFeedbackCommentReply = async (referenceId, feedbackMemberLogId, params) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/feedback/${feedbackMemberLogId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error postFeedbackCommentReply:', error);
  }
};

export const putFeedbackCommentReply = async (feedbackMemberLogId, replyId, params) => {
  try {
    const response = await axiosInstance.put(`reference/feedback/${feedbackMemberLogId}/reply/${replyId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error putFeedbackCommentReply:', error);
  }
};

export const deleteFeedbackCommentReply = async (feedbackMemberLogId, replyId) => {
  try {
    const response = await axiosInstance.delete(`reference/feedback/${feedbackMemberLogId}/reply/${replyId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteFeedbackCommentReply:', error);
  }
};