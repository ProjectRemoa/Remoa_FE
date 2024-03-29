import styled from "styled-components";

export const S = {
  Drag: styled.div`
    float: right;
    position: relative;
    z-index: 22;
  `,
  ModalWrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: default;
    overflow-y: scroll;
  `,
  MobalBox: styled.div`
    position: absolute;
    background-color: #fff;
    width: 1260px;
    height: auto;
    top: 106px;
    display: block;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 1vw / 1vw;
  `,
  MobalContents: styled.div`
    width: auto;
    height: auto;
    margin: 20px;
    margin-bottom: 46px;
  `,
  ModalRealTop: styled.div`
    display: block;
  `,
  MobalHeader: styled.div`
    margin-top: 58px;
    width: auto;
    height: auto;
    display: flex;
    padding-top: 30px;
    padding-bottom: 50px;
  `,
  HeaderDiv1: styled.div`
    height: auto;
    width: 65%;
    text-align: left;
  `,
  HeaderDiv2: styled.div`
    height: auto;
    width: 35%;
  `,
  DetailTitle: styled.div`
    color: var(--black, #1e1e1e);
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.84px;
    margin-top: 10px;
    margin-bottom: 18px;
  `,
  DetailTitleInfo: styled.div`
    color: var(--gray, #959595);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.32px;
  `,
  ProfileSize: styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 50%;
  `,
  HeaderUserInfo: styled.div`
    width: 100%;
    position: relative;
    height: 24px;
    display: flex;
    width: 297px;
    float: right;
    margin-right: 15px;
  `,
  HeaderUserName: styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.28px;
    position: absolute;
    margin-left: 30px; // 24 + 6
  `,
  HeaderDetail2: styled.div`
    color: #a7a7a7;
    display: flex;
    height: 18px;
    flex-shrink: 0;
    width: 165px;
    justify-content: space-between;
    position: absolute;
    right: 10px;
    top: 3px;
  `,
  eachIcon: styled.span`
    line-height: 18px;
    font-size: 18px;
  `,
  eachText: styled.span`
    position: relative;
    top: -3px;
  `,
  DetailFeedbackButtonWrapper: styled.div`
    display: flex;
    position: relative;
    width: auto;
    height: auto;
    float: right;
    padding-top: 19px;
    padding-right: 13px;
    gap: 8px;
  `,
  TraceBoxLike: styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
  `,
  TraceBoxAlign: styled.div`
    padding: 16px;
    justify-content: center;
    display: flex;
  `,
  ContentImg: styled.img`
    margin-bottom: 10px;
  `,
  PdfWrapper: styled.div`
    width: 100%;
    background: #fada5e;
  `,
  PdfMannage: styled.div`
    width: 99%;
    overflow: scroll;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: white;
    padding: 5% 0% 5% 0%;
    margin-left: 0.5%;
    &::-webkit-scrollbar {
      width: 18px;
      height: 18px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: var(--disabled-gray, #b0b0b0);
    }

    &::-webkit-scrollbar-track {
      background: aliceblue;
    }
  `,
  PdfSet: styled.div`
    height: 50px;
    line-height: 50px;
    color: #464646;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.32px;
    display: flex;
    margin-left: 39px;
    align-items: center;
  `,
  PdfPageInput: styled.input`
    width: 32px;
    height: 30px;
    margin-left: 14px;
    color: #464646;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.32px;
    text-align: center;
  `,
  PdfPageButton: styled.a`
    cursor: pointer;
    text-decoration-line: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.24px;
    color: #464646;
  `,
  PdfPageButtonWrapper: styled.button`
    cursor: default;
    height: 28px;
    width: 80px;
    border-radius: 16px;
    border: 1px solid var(--deepgray, #727272);
    background: #fff;
  `,
  PdfSizeWrapper: styled.div`
    position: absolute;
    right: 70px;
    width: auto;
  `,
  PdfViewText: styled.div`
    width: 40px;
    display: inline-block;
  `,
  PdfPageShow: styled.div`
    position: absolute;
    bottom: 0;
    z-index: 2;
    border-radius: 30px;
    background: #fada5e;
    width: 188px;
    height: 40px;
    color: var(--, #464646);
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    line-height: 40px;
  `,
  PdfSelect: styled.button`
    color: var(--, #464646);
    cursor: default;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    background: #fff;
    width: 82px;
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    border: none;
    margin-right: 30px;
  `,
  PdfOption: styled.ul`
    position: absolute;
    width: 82px;
    height: 144px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid var(--line, #e1e2e5);
    background: #fff;
    list-style: none;
    padding-left: 0px;
    right: 30px;
    z-index: 1;
  `,
  PdfList: styled.li`
    width: auto;
    height: 24px;
    margin: 4px;
    :hover {
      background: var(--light-gray, #f0f0f0);
      cursor: pointer;
    }
  `,
  PdfFocus: styled.div`
    border: none;
    font-size: 14px;
    line-height: 24px;
    box-sizing: border-box;
    background: none;
  `,
  PdfSizeButton: styled.button`
    border: none;
    margin-right: 10px;
    box-shadow: none;
    background-color: white;
    width: 60px;
    height: 40px;
    position: relative;
    top: 17.5px;
    display: inline-block;
    justify-content: center;
  `,
  SizeIcon: styled.span`
    color: #fada5e;
    font-weight: 700;
    font-size: 50px;
    position: relative;
    top: -20px;
  `,
  SizeShow: styled.div`
    width: 60px;
    height: 40px;
    color: black;
    line-height: 40px;
    position: absolute;
    right: 230px;
    border: 3px solid black;
  `,
  EtcDiv: styled.div`
    width: 140px;
    height: 100px;
    border: 1px solid #a7a7a7;
    position: absolute;
    background-color: white;
    z-index: 12;
    right: 30px;
    padding: 6px;
  `,
  Functionp: styled.div`
    font-size: 17px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    :hover {
      background: #f0f0f0;
    }
  `,
  Line: styled.div`
    width: 138px;
    height: 0px;
    border: 0.2px solid #b0b0b0;
    position: relative;
  `,
};
