import styled from "styled-components";
import RefList from "./ReferenceList";
import { React, useState } from "react";

const Style = {
  Wrapper: styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 86vw;
    height: 300px;
    top:150px;
    /* background-color: #EBFBFF; */
  `,
  Intro: styled.div`
    position: absolute;
    width: 86vw;
    height: 24px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    display: flex;
    @media ${(props) => props.theme.desktop} {
      top: -35px;
      justify-content: center;
    }
    @media ${(props) => props.theme.mobile} {
      font-size: 15px;
    }
  `,
  Coloring: styled.div`
    color: #fada5e;
    top: -20px;
  `,
}
export default function RefListWrapper(props) {

  let kindSend = 'idea'
  let kind ="기획/아이디어"
  if (window.location.pathname=='/ref/etc') {kind = "기타"; kindSend = 'etc'}
  else if (window.location.pathname=='/ref/marketing') {kind = "광고/마케팅"; kindSend = 'marketing'}
  else if (window.location.pathname=='/ref/video') {kind = "모두"; kindSend ='all'}
  else if (window.location.pathname=='/ref/design') {kind = "디자인"; kindSend ='design'}

  
  return (
    <Style.Wrapper>
      <Style.Intro>
        <Style.Coloring>{kind}&nbsp;</Style.Coloring>
        공모전의 레퍼런스를 찾아보세요
      </Style.Intro>
      <RefList kind={kindSend} name={props.search}/>
    </Style.Wrapper>
  )
}
