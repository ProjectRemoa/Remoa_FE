import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import S from "./ManageContainer.styles"
import { useEffect } from "react";

function ManageContainer() {
  const navigate = useNavigate();

  const listOnClick = () => {
    navigate("/manage/list");
  };

  const shareOnClick = () => {
    navigate("/manage/share");
  };

  const feedbackOnClick = () => {
    navigate("/manage/feedback");
  };
  

  return (
    <>
      <S.UnderHeader>
        <S.Sort onClick={listOnClick}>
          {window.location.pathname === "/manage/list" ? (
            <S.PageStyle>내 작업물 목록</S.PageStyle>
          ) : (
            "내 작업물 목록"
          )}
        </S.Sort>
        <S.Sort onClick={shareOnClick}>
          {window.location.pathname === "/manage/share" ? (
            <S.PageStyle>내 작업물 공유</S.PageStyle>
          ) : (
            "내 작업물 공유"
          )}
        </S.Sort>
        <S.Sort onClick={feedbackOnClick}>
          {window.location.pathname === "/manage/feedback" ? (
            <S.PageStyle>받은 코멘트 관리</S.PageStyle>
          ) : (
            "받은 코멘트 관리"
          )}
        </S.Sort>
      </S.UnderHeader>
    </>
  );
}

export default ManageContainer;
