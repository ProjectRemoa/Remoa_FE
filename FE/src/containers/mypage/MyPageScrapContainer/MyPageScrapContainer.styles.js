import ReactPaginate from "react-paginate";
import styled from "styled-components";

const ScrapContainer = styled.div`
  width: 65vw;
  text-align: left;
  margin-top: 40px;
`;

const MoreSearch = styled.button`
  width: 236px;
  height: 48px;
  margin-top: 46px;
  background-color: #fada5e;
  border: none;
  border-radius: 50px;
  font-family: Pretendard-SemiBold;
  &:hover {
    background-color: #dfb71c;
  }
`;

const ScrapListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 24px;
  margin-top: 40px;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 54px;
`;

const MoreButton = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  color: #464646;
  background-color: transparent;
  font-size: 16px;
  font-family: Pretendard-SemiBold;
  &:hover {
    background-color: #e1e2e5;
  }
`;

const MyPaginate = styled(ReactPaginate)`
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    margin-right: 8px;
    font-weight: 500;
    font-size: 15px;
    color: #727272;
    cursor: pointer;
  }

  li.previous,
  li.next {
    color: #000000;
  }

  li.selected a {
    font-weight: 800;
    font-size: 15px;
    color: #1e1e1e;
    cursor: default;
  }

  li.disabled {
    cursor: default;
  }
`;

const styledComponent = {
  ScrapContainer,
  MoreSearch,
  ScrapListContainer,
  MoreButtonContainer,
  MoreButton,
  MyPaginate,
};

export default styledComponent;
