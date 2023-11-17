import { useQuery } from "react-query";
import { getNotices, getInquiries } from "../../../apis/mypage/faq";
import TableComponent from "../../../components/common/TableComponent";
import styledComponent from "./MyPageFAQ.styles";
const { Wrapper } = styledComponent;

function MyPageFAQ() {
  const { data: noticeData } = useQuery("noticeData", getNotices);
  const { data: inquiryData } = useQuery("inquryData", getInquiries);

  return (
    <Wrapper>
      <TableComponent title="공지사항" data={noticeData} category={"notice"} />
      <TableComponent
        title="문의하기"
        data={inquiryData}
        category={"inquiry"}
      />
    </Wrapper>
  );
}

export default MyPageFAQ;
