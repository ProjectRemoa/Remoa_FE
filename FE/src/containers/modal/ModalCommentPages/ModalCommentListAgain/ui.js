import styled from "styled-components";

export const S = {
  Differentiate: styled.div`
    width: 100%;
    height: 1px;
    background: var(--line, #e1e2e5);
  `,
  Content: styled.pre`
    display: inline;
    position: relative;
    top: -20px;
    color: var(--, #464646);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
  `,
  Parent: styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: 52px 40px 1194px;
    grid-template-rows: auto 28px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `,
  Nickname: styled.p`
    position: relative;
    top: -20px;
    color: var(--black, #1e1e1e);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  `,
  Edit: styled.div`
    color: var(--gray, #a7a7a7);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  `,
};
