import styled from "styled-components";

export const S = {
  Content: styled.pre`
    display: inline;
    position: relative;
    color: var(--, #464646);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
    white-space: pre-wrap; 
  `,
  WriteInput: styled.textarea`
    width: 96.5%;
    height: auto;
    padding: 20px;
    font-family: "Inter";
    resize: none;
    border-radius: 8px;
    border: 1px solid var(--gray, #a7a7a7);
    ::placeholder {
      color: var(--, #464646);
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.32px;
    }
  `,
  Parent: styled.div`
    display: flex;
    width: 100%;
    height: auto;
    &:not(:last-child) {
    padding-bottom: 20px;
  }
  `,
  Nickname: styled.p`
    margin: 0px;
    color: var(--black, #1e1e1e);
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  `,
  Edit: styled.div`
    color: var(--gray, #a7a7a7);
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    cursor: pointer;
  `,
};
