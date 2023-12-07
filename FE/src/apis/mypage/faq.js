import axios from "axios";

export const getNotices = async () => {
  const response = await axios.get(`/BE/notice?page=${1}`);
  const {
    data: {
      data: { notices },
    },
  } = response;
  return notices;
};

export const getInquiries = async () => {
  const response = await axios.get(`/BE/inquiry?page=${1}`);
  const {
    data: {
      data: { inquiries },
    },
  } = response;
  return inquiries;
};
