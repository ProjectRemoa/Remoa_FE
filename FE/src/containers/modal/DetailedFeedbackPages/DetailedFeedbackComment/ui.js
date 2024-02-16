import styled from 'styled-components';

export const S = {
  EachFeedWrapper: styled.div`
  background-color: aliceblue;
  `,
  ProfileSize: styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  `,
  FeedWrapperHeader: styled.div`
    display: flex;
  `,
  FeedbackView: styled.div`
  background-color: floralwhite;
  height: auto;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  width: 100%;
  word-break: break-all
  `,
  HeaderButton: styled.button`
    width: 80px;
    height: 27px;
    box-shadow: none;
  `,
  ThumbCount: styled.p`
    display: inline;
    color: black;
    text-align: center;
    position: relative;
  `,
  ProfileName: styled.div`
    color: var(--black, #1E1E1E);
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    margin-left: 5px;
    letter-spacing: -0.36px;
  `,
  ButtonWrapper: styled.div`
    position: relative;
  `,
  FeedWrapperButton: styled.div`
    cursor: move;
    height: 26px;
    width: 72px;
    margin-top: 12px;
    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: none;
    border-radius: 10px;
    background: var(--loyal-yellow, #FADA5E);
  `,
  WrapperSearch: styled.a`
    cursor: pointer;
    text-decoration-line: none;
    color: #1E1E1E;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
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
