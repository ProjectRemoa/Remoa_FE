import styled from 'styled-components'
//import "./ManageShareContainer.module.css";

const ManageShareContainer = styled.div`
  margin-top: 141px;
`
const ManageShareBox = styled.div`
  width: 1206px;
  border: 1px solid #d0d0d0;
  background-color: #ffffff;
  border-radius: 30px;
`;

const ManageShareTable = styled.table`
  border-collapse: separate;
  border-spacing: 20px;
  margin: 0 auto;
  width: 832px; // 155 550

  tr {
    border-bottom: 1px solid #e7e7e7;
  }

  th {
    text-align: left;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 600;
    width: 150px;
  }

  input {
    float: left;
    width: 618px;
    height: 44px;
    font-size: 16px;
    color: black;
    border: 1px solid #e1e2e5;
    outline: none;
    background: #ffffff;
    border-radius: 10px;
    padding: 0 2px;

    ::placeholder {
      color: #a7a7a7;
      font-weight: 500;
      font-family: Pretendard-Regular;
      padding: 16px 14px;
      font-size: 16px;
    }
  }
`;

const InputBox = styled.input`
`;

const CategoryButtonBox = styled.div`
  display: flex;
  margin-bottom: 6px;

`;

const Category = styled.div`
  width: 198px;
  height: 44px;
  border: 1px solid ${(props) => (props.checked ? "#727272" : "#D0D0D0")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.checked ? "#FADA5E" : "white")};
  color: #464646;
  font-weight: ${(props) => (props.checked ? "600" : "500")};
  border-radius: 10px;
  font-size: 16px;
  margin-right: 13px;
  :last-child {
    margin-right: 0px;
  }
`;

const FileWrapper = styled.div`
  width: 618px;
  height: 158px;
  border: 1px solid #b0b0b0;
  background: #ffffff;
  border-radius: 10px;
  text-align: left;
  color: #B0B0B0;
  cursor: pointer;
  overflow: auto;
`;

const FileContainer = styled.div`
  width: 470px;
  padding: 10px 0px 0px 8px;
 line-height: 24px;
 font-size: 16px;
 font-weight: 500;
`;

const Button = styled.button`
  background: ${(props) => (props.state ? "#FADA5E" : "#C8D1E0")};
  color: ${(props) => (props.state ? "#010101" : "white")};
  border-radius: 80px;
  border: none;
  font-size: 18px;
  text-align: center;
  width: 190px;
  height: 56px;
  cursor: ${(props) => (props.state ? "pointer" : "default")};
  font-weight: 600;
  box-shadow: none;
  margin-top: 60px;
  white-space: nowrap;
`

const ThumbailWrapper = styled.div`
  height: 44px;
  border: 1px solid #e1e2e5;
  border-radius: 10px;
  justify-content: center;
  /*
  display: "flex",
  alignItems: "center",
  */
  cursor: pointer;
`;

const ThumbnailText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #b0b0b0;
  float: left;
`;

const S = {
  ManageShareContainer,
  ManageShareBox,
  Button,
  ManageShareTable,
  InputBox,
  Category,
  CategoryButtonBox,
  FileWrapper,
  FileContainer,
  ThumbailWrapper,
  ThumbnailText,
};

export default S;