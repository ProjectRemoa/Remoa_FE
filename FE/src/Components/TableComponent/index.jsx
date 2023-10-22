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

function TableComponent({ title, data }) {
  return (
    <div>
      <Title>{title}</Title>
      <TableWrapper>
        <Table>
          <Thead>
            <Trow>
              <TheadValue>번호</TheadValue>
              <TheadValue>제목</TheadValue>
              <TheadValue>작성자</TheadValue>
              <TheadValue>작성일</TheadValue>
              <TheadValue>조회수</TheadValue>
            </Trow>
          </Thead>
          {data.map((item, index) => (
            <Tbody key={index}>
              {[item.id, item.title, item.author, item.date, item.views].map(
                (value, i) => (
                  <TbodyValue key={`${index}-${i}`}>{value}</TbodyValue>
                )
              )}
            </Tbody>
          ))}
        </Table>
      </TableWrapper>
    </div>
  );
}

export default TableComponent;
