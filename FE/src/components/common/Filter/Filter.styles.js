import styled from "styled-components"

const FilterBox = styled.div`
  background-color: #ffffff;
  border: 1px solid black;
  font-size:14px;

  ul {
    list-style: none;
    padding-left: 0px;
    //padding: 5px;
  }
  li {
    font-weight : ${(props) => (props.state) ? "700" : ""};
    list-style: none;
    padding-left: 0px;
    padding: 16px 46px;
    background-color: #f0f0f0;
    border: 1px dashed black;
  }
`;


const S = {
  FilterBox,
}

export default S;

