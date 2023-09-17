import styled from "styled-components";

const Container = styled.div`
  margin-right: 100px;
`;
const Button = styled.button`
  width: 180px;
  height: 50px;
  background-color: white;
  color: #464646;
  font-family: NotoSansKR-400;
  font-size: 20px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  &:nth-child(2) {
    margin-left: 5px;
  }
`;

const S = {
  Container,
  Button,
};

export default S;
