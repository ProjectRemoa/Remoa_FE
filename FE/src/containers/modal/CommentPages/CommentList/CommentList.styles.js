import styled from "styled-components";

export const S = {
  Differentiate: styled.div`
    width: 100%;
    height: 1px;
    background: var(--line, #E1E2E5);
  `,
  ProfileName: styled.div`
    color: var(--black, #1e1e1e);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.32px;
    top: 0px;
  `,
  CommentTableBottom: styled.div`
    line-height: 28px;
    letter-spacing: -0.28px;
    display: flex;
    align-items: center;
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
