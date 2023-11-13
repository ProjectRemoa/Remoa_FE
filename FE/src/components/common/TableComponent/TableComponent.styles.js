import styled from "styled-components";

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;
const Thead = styled.thead`
  font-size: 16px;
  font-weight: 600;
`;
const TheadValue = styled.td`
  height: 56px;
  border-top: 3px solid #1e1e1e;
  border-bottom: 1px solid #b0b0b0;
`;
const Tbody = styled.tbody`
  text-align: center;
  cursor: pointer;
`;
const TbodyValue = styled.td`
  border-bottom: 1px solid #b0b0b0;
  height: 50px;
  &:nth-child(2) {
    text-align: left;
    padding-left: 56px;
  }
`;
const Trow = styled.tr``;

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
