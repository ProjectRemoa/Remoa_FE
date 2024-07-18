import styled from "styled-components";

export const S = {
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
};
