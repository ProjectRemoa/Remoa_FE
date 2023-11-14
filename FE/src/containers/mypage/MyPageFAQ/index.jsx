import axios from "axios";
import { useQuery } from "react-query";
import TableComponent from "../../../components/common/TableComponent";
import styledComponent from "./MyPageFAQ.styles";
const { Wrapper } = styledComponent;

function MyPageFAQ() {
  const { data: noticeData } = useQuery("noticeData", async () => {
    const { data } = await axios.get("/BE/notice?page=1");
    return data.data.notices;
  });

  const { data: inquiryData } = useQuery("inquryData", async () => {
    const { data } = await axios.get("/BE/inquiry?page=1");
    return data.data.inquiries;
  });

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
