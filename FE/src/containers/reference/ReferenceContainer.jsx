import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import RefSearch from './RefSearch';
function ReferenceContainer() {
  const Navigate=useNavigate();

  const Style = {
    UnderHeader: styled.div`
    box-sizing: border-box;
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #B0B0B0;
    border-radius: 20px;
    width: 803px;
    height: 59px;
    top:90px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    `,
    Sort:styled.div`
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #464646;
      cursor: pointer;
    `,
    PageStyle:styled.div`
      color:#FADA5E;
    `,
  }

  const ideaOnClick = () => {
    Navigate('/')
  };

  const marketingOnClick = () => {
    Navigate('/ref/marketing')
  };

  const videoOnClick = () => {
    Navigate('/ref/video')
  };

  const designOnClick = () => {
    Navigate('/ref/design')
  };

  const etcOnClick = () => {
    Navigate('/ref/etc')
  };

  return(
    <>
    <Style.UnderHeader>
      <Style.Sort onClick={ideaOnClick}>
        {(window.location.pathname=='/')?<Style.PageStyle>기획/아이디어</Style.PageStyle>:"기획/아이디어"}
      </Style.Sort>
      <Style.Sort onClick={marketingOnClick}>
        {(window.location.pathname=='/ref/marketing')?<Style.PageStyle>광고/마케팅</Style.PageStyle>:"광고/마케팅"}
      </Style.Sort>
      <Style.Sort onClick={videoOnClick}>
        {(window.location.pathname=='/ref/video')?<Style.PageStyle>영상</Style.PageStyle>:"영상"}
      </Style.Sort>
      <Style.Sort onClick={designOnClick}>
        {(window.location.pathname=='/ref/design')?<Style.PageStyle>디자인</Style.PageStyle>:"디자인"}
      </Style.Sort>
      <Style.Sort onClick={etcOnClick}>
      {(window.location.pathname=='/ref/etc')?<Style.PageStyle>기타 아이디어</Style.PageStyle>:"기타 아이디어"}
      </Style.Sort>
    </Style.UnderHeader>
    <RefSearch />
    </>
  )
}

export default ReferenceContainer