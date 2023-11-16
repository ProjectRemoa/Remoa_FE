import axios from "axios";

export const getNotices = async () => {
  const { data } = await axios.get(`/BE/notice?page=${1}`);
  return data.data.notices;
};

export const getInquiries = async () => {
  const { data } = await axios.get(`/BE/inquiry?page=${1}`);
  return data.data.inquiries;
};
