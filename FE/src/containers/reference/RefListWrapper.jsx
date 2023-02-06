import styled from "styled-components";
import RefList from "./ReferenceList";
import React from "react";

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
  Coloring:styled.p`
    color:#FADA5E;
  `,
  SortContainer:styled.div`
    width: 86vw;
    height: 25px;
    position: absolute;
    display: flex;
    justify-content: right;
    @media ${props => props.theme.desktop} {
      justify-content: center;
    }
    @media ${props => props.theme.mobile} {
      justify-content:center
    }
  `,
  Sort:styled.div`
    box-sizing: border-box;
    position: relative;
    width: 86px;
    display: inline-block;
    background: white;
    border: 0.5px solid #000000;
    border-radius: 10px;
    margin-right: 8px;
    cursor: pointer;
    :last-child{
      margin-right: 0px;
    }
  `,
  Line:styled.hr`
    position: absolute;
    width: 86vw;
    border: 1px solid #B0B0B0;
    top:19px;
    margin-bottom: 10px;
  `
}
export default function RefListWrapper() {
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

    <Style.SortContainer>
      <Style.Sort>최신순</Style.Sort>
      <Style.Sort>조회수순</Style.Sort>
      <Style.Sort>좋아요순</Style.Sort>
      <Style.Sort>스크랩순</Style.Sort>
    </Style.SortContainer>

    <Style.Line />
    {(window.location.pathname=='/')?<RefList />:""}
  </Style.Wrapper>
  )
}