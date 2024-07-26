import axiosInstance from "../axiosInterceptors";

export const postComment = async (referenceId, params) => {
  try {
    const response = await axiosInstance.post(`reference/${referenceId}/comment`, params);
    return response.data;
  } catch (error) {
    console.error('Error postComment:', error);
  }
};

export const likeComment = async (commentId) => {
  try {
    const response = await axiosInstance.post(`reference/comment/${commentId}/like`);
    return response.data;
  } catch (error) {
    console.error('Error likeComment:', error);
  }
};

export const putComment = async (commentId, params) => {
  try {
    const response = await axiosInstance.put(`reference/comment/${commentId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error putComment:', error);
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await axiosInstance.delete(`reference/comment/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleteComment:', error);
  }
};