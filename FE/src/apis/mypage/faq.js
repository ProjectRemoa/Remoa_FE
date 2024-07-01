import axios from "axios";
import axiosInstance from "../axiosInterceptors";

export const getNotices = async (noticePageNumber) => {
  const response = await axios.get(`/BE/notice?page=${noticePageNumber}`);
  const {
    data: {
      data: { notices, totalPages },
    },
  } = response;
  return { notices, totalPages };
};

export const getNoticesDetail = async (postId) => {
  const response = await axios.get(`/BE/notice/view?view=${postId}`);
  const {
    data: { data },
  } = response;
  return data;
};

export const getInquiries = async (inquiryPageNumber) => {
  const response = await axiosInstance.get(`inquiry?page=${inquiryPageNumber}`);
  const {
    data: {
      data: { inquiries, totalPages },
    },
  } = response;

  return { inquiries, totalPages };
};

export const getInquiriesDetail = async (postId) => {
  const response = await axiosInstance.get(`inquiry/view?view=${postId}`);
  const {
    data: { data },
  } = response;
  return data;
};
