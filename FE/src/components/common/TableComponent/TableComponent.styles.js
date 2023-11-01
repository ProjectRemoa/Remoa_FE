import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
`;
const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;
const Thead = styled.thead`
  text-align: center;
  font-weight: bold;
`;
const Tbody = styled.tbody`
  text-align: center;
`;
const TheadValue = styled.td`
  border-top: 3px solid #000000;
  border-bottom: 1px solid #b0b0b0;
  height: 50px;
`;
const TbodyValue = styled.td`
  border-bottom: 1px solid #b0b0b0;
  height: 50px;
`;
const Trow = styled.tr``;

const F = styled.div`
  padding: 0 0 30px 0;
`;
const QA = styled.div`
  padding: 0 0 30px 0;
`;

const styledComponent = {
  Title,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  TheadValue,
  TbodyValue,
  Trow,
};

export default styledComponent;
