import styled from "styled-components";

const FullLayer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 300;
  transform: translate(-50%, -50%);
`;
const CommonAlert = styled.div`
  text-align: left;
  background-color: #ffffff;
  border: 2px solid #cdcdcd;
  color: black;
  border-radius: 10px;
  padding: 40px;
  margin: auto;
  box-sizing: border-box;
  font-size: 16px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  color: #464646;
  font-size: 25px;
  flex: 1;
`;
const DetailContent = styled.div`
  color: #464646;
  font-size: 18px;
  margin-bottom: 15px;
`;
const SearchWrapper = styled.div`
  height: 43px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;
`;
const SearchBtnWrapper = styled.div`
  background-color: #fada5e;
  padding: 0px 20px 8px 20px;
  border-radius: 25px 0px 0px 25px;
`;
const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  box-shadow: none;
`;
const InputWrapper = styled.div`
  border: 2px solid #cdcdcd;
  border-radius: 0px 25px 25px 0px;
  height: 43px;
  flex: 1;
`;
const Input = styled.input`
  width: 90%;
  height: 90%;
  text-align: center;
  font-size: 20px;
  border: none;
  line-height: 43px;
  outline: none;
`;
const UniversityTable = styled.table``;

const SelectBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;
const SelectBtn = styled.button`
  width: 235px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  color: #010101;
  margin: auto;
`;
const TableWrapper = styled.div`
  height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  text-align: left;
`;
const Thead = styled.thead`
  height: 56px;
  background-color: #e1e1e1;
  font-weight: bold;
`;
const TheadValue = styled.th`
  text-align: left;
  background-color: #e1e1e1;
  padding-left: 10%;
`;
const Tbody = styled.tbody`
  background-color: #ffffff;
`;
const TbodyValue = styled.td`
  height: 56px;
  padding-left: 10%;
`;
const Trow = styled.tr`
  height: 56px;
  background-color: #ffffff;
`;

const styledComponent = {
  FullLayer,
  CommonAlert,
  ContentWrapper,
  Title,
  DetailContent,
  SearchWrapper,
  SearchBtnWrapper,
  SearchBtn,
  InputWrapper,
  Input,
  UniversityTable,
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
