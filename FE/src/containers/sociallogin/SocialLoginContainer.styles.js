import styled from "styled-components"

const Container =styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-display: block;
  margin-top: 70px;
`

const OuterBox = styled.div`
  font-family: NotoSansKR-700;
`

const TextBox = styled.div`
  font-size: 25px;
  line-height: 35px;
  color: #464646;
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
  Container,
  OuterBox,
  TextBox,
  InnerBox,
  CommentBox,
  LoginBox,
  LoginInfoBox,
};

export default S;