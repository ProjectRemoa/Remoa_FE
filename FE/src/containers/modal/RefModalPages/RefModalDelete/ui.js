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
    top: 100px;
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
  Button:styled.div`
    width: 180px;
    height: 48px;
    border-radius: 12px;
    background: var(--loyal-yellow, #FADA5E);
    color: var(--, #464646);
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -0.32px;
  `,
  LetterWrap:styled.div`
    position: absolute;
    width: 100%;
    justify-content: center;
    display: flex;
    top: 35px
  `
}