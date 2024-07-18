import styled from "styled-components";

export const S = {
  EachFeedWrapper: styled.div`
  width: 93%;
    padding: 0 28px;
  `,
  FeedWrapperHeader: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 78px;
  `,
  HeaderButton: styled.span`
    cursor: pointer;
    color: var(--gray, #a7a7a7);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  `,
  ProfileName: styled.div`
    color: var(--black, #1e1e1e);
    font-size: 18px;
    font-weight: 600;
    line-height: 40px;
    margin-left: 5px;
    letter-spacing: -0.36px;
  `,
  ButtonWrapper: styled.div`
    position: relative;
    width: 70%;
    height: 16px;
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
    background: var(--loyal-yellow, #fada5e);
  `,
  WrapperSearch: styled.a`
    cursor: pointer;
    text-decoration-line: none;
    color: #1e1e1e;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
  `,
    LikeButton: styled.div`
    cursor: pointer;
    width: 51px;
    height: 28px;
    box-sizing: border-box;
    margin-right: 8px;
    border-radius: 16px;
    border: 1px solid var(--line, #E1E2E5);
    background: #FFF;
    color: var(--gray, #A7A7A7);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  `,

};
