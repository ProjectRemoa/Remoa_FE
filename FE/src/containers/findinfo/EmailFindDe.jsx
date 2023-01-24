import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function EmailFindDe() {
  const Style={
    Wrapper:styled.div`
      box-sizing: border-box;
      position: absolute;
      width: 906px;
      height: 234px;
      top: 248px;
      background: #FFFFFF;
      border: 1px solid #D0D0D0;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
    `,
    Title:styled.div`
      position: absolute;
      width: 664px;
      height: 64px;
      top: 154px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 58px;
      text-align: center;
      color: #464646;
      `,
    FormStyle:styled.div`
      display: flex;
      justify-content:center;
    `,
    Question:styled.div`
      display: flex;
      justify-content: center;
      width:633px;
      height:43px;
      position: relative;
      margin-bottom: 22px;
      left:145px;
      top:63px;
    `,
    Answer:styled.input`
      position: absolute;
      width: 547px;
      height: 43px;
      background: #FFFFFF;
      border: 1px solid #B0B0B0;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
      justify-content: right;
      right:0px;
      padding-left: 20px;
      ::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #B0B0B0;
      }
    `,
    InputName:styled.div`
      position: absolute;
      font-family: 'Noto Sans KR';
      font-size: 20px;
      line-height: 29px;
      width: 60px;
      height: 32px;
      left: 0px;
      text-align: right;
    `,
    EmailButton:styled.button`
      box-sizing: border-box;
      position: absolute;
      width: 906px;
      height: 68px;
      top: 512px;
      background: #FADA5E;
      border: 1px solid #D0D0D0;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      color:white;
    `,
  }
  return (
    <>
      <Style.Title>이메일 찾기</Style.Title>
      <Style.FormStyle>
        <Style.Wrapper>
          <Style.Question>
            <Style.InputName>이름</Style.InputName>
            <Style.Answer placeholder="성함을 입력해주세요" />
          </Style.Question>
          <Style.Question>
            <Style.InputName>연락처</Style.InputName>
            <Style.Answer placeholder="전화번호를 입력해주세요" />
          </Style.Question>
        </Style.Wrapper>
        <Style.EmailButton>이메일 찾기</Style.EmailButton>
      </Style.FormStyle>
    </>
  )
}
export default EmailFindDe;