import axiosInstance from "../axiosInterceptors";

export const getScrap = async (pageNumber) => {
  try {
    const response = await axiosInstance.get(`user/scrap?page=${pageNumber}`);
    const {
      data: {
        data: { posts, totalPages },
      },
    } = response;

    return { posts, totalPages };
  } catch (err) {
    console.log(err);
  }
};
