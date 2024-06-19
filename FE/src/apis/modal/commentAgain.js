import axiosInstance from "../axiosInterceptors";

export const postCommentAgain = async (referenceId, commentId, params) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/comment/${commentId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const putCommentAgain = async (commentId, replyId, params) => {
  try {
    const response = await axiosInstance.put(`reference/comment/${commentId}/reply/${replyId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const deleteCommentAgain = async (commentId, replyId) => {
  try {
    const response = await axiosInstance.delete(`reference/comment/${commentId}/reply/${replyId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};