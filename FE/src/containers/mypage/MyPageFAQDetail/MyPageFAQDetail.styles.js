import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  height: 70%;
  margin-top: 68px;
  text-align: left;
`;

const Category = styled.span``;

const TitleContainer = styled.div`
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  margin-top: 12px;
  padding: 0px 16px;
`;

const Title = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 600;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Author = styled.span`
  margin-right: 50px;
`;

const PostingTime = styled.span`
  margin-right: 38px;
`;

const View = styled.span``;

const Content = styled.div`
  height: 617px;
  margin-top: 28px;
  border-bottom: 1px solid #a7a7a7;
  box-sizing: border-box;
  padding-left: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 28px 0px 82px;
`;

const Button = styled.button`
  width: 72px;
  height: 40px;
  border: 1px solid #cecece;
  border-radius: 12px;
  font-family: Pretendard-Medium;
  font-size: 16px;
  background-color: inherit;

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  &:hover {
    background-color: #e1e2e5;
  }
`;

const styledComponent = {
  Wrapper,
  Category,
  TitleContainer,
  Title,
  InfoContainer,
  Author,
  PostingTime,
  View,
  Content,
  ButtonContainer,
  Button,
};

export default styledComponent;
