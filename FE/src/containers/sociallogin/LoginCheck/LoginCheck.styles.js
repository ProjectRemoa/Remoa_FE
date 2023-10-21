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
  border: 1px solid #464646;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  &:nth-child(2) {
    margin-left: 5px;
  }
`

const S = {
  Container,
  Button
}

export default S;