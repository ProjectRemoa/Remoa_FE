import styled from 'styled-components';

export const S = {
  CommentWrapper: styled.div`
    background-color: #f5f5f5;
    width: 100%;
    padding: 0px 15px 50px 15px;
    height: auto;
    border-radius: 0px 0px 10px 10px;
    position: relative;
    left: -15px;
  `,
  CommentWriteWrapper: styled.form`
    margin: 0px 10px 25px 10px;
    justify-content: center;
    height: auto;
  `,
  CommentButton: styled.button`
    display: inline;
    height: 36px;
    width: 90px;
    position: absolute;
    border: 0;
    box-shadow: none;
    right: 3%;
    top: 3%;
  `,
  WriteInput: styled.textarea`
    border-radius: 10px;
    width: 100%;
    min-height: 90px;
    font-family: 'Inter';
    font-size: 15px;
    line-height: 25px;
    resize: none;
    border: none;
    ::placeholder {
      color: black;
    }
  `,
};
