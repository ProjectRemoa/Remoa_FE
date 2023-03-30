import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Style = {
  UnderHeader: styled.div`
    box-sizing: border-box;
    position: absolute;
    background: #ffffff;
    border: 1px solid #b0b0b0;
    border-radius: 20px;
    width: 803px;
    height: 59px;
    top: 90px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    @media ${(props) => props.theme.desktop} {
      width: 700px;
    }
    @media ${(props) => props.theme.mobile} {
      width: 430px;
      padding-left: 15px;
      padding-right: 15px;
      height: 79px;
    }
  `,
  Sort: styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #464646;
    cursor: pointer;
    @media ${(props) => props.theme.desktop} {
    }
    @media ${(props) => props.theme.mobile} {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 15px;
    }
  `,
  PageStyle: styled.div`
    color: #fada5e;
  `,
};
function MyPageContainer() {
  const Navigate = useNavigate();

  const profileOnClick = () => {
    Navigate("/mypage/profile");
  };

  const followingOnClick = () => {
    Navigate("/mypage/following");
  };

  const workOnClick = () => {
    Navigate("/mypage/work");
  };

  const faqOnClick = () => {
    Navigate("/mypage/faq");
  };

  return (
    <>
      <Style.UnderHeader>
        <Style.Sort onClick={profileOnClick}>
          {window.location.pathname === "/mypage/profile" ? (
            <Style.PageStyle>프로필 관리</Style.PageStyle>
          ) : (
            "프로필 관리"
          )}
        </Style.Sort>
        <Style.Sort onClick={followingOnClick}>
          {window.location.pathname === "/mypage/following" ? (
            <Style.PageStyle>팔로잉 관리</Style.PageStyle>
          ) : (
            "팔로잉 관리"
          )}
        </Style.Sort>
        <Style.Sort onClick={workOnClick}>
          {window.location.pathname === "/mypage/work" ||
          window.location.pathname === "/mypage/scrap" ||
          window.location.pathname === "/mypage/myfeedback" ? (
            <Style.PageStyle>내 활동 관리</Style.PageStyle>
          ) : (
            "내 활동 관리"
          )}
        </Style.Sort>
        <Style.Sort onClick={faqOnClick}>
          {window.location.pathname === "/mypage/faq" ? (
            <Style.PageStyle>공지사항 / FAQ</Style.PageStyle>
          ) : (
            "공지사항 / FAQ"
          )}
        </Style.Sort>
      </Style.UnderHeader>
    </>
  );
}

export default MyPageContainer;
