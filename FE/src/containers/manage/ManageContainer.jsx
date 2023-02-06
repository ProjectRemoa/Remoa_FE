import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ManageShareContainer from "./ManageShareContainer";

function ManageContainer() {
  const Navigate = useNavigate();

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
    `,
    PageStyle: styled.div`
      color: #fada5e;
    `,
  };

  const listOnClick = () => {
    Navigate("/manage/list");
  };

  const shareOnClick = () => {
    Navigate("/manage/share");
  };

  const feedbackOnClick = () => {
    Navigate("/manage/feedback");
  };

  return (
    <>
      <Style.UnderHeader>
        <Style.Sort onClick={listOnClick}>
          {window.location.pathname === "/manage/list" ? (
            <Style.PageStyle>내 작업물 목록</Style.PageStyle>
          ) : (
            "내 작업물 목록"
          )}
        </Style.Sort>
        <Style.Sort onClick={shareOnClick}>
          {window.location.pathname === "/manage/share" ? (
            <Style.PageStyle>내 작업물 공유</Style.PageStyle>
          ) : (
            "내 작업물 공유"
          )}
        </Style.Sort>
        <Style.Sort onClick={feedbackOnClick}>
          {window.location.pathname === "/manage/feedback" ? (
            <Style.PageStyle>받은 피드백 관리</Style.PageStyle>
          ) : (
            "받은 피드백 관리"
          )}
        </Style.Sort>
      </Style.UnderHeader>
    </>
  );
}

export default ManageContainer;
