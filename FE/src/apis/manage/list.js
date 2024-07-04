import axiosInstance from "../axiosInterceptors";

export const getWork = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    const {
      data: {
        data: {
          references,
          totalOfAllReferences,
          totalOfPageElements,
          totalPages,
        },
      },
    } = response;
    return {
      references,
      totalOfAllReferences,
      totalOfPageElements,
      totalPages,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
