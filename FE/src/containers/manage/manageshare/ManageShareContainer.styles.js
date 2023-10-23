import styled from 'styled-components'
//import "./ManageShareContainer.module.css";

const ManageShareContainer = styled.div`
  margin-top: 141px;
`
const ManageShareBox = styled.div`
  width: 1240px;
  border: 1px solid #d0d0d0;
  border-radius: 30px;
`;

const ManageShareTable = styled.table`
  border-collapse: separate;
  border-spacing: 20px;
  margin: 0 auto;
  width: 705px; // 155 550

  th {
    text-align: right;
    white-space: nowrap;
    font-size: 20px;
  }

  input {
    font-family: NotoSansKR-400;
    float: left;
    width: 547px;
    height: 43px;
    font-size: 15px;
    color: black;
    border: 1px solid #b0b0b0;
    outline: none;
    background: #ffffff;
    text-align: center;
    border-radius: 10px;
    padding: 0 2px;
    ::placeholder {
      font-size: 15px;
      color: #b0b0b0;
    }
  }
`;

const InputBox = styled.input`
`;

const CategoryButtonBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const CategoryButtonBoxBottom = styled.div`
  display: flex;
  width: 365px;
  justify-content: space-between;
`;

const Category = styled.div`
  width: 177px;
  height: 43px;
  border: 1px solid #b0b0b0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.checked ? "#FADA5E" : "white")};
  color: ${(props) => (props.checked ? "white" : "#B0B0B0")};
  font-family: ${(props) =>
    props.checked ? "NotoSansKR-700" : "NotoSansKR-400"};
  border-radius: 10px;
  font-size: 15px;
  box-shadow: ${(props)=>(props.checked ? "none" : "0px 4px 4px rgba(0,0,0,0.25)")};
`;

const FileWrapper = styled.div`
  width: 547px;
  height: 193px;
  font-size: 15px;
  border: 1px solid #b0b0b0;
  background: #ffffff;
  border-radius: 10px;
  text-align: left;
  color: #B0B0B0;
  cursor: pointer;
  overflow: auto;
`;

const FileContainer = styled.div`
  padding: 8px;
 line-height: 22px;
`;

const Button = styled.button`
  width: 906px;
  height: 68px;
  background: ${(props) => (props.state ? "#FADA5E" : "#C8D1E0")};
  color: ${(props) => (props.state ? "#010101" : "white")};
  border-radius: 30px;
  border: #fff48c;
  font-family: "NotoSansKR-700";
  font-size: 20px;
  text-align: center;
  cursor: ${(props) => (props.state ? "pointer" : "default")};
  box-shadow: none;
  margin-top: 17px;
`

const S = {
  ManageShareContainer,
  ManageShareBox,
  Button,
  ManageShareTable,
  InputBox,
  Category,
  CategoryButtonBoxTop,
  CategoryButtonBoxBottom,
  FileWrapper,
  FileContainer,
};

export default S;