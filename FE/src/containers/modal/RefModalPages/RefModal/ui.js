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
    align-items: center;
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
    justify-content: center;
    padding: 30px;
    border-radius: 1vw / 1vw;
  `,
  MobalContents: styled.div`
    width: auto;
    height: auto;
    margin: 20px;
  `,
  ModalRealTop:styled.div`
  display: block;
  `,
  MobalHeader: styled.div`
    margin-top: 50px;
    width: auto;
    background-color: pink;
    height: 150px;
    display: flex;
    padding-top: 40px;
  `,
  HeaderDiv1: styled.div`
    height: auto;
    width: 65%;
    text-align: left;
    background-color: yellow;
  `,
  HeaderDiv2: styled.div`
    height: auto;
    width: 35%;
  `,
  DetailTitle: styled.div`
    font-weight: 700;
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 20px;
  `,
  DetailTitleInfo: styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #959595;
  `,
  ProfileSize: styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
  `,
  HeaderUserInfo: styled.div`
    top: 35%;
    width: 100%;
    position: relative;
    height: auto;
    display: flex;
  `,
  HeaderUserName: styled.span`
    font-size: 15px;
    line-height: 35px;
    position: absolute;
    margin-left: 40px;
  `,
  HeaderDetail2: styled.div`
    display: inline-block;
    font-size: 15px;
    height: 35px;
    margin-left: 40px;
    display: flex;
    position: absolute;
    align-items: center;
    left: 25%;
    width: 50%;
    justify-content: space-between;
  `,
  DetailFeedbackButton: styled.button`
    left: 0%;
    position: relative;
    width: 45%;
    top: 40%;
    height: 40px;
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    text-align: center;
    box-shadow: none;
    border: none;
    margin-right: 10px;
    display: inline;
  `,
  TraceBoxWrapper: styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
  `,
  TraceBox: styled.div`
    border: 2px solid #fada5e;
    border-radius: 10px;
    width: 123px;
    height: 53px;
    background: #ffffff;
    margin-bottom: 31px;
    cursor: pointer;
    line-height: 50px;
  `,
  ContentImg: styled.img`
    width: 100%;
    height: 100%;
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
    font-weight: 700;
    font-size: 20px;
    color: white;
    display: flex;
    margin-left: 40px;
    align-items: center;
  `,
  PdfPageInput: styled.input`
    width: 95px;
    height: 30px;
    margin-left: 10px;
    font-size: 20px;
  `,
  PdfPageButton: styled.a`
    text-decoration-line: none;
    height: 40px;
    width: 80px;
    color: #fada5e;
    font-weight: 700;
    font-size: 20px;
  `,
  PdfPageButtonWrapper: styled.button`
    border: none;
    height: 40px;
    width: 100px;
    background-color: white;
    margin-left: 10px;
    box-shadow: none;
  `,
  PdfSizeWrapper: styled.div`
    position: absolute;
    right: 70px;
    width: auto;
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
    background-color: white;
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
  `,
  Functionp: styled.span`
    font-size: 17px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  `,
};