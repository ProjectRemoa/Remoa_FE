import styled from "styled-components";

const ManageListContainer = styled.div`
  width: 1270px;
  margin-top: 158px;
`

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
  width: 200px; //183.09px;
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
    background-color: ${(props) => (props.checked ? "#FADA5E" : "#f0f0f0")};
  }
`;

const CategoryText = styled.span`
  font-size: 15px;
`;
const CategoryBox = styled.div`
  display: flex;
  //justify-content:space-between;
  //align-items:center;
`;


const S = {
  ManageListContainer,
  ManageTextBox,
  ManageNameText,
  Category,
  CategoryText,
  CategoryBox,
};

export default S;