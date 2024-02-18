import styled from 'styled-components';

export const S = {
  AskDelete: styled.p`
    position: absolute;
    top: 60px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.44px;
    color: var(--black, #1E1E1E);
  `,
  AskHelp: styled.p`
    position: absolute;
    top: 105px;
    color: var(--deepgray, #727272);
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.28px;
  `,
  ButtonWrapper:styled.div`
    position: absolute;
    bottom: 26px;
    width: auto;
    display: flex;
  `,
}