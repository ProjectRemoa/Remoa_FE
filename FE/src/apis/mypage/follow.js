import axios from "axios";

const token = sessionStorage.getItem("token");

export const getFollow = async (type) => {
  const response = await axios.get(`/BE/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const {
    data: {
      data,
      data: { resMypageList },
    },
  } = response;
  return { data, resMypageList };
};

export const postFollow = async (memberId) => {
  return await axios.post(`/BE/follow/${memberId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
