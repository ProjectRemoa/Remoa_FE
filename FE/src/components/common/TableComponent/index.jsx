import { useNavigate } from "react-router-dom";
import styledComponent from "./TableComponent.styles";
const {
  Wrapper,
  Header,
  Title,
  WriteButton,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  TheadValue,
  TbodyValue,
  Trow,
} = styledComponent;

function TableComponent({ title, data, category }) {
  const navigate = useNavigate();

  const handleWriteButton = (category) => {
    navigate(`/mypage/faq/${category}/new`);
  };

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <WriteButton onClick={() => handleWriteButton(category)}>
          글쓰기
        </WriteButton>
      </Header>
      <TableWrapper>
        <Table>
          <Thead>
            <Trow>
              <TheadValue>번호</TheadValue>
              <TheadValue width="70%">제목</TheadValue>
              <TheadValue>작성자</TheadValue>
              <TheadValue>작성일</TheadValue>
              <TheadValue>조회수</TheadValue>
            </Trow>
          </Thead>
          {data?.map((item, index) => (
            <Tbody key={index}>
              <Trow
                onClick={() =>
                  navigate(`/mypage/faq/${category}/${item.noticeId}`)
                }
              >
                <TbodyValue>{item.noticeId}</TbodyValue>
                <TbodyValue>{item.title}</TbodyValue>
                <TbodyValue>{item.author}</TbodyValue>
                <TbodyValue>{item.postingTime}</TbodyValue>
                <TbodyValue>{item.view}</TbodyValue>
              </Trow>
            </Tbody>
          ))}
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}

export default TableComponent;
