import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  margin: 58px 0 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPaginate = styled(ReactPaginate)`
  margin: 44px 0 0;
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

const SearchWrapper = styled.div`
  width: 562px;
  height: 48px;
  margin-top: 90px;
  border: 2px solid #464646;
  border-radius: 40px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 40px;
  &::placeholder {
    vertical-align: middle;
    font-size: 14px;
    font-weight: 500;
  }
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.button`
  padding: 0;
  background: none;
  border: none;
  svg {
    width: 20.48px;
    height: 20.48px;
  }
`;

const styledComponent = {
  Wrapper,
  MyPaginate,
  SearchWrapper,
  SearchInput,
  SearchIcon,
};

export default styledComponent;
