import styled from 'styled-components';

export const S = {
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
  ModalRealTop:styled.div`
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
    color: var(--black, #1E1E1E);
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
    margin-right:15px;
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
    width: 145px;
    justify-content: space-between;
    position: absolute;
    right: 0;
    top: 3px;
  `,
  eachIcon:styled.span`
    line-height: 18px;
    font-size: 18px;
  `,
  eachText:styled.span`
    position: relative;
    top: -3px;
  `,
  DetailFeedbackButtonWrapper:styled.div`
    display: flex;
    position: relative;
    width: auto;
    height: auto;
    float: right;
    padding-top: 19px;
    padding-right: 13px;
    gap: 8px;
  `,
  DetailFeedbackButton: styled.button`
    width: 180px;
    height: 47px;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    padding: 14px;
    border-radius: 12px;
    background: var(--loyal-yellow, #FADA5E);
    line-height: normal;
    letter-spacing: -0.32px;
    color: #1E1E1E;
    border: none;
    :hover {
      background: #DFB71C;
    }
  `,
  TraceBoxLike: styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
  `,
  TraceBoxAlign: styled.div`
    padding: 16px 32px;
  `,
  TraceBox: styled.div`
    display: inline-flex;
    justify-content: center;
    gap: 5px;
    border-radius: 12px;
    border: 1px solid var(--gray, #A7A7A7);
    background: #FFF;
    width: 115px;
    height: 56px;
    margin-bottom: 46px;
  `,
  ContentImg: styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  `,
  PdfWrapper: styled.div`
    width: 100%;
    background: #fada5e;
  `,
    PdfMannage: styled.div`
    overflow-y: scroll;
    width: 99%;
    overflow-x: auto;

    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: white;
    padding: 5% 0% 5% 0%;
    margin-left: 0.5%;
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
    text-decoration-line: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.24px;
    color: #464646;
  `,
  PdfPageButtonWrapper: styled.button`
    height: 28px;
    width: 80px;
    border-radius: 16px;
    border: 1px solid var(--deepgray, #727272);
    background: #FFF;
  `,
  PdfSizeWrapper: styled.div`
    position: absolute;
    right: 70px;
    width: auto;
    z-index: 12;
  `,
  PdfViewText:styled.div`
    width: 40px;
    display: inline-block;
  `,
  PdfPageShow:styled.div`
    position: absolute;
    bottom: 0;
    z-index: 20;
    border-radius: 30px;
    background: #FADA5E;
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
    background: #FFF;
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
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid var(--line, #E1E2E5);
    background: #FFF;
    list-style: none;
    padding-left: 0px;
    right: 30px;
  `,
  PdfList: styled.li`
    width: auto;
    height: 24px;
    margin: 4px;
    :hover{
      background: var(--light-gray, #F0F0F0);
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
    background-color: red;
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
      background: #F0F0F0;
    }
  `,
};