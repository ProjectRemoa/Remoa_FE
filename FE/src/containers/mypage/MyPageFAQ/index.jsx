import TableComponent from "../../../components/TableComponent";
import styledComponent from "./MyPageFAQ.styles";
const { Wrapper } = styledComponent;

function MyPageFAQ() {
  const data1 = [
    {
      id: "1",
      title: "Title 1",
      author: "Author 1",
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

  return (
    <Wrapper>
      <TableComponent title="공지사항" data={data1} />
      <TableComponent title="문의하기" data={data2} />
    </Wrapper>
  );
}

export default MyPageFAQ;
