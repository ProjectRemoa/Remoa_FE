import axios from "axios";

export const getOneComment = async () => {
  const response = await axios.get(`/BE/user/comment?page=${1}`);
  const {
    data: {
      data: { contents },
    },
  } = response;
  return contents[0];
};

export const getComment = async (pageNum) => {
  const response = await axios.get(`/BE/user/comment?page=${pageNum}`);
  const {
    data: {
      data: { contents, totalPages },
    },
  } = response;

  return { contents, totalPages };
};
