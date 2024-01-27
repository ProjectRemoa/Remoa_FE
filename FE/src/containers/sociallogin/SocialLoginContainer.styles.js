import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Pretendard-Medium;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: inline-block;
  width: 560px;
  height: 480px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: white;
  margin-top: 104px;
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OuterBox = styled.div`
  margin-top: 49px;
`;

const TextBox = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1e1e1e;
  text-align: center;
  margin-bottom: 38px;
`;

const InnerBox = styled.div`
  margin-bottom: 31px;
`;

const CommentBox = styled.div`
  width: 468px;
  height: 60px;
  background: #f8f8f8;
  color: #464646;
  font-size: 14px;
  font-weight: 700;
  border-radius: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin-bottom: 18px;
`;

const LoginBox = styled.div`
  text-align: center;
`;

const LoginInfoBox = styled.div`
  margin-bottom: 3px;
`;

const S = {
  Wrapper,
  Container,
  OuterWrapper,
  OuterBox,
  TextBox,
  InnerBox,
  CommentBox,
  LoginBox,
  LoginInfoBox,
};

export default S;
