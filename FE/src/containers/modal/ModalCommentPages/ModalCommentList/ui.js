import styled from 'styled-components';

export const S = {
  WriteInput: styled.textarea`
    width: 98%;
    height: 100px;
    font-family: 'Inter';
    resize: none;
  `,
  ProfileSize: styled.img`
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 50%;
  `,
  HeaderButton: styled.button`
    width: 80px;
    height: 27px;
    box-shadow: none;
  `,
  ThumbCount: styled.p`
    display: inline;
    color: black;
    line-height: 27px;
    text-align: center;
    position: relative;
    top: -5px;
  `,
  AgainWrapper: styled.div`
    width: 100%;
    height: auto;
  `,
  AgainTable: styled.table`
    width: 100%;
    position: relative;
    right: 10px;
  `,
};
