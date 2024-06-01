import axios from "axios";

const token = sessionStorage.getItem("token");

export const getOneComment = async () => {
  const response = await axios.get(`/BE/user/comment?page=${1}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const {
    data: {
      data: { contents },
    },
  } = response;
  return contents[0];
};

export const getComment = async (pageNum) => {
  const response = await axios.get(`/BE/user/comment?page=${pageNum}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const {
    data: {
      data: { contents, totalPages },
    },
  } = response;

  return { contents, totalPages };
};
