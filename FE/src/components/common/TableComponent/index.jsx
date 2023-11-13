import { useNavigate } from "react-router-dom";
import styledComponent from "./TableComponent.styles";
const {
  Title,
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

  const handle = (category) => {
    navigate(`/mypage/faq/${category}/new`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>{title}</Title>
        <button
          style={{
            width: "85px",
            height: "40px",
            backgroundColor: "transparent",
            border: "1px solid #cecece",
            borderRadius: "12px",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "16px",
            padding: 0,
          }}
          onClick={() => handle(category)}
        >
          글쓰기
        </button>
      </div>
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
          {data.map((item, index) => (
            <Tbody key={index}>
              <Trow
                onClick={() => navigate(`/mypage/faq/${category}/${item.id}`)}
              >
                <TbodyValue>{item.id}</TbodyValue>
                <TbodyValue>{item.title}</TbodyValue>
                <TbodyValue>{item.author}</TbodyValue>
                <TbodyValue>{item.date}</TbodyValue>
                <TbodyValue>{item.views}</TbodyValue>
              </Trow>
            </Tbody>
          ))}
          {/* {[item.id, item.title, item.author, item.date, item.views].map(
                (value, i) => (
                  <TbodyValue key={`${index}-${i}`}>{value}</TbodyValue>
                )
              )} */}
        </Table>
      </TableWrapper>
    </div>
  );
}

export default TableComponent;
