import styled from 'styled-components';

export const S = {
  Differentiate: styled.div`
    width: 100%;
    height: 1px;
    background: var(--line, #E1E2E5);
  `,
  Nickname: styled.pre`
  display: inline;
  color: var(--, #464646);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.32px;
  `,
  Parent:styled.div`
    display: grid;
    grid-template-columns: 52px 40px 1104px;
    grid-template-rows: auto 28px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `
}