import styled from "styled-components"

const FilterBox = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  width: 128px;

  ul {
    list-style: none;
    padding-left: 0px;
  }
  li {
    font-weight: ${(props) => (props.state ? "700" : "")};
    list-style: none;
    padding: 16px 30px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
    color: black;
    float: right;
    font-size: 15px;
  }

  li > ul > li:hover {
    background-color: orange;
    transition: ease 1s;
  }
`;

const Filter = styled.ul`
  font-size: 14px;
  li {
    display: ${(props) => (props.state ? "block" : "none")};
  }
  margin-bottom: 0px;

  border: 1px solid #d5d5d5;
`;


const S = {
  FilterBox,
  Filter
}

export default S;

