import axios from "axios";
import TableComponent from "../../../components/common/TableComponent";
import styledComponent from "./MyPageFAQ.styles";
import { useState } from "react";
import { useEffect } from "react";
const { Wrapper } = styledComponent;

function MyPageFAQ() {
  const data1 = [
    {
      id: "1",
      title: "공지사항을 입력해주세요",
      author: "류호경",
      date: "2023-10-07",
      views: "100",
    },
    {
      id: "2",
      title: "Title 2",
      author: "Author 2",
      date: "2023-10-06",
      views: "200",
    },
    {
      id: "3",
      title: "Title 3",
      author: "Author 3",
      date: "2023-10-05",
      views: "300",
    },
    {
      id: "4",
      title: "Title 4",
      author: "Author 4",
      date: "2023-10-04",
      views: "400",
    },
    {
      id: "5",
      title: "Title 5",
      author: "Author 5",
      date: "2023-10-03",
      views: "500",
    },
  ];

  const data2 = [
    {
      id: "3",
      title: "Title 3",
      author: "Author 3",
      date: "2023-10-05",
      views: "300",
    },
    {
      id: "4",
      title: "Title 4",
      author: "Author 4",
      date: "2023-10-04",
      views: "400",
    },
  ];

  const [noticesData, setNoticesData] = useState([]);
  const [inquiriesData, setInquiriesData] = useState([]);

  useEffect(() => {
    getNotice();
    getInquiry();
  }, []);

  // 공지사항
  const getNotice = async () => {
    try {
      const res = await axios.get("/BE/notice?page=1");
      setNoticesData(res.data.data.notices);
      console.log(res.data.data.notices);
    } catch (err) {
      console.log(err);
    }
  };

  // 문의하기
  const getInquiry = async () => {
    try {
      const res = await axios.get("/BE/inquiry?page=1");
      setInquiriesData(res.data.data.inquiries);
      console.log(res.data.data.inquiries);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <TableComponent title="공지사항" data={data1} category={"notice"} />
      <TableComponent title="문의하기" data={data2} category={"inquiry"} />
    </Wrapper>
  );
}

export default MyPageFAQ;
