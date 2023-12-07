import axios from "axios";

export const getComment = async () => {
  const response = await axios.get(`/BE/user/comment?page=${1}`);
  const {
    data: {
      data: { contents },
    },
  } = response;
  return contents[0];
};
