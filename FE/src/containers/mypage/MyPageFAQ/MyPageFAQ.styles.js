import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  margin: 58px 0 186px;
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

const styledComponent = {
  Wrapper,
  MyPaginate,
};

export default styledComponent;
