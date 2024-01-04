import styled from 'styled-components';

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0 12px;
  margin-top: 43px;

  // TODO : reset.css
  box-sizing: border-box;
  padding: 0;

  a {
    color: inherit;
  }
`;

const CategoryItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  border: 1px solid ${(props) => (props.checked ? 'black' : '#A7A7A7')};
  border-radius: 10px;
  background-color: #fada5e;
  color: #464646;
  font-family: Pretendard-Medium;
  font-weight: 600;
  background-color: ${(props) => (props.checked ? '#FADA5E' : 'white')};
  cursor: pointer;

  // reset.css
  box-sizing: border-box;
  padding: 0;

  &:hover {
    background-color: ${(props) => (props.checked ? '#DFB71C' : '#f0f0f0')};
  }
`;

const StyledComponents = {
  CategoryList,
  CategoryItem,
};

export default StyledComponents;
