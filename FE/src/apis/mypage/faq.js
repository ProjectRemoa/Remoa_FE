import axios from "axios";

export const getNotices = async (noticePageNumber) => {
  const response = await axios.get(`/BE/notice?page=${noticePageNumber}`);
  const {
    data: {
      data: { notices, totalPages },
    },
  } = response;
  return { notices, totalPages };
};

export const getInquiries = async (inquiryPageNumber) => {
  const response = await axios.get(`/BE/inquiry?page=${inquiryPageNumber}`);
  const {
    data: {
      data: { inquiries, totalPages },
    },
  } = response;
  return { inquiries, totalPages };
};
