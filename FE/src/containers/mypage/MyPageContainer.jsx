import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function MyPageContainer() {
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

  const profileOnClick = () => {
    Navigate('/mypage/profile')
  };

  const followingOnClick = () => {
    Navigate('/mypage/following')
  };

  const scrapOnClick = () => {
    Navigate('/mypage/scrap')
  };

  const feedbackOnClick = () => {
    Navigate('/mypage/myfeedback')
  };

  const faqOnClick = () => {
    Navigate('/mypage/faq')
  };

  return(
    <>
    <Style.UnderHeader>
      <Style.Sort onClick={profileOnClick}>
        {(window.location.pathname=='/mypage/profile')?<Style.PageStyle>프로필 관리</Style.PageStyle>:"프로필 관리"}
      </Style.Sort>
      <Style.Sort onClick={followingOnClick}>
        {(window.location.pathname=='/mypage/following')?<Style.PageStyle>팔로잉 관리</Style.PageStyle>:"팔로잉 관리"}
      </Style.Sort>
      <Style.Sort onClick={scrapOnClick}>
        {(window.location.pathname=='/mypage/scrap')?<Style.PageStyle>스크랩 관리</Style.PageStyle>:"스크랩 관리"}
      </Style.Sort>
      <Style.Sort onClick={feedbackOnClick}>
        {(window.location.pathname=='/mypage/myfeedback')?<Style.PageStyle>내가 올린 피드백 관리</Style.PageStyle>:"내가 올린 피드백 관리"}
      </Style.Sort>
      <Style.Sort onClick={faqOnClick}>
      {(window.location.pathname=='/mypage/faq')?<Style.PageStyle>공지사항/FAQ</Style.PageStyle>:"공지사항/FAQ"}
      </Style.Sort>
    </Style.UnderHeader>
    </>
  )
}

export default MyPageContainer