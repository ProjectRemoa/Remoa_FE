import styled from "styled-components";

const FullLayer = styled.div`
  width: 620px;
  height: 582px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 10px;
  border: 1px solid #a7a7a7;
  box-sizing: border-box;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
`;
const DetailContent = styled.div`
  color: #464646;
  font-size: 14px;
  margin-top: 10px;
`;
const SelectBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 26px;
`;
const SelectBtn = styled.button`
  width: 120px;
  height: 41px;
  background-color: ${(props) => (props.clicked ? "#fada5e" : "#f0f0f0")};
  border: none;
  border-radius: 12px;
  font-family: Pretendard-Medium;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.clicked ? "#1e1e1e" : "#727272")};
  padding: 0;
`;
const TableWrapper = styled.div`
  width: 562px;
  height: 290px;
  margin-top: 21px;
  border: 1px solid #e1e2e5;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Trow = styled.tr`
  border: ${(props) => (props.clicked ? "1px solid #464646" : "none")};
  background-color: ${(props) => (props.clicked ? "#fcecaa" : "")};
`;
const Thead = styled.thead`
  height: 37px;
  background-color: #e1e1e1;
  font-family: Pretendard-SemiBold;
  font-size: 12px;
`;
const TheadValue = styled.th`
  width: 30%;
  &:nth-child(2) {
    width: 70%;
  }
  text-align: center;
`;
const Tbody = styled.tbody`
  background-color: #ffffff;
  font-family: Pretendard-Medium;
  font-size: 14px;
`;
const TbodyValue = styled.td`
  box-sizing: border-box;
  height: 41px;
  &:first-child {
    text-align: center;
  }
  padding: 0;
`;

const styledComponent = {
  FullLayer,
  ContentWrapper,
  Title,
  DetailContent,
  SelectBtnWrapper,
  SelectBtn,
  TableWrapper,
  Table,
  Thead,
  TheadValue,
  Tbody,
  TbodyValue,
  Trow,
};

export default styledComponent;
