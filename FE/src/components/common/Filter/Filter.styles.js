import styled from "styled-components"

const FilterBox = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  width: 128px;

  ul {
    list-style: none;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  li {
    font-weight: ${(props) => (props.state ? "700" : "")};
    list-style: none;
    //padding: 16px 30px;
    max-width: 90%;
    /*
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;*/
    white-space: nowrap;
  }

  a {
    text-decoration: none;
    color: black;
    float: right;
    font-size: 15px;
  }

  li > ul > li {/*
    display: flex;
    justify-content: center;
    align-items: center;*/

  }

  li > ul > li:hover {
    //background-color: #f0f0f0;
    //transition: ease 0.5s;
  }
`;

const Filter = styled.ul`
  font-size: 14px;
  li {
    display: ${(props) => (props.state ? "block" : "none")};
  }
  margin-bottom: 0px;

  border: 1px solid #d5d5d5;
  z-index: 100;
`;

const FilterEach = styled.div`
  padding: 16px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    background-color: #f0f0f0;
    transition: ease 0.5s;
  }
`;


const S = {
  FilterBox,
  Filter,
  FilterEach,
};

export default S;

