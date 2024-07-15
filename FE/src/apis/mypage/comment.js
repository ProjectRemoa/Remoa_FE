import axiosInstance from "../axiosInterceptors";

export const getOneComment = async () => {
  const response = await axiosInstance.get(`user/comment-feedback?page=${1}`);
  const {
    data: {
      data: { contents },
    },
  } = response;
  return contents[0];
};

export const getComment = async (pageNum, sortOption) => {
  const response = await axiosInstance.get(
    `user/comment-feedback?page=${pageNum}&sort=${sortOption}`
  );
  const {
    data: {
      data: { contents, totalPages },
    },
  } = response;

  return { contents, totalPages };
};
