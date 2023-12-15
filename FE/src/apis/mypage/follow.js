import axios from "axios";

export const getFollow = async (type) => {
  const response = await axios.get(`/BE/${type}`);
  const {
    data: {
      data,
      data: { resMypageList },
    },
  } = response;
  return { data, resMypageList };
};

export const postFollow = async (memberId) => {
  return await axios.post(`/BE/follow/${memberId}`);
};
