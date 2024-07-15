import styled from 'styled-components';

export const S = {
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
    color: 'black';
    top: '-3px';
    position: 'relative'
  `,
  ThumbCount: styled.p`
    display: inline;
    color: black;
    line-height: 27px;
    text-align: center;
    position: relative;
    top: -5px;
  `,
  ProfileName: styled.div`
    line-height: 46px;
    font-size: 100%; //20px;; // 글자 크기가 너무 커서 조절했습니다
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
