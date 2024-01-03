import styled from "styled-components";

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin-top: 43px;
  /* gap: 0 26px; */

  // TODO : reset.css
  a {
    color: inherit;
  }
`;

const CategoryItem = styled.button`
  width: 13.6%;
  height: 44px;
  border: 1px solid ${(props) => (props.checked ? "black" : "#A7A7A7")};
  border-radius: 10px;
  /* cursor: pointer; */
  background-color: #fada5e;
  color: #464646;
  font-family: Pretendard-Medium;
  font-weight: 600;
  box-sizing: border-box;
  padding: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: ${(props) => (props.checked ? "#FADA5E" : "white")};
  :hover {
    background-color: ${(props) => (props.checked ? "#DFB71C" : "#f0f0f0")};
  }
`;

const StyledComponents = {
  CategoryList,
  CategoryItem,
};

export default StyledComponents;
