import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "NotoSansKR";
  font-weight: 700;
  font-size: 25px;
  margin-top: 25px;
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
`;

const Content = styled.div`
  margin-top: 25px;
  font-size: 35px;
`;

const Button = styled.button`
  width: 12%;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  box-shadow: none;
  color: #464646;
  font-size: 78%;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

const styledComponent = {
  Wrapper,
  Title,
  Content,
  Button,
};

export default styledComponent;
