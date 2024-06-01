import axios from "axios";

const token = sessionStorage.getItem("token");

export const getScrap = async (pageNumber) => {
  const response = await axios.get(`/BE/user/scrap?page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const {
    data: {
      data: { posts, totalPages },
    },
  } = response;

  return { posts, totalPages };
};
