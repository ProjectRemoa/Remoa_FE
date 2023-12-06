import styled from 'styled-components';

const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 43px;
  padding: 0;
  gap: 0 26px;

  // TODO : reset.css
  a {
    color: inherit;
  }
`;

const CategoryItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 200px;
  height: 44px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 15px;
  list-style: none;
  color: #464234;
  font-weight: 600;
  cursor: pointer;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #cecece;
    border-radius: 10px;
    text-decoration: none;
    &:hover {
      background-color: #cecece;
    }

    &.active,
    &:active {
      background-color: #fada5e;
      color: #464234;
      border: 1px solid #464234;
    }
  }
`;

const StyledComponents = {
  CategoryList,
  CategoryItem,
};

export default StyledComponents;
