import axiosInstance from "../axiosInterceptors";

export const getScrap = async (pageNumber, categoryName, sortOption) => {
  try {
    const response = await axiosInstance.get(
      `user/scrap?page=${pageNumber}&category=${categoryName}&sort=${sortOption}`
    );
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
