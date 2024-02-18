import styled from 'styled-components';

export const S = {
  ModalWrapper:styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: default;
    overflow-y: scroll;
  `,
  Modal:styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 460px;
    height: 448px;
    background: #FFFFFF;
    border: 0.5px solid #B0B0B0;
    border-radius: 10px;
    justify-content: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
  `,
  Welcome:styled.div`
    letter-spacing: -0.48px;
    font-size: 24px;
    line-height: 100%;
    margin-top: 50px;
    margin-bottom: 18px;
    font-weight: 700;
    color: #1e1e1e;
  `,
  Warn:styled.div`
    letter-spacing: -0.28px;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 18px;
    font-weight: 500;
    color: #727272;
  `,
  Guide:styled.div`
    font-size: 20px;
    line-height: 29px;
    color: #464646;
    margin-bottom: 18px;
  `,
  Up:styled.div`
    position: relative;
  `,
  How:styled.div`
    text-align: left;
    font-size: 13px;
    line-height: 140%;
    font-weight: 600;
    color: #464646;
    padding-left: 6px;
  `,
  InfoDiv:styled.div`
    background-color: #F7F6F5;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    width:340px;
    height: 160px;
    margin: 33px 60px 34px 60px;
  `,
  HowWrapper:styled.td`
  `,
  Howtable:styled.table`
    position: relative;
    padding-left: 10px;
  `,
  ChangeProfile:styled.button`
    width: 404px;
    height: 54px;
    border: 1px solid #D0D0D0;
    border-radius: 12px;
    background: #FADA5E;
    color: var(--black, #1E1E1E);
    text-align: center;
    cursor: pointer;
    /* button */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
  `,
  Close:styled.div`
    margin-top: 16px;
    cursor: pointer;
    text-decoration: underline;
    color: var(--gray, #A7A7A7);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  `,
}