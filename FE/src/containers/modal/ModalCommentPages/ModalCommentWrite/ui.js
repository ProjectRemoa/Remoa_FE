import styled from "styled-components";

export const S = {
  CommentWrapper: styled.div`
    width: 100%;
    padding: 0px 15px 50px 15px;
    height: auto;
    border-radius: 0px 0px 10px 10px;
    position: absolute;
    display: block;
    background-color: white;
    justify-content: center;
    left: 0px;
    box-sizing: border-box;
  `,
  CommentWriteWrapperInnerDiv: styled.div`
    background: var(--line, #e1e2e5);
    width: auto;
    height: 1px;
    flex-shrink: 0;
  `,
  CommentWriteWrapper: styled.form`
    display: block;
    height: auto;
  `,
  CommentTitle: styled.span`
    color: var(--black, #1e1e1e);
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.4px;
    position: absolute;
    left: 20px;
  `,
  CommentButton: styled.button`
    border-radius: 12px;
    border: 1px solid #a7a7a7;
    background: #fff;
    color: #464646;
    font-size: 16px;
    font-weight: 600;
    width: 72px;
    height: 40px;
    letter-spacing: -0.32px;
    position: absolute;
    right: 30px;
  `,
  WriteInput: styled.textarea`
    border-radius: 10px;
    background: #fff;
    width: 96.5%;
    height: 132px;
    font-family: "Inter";
    font-size: 15px;
    line-height: 25px;
    resize: none;
    border: 1px solid #a7a7a7;
    padding: 20px;
    ::placeholder {
      color: var(--gray, #a7a7a7);
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.32px;
    }
  `,
  CommentWriteHeader: styled.div`
    width: auto;
    height: 40px;
    margin-top: 32px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
  `,
};
