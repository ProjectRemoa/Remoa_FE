import styled from "styled-components";

export const S = {
  EachFeedWrapper: styled.div`
    width: 100%;
    height: auto;
  `,
  ProfileSize: styled.img`
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 50%;
  `,
  FeedWrapperHeader: styled.div`
    display: flex;
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
  ProfileName: styled.div`
    line-height: 46px;
    font-size: 100%; //20px;; // 글자 크기가 너무 커서 조절했습니다
  `,
  ButtonWrapper: styled.div`
    position: relative;
    left: 50px;
    top:15px;
  `,
  FeedWrapperButton: styled.button`
    margin-top: 12px;
    border: none;
    height: 26px;
    width: 80px;
    background-color: #fada5e;
    position: relative;
    right: 180px;
    box-shadow: none;
  `,
  WrapperSearch: styled.a`
    text-decoration-line: none;
    height: 26px;
    width: 60px;
    color: black;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  `,
  ModifyFin:styled.button`
    width:150px;
    height:37.5px;
    box-shadow:none;
  `,
  ModifyText:styled.textarea`
    border-radius: 10px;
    width: 90%;
    min-height: 90px;
    font-family: 'Inter';
    font-size: 15px;
    line-height: 25px;
    resize: none;
    border:1px solid black;
    ::placeholder {
      color:black
    }
  `
};
