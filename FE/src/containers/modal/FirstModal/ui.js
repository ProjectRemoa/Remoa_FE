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
    font-size: 20px;
    line-height: 43px;
    margin-top:42px;
    margin-bottom: 18px;
  `,
  Warn:styled.div`
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 18px;
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
    font-size: 17px;
    line-height: 25px;
    color: #000000;
  `,
  InfoDiv:styled.div`
    background-color: lightgray;
    border-radius: 10px;
  `,
  HowWrapper:styled.td`
    width: 322;
    display: inline-block;
    text-align:left;
    position: relative;
  `,
  Howtable:styled.table`
    position: relative;
    left: 30px;
  `,
  ChangeProfile:styled.button`
    margin-top: 20px;
    width: 367px;
    height: 68px;
    color: #464646;
    font-weight: 700;
    font-size: 20px;
    border: 1px solid #D0D0D0;
    border-radius: 30px;
    box-shadow: none;
  `,
  Close:styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    color: #B0B0B0;
    margin-top: 5px;
    cursor: pointer;
    text-decoration: underline;
  `
}