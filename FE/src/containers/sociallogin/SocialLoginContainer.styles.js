import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  background-color: gray; //#f6f6f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container =styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin-top: 70px;
  //background-color : gray;
`

const OuterBox = styled.div`
  background-color:white;
  width: 560px;
  height: 480px;
  border-radius:24px;
  padding:49px;
`

const TextBox = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  color: #1E1E1E;
`
  
const InnerBox = styled.div`
  margin: 60px 0px;
`

const CommentBox = styled.div`
  width: 480px;
  height: 60px;
  background: #f8f8f8;
  color: #464646;
  font-size: 16px;
  border-radius: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 3px;
  margin-bottom: 30px;
`
  
const LoginBox = styled.div`
  text-align: center;
`

const LoginInfoBox = styled.div`
  font-size: 15px;
  color: #464646;
  font-family: NotoSansKR-500;
  margin-bottom: 3px;
`

const S = {
  Wrapper,
  Container,
  OuterBox,
  TextBox,
  InnerBox,
  CommentBox,
  LoginBox,
  LoginInfoBox,
};

export default S;