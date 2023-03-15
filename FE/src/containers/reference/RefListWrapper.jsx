import styled from "styled-components";
import RefList from "./ReferenceList";
import {React, useState} from "react";

const Style = {
  Wrapper: styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 86vw;
    height: 456px;
    top:350px;
    /* background-color: #EBFBFF; */
  `,
  Intro:styled.div`
    position: absolute;
    width: 86vw;
    height: 24px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    display: flex;
    @media ${props => props.theme.desktop} {
      top:-35px;
      justify-content: center;
    }
    @media ${props => props.theme.mobile} {
      font-size: 15px;
    }
  `,
  Coloring:styled.div`
    color:#FADA5E;
    top: -20px;
  `,
}
export default function RefListWrapper(props) {


  let kind ="기획/아이디어"
  if (window.location.pathname=='/ref/etc') {kind = "기타 아이디어"}
  else if (window.location.pathname=='/ref/marketing') {kind = "광고/마케팅"}
  else if (window.location.pathname=='/ref/video') {kind = "영상"}
  else if (window.location.pathname=='/ref/design') {kind = "디자인"}

  
  return (
    <Style.Wrapper>
      <Style.Intro>
        <Style.Coloring>{kind}&nbsp;</Style.Coloring>
        공모전의 레퍼런스를 찾아보세요
      </Style.Intro>
      <RefList kind={kind} name={props.search}/>
    </Style.Wrapper>
  )
}