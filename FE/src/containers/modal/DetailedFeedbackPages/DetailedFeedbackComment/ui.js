import styled from 'styled-components';

export const S = {
  EachFeedWrapper: styled.div`
  padding: 0 28px;
  overflow-x: hidden;
  `,
  Line: styled.div`
    width: 428px;
    height: 1px;
    flex-shrink: 0;
    background: var(--line, #E1E2E5);
  `,
  ProfileSize: styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  `,
  FeedWrapperHeader: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 78px;
  `,
  FeedbackView: styled.pre`
  color: var(--deepgray, #727272);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.45px;
  height: auto;
  width: 100%;
  word-break: break-all;
  margin-bottom: 11px;
  `,
  HeaderButton: styled.span`
  cursor: pointer;
    color: var(--gray, #A7A7A7);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  `,
  Nbsp:styled.span`
    color: var(--gray, #A7A7A7);
    font-size: 14px;
    font-weight: 500;
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
    height: 26px;
    width: 72px;
    margin-top: 20px;
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
