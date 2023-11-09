import styled from 'styled-components';

export const S = {
  CommentWrapper: styled.div`
    width: 100%;
    padding: 0px 15px 50px 15px;
    height: auto;
    border-radius: 0px 0px 10px 10px;
    position: relative;
    display: block;
    justify-content: center;
    left: -15px;
  `,
  CommentWriteWrapper: styled.form`
    display: block;
    height: auto;
  `,
  CommentTitle: styled.span`
    color: var(--black, #1E1E1E);
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.4px;
    position: absolute;
    left: 30px;
  `,
  CommentButton: styled.button`
    border-radius: 12px;
    border: 1px solid #A7A7A7;
    background: #FFF;
    color: #464646;
    font-size: 16px;
    font-weight: 600;
    width: 72px;
    height: 40px;
    letter-spacing: -0.32px;
    position: absolute;
    right: 30px;
  `,
  WriteInput: styled.textarea`
    border-radius: 10px;
    background: var(--light-gray, #F0F0F0);
    width: 1196px;
    height: 132px;
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
  CommentWriteHeader: styled.div`
    width: auto;
    height: 40px;
    margin-top: 32px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
  `,
};
