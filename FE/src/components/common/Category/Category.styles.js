import styled from 'styled-components';

const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1242px;
  box-sizing: border-box;
  margin-top: 43px;
  padding-left: 20px;
  padding-right: 20px;
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
  min-width: 184px;
  height: 42px;

  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 15px;
  list-style: none;
  color: #b0b0b0;

  cursor: pointer;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #b0b0b0;
    border-radius: 10px;
    text-decoration: none;

    &.active,
    &:active {
      background-color: #fada5e;
      color: #fff;
      font-weight: 700;
    }
  }

  &.active {
    color: #fada5e;
  }
`;

const StyledComponents = {
  CategoryList,
  CategoryItem,
};

export default StyledComponents;
