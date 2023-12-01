import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../../components/common/TableComponent";
import styledComponent from "./MyPageFAQ.styles";
const { Wrapper, MyPaginate } = styledComponent;

function MyPageFAQ() {
  const [noticePage, setNoticePage] = useState(1);
  const [noticeData, setNoticeData] = useState([]);
  const [noticeTotalPage, setNoticeTotalPage] = useState();

  const [inquiryPage, setInquiryPage] = useState(1);
  const [inquiryData, setInquiryData] = useState([]);
  const [inquiryTotalPage, setInquiryTotalPage] = useState();

  useEffect(() => {
    axios.get(`/BE/notice?page=${noticePage}`).then((res) => {
      setNoticeData(res.data.data.notices);
      setNoticeTotalPage(res.data.data.totalPages);
    });

    axios.get(`/BE/inquiry?page=${inquiryPage}`).then((res) => {
      setInquiryData(res.data.data.inquiries);
      setInquiryTotalPage(res.data.data.totalPages);
    });
  }, [noticePage, inquiryPage]);

  return (
    <Wrapper>
      <TableComponent title="공지사항" data={noticeData} category={"notice"} />
      <MyPaginate
        pageCount={noticeTotalPage}
        previousLabel="<"
        nextLabel=">"
        onPageChange={(e) => setNoticePage(e.selected + 1)}
      />

      <TableComponent
        title="문의사항"
        data={inquiryData}
        category={"inquiry"}
      />
      <MyPaginate
        pageCount={inquiryTotalPage}
        previousLabel="<"
        nextLabel=">"
        onPageChange={(e) => setInquiryPage(e.selected + 1)}
      />
    </Wrapper>
  );
}

export default MyPageFAQ;
