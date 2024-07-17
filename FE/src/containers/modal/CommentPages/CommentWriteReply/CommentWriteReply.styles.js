import styled from 'styled-components';

export const S = {
    WriteInput: styled.textarea`
    font-family: 'Inter';
    border-radius: 8px;
    width: 100%;
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
  Nickname: styled.div`
    margin-bottom: 10px;
    display: flex;
    color: var(--black, #1E1E1E);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.32px;
  `
}