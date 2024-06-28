import axiosInstance from "../axiosInterceptors";

export const postCommentReply = async (referenceId, commentId, params) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/comment/${commentId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error postCommentReply:', error);
  }
};

export const likeCommentReply = async (replyId) => {
  try {
    const response = await axiosInstance.post(`reference/comment_reply/${replyId}/like`);
    return response;
  } catch (error) {
    console.error('Error likeCommentReply:', error);
  }
};

export const putCommentReply = async (commentId, replyId, params) => {
  try {
    const response = await axiosInstance.put(`reference/comment/${commentId}/reply/${replyId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error putCommentReply:', error);
  }
};

export const deleteCommentReply = async (commentId, replyId) => {
  try {
    const response = await axiosInstance.delete(`reference/comment/${commentId}/reply/${replyId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteCommentReply:', error);
  }
};