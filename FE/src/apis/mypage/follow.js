import axiosInstance from "../axiosInterceptors";

export const getFollow = async (type) => {
  const response = await axiosInstance.get(`${type}`);
  const {
    data: {
      data,
      data: { resMypageList },
    },
  } = response;
  return { data, resMypageList };
};

export const postFollow = async (memberId) => {
  return await axiosInstance.post(`follow/${memberId}`);
};
