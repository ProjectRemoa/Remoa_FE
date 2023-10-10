import styled from "styled-components";

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
    width: 86vw;
    height: auto;
    top: 106px;
    justify-content: center;
    padding: 15px 15px 0px 15px;
    border-radius: 1vw / 1vw;
  `,
  MobalContents: styled.div`
    width: auto;
    height: auto;
    margin: 20px;
  `,
  Line: styled.hr`
    width: auto;
    border: 1px solid #b0b0b0;
    margin: 30px 0 30px 0;
  `,
  MobalHeader: styled.div`
    width: auto;
    height: auto;
    display: flex;
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
    font-weight: 700;
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 30px;
  `,
  DetailTitleInfo: styled.div`
    font-weight: 400;
    font-size: 20px;
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
    width: 100px;
    height: 80px;
    border: 1px solid #b0b0b0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    background-color: white;
    top: 15px;
    right: 30px;
    display: block;
    z-index: 11;
  `,
  Functionp: styled.span`
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  `,
};