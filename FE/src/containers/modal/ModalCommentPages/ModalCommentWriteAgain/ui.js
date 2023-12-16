import styled from 'styled-components';

export const S = {
  Differentiate: styled.div`
    width: 100%;
    height: 1px;
    background: var(--line, #E1E2E5);
  `,
    WriteInput: styled.textarea`
    border-radius: 10px;
    background: var(--light-gray, #F0F0F0);
    width: 100%;
    height: 25%;
    font-family: 'Inter';
    font-size: 15px;
    line-height: 25px;
    resize: none;
    border: none;
    padding: 20px;
    ::placeholder {
      color: var(--gray, #A7A7A7);
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.32px;
    }
  `,
  Imsi:styled.td`
    border: 1px solid black;
  `
}