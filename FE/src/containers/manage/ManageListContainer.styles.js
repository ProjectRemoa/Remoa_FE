import styled from "styled-components";

const ManageListContainer = styled.div`
  max-width: 1270px;
`

const ManageTextBox = styled.div`
  font-family: NotoSansKR-700;
  font-size: 25px;
  text-align: left;
  margin-top:72px;
  margin-bottom: 15px;
`
const ManageNameText = styled.span`
  color: #fada5e;
`;

const Category = styled.div`
  width: 183.09px;
  height: 43px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#fada5e" : "#f9fafc")};
  color: ${(props) => (props.checked ? "white" : "#B0B0B0")};
  font-family: ${(props) =>
    props.checked ? "NotoSansKR-700" : "NotoSansKR-400"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryText = styled.span`
  font-size: 15px;
`;

const ManageListBox = styled.div`
  margin-top:30px;
`

const SortBox = styled.div`
  float:right;
  margin-bottom:30px;
`;

const ManageListNo = styled.div`
  margin-top: 180px;
`

const NoManageText = styled.p`
  font-size: 30px;
  font-family: NotoSansKR-700;
`

const NoManageSubText = styled.p`
  font-size: 20px;
  font-family: NotoSansKR-400;
`



const Button = styled.button`
  width: 178.75px;
  height: 37px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  box-shadow: none;
  color: #464646;
  font-size: 15px;

  cursor: pointer;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

const ButtonRegister = styled.button`
  width: 15%;
  min-width: 280px;

  height: 50px;
  margin: 0 auto;
  border: none;
  border-radius: 30px;
  box-shadow: none;
  color: #010101;

  cursor: pointer;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

const Line = styled.hr`
  width: 90%;
  border: none;
  margin: 0 auto;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  
`


const S = {
  ManageListContainer,
  ManageTextBox,
  ManageNameText,
  Button,
  ButtonRegister,
  Line,
  CategoryBox,
  Category,
  CategoryText,
  ManageListBox,
  ManageListNo,
  NoManageText,
  NoManageSubText,
  SortBox,
};

export default S;