import styled from 'styled-components';

export const S = {
  Differentiate: styled.div`
    width: 100%;
    height: 1px;
    background: var(--line, #E1E2E5);
  `,
    WriteInput: styled.textarea`
    font-family: 'Inter';
    border-radius: 8px;
    width: 1092px;
    height: 108px;
    color: var(--, #464646);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.32px;
    line-height: 25px;
    resize: none;
    border: 1px solid var(--gray, #A7A7A7);
    box-sizing: border-box;
    background: #FFF;
    padding: 20px;
    ::placeholder {
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.32px;
    }
  `,
  Imsi:styled.div`
    border: 1px solid black;
  `,
  InlineWrapper:styled.div`
    display: inline;
  `,
  CloseButton: styled.div`
    cursor: pointer;
    display: inline-flex;
    padding: 12px 22px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--loyal-yellow, #FADA5E);
  `,
  Nickname: styled.div`
    display: flex;
    color: var(--black, #1E1E1E);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.32px;
  `
}