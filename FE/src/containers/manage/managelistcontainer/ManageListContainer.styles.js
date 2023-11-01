import styled from "styled-components";

const ManageListContainer = styled.div`
  width: 1270px;
  margin-top: 72px;
`

const ManageTextBox = styled.div`
  font-family: NotoSansKR-700;
  font-size: 25px;
  text-align: left;
  margin-top:72px;
  margin-bottom: 15px;
  color: #464646;
`
const ManageNameText = styled.span`
  color: #fada5e;
`;

const Category = styled.div`
  width: 183.09px;
  height: 41px;
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
  margin-right:27px;
  :last-child{
    margin-right: 0px;
  }
`;

const CategoryText = styled.span`
  font-size: 15px;
`;

const ManageListBox = styled.div`
  margin-top:30px;
`

const SelectBox = styled.div`
margin-left: -19px;
  float:left;
`
const SelectButton = styled.button`
  width: 173px;
  height: 25px;
  font-family: NotoSansKR-400;
  font-size: 15px;
  color: #000000;
  background-color: #fada5e;
  box-shadow: none;
  border-radius: 10px;
  border: 0.5px solid #000000;
  margin-right: 7px;
  /*
  display: flex;
  justify-content: center;
  align-items:center;
*/
`;

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
  width: 446px;
  height: 68px;
  margin-top: 72px;
  font-size: 20px;
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
  //justify-content:space-between;
  //align-items:center;
  
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
  SelectBox,
  SelectButton,
};

export default S;