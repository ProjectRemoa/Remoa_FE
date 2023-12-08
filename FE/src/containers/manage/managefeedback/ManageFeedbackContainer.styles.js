import styled from "styled-components";


const ManageListContainer = styled.div`
  width: 1270px;
  margin-top: 72px;
`;

const ManageTextBox = styled.div`
  font-size: 24px;
  text-align: left;
  margin-top: 72px;
  margin-bottom: 15px;
  font-weight: 700;
  color: #1e1e1e;
`;
const ManageNameText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #1e1e1e; //#fada5e;
`;

const Category = styled.div`
  width: 200px;
  height: 44px;
  border: 1px solid ${(props) => (props.checked ? "black" : "#CECECE")}; // #cecece;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#FADA5E" : "white")};
  color: ${(props) => (props.checked ? "#464234" : "#1e1e1e")};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  :last-child {
    margin-right: 0px;
  }
  :hover {
    background-color: ${(props) => (props.checked ? "#DFB71C" : "#f0f0f0")};
  }
`;

const CategoryText = styled.span`
  font-size: 15px;
`;

const ManageListBox = styled.div`
  margin: 30px 0px;
`;

const SelectBox = styled.div`
  float: left;
`;
const SelectButton = styled.button`
  width: 104px;
  height: 24px;
  font-size: 12px;
  color: #464646;
  background-color: ${(props) => (props.checked ? "#fada5e" : "white")};
  box-shadow: none;
  border-radius: 8px;
  border: ${(props) =>
    props.checked ? "1px solid #727272" : "1px solid #e1e2e5"};
  margin-right: 7px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;

  :first-child {
    margin-left: 19px;
  }

  :hover {
    background-color: ${(props) => (props.checked ? "#DFB71C" : "lightgray")};
  }
`;

const SortBox = styled.div`
  float: right;
  // margin-bottom:30px;
`;

const ManageListNo = styled.div`
  margin-top: 88px;
`;

const NoManageText = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const NoManageSubText = styled.p`
  font-size: 16px;
  color: #4e4e4e;
  font-weight: 500;
`;

const Button = styled.button`
  width: 320px;
  height: 54px;
  //margin: 0 auto;
  margin-top: 58px;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  box-shadow: none;
  color: #464646;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: #fada5e;
`;

const ButtonRegister = styled.button`
  width: 209px;
  height: 48px;
  margin-top: 58px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  box-shadow: none;
  color: #1e1e1e;
  cursor: pointer;
  background: #fada5e;
  font-weight: 600;
  :hover {
    background-color: #dfb71c;
  }
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-top: 12.5px;
`;

const CategoryBox = styled.div`
  display: flex;
  margin-top: 64px;
`;

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