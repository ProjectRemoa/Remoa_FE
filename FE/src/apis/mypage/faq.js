import axios from "axios";

export const getNotices = async (noticePageNumber) => {
  const response = await axios.get(
    `https://remoaserver.store/notice?page=${noticePageNumber}`
  );
  const {
    data: {
      data: { notices, totalPages },
    },
  } = response;
  return { notices, totalPages };
};

export const getNoticesDetail = async (postId) => {
  const response = await axios.get(
    `https://remoaserver.store/notice/view?view=${postId}`
  );
  const {
    data: { data },
  } = response;
  return data;
};

export const getInquiries = async (inquiryPageNumber) => {
  const response = await axios.get(
    `https://remoaserver.store/inquiry?page=${inquiryPageNumber}`
  );
  const {
    data: {
      data: { inquiries, totalPages },
    },
  } = response;
  return { inquiries, totalPages };
};

export const getInquiriesDetail = async (postId) => {
  const response = await axios.get(
    `https://remoaserver.store/inquiry/view?view=${postId}`
  );
  const {
    data: { data },
  } = response;
  return data;
};
