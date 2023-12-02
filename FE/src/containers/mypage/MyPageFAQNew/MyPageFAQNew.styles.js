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

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  &:nth-of-type(2) {
    height: 392px;
    margin-top: 20px;
  }
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 100%;
  resize: none;
  border-radius: 10px;
  font-family: Pretendard-Medium;
  font-size: 16px;
  ::-webkit-scrollbar {
    display: none;
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

const styledComponent = { Wrapper, Content, Textarea, SubmitButton };

export default styledComponent;
