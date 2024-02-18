import styled from "styled-components";

export const S = {
  WriteInput: styled.textarea`
    width: 97%;
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
  ProfileSize: styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  `,
  ProfileName: styled.div`
    color: var(--black, #1e1e1e);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.32px;
    margin-left: 12px;
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
  `,
  EditButton: styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    color: var(--gray, #a7a7a7);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    cursor: pointer;
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
  ThumbCount: styled.button`
    position: absolute;
    right: 2%;
    border-radius: 16px;
    border: 1px solid var(--line, #e1e2e5);
    background: #fff;
    width: 51px;
    height: 28px;
    color: var(--gray, #a7a7a7);
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.28px;
    cursor: pointer;
    display: inline;
    top: 80px;
  `,
  AgainWrapper: styled.div`
    width: 100%;
    height: auto;
  `,
  AgainTable: styled.table`
    width: 100%;
    position: relative;
  `,
};
