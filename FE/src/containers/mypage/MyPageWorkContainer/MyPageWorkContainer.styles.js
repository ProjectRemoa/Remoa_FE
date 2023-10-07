import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 100px 100px;
`;

const CommentContainer = styled.div`
  font-family: "NotoSansKR";
  font-weight: 700;
  font-size: 25px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
`;

const Button = styled.button`
  width: 12%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  color: #464646;
  font-size: 78%;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

const NullData = styled.div`
  text-align: center;
  font-size: 35px;
`;

const styledComponent = {
  Wrapper,
  CommentContainer,
  ButtonContainer,
  Button,
  NullData,
};

export default styledComponent;
