import styled from "styled-components"

const Container =styled.div`
  margin-right: 100px;
`

const Button = styled.button`
  width: 108px;
  height: 34px;
  background-color: white;
  color: #464646;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid #464234;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.13);
  border-radius: 50px;
  &:nth-child(2) {
    margin-left: 5px;
  }
  :hover {
    background-color: lightgray;
  }
`;

const S = {
  Container,
  Button
}

export default S;