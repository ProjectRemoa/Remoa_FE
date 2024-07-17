import styled from "styled-components";

export const S = {
  Differentiate: styled.div`
    width: 100%;
    height: 1px;
    background: var(--line, #E1E2E5);
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
  ProfileName: styled.div`
    color: var(--black, #1e1e1e);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.32px;
    top: 0px;
  `,
  Comment: styled.pre`
    display: inline;
    color: var(--, #464646);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.32px;
    font-family: Inter;
    font-style: normal;
    font-family: Pretendard;
    word-break: break-all;
    white-space: pre-wrap; 
  `,
  CommentTableBottom: styled.div`
    color: var(--gray, #a7a7a7);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.28px;
    display: flex;
  `,
  HeaderButton: styled.button`
    width: 80px;
    height: 27px;
    box-shadow: none;
    float: right;
  `,
  AgainTable: styled.table`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 20px;
  `,
};
