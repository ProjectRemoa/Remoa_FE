import styled from "styled-components";

const Wrapper = styled.div`
  width: 54%;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid #e1e2e5;
  border-radius: 20px;
  margin-top: 24px;
  box-sizing: border-box;
  padding: 55px 107px;
`;

const Category = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  &:first-of-type {
    align-items: center;
  }
  &:nth-of-type(2) {
    height: 392px;
    margin-top: 20px;
  }
`;

const Title = styled.span`
  font-weight: 600;
`;

const Input = styled.input`
  width: 80%;
  height: 44px;
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  font-family: Pretendard-Medium;
  font-size: 16px;
  box-sizing: border-box;
  padding: 14px 13px;

  &:focus {
    outline: none;
  }
`;

const Content = styled(Title)``;

const Textarea = styled.textarea`
  width: 80%;
  height: 100%;
  resize: none;
  border: 1px solid #a7a7a7;
  border-radius: 10px;
  font-family: Pretendard-Medium;
  font-size: 16px;
  box-sizing: border-box;
  padding: 14px 13px;
  ::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: Pretendard-Medium;
  }
`;

const SubmitButton = styled.button`
  width: 190px;
  height: 56px;
  margin: 39px 0px 178px;
  background-color: #fada5e;
  border: none;
  border-radius: 80px;
  font-family: Pretendard-SemiBold;
  font-size: 18px;
  &:hover {
    background-color: #dfb71c;
  }
`;

const styledComponent = {
  Wrapper,
  Category,
  ContentContainer,
  Title,
  Input,
  Content,
  Textarea,
  SubmitButton,
};

export default styledComponent;
